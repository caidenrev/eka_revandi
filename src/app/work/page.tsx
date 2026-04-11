import { Column, Heading, Meta, Schema, RevealFx, Badge, Text, Row } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingY="12" horizontal="center" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {work.featured.display && (
            <RevealFx horizontal="center" paddingTop="16" paddingBottom="32">
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                href={work.featured.href}
                style={{
                  border: "1px solid var(--brand-alpha-strong)",
                  cursor: "pointer",
                }}
              >
                <Row paddingY="2">{work.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <Heading align="center" variant="display-strong-l">
            {work.headline}
          </Heading>
          <Text
            align="center"
            onBackground="neutral-weak"
            variant="body-default-l"
            marginTop="24"
            marginBottom="32"
          >
            {work.subline}
          </Text>
        </Column>
      </Column>
      <Projects />
    </Column>
  );
}
