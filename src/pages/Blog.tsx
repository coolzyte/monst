import { Breadcrumb, BtnPrimary } from "../components";
import { BlogLists } from "../features/blog-feature";
import { Subscribe } from "../features/subscribe-feature";

const Blog = () => {
  return (
    <section className="py-20">
      <Breadcrumb title="Our Blog" page="Web Development" />
      <div className="container">
        <BlogLists />
        <div className="mb-20 text-center">
          <BtnPrimary type="button" title="Show all posts" path="/blog-2" />
        </div>
      </div>
      <section className="py-20 bg-blue-500">
        <Subscribe color="color" />
      </section>
    </section>
  );
};

export default Blog;
