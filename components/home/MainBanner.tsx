import React from "react";

export const MainBanner = () => {
  return (
    <>
      <div className="mainBanner">
        <div>
          <h1>Eventos</h1>
          <h1 className="yellow">Under</h1>
          {/* <p>La Meseta</p> */}

          <a href="#sec-events">
            <button className="btn-action">Construction</button>
          </a>
        </div>
      </div>
    </>
  );
};
