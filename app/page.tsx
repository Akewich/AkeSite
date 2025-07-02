"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* info */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
            </h1>
            <TypeAnimation
              sequence={[
                "Ekawich Turawan",
                3000,
                "Akewich",
                2000,
                "Software Developer",
                3000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="h1 text-accent"
            />
            <p className="max-w-[500px] mb-9 text-white/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              eveniet illum quod, illo sed dolor libero voluptates ipsam?
              Doloremque quaerat hic vero nihil veritatis, id culpa dolorem
              impedit cupiditate saepe.
            </p>
          </div>
          {/* Image */}
          <div>image</div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
