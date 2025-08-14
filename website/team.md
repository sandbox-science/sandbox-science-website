---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const linkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>'


const coreTeam = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/61106361',
    name: 'Chris Dedman',
    title: 'Creator & Lead Developer',
    desc: 'Focusing on building tools and fostering the open source community.',
    links: [
      { icon: 'github', link: 'https://github.com/chrisdedman' },
      { icon: { svg: linkIcon }, link: 'https://chrisdedman.vercel.app/' },
    ],
    // sponsor: 'https://github.com/sponsors/chrisdedman'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/68245631',
    name: 'Giovanni Rivera',
    title: 'Developer',
    desc: 'Building Dockers containers and improving deployment workflows.',
    links: [
      { icon: 'github', link: 'https://github.com/grivera64' },
      { icon: { svg: linkIcon }, link: 'https://grivera.io/' },
    ]
  },
]

const contributors = [
  // Reserved for future contributors
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Meet The Team
    </template>
    <template #lead>
      Sandbox Science is driven by passionate developers committed to creating an open and collaborative learning environment. The team members come from diverse backgrounds, each bringing unique perspectives to help build this community.
    </template>
  </VPTeamPageTitle>

  <VPTeamPageSection>
    <template #title>Core Team</template>
    <template #lead>Our core team members who guide the project's vision and development.</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreTeam" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>Community Contributors</template>
    <template #lead>
      Join our community! We welcome contributors of all skill levels. Check out our 
      <a href="https://github.com/sandbox-science" target="_blank" rel="noopener">GitHub organization</a>
      to get started.
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="contributors" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
