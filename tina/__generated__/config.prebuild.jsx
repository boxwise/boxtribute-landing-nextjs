// tina/config.ts
import { defineConfig } from "tinacms";

// tina/templates.ts
function about_usFields() {
  return [
    {
      type: "string",
      name: "title_of_the_page",
      label: "title of the page"
    },
    {
      type: "object",
      name: "hero_images_with_description",
      label: "hero images with description",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "image"
        },
        {
          type: "string",
          name: "description",
          label: "description"
        }
      ]
    },
    {
      type: "string",
      name: "title_of_the_story",
      label: "title of the story section"
    },
    {
      type: "object",
      name: "text_with_picture_for_the_story",
      label: "text with picture for the story",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "image"
        },
        {
          type: "string",
          name: "description_for_the_image",
          label: "description of the image"
        },
        {
          type: "object",
          name: "paragraph_s_group",
          label: "paragraph's group",
          list: true,
          fields: [
            {
              type: "string",
              name: "paragraph",
              label: "paragraph",
              ui: {
                component: "textarea"
              }
            }
          ]
        }
      ]
    },
    {
      type: "string",
      name: "text_block_1",
      label: "1 text block",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "image",
      name: "full_width_picture",
      label: "full width picture"
    },
    {
      type: "string",
      name: "full_width_image_description",
      label: "full width image description"
    },
    {
      type: "string",
      name: "text_block_2",
      label: "2 text block",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "text_block_3",
      label: "3 text block",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "text_legal",
      label: "text legal",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "title_for_the_team_section",
      label: "title for the team section"
    },
    {
      type: "string",
      name: "text_for_team_section",
      label: "text for team section",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "object",
      name: "team_member",
      label: "team member",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "name"
        },
        {
          type: "string",
          name: "surname",
          label: "surname"
        },
        {
          type: "string",
          name: "role",
          label: "role"
        },
        {
          type: "image",
          name: "image",
          label: "image"
        },
        {
          type: "string",
          name: "description",
          label: "description",
          ui: {
            component: "textarea"
          }
        },
        {
          type: "string",
          name: "link",
          label: "link"
        }
      ]
    }
  ];
}
function contact_usFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "object",
      name: "section_1",
      label: "Section 1",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title"
        }
      ]
    },
    {
      type: "object",
      name: "section_2",
      label: "Section 2",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title"
        },
        {
          type: "object",
          name: "text",
          label: "Text",
          fields: [...text_blockFields()]
        }
      ]
    }
  ];
}
function footerFields() {
  return [
    {
      type: "image",
      name: "articles_of_association",
      label: "Articles of Association"
    },
    {
      type: "image",
      name: "policy_plan",
      label: "Policy Plan"
    },
    {
      type: "image",
      name: "remuneration_policy",
      label: "Remuneration Policy"
    },
    {
      type: "object",
      name: "annual_reports",
      label: "Annual reports",
      list: true,
      fields: [
        {
          type: "string",
          name: "year",
          label: "Year",
          required: true
        },
        {
          type: "image",
          name: "report",
          label: "Annual Report"
        }
      ]
    },
    {
      type: "object",
      name: "financial_reports",
      label: "Financial Reports",
      list: true,
      fields: [
        {
          type: "string",
          name: "year",
          label: "Year",
          required: true
        },
        {
          type: "image",
          name: "report",
          label: "Financial Report"
        }
      ]
    }
  ];
}
function get_involvedFields() {
  return [
    {
      type: "image",
      name: "hero_image",
      label: "hero image"
    },
    {
      type: "string",
      name: "image_description",
      label: "image description"
    },
    {
      type: "string",
      name: "page_title",
      label: "page title"
    },
    {
      type: "string",
      name: "cta_button",
      label: "CTA button"
    },
    {
      type: "string",
      name: "cta_link",
      label: "CTA link"
    },
    {
      type: "string",
      name: "main_subtitle",
      label: "main subtitle"
    },
    {
      type: "object",
      name: "paragraphs_group",
      label: "paragraphs group",
      list: true,
      fields: [
        {
          type: "string",
          name: "paragraph",
          label: "paragraph"
        }
      ]
    },
    {
      type: "image",
      name: "image_1",
      label: "image_1"
    },
    {
      type: "string",
      name: "image_1_description",
      label: "image_1_description"
    },
    {
      type: "string",
      name: "description_1",
      label: "description_1",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "object",
      name: "help_possibilities",
      label: "help possibilities",
      list: true,
      fields: [
        {
          type: "number",
          name: "step_number",
          label: "step number"
        },
        {
          type: "string",
          name: "description",
          label: "description"
        },
        {
          type: "string",
          name: "link",
          label: "link"
        }
      ]
    },
    {
      type: "string",
      name: "headline_2",
      label: "headline_2"
    },
    {
      type: "object",
      name: "description_2_list",
      label: "description_2_list",
      list: true,
      fields: [
        {
          type: "string",
          name: "paragraph",
          label: "paragraph",
          ui: {
            component: "textarea"
          }
        }
      ]
    },
    {
      type: "string",
      name: "headline_3",
      label: "headline_3"
    },
    {
      type: "object",
      name: "list_of_items",
      label: "list of items",
      list: true,
      fields: [
        {
          type: "string",
          name: "paragraph",
          label: "bullet item",
          ui: {
            component: "textarea"
          }
        }
      ]
    },
    {
      type: "image",
      name: "image_3",
      label: "image_3"
    },
    {
      type: "string",
      name: "image_3_description",
      label: "image_3_description"
    },
    {
      type: "string",
      name: "description_4",
      label: "description_4",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "object",
      name: "list_of_looked_for",
      label: "list of looked for",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "image"
        },
        {
          type: "string",
          name: "image_description",
          label: "image_description"
        },
        {
          type: "string",
          name: "title",
          label: "title"
        },
        {
          type: "object",
          name: "description",
          label: "description",
          list: true,
          fields: [
            {
              type: "string",
              name: "paragraph",
              label: "paragraph",
              ui: {
                component: "textarea"
              }
            }
          ]
        }
      ]
    }
  ];
}
function homeFields() {
  return [
    {
      type: "string",
      name: "main_heading",
      label: "main heading"
    },
    {
      type: "string",
      name: "hero_image_description",
      label: "hero image description"
    },
    {
      type: "object",
      name: "subtitles_hero",
      label: "subtitles hero",
      list: true,
      fields: [
        {
          type: "string",
          name: "text_for_typing",
          label: "text for typing"
        }
      ]
    },
    {
      type: "image",
      name: "hero_image_mobile",
      label: "hero_image Mobile"
    },
    {
      type: "image",
      name: "hero_image_desktop",
      label: "hero_image Desktop"
    },
    {
      type: "string",
      name: "cta_button",
      label: "CTA button"
    },
    {
      type: "string",
      name: "cta_link",
      label: "CTA link"
    },
    {
      type: "string",
      name: "short_description",
      label: "short description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "object",
      name: "facts_in_numbers",
      label: "facts in numbers",
      list: true,
      fields: [
        {
          type: "image",
          name: "icon",
          label: "icon"
        },
        {
          type: "string",
          name: "description",
          label: "description"
        },
        {
          type: "number",
          name: "number",
          label: "number"
        },
        {
          type: "string",
          name: "image_description",
          label: "image_description"
        }
      ]
    }
  ];
}
function image_50_50Fields() {
  return [
    {
      type: "image",
      name: "banner",
      label: "banner"
    },
    {
      type: "image",
      name: "image_mobile",
      label: "image_mobile"
    },
    {
      type: "string",
      name: "image_description",
      label: "image_description"
    },
    {
      type: "boolean",
      name: "picture_left",
      label: "Picture left?"
    },
    ...text_blockFields()
  ];
}
function mapFields() {
  return [
    {
      type: "object",
      name: "center",
      label: "Default Center",
      fields: [
        {
          type: "number",
          name: "lat",
          label: "Latitude",
          required: true
        },
        {
          type: "number",
          name: "long",
          label: "Longitude",
          required: true
        }
      ]
    },
    {
      type: "object",
      name: "base_markers",
      label: "Base Markers on Map",
      list: true,
      fields: [
        {
          type: "string",
          name: "base_name",
          label: "Name of the Base",
          required: true
        },
        {
          type: "string",
          name: "organisation",
          label: "Name of the Organisation",
          required: true
        },
        {
          type: "image",
          name: "logo",
          label: "Logo"
        },
        {
          type: "string",
          name: "url",
          label: "Url"
        },
        {
          type: "string",
          name: "description",
          label: "Description of the Project",
          ui: {
            component: "textarea"
          }
        },
        {
          type: "object",
          name: "position",
          label: "Position",
          fields: [
            {
              type: "number",
              name: "lat",
              label: "GPS coordinates: latitude (first value)",
              required: true
            },
            {
              type: "number",
              name: "long",
              label: "GPS coordinates: longitude (second value)",
              required: true
            }
          ]
        }
      ]
    }
  ];
}
function news_snippetFields() {
  return [
    {
      type: "image",
      name: "banner",
      label: "Banner"
    },
    {
      type: "image",
      name: "image_mobile",
      label: "Preview Image mobile"
    },
    {
      type: "string",
      name: "image_description",
      label: "image description"
    },
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "string",
      name: "headline",
      label: "headline",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "short_text",
      label: "short text",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "blog_text",
      label: "blog text",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "datetime",
      name: "created_date",
      label: "Created Date"
    },
    {
      type: "number",
      name: "position_in_preview",
      label: "Position in Preview"
    },
    {
      type: "object",
      name: "author",
      label: "Author",
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name"
        },
        {
          type: "image",
          name: "picture",
          label: "Picture"
        }
      ]
    }
  ];
}
function our_missionFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "object",
      name: "section_1",
      label: "Section 1",
      fields: [...text_blockFields()]
    },
    {
      type: "object",
      name: "section_2",
      label: "Section 2",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title"
        },
        {
          type: "object",
          name: "image_text_50_50",
          label: "Image Text 50 50",
          fields: [...image_50_50Fields()]
        },
        {
          type: "object",
          name: "text",
          label: "Text",
          fields: [...text_blockFields()]
        }
      ]
    },
    {
      type: "object",
      name: "section_3",
      label: "Section 3",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title"
        },
        {
          type: "object",
          name: "image_text_50_50",
          label: "Image Text 50 50",
          fields: [...image_50_50Fields()]
        }
      ]
    }
  ];
}
function social_media_snippetFields() {
  return [
    {
      type: "image",
      name: "image",
      label: "image"
    },
    {
      type: "string",
      name: "image_description",
      label: "image description"
    },
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "string",
      name: "text",
      label: "text",
      ui: {
        component: "textarea"
      }
    }
  ];
}
function text_blockFields() {
  return [
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "align",
      label: "Text Align",
      options: ["center", "left", "right", "justify"]
    },
    {
      type: "string",
      name: "color",
      label: "Text Color",
      options: [
        "inherit",
        "red",
        "navy",
        "lightblue",
        "black",
        "white",
        "yellow",
        "lightgray"
      ]
    },
    {
      type: "string",
      name: "bg_color",
      label: "Background Color",
      options: [
        "inherit",
        "red",
        "navy",
        "lightblue",
        "black",
        "white",
        "yellow",
        "lightgray"
      ]
    }
  ];
}

