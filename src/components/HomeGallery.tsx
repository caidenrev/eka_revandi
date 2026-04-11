"use client";

import { useState } from "react";
import {
  Column,
  Flex,
  Heading,
  Text,
  RevealFx,
  IconButton,
  Media,
} from "@once-ui-system/core";
import { gallery } from "@/resources";

export const HomeGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const images = gallery.images;

  const nextImage = () => {
    setActiveIndex((prev: number) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev: number) => (prev - 1 + images.length) % images.length);
  };

  const activeImage = images[activeIndex];

  return (
    <Column fillWidth gap="m" paddingBottom="40">
      <Heading as="h2" variant="display-strong-xs" marginBottom="m" paddingLeft="s">
        Visual Journey
      </Heading>
      <Column fillWidth position="relative">
        <RevealFx key={activeIndex} translateY="0" speed="fast">
          <Flex
            fillWidth
            radius="l"
            overflow="hidden"
            aspectRatio="16 / 9"
            border="neutral-alpha-weak"
          >
            <Media
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Flex>
        </RevealFx>

        {/* Navigation buttons */}
        <Flex
          position="absolute"
          fillWidth
          fillHeight
          horizontal="between"
          vertical="center"
          paddingX="m"
          style={{ pointerEvents: 'none', top: 0 }}
        >
          <IconButton
            onClick={prevImage}
            variant="secondary"
            size="s"
            icon="chevronLeft"
            style={{ pointerEvents: 'auto', backdropFilter: 'blur(8px)' }}
          />
          <IconButton
            onClick={nextImage}
            variant="secondary"
            size="s"
            icon="chevronRight"
            style={{ pointerEvents: 'auto', backdropFilter: 'blur(8px)' }}
          />
        </Flex>
      </Column>
      <Flex horizontal="center" gap="8">
        {images.map((image, i) => (
          <Flex
            key={`${image.src}-${i}`}
            width="8"
            height="8"
            radius="full"
            background={i === activeIndex ? "brand-strong" : "neutral-alpha-medium"}
            onClick={() => setActiveIndex(i)}
            style={{ cursor: 'pointer', transition: 'all 0.2s', width: '8px', height: '8px' }}
          />
        ))}
      </Flex>
    </Column>
  );
};
