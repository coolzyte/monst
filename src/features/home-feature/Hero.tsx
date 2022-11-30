import { BtnAccent, BtnPrimary } from "../../components";

const Hero = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="pt-12 text-center">
        <div className="max-w-2xl mx-auto mb-8">
          <h2
            className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-poppins"
            style={{ visibility: "visible" }}
          >
            Committed to People <br />
            Committed <span className="text-blue-500">to the Future</span>
          </h2>
          <p
            className="text-gray-400 leading-relaxed"
            style={{ visibility: "visible" }}
          >
            We are <strong className="text-blue-500">Monst</strong>, a Creative
            Design
            <span className="typewrite d-inline text-brand">
              <span>
                <div style={{ display: "inline-block" }}>Social Marketing</div>
                <span
                  style={{
                    display: "inline-block",
                    transition: "opacity 0.5s ease 0s",
                    opacity: 1,
                  }}
                >
                  |
                </span>
              </span>
            </span>
          </p>
        </div>
        <div className="space-x-2">
          <BtnPrimary title="Key Features" path="/key-features" />
          <BtnAccent title="How We Work?" path="/how-we-work" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
