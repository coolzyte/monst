type SectionHeadProps = {
  title: string;
  secondTitle?: string;
  blueTitle?: string;
  size?: string;
};
const SectionHead = ({
  title,
  blueTitle,
  secondTitle,
  size,
}: SectionHeadProps) => {
  return (
    <>
      <h2
        className={`text-3xl md:text-4xl lg:text-${size} font-bold font-poppins my-2`}
        style={{ visibility: "visible" }}
      >
        <span>{title}</span>
        <span className="text-blue-500"> {blueTitle}</span>
        <br />
        <span>{secondTitle}</span>
      </h2>
    </>
  );
};

export default SectionHead;
