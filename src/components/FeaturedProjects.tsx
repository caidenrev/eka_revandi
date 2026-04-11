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

interface FeaturedProject {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    images: string[];
  };
}

interface FeaturedProjectsProps {
  projects: FeaturedProject[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextProject = () => {
    setActiveIndex((prev: number) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev: number) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[activeIndex];

  if (!activeProject) return null;

  return (
    <Column fillWidth gap="m">
      <Column fillWidth gap="m" position="relative">
        <RevealFx key={`image-${activeIndex}`} translateY="0" speed="fast">
          <Flex
            fillWidth
            radius="l"
            overflow="hidden"
            aspectRatio="16 / 9"
            border="neutral-alpha-weak"
            position="relative"
          >
            <Media
              src={activeProject.metadata.images[0]}
              alt={activeProject.metadata.title}
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
          style={{ pointerEvents: 'none' }}
        >
          <IconButton
            onClick={prevProject}
            variant="secondary"
            size="s"
            icon="chevronLeft"
            style={{ pointerEvents: 'auto', backdropFilter: 'blur(8px)' }}
          />
          <IconButton
            onClick={nextProject}
            variant="secondary"
            size="s"
            icon="chevronRight"
            style={{ pointerEvents: 'auto', backdropFilter: 'blur(8px)' }}
          />
        </Flex>

        {/* Indicators */}
        <Flex horizontal="center" gap="8" marginTop="s">
          {projects.map((project, i) => (
            <Flex
              key={project.slug}
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

      <RevealFx key={`text-${activeIndex}`} translateY="12" speed="fast">
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
              {activeProject.metadata.title}
            </Heading>
          </Flex>
          <Column flex={7} gap="16">
            <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
              {activeProject.metadata.summary}
            </Text>
            <Flex gap="24" wrap>
              <SmartLink
                suffixIcon="arrowRight"
                style={{ margin: "0", width: "fit-content" }}
                href={`/work/${activeProject.slug}`}
              >
                <Text variant="body-default-s">Read case study</Text>
              </SmartLink>
            </Flex>
          </Column>
        </Flex>
      </RevealFx>
    </Column>
  );
};
