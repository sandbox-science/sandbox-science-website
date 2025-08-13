import { defineConfig } from 'vitepress'
import p_sidebar from "../projects/sidebar"

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "Sandbox Science",
    description: "Open Source Community for developer that want to experiment with tools.",
    themeConfig: {
        logo: "../public/sbs_logo.png",
        nav: [
            { text: "Home", link: "/" },
            { text: "Projects", link: "/projects/" },
            { text: "Team", link: "/team" },
        ],
        sidebar: {
            '/projects/': p_sidebar
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/sandbox-science/" },
            { icon: "matrix", link: "https://matrix.to/#/#sandboxscience:matrix.org" },
        ],
        search: {
            provider: "local",
        },
    },
    cleanUrls: true,
});
