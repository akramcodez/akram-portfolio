"use client";
import React from "react";

const MeetMe = () => {
  return (
    <section
      id="meet-me"
      className="flex items-center justify-center h-full w-full overflow-auto"
    >
      <div className="w-full h-full mx-auto max-w-4xl p-2.5 pl-4 md:p-10 flex items-center md:justify-center ">
        <div className="space-y-12 md:space-y-16">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider mb-3 md:mb-4">
              ABOUT ME
            </h2>
            <p className="block sm:hidden text-sm leading-relaxed max-w-3xl mx-auto">
              Hi! I&apos;m{" "}
              <span className="[font-weight:700] hover:underline [text-decoration-thickness:1px] cursor-pointer">
                SK Akram
              </span>
              , a software developer who&apos;s always ready to{" "}
              <span className="[font-weight:700] hover:underline [text-decoration-thickness:1px] cursor-pointer">
                explore
              </span>{" "}
              new things. I actively contribute to{" "}
              <span className="[font-weight:700] hover:underline [text-decoration-thickness:1px] cursor-pointer">
                open source
              </span>
              , build real-world{" "}
              <span className="[font-weight:700] hover:underline [text-decoration-thickness:1px] cursor-pointer">
                projects
              </span>
              , and continuously sharpen my{" "}
              <span className="[font-weight:700] hover:underline [text-decoration-thickness:1px] cursor-pointer">
                DSA skills
              </span>
              .
            </p>
            <p className="hidden sm:block text-sm lg:text-base xl:text-md leading-relaxed max-w-3xl mx-auto ">
              Hi! I&apos;m{" "}
              <span className="[font-weight:700] hover:underline [text-decoration-thickness:1px] cursor-pointer">
                SK Akram
              </span>
              , a software developer who&apos;s always ready to{" "}
              <span className="[font-weight:700] hover:underline [text-decoration-thickness:1px] cursor-pointer">
                explore
              </span>{" "}
              new things. I actively contribute to{" "}
              <span className="[font-weight:700] hover:underline [text-decoration-thickness:1px] cursor-pointer">
                open source
              </span>
              , build real-world{" "}
              <span className="[font-weight:700] hover:underline [text-decoration-thickness:1px] cursor-pointer">
                projects
              </span>
              , and continuously sharpen my{" "}
              <span className="[font-weight:700] hover:underline [text-decoration-thickness:1px] cursor-pointer">
                DSA skills
              </span>
              .
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider mb-3 md:mb-4">
              HIRE ME
            </h2>
            <p className="block sm:hidden text-sm leading-relaxed max-w-3xl mx-auto">
              I&apos;m Open to internships and freelance work. If you are
              looking for someone reliable to build, scale, or improve your
              product - reach out.
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=skakram00zz@gmail.com&tf=cm"
                className="block mt-3 font-bold hover:underline"
              >
                skakram00zz@gmail.com
              </a>
            </p>

            <p className="hidden sm:block text-sm lg:text-base xl:text-md leading-relaxed max-w-3xl mx-auto">
              I&apos;m available for freelance and internship opportunities. If
              you need a committed developer to build or improve your product,
              feel free to connect.
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=skakram00zz@gmail.com&tf=cm"
                className="block mt-3 font-bold underline [text-decoration-thickness:1px]"
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
