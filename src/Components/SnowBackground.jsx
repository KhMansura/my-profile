"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function SnowBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10 pointer-events-none"
      options={{
        background: {
          color: "transparent", // Keep transparent to see your site background
        },
        particles: {
          number: {
            value: 100, // Amount of snow flakes
            density: {
              enable: true,
            },
          },
          color: {
            value: "#ffffff", // White like snow/stars
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.1, max: 0.5 }, // Some are bright, some are dim
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 }, // Different sizes
          },
          move: {
            enable: true,
            speed: { min: 0.5, max: 2 }, // Speed of falling
            direction: "bottom", // Falling down
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
      }}
    />
  );
}