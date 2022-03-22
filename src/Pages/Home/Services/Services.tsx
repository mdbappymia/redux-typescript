import services from "../../../assets/data/services.json";

const Services = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-6xl font-bold my-7 py-5 uppercase border-b">
        Services
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 py-5 border-b">
        {services.map((service, i) => (
          <div
            key={i}
            className="flex justify-center shadow-2xl rounded-lg hover:scale-105 transition-all"
          >
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white ">
              <img
                className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={service.icon_image}
                alt=""
              />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {service.name}
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
