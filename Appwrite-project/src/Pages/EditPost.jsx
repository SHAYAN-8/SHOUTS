import React, { useState } from "react";
import { Container, PostForm } from "../components/index";
import appwriteService from "../Appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditPost = () => {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
