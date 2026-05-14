import { defineConfig } from "tinacms";

import { about_usFields } from "./templates";
import { contact_usFields } from "./templates";
import { footerFields } from "./templates";
import { get_involvedFields } from "./templates";
import { homeFields } from "./templates";
import { image_50_50Fields } from "./templates";
import { mapFields } from "./templates";
import { news_snippetFields } from "./templates";
import { our_missionFields } from "./templates";
import { social_media_snippetFields } from "./templates";
import { text_blockFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        format: "md",
        label: "home - main",
        name: "home___main",
        path: "data/home",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...homeFields(),
        ],
      },
      {
        format: "md",
        label: "news",
        name: "news",
        path: "data/home/news",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...news_snippetFields(),
        ],
      },
      {
        format: "md",
        label: "our mission",
        name: "our_mission",
        path: "data/ourimpact",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...our_missionFields(),
        ],
      },
      {
        format: "md",
        label: "Map",
        name: "map",
        path: "data/map",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...mapFields(),
        ],
      },
      {
        format: "md",
        label: "contact us",
        name: "contact_us",
        path: "data/contactus",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...contact_usFields(),
        ],
      },
      {
        format: "md",
        label: "Footer",
        name: "footer",
        path: "data/footer",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...footerFields(),
        ],
      },
      {
        format: "md",
        label: "social media ",
        name: "social_media_",
        path: "data/home/social",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...social_media_snippetFields(),
        ],
      },
      {
        format: "md",
        label: "get involved",
        name: "get_involved",
        path: "data/getinvolved",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...get_involvedFields(),
        ],
      },
      {
        format: "md",
        label: "about us",
        name: "about_us",
        path: "data/aboutus",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...about_usFields(),
        ],
      },
    ],
  },
});
