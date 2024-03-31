import React from "react";
import { Container, PostCard, SearchBar, Loader } from "../components/index";
import { useSelector } from "react-redux";

const Posts = ({ posts, page }) => {
  const search = useSelector((state) => state.search.value);
  const filteredPosts = posts.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  if (posts.length === 0) {
    return <Loader />;
  }

  if (filteredPosts.length === 0) {
    return (
      <div className="w-full py-5">
        <SearchBar posts={posts} page={page} />
        <br />
        <div className="text-2xl min-h-80 flex justify-center items-center">
          No matching posts found.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-5 pb-10">
      <SearchBar posts={posts} page={page} />
      <br />
      <Container>
        <div className="flex flex-wrap gap-2 gap-y-4 duration-500 justify-center">
          {filteredPosts
            .slice()
            .reverse()
            .map((post) => (
              <div
                key={post.$id}
                className="p-4 sm:p-2 w-full border duration-200 cursor-pointer hover:border-gray-300 rounded-md min-w-64 sm:w-72 md:w-1/4 lg:w-1/5"
              >
                <PostCard {...post} />
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Posts;
