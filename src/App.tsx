import {
  Layout,
  Input,
  CitiesList,
  Divider,
  WeatherDetails,
  SliderPanel,
} from 'components';
import Clear from 'assets/c.png';

function App() {
  return (
    <Layout>
      <div className="col-span-2">
        <div className="absolute bottom-40 left-32 flex flex-row items-center justify-center">
          <span className="text-9xl text-gray-100 font-medium pr-4">16°</span>
          <div className="flex flex-col justify-center pr-8">
            <span className="text-7xl text-gray-100 ">London</span>
            <span className="text-xl text-gray-100  self-center">
              06:09 - Monday, 9 Sep '19
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Clear} className="w-16 h-16" alt="Weather Icon" />
            <span className="text-xl text-gray-100 ">Clear</span>
          </div>
        </div>
        <SliderPanel />
      </div>

      <div className="col-span-1 backdrop-filter backdrop-blur-2xl backdrop-saturate-100">
        <div className="pl-14 pr-14 pt-16 pb-24">
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
