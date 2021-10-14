import React from "react";
import Line from "./line";
import ReachedItem from "./ReachedItem";

export default function Reached() {
  return (
    <>
      <section className="reached pt-50 pb-50">
        <div className="container-fluid">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
            <ReachedItem value="290M+" desc="Players Top Up" />
            <Line />
            <ReachedItem value="12.500" desc="Games Available" active />
            <Line />
            <ReachedItem value="99,9%" desc="Happy Players" active />
            <Line />
            <ReachedItem value="4.7" desc="Rating Worldwide" active />
          </div>
        </div>
      </section>
    </>
  );
}
