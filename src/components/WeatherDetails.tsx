import {Weather} from 'types';

const weatherDetails: Weather[] = [
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
    <div className="pt-12 pb-12">
      <h4 className="pb-6 text-gray-200 font-bold text-lg">Weather Details</h4>
      <div>
        <div className="flex flex-row justify-between pt-4 pb-4">
          <span className="text-gray-100 text-lg">Cloudy</span>
          <span className="text-gray-100 text-lg">86%</span>
        </div>
        <div className="flex flex-row justify-between pt-4 pb-4">
          <span className="text-gray-100 text-lg">Humidity</span>
          <span className="text-gray-100 text-lg">62%</span>
        </div>
        <div className="flex flex-row justify-between pt-4 pb-4">
          <span className="text-gray-100 text-lg">Wind</span>
          <span className="text-gray-100 text-lg">8km/h</span>
        </div>
        <div className="flex flex-row justify-between pt-4 pb-4">
          <span className="text-gray-100 text-lg">Sunrise</span>
          <span className="text-gray-100 text-lg">07:12 AM</span>
        </div>
        <div className="flex flex-row justify-between pt-4 pb-4">
          <span className="text-gray-100 text-lg">Sunset</span>
          <span className="text-gray-100 text-lg">09:36 PM</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
