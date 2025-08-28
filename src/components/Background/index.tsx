"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const Background = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      router.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [router]);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 40,
            easing: "ease-out-quad",
          },
        },
      },
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
      responsive: [
        {
          options: {
            particles: {
              number: {
                value: 110,
              },
            },
          },
        },
      ],
      particles: {
        color: {
          value: theme === "dark" ? "#ffffff" : "#000000",
        },
        links: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: { min: 0.1, max: 0.7 },
          straight: false,
          trail: {
            enable: true,
            fill: { color: theme === "dark" ? "#000000" : "#ffffff" },
            length: theme === "dark" ? 14 : 12,
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 200,
        },
        opacity: {
          value: { min: 0.2, max: 0.7 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: theme === "dark" ? "triangle" : "triangle",
        },
        size: {
          value: {
            min: theme === "dark" ? 2.2 : 2.1,
            max: theme === "dark" ? 3 : 3.1,
          },
        },
      },
      detectRetina: true,
    }),
    [theme]
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    );
  }

  return <></>;
};

export default Background;
