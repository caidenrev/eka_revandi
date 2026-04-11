import { Column, Heading, Meta, Schema, RevealFx, Badge, Text, Row } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingY="12" horizontal="center" fillWidth>
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {blog.featured.display && (
            <RevealFx horizontal="center" paddingTop="16" paddingBottom="32">
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                href={blog.featured.href}
                style={{
                  border: "1px solid var(--brand-alpha-strong)",
                  cursor: "pointer",
                }}
              >
                <Row paddingY="2">{blog.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <Heading align="center" variant="display-strong-l">
            {blog.headline}
          </Heading>
          <Text
            align="center"
            onBackground="neutral-weak"
            variant="body-default-l"
            marginTop="24"
            marginBottom="32"
          >
            {blog.subline}
          </Text>
        </Column>
      </Column>
      <Column fillWidth flex={1} gap="40" paddingTop="32">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
        <Mailchimp marginBottom="l" />
        <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
          Earlier posts
        </Heading>
        <Posts range={[4]} columns="2" />
      </Column>
    </Column>
  );
}
