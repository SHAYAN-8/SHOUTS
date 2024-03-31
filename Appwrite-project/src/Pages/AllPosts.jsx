import React, { useEffect, useState } from "react";
import { Posts } from "../components/index";
import appwriteService from "../Appwrite/config";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return <Posts posts={posts} page={"All Posts"} />;
};

export default AllPosts;
