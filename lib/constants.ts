export type EventItem = {
  id: string;
  title: string;
  slug?: string;
  date: string; // ISO date (YYYY-MM-DD)
  time?: string; // human-friendly time
  location?: string;
  description?: string;
  image: string; // path under /images in public
  link?: string;
  tags?: string[];
}

export const events: EventItem[] = [
  {
    id: 'react-europe-2026',
    title: 'React Europe 2026',
    slug: 'react-europe-2026',
    date: '2026-05-12',
    time: '09:00',
    location: 'Paris, France',
    description: 'A large community-led React conference with talks, workshops and networking across two days.',
    image: '/images/event1.png',
    link: 'https://www.react-europe.org',
    tags: ['react', 'frontend', 'conference']
  },
  {
    id: 'nextjs-conf-2026',
    title: 'Next.js Conf 2026',
    slug: 'nextjs-conf-2026',
    date: '2026-03-03',
    time: '10:00',
    location: 'Online / Hybrid',
    description: 'Official Next.js conference from Vercel showcasing the latest in React and full-stack web development.',
    image: '/images/event2.png',
    link: 'https://nextjs.org/conf',
    tags: ['nextjs', 'react', 'web']
  },
  {
    id: 'kubecon-2026',
    title: 'KubeCon + CloudNativeCon 2026',
    slug: 'kubecon-2026',
    date: '2026-06-09',
    time: '09:30',
    location: 'Barcelona, Spain',
    description: 'The flagship Cloud Native Computing Foundation conference for Kubernetes, observability, and cloud-native tooling.',
    image: '/images/event3.png',
    link: 'https://events.linuxfoundation.org/kubecon-cloudnativecon/',
    tags: ['kubernetes', 'cloud', 'devops']
  },
  {
    id: 'jsconf-eu-2026',
    title: 'JSConf EU 2026',
    slug: 'jsconf-eu-2026',
    date: '2026-04-18',
    time: '09:00',
    location: 'Berlin, Germany',
    description: 'Community-focused JavaScript conference with talks and workshops from international speakers.',
    image: '/images/event4.png',
    link: 'https://jsconf.eu',
    tags: ['javascript', 'community']
  },
  {
    id: 'hackmit-2026',
    title: 'HackMIT 2026',
    slug: 'hackmit-2026',
    date: '2026-01-17',
    time: '18:00',
    location: 'Cambridge, MA, USA',
    description: 'One of the largest undergraduate hackathons in the United States, welcoming students worldwide for 24+ hours of building.',
    image: '/images/event5.png',
    link: 'https://hackmit.org',
    tags: ['hackathon', 'students', 'innovation']
  },
  {
    id: 'open-source-summit-2026',
    title: 'Open Source Summit 2026',
    slug: 'open-source-summit-2026',
    date: '2026-09-22',
    time: '09:00',
    location: 'Austin, TX, USA',
    description: 'Vendor-neutral conference for developers and maintainers working on open source projects and ecosystems.',
    image: '/images/event6.png',
    link: 'https://events.linuxfoundation.org/open-source-summit/',
    tags: ['open-source', 'community']
  },
  {
    id: 'local-dev-meetup',
    title: 'Monthly Dev Meetup — City Tech',
    slug: 'city-tech-meetup',
    date: '2025-11-15',
    time: '18:30',
    location: 'Local Tech Hub — Downtown',
    description: 'A casual monthly meetup for local developers: lightning talks, networking and demos.',
    image: '/images/event-full.png',
    link: '#',
    tags: ['meetup', 'networking']
  }
];

export default events;
