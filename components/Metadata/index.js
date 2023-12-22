import {client} from '../../app/client';

export const meta = ({title, description, canonical, images, slug}) => ({
  title: title,
  description: description,
  metadataBase: new URL(`https://${client.website}`),
  alternates: {
    canonical: canonical,
  },
  openGraph: {
    title: title,
    description: description,
    url: canonical,
    siteName: client.name,
    images: images,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: images
  }
})
