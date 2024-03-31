import React, { useEffect } from "react";
import { Container } from "../components/index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  // const [name, setName] = useState("User");
  // useEffect(() => {
  //   authService.getCurrentUser().then((result) => setName(result.name));
  // }, []);

  const name = useSelector((state) => state.auth.userData?.name);
  const status = useSelector((state) => state.auth.status);
  return (
    <div className="w-full pb-8">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Container>
        <div className="container mx-auto flex flex-col items-center px-4 pb-10 pt-12 sm:py-16 text-center md:py-24 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl text-gray-700 font-bold leading-none sm:text-5xl ">
            <span className="text-cyan-400 capitalize ">
              {" "}
              Hi {status ? name : "Stranger"}!
            </span>{" "}
            <br />
            Welcome to SHOUTS
          </h1>
          <p className="px-8 mt-8 mb-12 font-semibold text-lg">
            Shouts, A sleek and all-in-one blog app, take your blogging to the
            next level!
          </p>
          <div className="flex flex-wrap justify-center">
            <Link
              to={status ? "/all-posts" : "/signup"}
              className="px-8 py-3 m-2 border-2 hover:border-gray-500 duration-200 text-lg font-semibold rounded  "
            >
              {status ? "Read Blog" : "SignUp"}
            </Link>
            <Link
              to={status ? "/add-post" : "/login"}
              className="px-8 py-3 m-2 text-lg font-semibold text-white duration-200 hover:text-cyan-300 rounded bg-gray-800 hover:bg-black"
            >
              {status ? "Post Blog" : "Login"}
            </Link>
          </div>
          {!status && (
            <p className="text-gray-500">Login to Read, Share and Post Blogs</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;
