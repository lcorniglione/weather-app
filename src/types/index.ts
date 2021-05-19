import {ActorRefFrom, StateMachine, EventObject} from 'xstate';

export enum LocationTypes {
  City = 'City',
  Region = 'Region',
  State = 'State',
  Province = 'Province',
  Country = 'Country',
  Continent = 'Continent',
}

export interface City {
  title: string;
  location_type: LocationTypes;
  woied: number;
  latt_long: string;
}

export interface ConsolidatedWeather {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface Weather {
  consolidated_weather?: ConsolidatedWeather[];
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  title: string;
  location_type: LocationTypes | string;
  woeid: number;
  latt_long: string;
  timezone: string;
}

export type WeatherMachineType = StateMachine<
  FetchWeatherMachineContext,
  FetchWeatherStateSchema,
  EventObject
>;

export type WeatherMachineRef = ActorRefFrom<WeatherMachineType>;

export interface FetchCitiesMachineContext {
  citySearch: string;
  cities: City[];
  cityWeather?: WeatherMachineRef;
  citiesWeather: {
    [woeid: number]: WeatherMachineRef;
  };
}

export interface FetchCitiesStateSchema {
  states: {
    idle: {};
    loadingCities: {};
    citiesLoaded: {};
    citiesFailure: {};
  };
}

export type FetchCitiesSelectEvent = {type: 'SELECT'; woeid: number};
export type FetchCitiesLoadingEvent = {type: 'LOADING'; query: string};

export type FetchCitiesEvent = FetchCitiesSelectEvent | FetchCitiesLoadingEvent;

export interface FetchWeatherMachineContext extends Weather {
  woeid: number;
}

export interface FetchWeatherStateSchema {
  states: {
    loading: {};
    loaded: {};
    failure: {};
  };
}
