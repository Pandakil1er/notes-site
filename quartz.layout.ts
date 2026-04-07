import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),

  // minimal top nav like your site
  header: [
    Component.Flex({
      components: [
        { Component: Component.PageTitle() }, // ansuzks.me
        {
          Component: Component.DesktopOnly(
            Component.Flex({
              components: [
                { Component: Component.Spacer() },
                { Component: Component.TagList() }, // acts like nav (you can customize labels)
              ],
            }),
          ),
        },
      ],
    }),
  ],

  afterBody: [],

  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Pandakil1er",
      LinkedIn: "https://www.linkedin.com/in/anshaj-kant-singh-437b25256/",
    },
  }),
}

// single blog page
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],  // ❌ remove graph + TOC + backlinks

  afterBody: [
    Component.TagList(),
  ],
}

// blog list page (like your “Writings” page)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}