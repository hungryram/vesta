import { defineType } from "sanity";
import { pageTypes } from "../lib/classes";

export default defineType({
    title: 'Links',
    name: 'links',
    type: 'object',
    fields: [
        {
            title: "Text",
            name: "text",
            type: "string",
        },
        {
            title: "Select the type of link",
            name: "linkType",
            type: "string",
            options: {
                list: [
                    { title: "Internal", value: "internal" },
                    { title: "External", value: "external" },
                ],
                layout: "radio",
            },
        },
        {
            title: 'Website Link',
            name: 'internalLink',
            description: 'Select pages for navigation',
            type: 'reference',
            hidden: ({ parent }) => parent?.linkType !== "internal",
            to: pageTypes
        },
        {
            name: 'externalUrl',
            title: 'External URL',
            description: "Use this field to link to an external website or paste URL",
            hidden: ({ parent }) => parent?.linkType !== "external", // hidden if link type is not external
            type: 'string',
        },
    ]
})