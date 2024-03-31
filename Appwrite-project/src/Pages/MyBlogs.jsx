import React, { useEffect, useState } from "react";
import { Posts } from "../components/index";
import appwriteService from "../Appwrite/config";
import { useSelector } from "react-redux";

const MyBlogs = () => {
  const [posts, setPosts] = useState([]);
  // const status = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  useEffect(() => {
    window.scrollTo(0, 0);
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(
          posts.documents.filter((post) => post.userId === userData.$id)
        );
      }
    });
  }, []);

  return <Posts posts={posts} page={"My Blogs"} />;
};

export default MyBlogs;
