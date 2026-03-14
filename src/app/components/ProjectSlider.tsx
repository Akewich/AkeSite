"use client";

import { motion } from "framer-motion";
import { Github, CirclePlay, Star, GitFork } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import type { GitHubProject } from "@/types/github";

// Language color mapping
const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  C: "#555555",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
};

interface ProjectSliderProps {
  projects: GitHubProject[];
}

const ProjectSlider = ({ projects }: ProjectSliderProps) => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 mb-12 text-center"
        >
          <h2 className="h2 font-bold">My Projects</h2>
          <p className="text-white/60 mx-auto max-w-[600px]">
            Check out some of my recent work from GitHub
          </p>
        </motion.div>

        {projects.length === 0 ? (
          <p className="text-center text-white/40">No projects to display</p>
        ) : (
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem
                  key={project.name}
                  className="md:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="bg-[#232329] border-white/10 h-full flex flex-col group overflow-hidden hover:border-accent/40 transition-colors duration-300">
                      {/* Language bar */}
                      <div className="relative w-full h-32 overflow-hidden bg-white/5 flex items-center justify-center">
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            background: project.language
                              ? `linear-gradient(135deg, ${langColors[project.language] || "#666"}, transparent)`
                              : undefined,
                          }}
                        />
                        <span className="text-3xl font-bold text-white/20 group-hover:text-white/30 transition-colors">
                          {project.name}
                        </span>
                      </div>

                      <CardHeader className="p-6 pb-2">
                        <CardTitle className="text-xl font-bold text-white mb-2 line-clamp-1">
                          {project.name}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.language && (
                            <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full border border-accent/20 flex items-center gap-1">
                              <span
                                className="w-2 h-2 rounded-full inline-block"
                                style={{
                                  backgroundColor:
                                    langColors[project.language] || "#666",
                                }}
                              />
                              {project.language}
                            </span>
                          )}
                          {project.topics.slice(0, 2).map((topic) => (
                            <span
                              key={topic}
                              className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>

                        {/* Stars & Forks */}
                        <div className="flex gap-3 text-white/40 text-sm">
                          {project.stars > 0 && (
                            <span className="flex items-center gap-1">
                              <Star className="w-3.5 h-3.5" />
                              {project.stars}
                            </span>
                          )}
                          {project.forks > 0 && (
                            <span className="flex items-center gap-1">
                              <GitFork className="w-3.5 h-3.5" />
                              {project.forks}
                            </span>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="p-6 pt-0 flex-grow">
                        <CardDescription className="text-white/60 line-clamp-4 leading-relaxed">
                          {project.description || "No description provided"}
                        </CardDescription>
                      </CardContent>

                      <CardFooter className="p-6 pt-0 flex justify-between gap-4 mt-auto">
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            variant="outline"
                            className="w-full gap-2 border-white/10 hover:bg-white/5 hover:text-accent group text-white bg-transparent rounded-full"
                          >
                            <span className="group-hover:text-accent">
                              Repository
                            </span>
                            <Github className="w-4 h-4 group-hover:text-accent" />
                          </Button>
                        </Link>
                        {project.homepage && (
                          <Link
                            href={project.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button className="w-full gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 rounded-full">
                              <span>Demo</span>
                              <CirclePlay className="w-4 h-4" />
                            </Button>
                          </Link>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-[-50px] bg-transparent border-accent text-accent hover:bg-accent hover:text-primary" />
              <CarouselNext className="right-[-50px] bg-transparent border-accent text-accent hover:bg-accent hover:text-primary" />
            </div>
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default ProjectSlider;
