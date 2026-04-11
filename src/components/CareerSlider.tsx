"use client";

import { useState } from "react";
import {
  Column,
  Flex,
  Heading,
  Text,
  SmartLink,
  RevealFx,
  IconButton,
} from "@once-ui-system/core";
import { Media } from "@once-ui-system/core";

interface CareerPost {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    image?: string;
  };
}

interface CareerSliderProps {
  posts: CareerPost[];
}

export const CareerSlider: React.FC<CareerSliderProps> = ({ posts }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextPost = () => {
    setActiveIndex((prev: number) => (prev + 1) % posts.length);
  };

  const prevPost = () => {
    setActiveIndex((prev: number) => (prev - 1 + posts.length) % posts.length);
  };

  const activePost = posts[activeIndex];

  if (!activePost) return null;

  return (
    <Column fillWidth gap="m">
      <Column fillWidth gap="m" position="relative">
        <RevealFx key={`blog-image-${activeIndex}`} translateY="0" speed="fast">
          <Flex
            fillWidth
            radius="l"
            overflow="hidden"
            aspectRatio="16 / 9"
            border="neutral-alpha-weak"
            position="relative"
          >
            <Media
              src={activePost.metadata.image || ""}
              alt={activePost.metadata.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Flex>
        </RevealFx>

        {/* Navigation Overlays */}
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
            onClick={prevPost}
            variant="secondary"
            size="s"
            icon="chevronLeft"
            style={{ pointerEvents: 'auto', backdropFilter: 'blur(8px)' }}
          />
          <IconButton
            onClick={nextPost}
            variant="secondary"
            size="s"
            icon="chevronRight"
            style={{ pointerEvents: 'auto', backdropFilter: 'blur(8px)' }}
          />
        </Flex>

        {/* Indicators */}
        <Flex horizontal="center" gap="8" marginTop="s">
          {posts.map((post, i) => (
            <Flex
              key={post.slug}
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

      <RevealFx key={`blog-text-${activeIndex}`} translateY="12" speed="fast">
        <Flex
          s={{ direction: "column" }}
          fillWidth
          paddingX="s"
          paddingTop="12"
          paddingBottom="24"
          gap="l"
        >
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {activePost.metadata.title}
            </Heading>
          </Flex>
          <Column flex={7} gap="16">
            <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
              {activePost.metadata.summary}
            </Text>
            <Flex gap="24" wrap>
              <SmartLink
                suffixIcon="arrowRight"
                style={{ margin: "0", width: "fit-content" }}
                href={`/blog/${activePost.slug}`}
              >
                <Text variant="body-default-s">Read post</Text>
              </SmartLink>
            </Flex>
          </Column>
        </Flex>
      </RevealFx>
    </Column>
  );
};
