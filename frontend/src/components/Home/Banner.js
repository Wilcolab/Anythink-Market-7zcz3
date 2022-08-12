import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const searchHandler = (e) => {
    props.onSearch(e.target.value, agent.Items.title, agent.Items.title());
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="d-flex justify-content-center align-items-center">
          <span id="get-part">A place to get</span>
          <div
            className="d-inline-flex position-relative"
            style={{ flexGrow: 0.1 }}
          >
            <input
              id="search-box"
              type="search"
              className="input-group border-0 mx-2 px-3 py-2 rounded"
              style={{
                fontSize: "12px",
                outline: "none",
              }}
              placeholder="What is it that you truly desire?"
              onChange={searchHandler}
            />
            <div
              className="position-absolute"
              style={{
                height: "20px",
                width: "20px",
                color: "#7E61FA",
                top: "50%",
                right: 15,
                transform: "translateY(-75%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <span>the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
