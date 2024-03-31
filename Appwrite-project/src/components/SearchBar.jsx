import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../Store/searchSlice";

const SearchBar = ({ posts, page }) => {
  const searchHandler = (e) => {
    dispatch(setSearch(e.target.value));
  };
  const search = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  return (
    <div className="mx-4 flex items-center justify-between flex-wrap gap-2 ">
      <h1 className="text-3xl font-medium">{page}</h1>
      <input
        type="search"
        onChange={searchHandler}
        list="posts"
        name="posts"
        autoComplete="off"
        spellCheck="off"
        className="p-2 w-full sm:w-80 border bg-white rounded-md outline-none focus:border-gray-500"
        placeholder="Search blog by title"
      />

      <datalist id="posts">
        {search != "" &&
          posts
            .filter((item) => {
              return item.title.toLowerCase().includes(search.toLowerCase());
            })
            .map(
              (post, index) =>
                index < 10 && <option key={post.title} value={post.title} />
            )}
      </datalist>
    </div>
  );
};

export default SearchBar;
