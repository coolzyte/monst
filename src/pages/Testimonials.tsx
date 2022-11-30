import { GetInTouch } from "../features/get-in-touch";
import { TestimonialHero } from "../features/testimonials-feature";
import TestimonialLists from "../features/testimonials-feature/TestimonialLists";

const Testimonials = () => {
  return (
    <>
      <TestimonialHero />
      <TestimonialLists />
      <GetInTouch />
    </>
  );
};

export default Testimonials;
