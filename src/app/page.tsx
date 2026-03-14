"use client";

import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
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
              Hello I am <br />
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
              It is just my paragraph about myself but not put it now
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center rounded-full gap-2 border-accent hover:bg-accent hover:text-primary transition"
              >
                <span>Look at my CV</span>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 flex border border-accent rounded-full items-center justify-center text-accent hover:bg-accent hover:text-primary transition duration-300"
                />
              </div>
            </div>
          </div>
          {/* Image */}
          <div>image</div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
