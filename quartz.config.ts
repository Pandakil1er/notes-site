import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "notes.ansuzks.me",
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
        header: "Geist",
        body: "Lora",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#FFF8E7",
          lightgray: "#EAE3D2",
          gray: "#D0C8B8",
          darkgray: "#6B6B63",
          dark: "#1F1B16",
          secondary: "#3E7C7B",
          tertiary: "#0F766E",
          highlight: "rgba(62, 124, 123, 0.15)",
          textHighlight: "rgba(62, 124, 123, 0.4)",
        },
        darkMode: {
          light: "#121212",
          lightgray: "#1F2937",
          gray: "#374151",
          darkgray: "#A1A1AA",
          dark: "#EAEAEA",
          secondary: "#5EEAD4",
          tertiary: "#0F766E",
          highlight: "rgba(94, 234, 212, 0.15)",
          textHighlight: "rgba(94, 234, 212, 0.4)",
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
          light: "github-dark",
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