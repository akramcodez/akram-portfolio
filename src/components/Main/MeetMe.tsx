"use client";
import React from "react";

const MeetMe = () => {
  return (
    <section
      id="meet-me"
      className="flex items-center justify-center h-full w-full overflow-auto"
    >
      <div className="w-full h-full mx-auto max-w-4xl p-6 md:p-10 flex items-center md:justify-center animate-blur-in">
        <div className="space-y-12 md:space-y-16">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider mb-3 md:mb-4">
              ABOUT ME
            </h2>
            <p className="block sm:hidden text-sm font-medium leading-relaxed max-w-3xl mx-auto">
              I&apos;m an 18-year-old CS student and full-stack developer
              focused on backend systems. Currently building projects, improving
              in DSA, and contributing to open-source.
            </p>
            <p className="hidden sm:block text-sm lg:text-base xl:text-md font-medium leading-relaxed max-w-3xl mx-auto ">
              I&apos;m an 18-year-old Computer Science student and full-stack
              developer with a focus on backend architecture. I actively build
              real-world projects, contribute to open-source, and continue
              sharpening my skills in Data Structures and Algorithms.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider mb-3 md:mb-4">
              HIRE ME
            </h2>
            <p className="block sm:hidden text-sm font-medium leading-relaxed max-w-3xl mx-auto">
              I&apos;m Open to internships and freelance work. If you are
              looking for someone reliable to build, scale, or improve your
              product - reach out.
              <a
                href="mailto:skcodewizard786@gmail.com"
                className="block mt-3 font-semibold hover:underline"
              >
                skakram00zz@gmail.com
              </a>
            </p>

            <p className="hidden sm:block text-sm lg:text-base xl:text-md font-medium leading-relaxed max-w-3xl mx-auto">
              I&apos;m available for freelance and internship opportunities. If
              you need a committed developer to build or improve your product,
              feel free to connect.
              <a
                href="mailto:skcodewizard786@gmail.com"
                className="block mt-3 font-semibold hover:underline"
              >
                skakram00zz@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetMe;
