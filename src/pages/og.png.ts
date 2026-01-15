import type { APIRoute } from 'astro';
import satori from 'satori';
import sharp from 'sharp';
import { config } from '../config';

const fetchFont = async () => {
  const response = await fetch(
    'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff'
  );
  return await response.arrayBuffer();
};

export const GET: APIRoute = async () => {
  const fontData = await fetchFont();
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
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
                alignItems: 'center',
                gap: '30px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '80px',
                      fontWeight: 900,
                      color: '#ffffff',
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
                      width: '200px',
                      height: '8px',
                      backgroundColor: '#c41e3a',
                    },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '36px',
                      color: '#888888',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                    },
                    children: config.description,
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