// tina/config.ts
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public"
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
      publicFolder: "public"
    }
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
          include: "*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...homeFields()
        ]
      },
      {
        format: "md",
        label: "news",
        name: "news",
        path: "data/home/news",
        match: {
          include: "*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...news_snippetFields()
        ]
      },
      {
        format: "md",
        label: "our mission",
        name: "our_mission",
        path: "data/ourimpact",
        match: {
          include: "*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...our_missionFields()
        ]
      },
      {
        format: "md",
        label: "Map",
        name: "map",
        path: "data/map",
        match: {
          include: "*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...mapFields()
        ]
      },
      {
        format: "md",
        label: "contact us",
        name: "contact_us",
        path: "data/contactus",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...contact_usFields()
        ]
      },
      {
        format: "md",
        label: "Footer",
        name: "footer",
        path: "data/footer",
        match: {
          include: "*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...footerFields()
        ]
      },
      {
        format: "md",
        label: "social media ",
        name: "social_media_",
        path: "data/home/social",
        match: {
          include: "*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...social_media_snippetFields()
        ]
      },
      {
        format: "md",
        label: "get involved",
        name: "get_involved",
        path: "data/getinvolved",
        match: {
          include: "**/*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...get_involvedFields()
        ]
      },
      {
        format: "md",
        label: "about us",
        name: "about_us",
        path: "data/aboutus",
        match: {
          include: "*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...about_usFields()
        ]
      }
    ]
  }
});
export {
  config_default as default
};
