import { Flex, Meta, Schema, Column, RevealFx, Badge, Heading, Text, Row } from "@once-ui-system/core";
import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {gallery.featured.display && (
            <RevealFx
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
                aria-label={gallery.featured.title?.toString()}
                href={gallery.featured.href}
                style={{
                  border: "1px solid var(--brand-alpha-strong)",
                  cursor: "pointer",
                }}
              >
                <Row paddingY="2">{gallery.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <Heading align="center" variant="display-strong-l">
            {gallery.headline}
          </Heading>
          <Text
            align="center"
            onBackground="neutral-weak"
            variant="body-default-l"
            marginTop="24"
            marginBottom="32"
          >
            {gallery.subline}
          </Text>
        </Column>
      </Column>
      <GalleryView />
    </Column>
  );
}
