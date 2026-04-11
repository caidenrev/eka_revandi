"use client";

import { useEffect, useState } from "react";
import {
  Column,
  Heading,
  useTheme,
} from "@once-ui-system/core";

const logos = [
  {
    name: "Amazon",
    dark: "/images/logo-home/logo-amazon-dark.png",
    light: "/images/logo-home/logo-amazon-light.png",
  },
  {
    name: "AWS",
    dark: "/images/logo-home/logo-aws-dark.png",
    light: "/images/logo-home/logo-aws-light.png",
  },
  {
    name: "Google",
    dark: "/images/logo-home/logo-google.png",
    light: "/images/logo-home/logo-google.png",
  },
  {
    name: "Dicoding",
    dark: "/images/logo-home/logo-dicoding-dark.png",
    light: "/images/logo-home/logo-dicoding-light.png",
  },
  {
    name: "GDG",
    dark: "/images/logo-home/logo-gdg.svg",
    light: "/images/logo-home/logo-gdg.svg",
  },
  {
    name: "AWSUGID",
    dark: "/images/logo-home/awsugid.png",
    light: "/images/logo-home/awsugid.png",
  },
];

export const LogoMarquee: React.FC = () => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("dark");

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      const themeAttr = root.getAttribute("data-theme") as "dark" | "light";
      if (themeAttr) setCurrentTheme(themeAttr);
    });

    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    setCurrentTheme((root.getAttribute("data-theme") as "dark" | "light") || "dark");

    return () => observer.disconnect();
  }, [theme]);

  const firstRow = [logos[0], logos[1], logos[2], logos[0], logos[1], logos[2]]; // Repeat for density
  const secondRow = [logos[3], logos[4], logos[5], logos[3], logos[4], logos[5]];

  const MarqueeRow = ({ items, direction }: { items: typeof logos, direction: 'left' | 'right' }) => (
    <div className={`marquee-container marquee-${direction}`}>
      <div className="marquee-track">
        {items.map((logo, i) => (
          <div key={`${logo.name}-${direction}-${i}-1`} className="logo-item">
            <img
              src={currentTheme === "dark" ? logo.dark : logo.light}
              alt={logo.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="marquee-track" aria-hidden="true">
        {items.map((logo, i) => (
          <div key={`${logo.name}-${direction}-${i}-2`} className="logo-item">
            <img
              src={currentTheme === "dark" ? logo.dark : logo.light}
              alt={logo.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Column fillWidth gap="m" paddingBottom="40">
      <Heading as="h2" variant="display-strong-xs" marginBottom="m" paddingLeft="l">
        Working Experience & Partners
      </Heading>
      
      <Column 
        fillWidth 
        gap="32" 
        style={{ 
            marginTop: '24px',
            overflow: 'hidden'
        }}
      >
        <MarqueeRow items={firstRow} direction="right" />
        <MarqueeRow items={secondRow} direction="left" />
      </Column>
    </Column>
  );
};
