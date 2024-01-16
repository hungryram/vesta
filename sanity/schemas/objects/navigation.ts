import { defineType } from "sanity";
import { BsLink } from "react-icons/bs"
import { pageTypes } from "../lib/classes";

export default defineType({
    name: 'navigationItem',
    title: 'Navigation Item',
    type: 'object',
    icon: BsLink,
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            title: "Text",
            name: "text",
            type: "string",
            validation: Rule => Rule.required().error('Name your menu item'),
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
            description: "Paste in URL",
            hidden: ({ parent }) => parent?.linkType !== "external", // hidden if link type is not external
            type: 'string',
        },
        {
            name: 'newTab',
            title: 'Open in new tab',
            hidden: ({ parent }) => parent?.linkType !== "external", // hidden if link type is not external
            type: 'boolean',
        },
        {
            title: 'Sub Menu',
            name: 'subMenu',
            type: 'array',
            of: [{ type: 'subMenu' }]
        }
    ],
    preview: {
        select: {
            title: 'text',
            subtitle: 'subMenu[0].text'
        },
        prepare(selection) {
            const { title, subtitle } = selection
            return {
                title: title,
                subtitle: `${subtitle ? `has dropdown: ${subtitle}...` : ''}`
            }
        }

    }
})