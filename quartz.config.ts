import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "ansuzks.me",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: false, // cleaner blog feel
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "notes.ansuzks.me",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",

    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Playfair Display",
        body: "Source Serif 4",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f6f1e6",
          lightgray: "#ebe5d6",
          gray: "#d6cfbf",
          darkgray: "#6f746f",
          dark: "#1f1b16",
          secondary: "#6f746f",
          tertiary: "#4f7c7b",
          highlight: "#e8dfcc",
          textHighlight: "#b7c4c288",
        },
        darkMode: {
          light: "#1a1815",
          lightgray: "#2a2621",
          gray: "#3a342d",
          darkgray: "#b8b2a7",
          dark: "#f5f1e8",
          secondary: "#a8a39a",
          tertiary: "#7aa6a1",
          highlight: "rgba(255,255,255,0.05)",
          textHighlight: "#4f7c7b88",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown(),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],

    filters: [Plugin.RemoveDrafts()],

    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config