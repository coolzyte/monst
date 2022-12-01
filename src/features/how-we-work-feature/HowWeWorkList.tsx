type howWeWorkProps = {
  id: number;
  image: string;
  title: string;
  text: string;
};

const HowWeWorkList = ({ id, image, title, text }: howWeWorkProps) => {
  return (
    <div
      className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 last:w-full last:lg:w-1/3"
      data-aos="fade-in"
      data-aos-duration="1500"
    >
      <div className="p-12 bg-white shadow-lg rounded">
        <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-700 font-bold font-poppins bg-blue-50 rounded-full">
          {id}
        </div>
        <img className="h-36 mx-auto my-4" src={image} alt={title} />
        <h3 className="mb-2 font-bold font-poppins text-xl">{title}</h3>
        <p className="text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default HowWeWorkList;
