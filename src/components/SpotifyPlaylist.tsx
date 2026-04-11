"use client";

import { useState } from "react";
import {
  Flex,
  Text,
  Column,
  Row,
  Icon,
  Heading,
  Button,
} from "@once-ui-system/core";

export const SpotifyPlaylist = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const playlistId = "3zNSraEfSGREScAR7gnyTH";

  return (
    <Column fillWidth gap="24">
      <Row vertical="center" horizontal="between" paddingX="l">
        <Row vertical="center" gap="12">
            <Icon name="play" size="m" onBackground="brand-strong" />
            <Heading as="h3" variant="heading-strong-s">
            Revan's Playlist 
            </Heading>
        </Row>
        <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="tertiary"
            size="s"
            weight="default"
        >
            {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </Row>

      <Flex
        fillWidth
        radius="l"
        border="neutral-alpha-weak"
        background="neutral-alpha-weak"
        style={{
          backdropFilter: 'blur(8px)',
          overflow: 'hidden',
          transition: 'all 0.5s ease',
          height: isExpanded ? '400px' : '176px',
        }}
      >
        <iframe
          title="Spotify Playlist"
          src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
          width="100%"
          height={isExpanded ? "400" : "176"}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ border: 'none' }}
        />
      </Flex>
    </Column>
  );
};
