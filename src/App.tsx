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
      <div className="col-span-2 relative overflow-hidden">
        <div className="absolute top-20 left-32">
          <h4 className="font-bold text-xl text-gray-50">the.weather</h4>
        </div>

        <div className="absolute bottom-40 left-32 grid grid-rows-3 grid-flow-col gap-x-2">
          <div className="row-span-3">
            <span className="text-9xl text-gray-100 font-medium ">16°</span>
          </div>

          <div className="row-span-2 flex items-end pr-4">
            <span className="text-6xl text-gray-100 ">London</span>
          </div>

          <div className="row-span-1 pr-4">
            <span className="text-base text-gray-100">
              06:09 - Monday, 9 Sep '19
            </span>
          </div>

          <div className="row-span-2 flex items-end">
            <img src={Clear} className="w-12 h-12" alt="Weather Icon" />
          </div>

          <div className="row-span-1 flex justify-center">
            <span className="text-base text-gray-100">Clear</span>
          </div>
        </div>

        <SliderPanel />
      </div>

      <div className="col-span-1 backdrop-filter backdrop-blur-xl backdrop-saturate-75">
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
