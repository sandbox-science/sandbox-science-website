---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/61106361',
    name: 'Chris Dedman',
    title: 'Creator',
    links: [
        { icon: 'github', link: 'https://github.com/chrisdedman' },
        { icon: '🔗', link: 'https://chrisdedman.vercel.app/' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The developement of Sandbox Science Open Source Organization is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>
