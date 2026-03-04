import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Atlas',
    short_name: 'Atlas',
    description: 'A 3D Digital Garden',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#2dd4bf',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
