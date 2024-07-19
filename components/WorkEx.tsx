"use client";

import React from "react";

import { description } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <section className="py-10">
      <h1 className="heading">
        Some of my
        <span className="text-purple"> professional highlights</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 py-5">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={description}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
