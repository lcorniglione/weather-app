function SliderPanel() {
  return (
    <div className="w-full h-full bg-transparent relative overflow-hidden">
      <div className="absolute w-full h-72 backdrop-filter backdrop-blur-2xl backdrop-saturate-100 -bottom-72 transform hover:-translate-y-72 transition duration-500 ease-in-out">
        <div className="absolute w-10 h-10 -top-10 right-12">
          <span className="text-gray-50">Subir</span>
        </div>
      </div>
    </div>
  );
}

export default SliderPanel;
