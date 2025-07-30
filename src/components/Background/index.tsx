"use client";

import { useEffect, useMemo, useState } from "react";
// Correct imports for the new packages
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const Background = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  // This effect initializes the tsParticles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the slim version of the engine, which is smaller and sufficient for this animation
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

  // Memoize the options object so it's not recreated on every render
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // The background is handled by your global styles
        },
      },
      fpsLimit: 120, // Increased for smoother animations
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse", // This mode pushes particles away from the cursor
          },
        },
        modes: {
          repulse: {
            distance: 100, // The distance of the cursor's influence
            duration: 0.4,
            factor: 100, // The strength of the repulsion
            speed: 1,
            maxSpeed: 40, // The maximum speed particles can reach
            easing: "ease-out-quad",
          },
        },
      },
      // Force particles to be contained within the canvas size
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
      responsive: [
        {
          options: {
            particles: {
              number: {
                value: 220,
              },
            },
          },
        },
      ],
      particles: {
        // Set particle color based on the current theme
        color: {
          value: theme === "dark" ? "#ffffff" : "#000000",
        },
        // Links are disabled to remove connecting lines
        links: {
          enable: false,
        },
        // Configure particle movement for a slow, random drift with a trail effect
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Bounce off edges to stay contained
          },
          random: true, // Movement is random
          speed: { min: 0.1, max: 0.7 }, // Slow base speed for ambient drift
          straight: false,
          // The trail effect creates the "streaking" look on acceleration
          trail: {
            enable: true,
            fill: { color: theme === "dark" ? "#000000" : "#ffffff" },
            length: 20,
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 200, // Reduced for better performance in contained area
        },
        // Opacity is animated for a twinkling effect
        opacity: {
          value: { min: 0.2, max: 0.7 }, // Slightly more opaque for visibility
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: "circle", // Using circle shapes for a unique look
        },
        size: {
          value: { min: 0.3, max: 2.5 }, // Small, slightly varied particle size
        },
      },
      detectRetina: true,
    }),
    [theme] // Re-create options only when the theme changes
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    );
  }

  return <></>;
};

export default Background;
