"use client";
import React from "react";

const MeetMe = () => {
  return (
    <section
      id="meet-me"
      className="flex items-center justify-center h-full w-full overflow-auto"
    >
      <div className="w-full h-full mx-auto max-w-4xl p-6 md:p-10 flex items-center md:justify-center animate-blur-in">
        {/* Section Container */}
        <div className="space-y-12 md:space-y-16">
          {/* About Me Section */}
          <div className="text-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider mb-3 md:mb-4">
              ABOUT ME
            </h2>
            {/* Paragraph for smaller screens */}
            <p className="block sm:hidden text-xs font-medium leading-relaxed max-w-3xl mx-auto">
              I&apos;m an 18-year-old CS student and full-stack MERN developer
              passionate about backend development. Currently working on DSA and
              open-source contributions.
            </p>
            {/* Paragraph for larger screens */}
            <p className="hidden sm:block text-sm lg:text-base xl:text-md font-medium leading-relaxed max-w-3xl mx-auto ">
              I&apos;m an 18-year-old Computer Science student and full-stack
              developer specializing in the MERN stack. I have a passion for
              backend development and have built several projects, which you can
              find on my GitHub. I am currently honing my skills in Data
              Structures & Algorithms to contribute to open-source projects.
            </p>
          </div>

          {/* Hire Me Section */}
          <div className="text-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider mb-3 md:mb-4">
              HIRE ME
            </h2>
            {/* Paragraph for smaller screens */}
            <p className="block sm:hidden text-xs font-medium leading-relaxed max-w-3xl mx-auto">
              I&apos;m open to internships and freelance work. If you need a
              passionate dev to bring your ideas to life, let&apos;s connect.
              <a
                href="mailto:skcodewizard786@gmail.com"
                className="block mt-3 font-semibold hover:underline"
              >
                skcodewizard786@gmail.com
              </a>
            </p>

            <p className="hidden sm:block text-sm lg:text-base xl:text-md font-medium leading-relaxed max-w-3xl mx-auto">
              I&apos;m actively seeking internships and freelance opportunities.
              If you need a passionate and skilled developer to help bring your
              ideas to life, let&apos;s connect. I&apos;m ready to contribute to
              your team.
              <a
                href="mailto:skcodewizard786@gmail.com"
                className="block mt-3 font-semibold hover:underline"
              >
                skcodewizard786@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetMe;
