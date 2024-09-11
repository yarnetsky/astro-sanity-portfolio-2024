import type { PreviewProps } from 'sanity';
import { Flex, Text } from '@sanity/ui';
import { Tweet, Vimeo, YouTube } from 'astro-embed';

export function YouTube(props: PreviewProps) {
  const { title, id, renderDefault } = props;

  return (
    <Flex padding={3} align="center" justify="center">
      {typeof title === 'string' ? (
        <YouTubePreview title={title} />
      ) : (
        <Text>Add YouTube title</Text>
      )}
      {typeof id === 'string' ? (
        <YouTubePreview id={id} />
      ) : (
        <Text>Add a YouTube URL</Text>
      )}
    </Flex>
  );
}
