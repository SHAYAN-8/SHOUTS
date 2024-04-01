import React, { useEffect, useState } from "react";
import { FaUserSecret } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import appwriteService from "../Appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  PostCard,
  ProfileToast,
  AuthorPost,
  AudioBtn,
  LikeBtn,
} from "../components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Post = () => {
  const [post, setPost] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post && post.likes.length);
  const [more, setMore] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;
  const findId = (arr, str) => {
    return arr.includes(str);
  };

  useEffect(() => {
    if (userData) {
      appwriteService.getPosts([]).then((recs) => {
        if (recs) {
          setMore(
            recs.documents.filter(
              (rec) =>
                rec.status != "Post Anonymous" &&
                rec?.userId === post?.userId &&
                rec.$id !== post.$id
            )
          );
        }
      });
    }
  }, [userData, post]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
          const find = findId(post.likes, userData.$id);
          setLikeCount(post.likes.length);
          setIsLiked(find);
        } else navigate("/");
      });
    } else {
      navigate("/");
    }
  }, [, slug, navigate]);

  const profile = () => {
    toast.custom((t) => (
      <ProfileToast
        t={t}
        status={post.status}
        username={post.username}
        email={post.email}
      />
    ));
  };

  const handleLikes = async () => {
    if (post) {
      const updatedLikes = isLiked
        ? post.likes.filter((id) => id !== userData.$id)
        : [...post.likes, userData.$id];

      setIsLiked((prev) => !prev);
      setLikeCount(!isLiked ? post.likes.length + 1 : post.likes.length - 1);
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...post,
        likes: updatedLikes,
      });
    }
  };

  return post ? (
    <section className="text-gray-600 w-full body-font">
      <BiArrowBack
        className="cursor-pointer absolute text-3xl sm:text-4xl m-4 sm:m-8"
        onClick={() => navigate(-1)}
      />
      <AudioBtn text={post.content} />
      <div className="container mx-auto flex px-5 pt-2 pb-12 items-center justify-center flex-col">
        <img
          className="lg:w-4/6 border w-5/6 mb-6 sm:mb-10 object-contain max-h-96 object-center rounded-lg"
          src={appwriteService.getFilePreview(post.featuredImage)}
          alt={post.title}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {post.title}
          </h1>
          <p className="mb-8 text-gray-900 text-lg whitespace-break-spaces custom-content">
            {parse(post.content)}
          </p>
          <div className="flex justify-between items-center">
            <div className=" text-left flex gap-2">
              <span
                onClick={profile}
                className="bg-gray-600 cursor-pointer text-white text-center uppercase w-10 h-10 aspect-square text-2xl font-semibold rounded-full flex items-center justify-center"
              >
                {post.status == "Post Anonymous" ? (
                  <FaUserSecret />
                ) : (
                  post.username[0]
                )}
              </span>
              <div>
                <h2 className="font-semibold">
                  {isAuthor ? "You" : post.username}
                </h2>
                <h2 className="text-gray-500 leading-4">{post.time}</h2>
              </div>
            </div>
            <LikeBtn
              isLiked={isLiked}
              likeCount={likeCount}
              handleLikes={handleLikes}
            />
          </div>
          <br />
          {isAuthor && <AuthorPost id={post.$id} image={post.featuredImage} />}
        </div>
      </div>
      <div className={`w-full  ${post.status != "Post Anonymous" && "pb-10"}`}>
        <Container>
          {more.length > 0 && post.status != "Post Anonymous" && (
            <h2 className="text-2xl font-semibold">
              More from {post.username}:
            </h2>
          )}
          <br />
          <div className="flex flex-wrap gap-2 gap-y-4 duration-500 justify-center">
            {more.length > 0 &&
              post.status != "Post Anonymous" &&
              more
                .slice()
                .reverse()
                .map(
                  (rec, index) =>
                    index < 3 && (
                      <div
                        key={rec.$id}
                        className="p-4 sm:p-2 w-full border duration-200 cursor-pointer hover:border-gray-300 rounded-md min-w-64 sm:w-72 md:w-1/4 lg:w-1/5"
                      >
                        <PostCard {...rec} />
                      </div>
                    )
                )}
          </div>
        </Container>
      </div>
    </section>
  ) : null;
};

export default Post;
