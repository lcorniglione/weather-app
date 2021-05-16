interface ConsolidatedWeather {
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

interface WheatherDetail {
  consolidated_weather?: ConsolidatedWeather[];
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  title: string;
  location_type: string; // TODO: referenciar al otro enum ya escrito
  woeid: number;
  latt_long: string;
  timezone: string;
}

const weatherDetails: WheatherDetail[] = [
  {
    time: '2021-05-16T21:06:51.840718+01:00',
    sun_rise: '2021-05-16T05:07:01.788297+01:00',
    sun_set: '2021-05-16T20:47:42.080198+01:00',
    timezone_name: 'LMT',
    title: 'London',
    location_type: 'City',
    woeid: 44418,
    latt_long: '51.506321,-0.12714',
    timezone: 'Europe/London',
  },
];

function WeatherDetails() {
  return (
    <div className="pt-6 pb-6">
      <h4 className="pb-6 text-gray-200 font-bold">Weather Details</h4>
    </div>
  );
}

export default WeatherDetails;
