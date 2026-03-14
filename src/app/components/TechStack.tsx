"use client";

import { motion } from "framer-motion";

const stack = [
  {
    category: "Languages",
    items: ["HTML 5", "CSS 3", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
      "Figma",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST API", "NextAuth.js"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Firebase"],
  },
  {
    category: "DevOps",
    items: ["Docker", "AWS", "Vercel", "Git", "GitHub Actions"],
  },
];

const TechStack = () => {
  return (
    <section className="py-12 xl:py-24 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 mb-12 text-center"
        >
          <h2 className="h2 font-bold">My Tech Stack</h2>
          <p className="text-white/60 mx-auto max-w-[600px]">
            Comprehensive toolkit for building scalable applications
          </p>
        </motion.div>

        <div className="bg-[#232329]/30 rounded-xl border border-white/10 p-2 md:p-8">
          {/* Header Row */}
          <div className="hidden md:flex flex-row gap-12 pb-6 border-b border-white/10">
            <div className="w-32 flex-shrink-0">
              <h4 className="font-bold text-white/50 text-sm uppercase tracking-wider">
                Category
              </h4>
            </div>
            <div>
              <h4 className="font-bold text-white/50 text-sm uppercase tracking-wider">
                Tools & Tech
              </h4>
            </div>
          </div>

          {stack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex flex-col md:flex-row gap-4 md:gap-12 py-6 md:py-8 ${
                index !== stack.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              {/* Category Title */}
              <div className="w-full md:w-32 flex-shrink-0">
                <h3 className="text-xl font-bold text-accent/90">
                  {item.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {item.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/5 text-white/80 hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-300 cursor-default text-sm md:text-base font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
