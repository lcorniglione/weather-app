import {Layout, Input, CitiesList, Divider, WeatherDetails} from 'components';
import SnowWeather from 'assets/snow-weather.jpg';

function App() {
  return (
    <Layout>
      <div className="col-span-3">
        <div
          className="bg-cover bg-center w-full h-full"
          style={{backgroundImage: `url(${SnowWeather})`}}
        />
      </div>
      <div className="w-2/6 absolute h-full right-0 backdrop-filter backdrop-blur-2xl backdrop-saturate-200">
        <div className="pl-12 pr-12 pt-16 pb-24">
          <Input />
          <CitiesList />
          <Divider />
          <WeatherDetails />
        </div>
      </div>
    </Layout>
  );
}

export default App;
