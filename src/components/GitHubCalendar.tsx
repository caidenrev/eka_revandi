"use client";

import { GitHubCalendar } from "react-github-calendar";
import {
  Column,
  Heading,
  Text,
  RevealFx,
  Flex,
} from "@once-ui-system/core";
import { GitHubTopRepos } from "./GitHubTopRepos";

export const GitHubActivityCalendar = () => {
  const theme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  // Custom cyan theme to match the portfolio
  const cyanTheme = {
    light: ['#ebedf0', '#cffafe', '#22d3ee', '#0891b2', '#164e63'],
    dark: ['#161b22', '#083344', '#0e7490', '#22d3ee', '#67e8f9'],
  };

  return (
    <RevealFx translateY="16" delay={0.2} fillWidth>
      <Column fillWidth gap="24" marginTop="40">
        <Heading as="h2" variant="display-strong-xs" wrap="balance" paddingLeft="l">
          GitHub Contributions
        </Heading>

        <Flex
          fillWidth
          paddingX="20"
          horizontal="center"
        >
          <Flex
            fillWidth
            maxWidth="m"
            radius="l"
            padding="16"
            border="neutral-alpha-weak"
            background="neutral-alpha-weak"
            horizontal="center"
            style={{
              backdropFilter: 'blur(8px)',
              overflow: 'hidden',
            }}
          >
            <div 
              className="custom-scrollbar" 
              style={{ 
                overflowX: 'auto', 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'flex-start' 
              }}
            >
              <GitHubCalendar
                username="caidenrev"
                theme={cyanTheme}
                fontSize={12}
                blockSize={14}
                blockMargin={5}
              />
            </div>
          </Flex>
        </Flex>

        <Flex fillWidth paddingX="20" horizontal="center">
          <Flex fillWidth maxWidth="m">
            <GitHubTopRepos />
          </Flex>
        </Flex>
      </Column>
    </RevealFx>
  );
};
