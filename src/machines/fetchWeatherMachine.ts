import {Machine, assign} from 'xstate';
import {
  FetchWeatherStateSchema,
  FetchWeatherMachineContext,
  Weather,
  WeatherMachineType,
} from 'types';
import {BASE_URL} from 'configs';

async function fetchCityWeather(woeid: number): Promise<Weather> {
  const response = await fetch(`${BASE_URL}/${woeid}`);
  const json = await response.json();

  return json;
}

const createFetchingWeatherMachine = (woeid: number): WeatherMachineType => {
  return Machine<FetchWeatherMachineContext, FetchWeatherStateSchema>(
    {
      id: 'fetchWeatherMachine',
      initial: 'loading',
      context: {
        woeid,
        consolidated_weather: [],
        time: '',
        sun_rise: '',
        sun_set: '',
        timezone_name: '',
        title: '',
        location_type: '',
        latt_long: '',
        timezone: '',
      },
      states: {
        loading: {
          invoke: {
            id: 'fetchWeather',
            src: 'fetchWeather',
            onDone: {
              target: 'loaded',
              actions: assign((context, event) => {
                return {
                  ...context,
                  ...event.data,
                };
              }),
            },
            onError: {
              target: 'failure',
            },
          },
        },
        loaded: {},
        failure: {},
      },
    },
    {
      services: {
        fetchWeather: context => fetchCityWeather(context.woeid),
      },
    },
  );
};

export default createFetchingWeatherMachine;
