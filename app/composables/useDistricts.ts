export interface District {
  number: string
  name: string
  slug: string
  type: string
  layout: string
  description: string
  image: string
  longDescription: string
  pullQuote: string
  offerings: string[]
  status: 'development' | 'coming-soon' | 'active'
  statusNote?: string
}

export const districts: District[] = [
  {
    number: '01', name: 'Voight Studio', slug: 'voight-studio',
    image: '/images/quarters/voight-studio.webp', type: 'Design Practice', layout: 'hero',
    description: 'Design and brand strategy for ventures building at the edge of what is possible. The flagship district where client work meets creative ambition.',
    longDescription: 'Voight Studio is the creative engine of Meraki Road. A full-service design practice that pairs strategic thinking with obsessive craft, working with ventures and cultural institutions that refuse to settle for conventional output. Every engagement is a collaboration\u2014built on the belief that the best work happens when ambition meets restraint, and when both sides are willing to go further than comfortable.',
    pullQuote: 'The best work happens when ambition meets restraint.',
    offerings: ['Design strategy', 'Brand identity', 'Creative direction', 'Visual systems'],
    status: 'active', statusNote: 'Now accepting select engagements.',
  },
  {
    number: '02', name: 'The Road', slug: 'the-road',
    image: '/images/quarters/the-road.webp', type: 'Publishing & Editorial', layout: 'wide',
    description: 'Long-form storytelling and cultural criticism for the AI-native era.',
    longDescription: 'The Road is the editorial arm of Meraki Road. Long-form essays, dispatches, interviews, and cultural criticism written for creators who think deeply about their practice. Substantive writing about what it means to make things in an era where the tools are changing faster than the conversations about them.',
    pullQuote: 'Substantive writing for creators who think deeply about their practice.',
    offerings: ['Long-form essays', 'Cultural criticism', 'Creator interviews', 'Field dispatches'],
    status: 'active', statusNote: 'Publishing weekly.',
  },
  {
    number: '03', name: 'Meridian', slug: 'meridian',
    image: '/images/quarters/meridian.webp', type: 'Research & Strategy', layout: 'narrow',
    description: 'Frontier research translated into actionable creative intelligence.',
    longDescription: 'Meridian sits at the intersection of research and practice. It tracks emerging tools, techniques, and cultural shifts\u2014then translates them into frameworks that working creators can actually use. Actionable intelligence for people building at the frontier.',
    pullQuote: 'Research that moves at the speed of practice.',
    offerings: ['Trend intelligence', 'Tool evaluations', 'Framework development', 'Strategic foresight'],
    status: 'coming-soon', statusNote: 'Launching Q3 2026.',
  },
  {
    number: '04', name: 'Fieldwork', slug: 'fieldwork',
    image: '/images/quarters/fieldwork.webp', type: 'Education', layout: 'narrow',
    description: 'Structured learning paths for creators who want depth, not shortcuts.',
    longDescription: 'Fieldwork is education designed for practitioners. Structured learning paths, cohort-based intensives, and mentorship programs built around the conviction that mastery requires deliberate practice, honest feedback, and sustained commitment. Every program is taught by people who are actively building\u2014not just teaching.',
    pullQuote: 'Mastery requires deliberate practice, honest feedback, and sustained commitment.',
    offerings: ['Cohort intensives', 'Mentorship programs', 'Structured learning paths', 'Peer critique'],
    status: 'coming-soon', statusNote: 'First cohort forming now.',
  },
  {
    number: '05', name: 'The Provenance', slug: 'the-provenance',
    image: '/images/quarters/the-provenance.webp', type: 'Archive & Curation', layout: 'wide',
    description: 'A living archive of creative practice, process, and precedent.',
    longDescription: 'The Provenance is a living archive. It documents creative process, catalogues precedent, and preserves the thinking behind the work\u2014not just the polished output. In an era of ephemeral content, it builds a permanent record of what it looks like to practice AI-native creativity with intention.',
    pullQuote: 'In an era of ephemeral content, we build a permanent record.',
    offerings: ['Process documentation', 'Creative archives', 'Precedent catalogues', 'Practice histories'],
    status: 'development',
  },
  {
    number: '06', name: 'Basecamp', slug: 'basecamp',
    image: '/images/quarters/basecamp.webp', type: 'Community', layout: 'half',
    description: 'Where ambitious creators find their people and sharpen their practice.',
    longDescription: 'Basecamp is the community layer of Meraki Road. A curated space where ambitious creators find peers who match their commitment, challenge their assumptions, and push them toward work they couldn\u2019t do alone.',
    pullQuote: 'Find peers who match your commitment and challenge your assumptions.',
    offerings: ['Curated community', 'Peer matching', 'Working groups', 'Accountability circles'],
    status: 'coming-soon', statusNote: 'Applications opening soon.',
  },
  {
    number: '07', name: 'Common Ground', slug: 'common-ground',
    image: '/images/quarters/common-ground.webp', type: 'Events & Gatherings', layout: 'half',
    description: 'Intimate gatherings where ideas collide and collaborations ignite.',
    longDescription: 'Common Ground organises the gatherings that matter. Intimate salons, working sessions, studio visits, and collaborative sprints\u2014designed to create the conditions for unexpected connections and genuine creative exchange. People in a room, doing the work. The gatherings that lead to genuine creative exchange and unexpected collaboration.',
    pullQuote: 'The gatherings that lead to genuine creative exchange.',
    offerings: ['Intimate salons', 'Studio visits', 'Working sessions', 'Collaborative sprints'],
    status: 'development',
  },
  {
    number: '08', name: 'The Mint', slug: 'the-mint',
    image: '/images/quarters/the-mint.webp', type: 'Creative Commerce', layout: 'wide',
    description: 'Ethical monetization infrastructure for independent creators.',
    longDescription: 'The Mint is commerce infrastructure built for creators who take their independence seriously. Fair revenue splits, transparent pricing, ethical monetization tools\u2014everything a creator needs to build a sustainable practice without compromising their values or ceding control to platforms that don\u2019t share their interests.',
    pullQuote: 'Build a sustainable practice without compromising your values.',
    offerings: ['Revenue infrastructure', 'Fair splits', 'Creator storefronts', 'Ethical monetization'],
    status: 'development',
  },
  {
    number: '09', name: 'The Seal', slug: 'the-seal',
    image: '/images/quarters/the-seal.webp', type: 'Credentials & Standards', layout: 'narrow',
    description: 'A credentialing system that means something. Earned, not purchased.',
    longDescription: 'The Seal is a credentialing system designed to actually mean something. Four tiers\u2014Associate, Verified, Master, Fellow\u2014each requiring demonstrated practice, peer review, and real contribution to the ecosystem. Every credential is earned through the work itself \u2014 demonstrated practice, peer review, and real contribution to the ecosystem.',
    pullQuote: 'Every credential is earned through the work itself.',
    offerings: ['Four-tier credentials', 'Peer review', 'Portfolio assessment', 'Community recognition'],
    status: 'development',
  },
  {
    number: '10', name: 'The Collective', slug: 'the-collective',
    image: '/images/quarters/the-collective.webp', type: 'Ventures & Partnerships', layout: 'closer',
    description: 'Strategic partnerships and ventures that extend the ecosystem beyond its walls.',
    longDescription: 'The Collective is the outward-facing arm of Meraki Road. Strategic partnerships, joint ventures, and collaborative projects that extend the ecosystem\u2019s reach and create opportunities for its members. Every partnership is evaluated on a single criterion: does it make the work better?',
    pullQuote: 'Does it make the work better?',
    offerings: ['Strategic partnerships', 'Joint ventures', 'Cross-ecosystem projects', 'Creator opportunities'],
    status: 'development',
  },
]

export function useDistricts() {
  return { districts }
}

export function useDistrict(slug: string) {
  return districts.find(i => i.slug === slug) || null
}
