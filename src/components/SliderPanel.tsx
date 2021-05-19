import UpArrow from 'assets/up-arrow.png';

function SliderPanel() {
  return (
    <div className="absolute w-full h-72 bg-transparent -bottom-72  transform hover:-translate-y-72 transition duration-500 ease-in-out">
      <div className="absolute w-10 h-10 -top-10 right-12">
        <img
          src={UpArrow}
          className="w-8 h-8 filter invert"
          alt="Open Slider"
        />
      </div>
    </div>
  );
}

export default SliderPanel;
