"use client";

import {
  Flex,
  Text,
  Column,
  Row,
  Icon,
  Heading,
  Grid,
} from "@once-ui-system/core";

interface RepoProps {
  name: string;
  language: string;
  langColor: string;
  stars: number;
  forks: number;
  link: string;
}

const RepoCard: React.FC<RepoProps> = ({ name, language, langColor, stars, forks, link }) => (
  <Flex
    flex={1}
    direction="column"
    padding="16"
    radius="l"
    border="neutral-alpha-weak"
    background="neutral-alpha-weak"
    gap="8"
    style={{ 
        backdropFilter: 'blur(8px)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-solid-medium)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--neutral-alpha-weak)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
    }}
    onClick={() => window.open(link, "_blank")}
  >
    <Row vertical="center" gap="8" fillWidth>
      <Icon name="book" size="s" onBackground="brand-weak" />
      <Text variant="body-strong-m" onBackground="neutral-strong" style={{ color: 'var(--brand-solid-strong)' }}>
        {name.split('/')[1]}
      </Text>
    </Row>
    
    <Row vertical="center" gap="16" marginTop="4">
      <Row vertical="center" gap="4">
        <Flex width="8" height="8" radius="full" style={{ backgroundColor: langColor }} />
        <Text variant="body-default-xs" onBackground="neutral-weak">{language}</Text>
      </Row>
      
      {stars > 0 && (
        <Row vertical="center" gap="4">
          <Icon name="star" size="xs" onBackground="neutral-weak" />
          <Text variant="body-default-xs" onBackground="neutral-weak">{stars}</Text>
        </Row>
      )}
      
      {forks > 0 && (
        <Row vertical="center" gap="4">
          <Icon name="gitBranch" size="xs" onBackground="neutral-weak" />
          <Text variant="body-default-xs" onBackground="neutral-weak">{forks}</Text>
        </Row>
      )}
    </Row>
  </Flex>
);

export const GitHubTopRepos: React.FC = () => {
  const repos: RepoProps[] = [
    {
      name: "caidenrev/learniverse-final",
      language: "TypeScript",
      langColor: "#3178c6",
      stars: 12,
      forks: 4,
      link: "https://github.com/caidenrev/learniverse-final"
    },
    {
      name: "caidenrev/data",
      language: "Python",
      langColor: "#3572A5",
      stars: 8,
      forks: 2,
      link: "https://github.com/caidenrev/data"
    },
    {
      name: "caidenrev/dibelajarin",
      language: "JavaScript",
      langColor: "#f1e05a",
      stars: 15,
      forks: 5,
      link: "https://github.com/caidenrev/dibelajarin"
    }
  ];

  return (
    <Column fillWidth gap="24">
      <Row vertical="center" gap="12" paddingLeft="l">
        <Icon name="github" size="m" onBackground="brand-strong" />
        <Heading as="h3" variant="heading-strong-s">
          Top Repositories
        </Heading>
      </Row>
      
      <Grid columns={3} s={{ columns: 1 }} fillWidth gap="16">
        {repos.map((repo) => (
          <RepoCard key={repo.name} {...repo} />
        ))}
      </Grid>
    </Column>
  );
};
