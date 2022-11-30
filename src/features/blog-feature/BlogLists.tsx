import BlogList from "./BlogList";
import { blogData } from "./data";

import styled from "styled-components";

const Wrapper = styled.div`
  div:nth-child(2) {
    width: 100%;
    @media (min-width: 1024px) {
      width: 66.666667% !important;
    }
  }
`;

const BlogLists = () => {
  return (
    <Wrapper>
      <div className="flex flex-wrap -mx-3">
        {blogData.map((item) => (
          <BlogList key={item.id} {...item} />
        ))}
      </div>
    </Wrapper>
  );
};

export default BlogLists;
