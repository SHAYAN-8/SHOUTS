import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, useModal } from "./index";
import appwriteService from "../Appwrite/config";
import { AiOutlineDelete } from "react-icons/ai";

const AuthorPost = ({ id, image }) => {
  const navigate = useNavigate();
  const [showModal, ConfirmModal, modalResult] = useModal(
    <AiOutlineDelete className="m-auto text-5xl text-red-500" />,
    "Are you sure you want to delete this post?"
  );
  const deletePost = () => {
    showModal();
  };
  if (modalResult) {
    appwriteService.deletePost(id).then((status) => {
      if (status) {
        appwriteService.deleteFile(image);
        navigate("/");
      }
    });
  }
  return (
    <div className="flex justify-center">
      <Link to={`/edit-post/${id}`}>
        <Button
          bgColor="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
          className="mr-3"
        >
          Edit
        </Button>
      </Link>
      <Button
        bgColor="inline-flex  bg-red-400 hover:bg-red-500  border-0 py-2 px-6 focus:outline-none  rounded text-lg"
        onClick={deletePost}
        disabled={modalResult}
      >
        Delete
      </Button>
      <ConfirmModal />
    </div>
  );
};

export default AuthorPost;
