import { Link } from "react-router-dom";

type blogProps = {
  image: string;
  badge: string;
  date: string;
  title: string;
  text: string;
};

const BlogList = ({ image, badge, date, title, text }: blogProps) => {
  return (
    <div className="w-full lg:w-1/3 px-3 mb-12">
      <Link to="/blog-single">
        <img
          className="h-80 w-full object-cover rounded"
          src={image}
          alt="Monst"
        />
      </Link>
      <p className="mt-6 text-sm text-blue-400">
        <Link to="/blog-2">
          <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">
            {badge}
          </span>
        </Link>
        <span className="text-gray-400 text-xs">{date}</span>
      </p>
      <h3 className="my-2 text-2xl font-bold font-poppins">
        <Link className="hover:text-blue-500" to="/blog-single">
          {title}
        </Link>
      </h3>
      <p className="leading-loose">{text}</p>
    </div>
  );
};

export default BlogList;
