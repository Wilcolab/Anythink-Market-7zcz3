import React from "react";
import logo from "../../imgs/logo.png";

import agent from "../../agent";

const Banner = (props) => {
   return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <span>
            <form style={{
              display: "inline-block",
              width: "50%",
              position: "relative",
              margin: "0px 8px",
            }}>

              <input
                type="search"
                id="search-box"
                placeholder="What is it that you truly desire?"
                name="term"
                style={
                  {
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "none",
                    outline: "none"
                  }
                }
                onChange={(e) => {
                  props.onSearchFilter(
                    e.target.value, (page) => {
                      agent.Items.byTitle(e.target.value)
                    }, (page) => {
                      agent.Items.byTitle(e.target.value)
                    }
                  )
                }}
              />
              <div style={{
                position: "absolute",
                top: "50%",
                right: "20px", "transform": "translateY(-50%)",
              }}>

                <svg width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#a561ed" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
            </form>

          </span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
