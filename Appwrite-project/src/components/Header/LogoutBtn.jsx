import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../Appwrite/auth";
import { logout } from "../../Store/authSlice";
import { useModal } from "../index";
import { CgDanger } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, ConfirmModal, modalResult] = useModal(
    <CgDanger className="m-auto text-5xl text-red-500" />,
    "Are you sure you want to logout?"
  );

  const logoutHandler = () => {
    // let confirmation = confirm("Are you sure you want to logout?");
    showModal();
  };
  if (modalResult) {
    authService.logout().then(() => {
      navigate("/");
      dispatch(logout());
      location.reload();
    });
  }
  return (
    <>
      <button
        disabled={modalResult}
        className="relative rounded-md  py-2 px-4 duration-200 hover:bg-gray-700 text-gray-300 hover:text-white"
        onClick={logoutHandler}
      >
        Logout
      </button>
      <ConfirmModal />
    </>
  );
};

export default LogoutBtn;
