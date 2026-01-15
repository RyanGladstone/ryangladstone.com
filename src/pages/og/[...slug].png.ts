import type { APIRoute, GetStaticPaths } from 'astro';
import satori from 'satori';
import sharp from 'sharp';
import { config } from '../../config';

const fetchFont = async () => {
  const response = await fetch(
    'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff'
  );
  return await response.arrayBuffer();
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdPostsGlob = import.meta.glob('../../content/blog/*.md', { eager: true });
  const mdxPostsGlob = import.meta.glob('../../content/blog/*.mdx', { eager: true });

  const allPosts = [...Object.values(mdPostsGlob), ...Object.values(mdxPostsGlob)] as any[];

  return allPosts.map((post: any) => ({
    params: { slug: post.file.split('/').pop()?.replace(/\.(md|mdx)$/, '') },
    props: {
      title: post.frontmatter.title,
      date: post.frontmatter.date,
    }
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { title, date } = props;
  const fontData = await fetchFont();

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#1a1a1a',
          padding: '60px',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '32px',
                      fontWeight: 700,
                      color: '#c41e3a',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    },
                    children: config.title,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '120px',
                      height: '6px',
                      backgroundColor: '#c41e3a',
                    },
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: '64px',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.1,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                maxWidth: '1000px',
              },
              children: title,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '24px',
                      color: '#888888',
                      fontFamily: 'monospace',
                    },
                    children: formattedDate,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          weight: 400,
          style: 'normal' as const,
        },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
    },
  });
};
