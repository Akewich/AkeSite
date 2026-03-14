"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const HomeCTA = () => {
  return (
    <section className="py-12 xl:py-24 bg-[#232329]/50">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-4 text-center xl:text-left">
            <h2 className="h2 text-accent">Let's work together!</h2>
            <p className="text-white/60 max-w-[600px]">
              Have a project in mind basically? I'm available for freelance work
              and open to new opportunities.
            </p>
          </div>
          <Link href="/contact">
            <Button
              size="lg"
              className="uppercase bg-accent text-primary hover:bg-accent-hover transition-all"
            >
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
