"use client";

import {
  BsCodeSlash,
  BsBezier2,
  BsPhone,
  BsRocketTakeoff,
  BsArrowRight,
} from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    icon: <BsCodeSlash />,
    title: "Web Development",
    description:
      "Building fast, responsive, and SEO-friendly websites using modern technologies like Next.js and Tailwind CSS.",
    href: "/services",
  },
  {
    num: "02",
    icon: <BsBezier2 />,
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces that provide excellent user experiences.",
    href: "/services",
  },
  {
    num: "03",
    icon: <BsPhone />,
    title: "Mobile App Development",
    description:
      "Developing cross-platform mobile applications for iOS and Android using React Native.",
    href: "/services",
  },
  {
    num: "04",
    icon: <BsRocketTakeoff />,
    title: "Technical Consultation",
    description:
      "Advising on the best technologies and architectures to solve your business problems.",
    href: "/services",
  },
];

const HomeServices = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h2 text-accent text-center mb-8"
          >
            My Services
          </motion.h2>

          <div className="relative flex flex-col gap-12">
            {/* Timeline Line for large screens */}
            <div className="absolute left-[34px] top-0 bottom-0 w-[2px] bg-accent/20 hidden md:block" />

            {services.map((service, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-8 relative group"
                >
                  {/* Icon/Timeline Marker */}
                  <div className="hidden md:flex flex-none w-[70px] h-[70px] bg-[#232329] border border-accent/20 rounded-full items-center justify-center z-10 group-hover:bg-accent transition-all duration-300">
                    <div className="text-3xl text-accent group-hover:text-primary transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="md:hidden flex items-center gap-4 mb-2">
                    <div className="text-3xl text-accent">{service.icon}</div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 bg-[#232329] p-8 rounded-2xl border border-white/5 hover:border-accent/40 shadow-lg transition-all duration-300 relative overflow-hidden group-hover:bg-[#2e2e36]">
                    {/* Number Background */}
                    <div className="absolute -right-4 -top-4 text-9xl font-extrabold text-white/5 group-hover:text-white/10 transition-all duration-300 select-none z-0">
                      {service.num}
                    </div>

                    <div className="relative z-10">
                      <h3 className="hidden md:block text-[32px] font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed mb-6 max-w-[80%]">
                        {service.description}
                      </p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors uppercase text-sm tracking-wider font-bold"
                      >
                        Read more <BsArrowRight />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
