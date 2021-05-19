import {Machine, assign, spawn, DoneInvokeEvent, AnyEventObject} from 'xstate';
import {
  FetchCitiesMachineContext,
  City,
  FetchCitiesStateSchema,
  FetchCitiesEvent,
} from 'types';
import {BASE_URL} from 'configs';
import createFetchingWeatherMachine from './fetchWeatherMachine';

async function handleFetchCities(query: string): Promise<City[]> {
  const response = await fetch(`${BASE_URL}/search/?query=${query}`);
  const json = await response.json();

  return json;
}

const fetchCitiesStates = {
  idle: {
    on: {
      LOADING: 'loadingCities',
    },
  },
  loadingCities: {
    entry: ['setCitySearchQuery'],
    invoke: {
      id: 'fetchCities',
      src: 'fetchCities',
      onDone: {
        target: 'citiesLoaded',
        actions: assign<FetchCitiesMachineContext, DoneInvokeEvent<City[]>>({
          cities: (_, event) => event.data,
        }),
      },
      onError: {
        target: 'citiesFailure',
      },
    },
  },
  citiesLoaded: {
    on: {
      LOADING: 'loadingCities',
    },
  },
  citiesFailure: {
    on: {
      LOADING: 'loadingCities',
    },
  },
};

const fetchCitiesMachine = Machine<
  FetchCitiesMachineContext,
  FetchCitiesStateSchema,
  FetchCitiesEvent
>(
  {
    id: 'fetchCitiesMachine',
    initial: 'idle',
    context: {
      cities: [],
      citySearch: '',
      citiesWeather: {},
    },
    states: {
      ...fetchCitiesStates,
    },
    on: {
      SELECT: {
        actions: assign((context, event) => {
          const {citiesWeather, ...rest} = context;
          const {woeid} = event;
          if (typeof citiesWeather[woeid] !== 'undefined') {
            return {
              ...rest,
              cityWeather: citiesWeather[woeid],
            };
          }

          const spawnedMachine = spawn(createFetchingWeatherMachine(woeid));

          return {
            ...rest,
            cityWeather: spawnedMachine,
            citiesWeather: {
              ...citiesWeather,
              [woeid]: spawnedMachine,
            },
          };
        }),
      },
    },
  },
  {
    actions: {
      setCitySearchQuery: assign<
        FetchCitiesMachineContext,
        AnyEventObject & FetchCitiesEvent
      >({
        citySearch: (_, event) => event.query,
      }),
    },
    services: {
      fetchCities: context => handleFetchCities(context.citySearch),
    },
  },
);

export default fetchCitiesMachine;
