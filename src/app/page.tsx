import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Flex,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { FeaturedProjects, HomeGallery, CareerSlider, GitHubCalendar, SpotifyPlaylist, LogoMarquee } from "@/components";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6} fillWidth>
        <FeaturedProjects 
          projects={getPosts(["src", "app", "work", "projects"])
            .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
          } 
        />
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Column fillWidth gap="24" marginTop="40">
            <Heading as="h2" variant="display-strong-xs" wrap="balance" paddingLeft="l">
              Latest career journey
            </Heading>
            <Column fillWidth paddingX="20">
              <CareerSlider 
                posts={getPosts(["src", "app", "blog", "posts"])
                  .filter(post => ["life-at-amazon", "life-at-google", "life-as-engineer"].includes(post.slug))
                  .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
                }
              />
            </Column>
          </Column>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
          <Column fillWidth gap="24" marginTop="40">
            <Heading as="h2" variant="display-strong-xs" wrap="balance" paddingLeft="l">
              More stories
            </Heading>
            <Row flex={3} paddingX="20">
              <Posts 
                range={[1, 4]} 
                columns="2" 
                exclude={["life-at-amazon", "life-at-google", "life-as-engineer"]}
              />
            </Row>
            <Flex fillWidth horizontal="center" paddingTop="12">
              <Button href="/blog" variant="secondary" weight="default" size="m" arrowIcon>
                View all posts
              </Button>
            </Flex>
          </Column>
        </Column>
      )}

      {/* GitHub Section with Divider */}
      <Row fillWidth paddingRight="64">
        <Line maxWidth={48} />
      </Row>
      <GitHubCalendar />

      {/* Spotify Section with Divider */}
      <Row fillWidth paddingLeft="64" horizontal="end">
        <Line maxWidth={48} />
      </Row>
      <SpotifyPlaylist />

      {/* Gallery Section with Divider */}
      <Row fillWidth paddingRight="64">
        <Line maxWidth={48} />
      </Row>
      <LogoMarquee />

      {/* Projects Section with Divider */}
      <Row fillWidth paddingLeft="64" horizontal="end">
        <Line maxWidth={48} />
      </Row>
      <Projects range={[4]} />

      {/* Mailchimp Section with Divider */}
      <Row fillWidth paddingRight="64">
        <Line maxWidth={48} />
      </Row>
      <Mailchimp />
    </Column>
  );
}
