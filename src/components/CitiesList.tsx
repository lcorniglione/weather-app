enum LocationTypes {
  City = 'City',
  Region = 'Region',
  State = 'State',
  Province = 'Province',
  Country = 'Country',
  Continent = 'Continent',
}

interface Cities {
  title: string;
  location_type: LocationTypes;
  woied: number;
  latt_long: string;
}

const mockCities: Cities[] = [
  {
    title: 'London',
    location_type: LocationTypes.City,
    woied: 1234,
    latt_long: '1321',
  },
  {
    title: 'Barcelona',
    location_type: LocationTypes.City,
    woied: 1234,
    latt_long: '1321',
  },
  {
    title: 'Long Beach',
    location_type: LocationTypes.City,
    woied: 1234,
    latt_long: '1321',
  },
];

function CitiesList() {
  return (
    <li className="list-none pt-6 pb-6">
      {mockCities.map(city => (
        <ul key={city.woied} className="pb-4 pt-4">
          <label className="text-gray-400 hover:text-yellow-600 cursor-pointer">
            {city.title}
          </label>
        </ul>
      ))}
    </li>
  );
}

export default CitiesList;
