import { defineType } from "sanity";

export default defineType({
    name: 'appearances',
    title: 'Appearance',
    type: 'document',
    groups: [
        {title: 'Branding', name: 'branding'},
        {title: 'Header', name: 'header'},
        {title: 'Colors and Buttons', name: 'colors'},
        {title: 'Footer', name: 'footer'},
    ],
    fields: [
        {
            title: 'Home Page',
            name: 'homePage',
            description: 'Select your home page',
            type: 'reference',
            to: { type: 'homeDesign' },
        },
        {
            title: 'Branding',
            name: 'branding',
            type: 'branding',
            group: 'branding'
        },
        {
            title: 'Top Header Bar',
            name: 'topHeaderBar',
            type: 'object',
            group: 'header',
            options: {
                collapsible: true,
                collapsed: true
            },
            fields: [
                {
                    title: 'Enable Top Header Bar',
                    name: 'enableTopHeaderBar',
                    type: 'boolean',
                    description: 'Displays the contact information in the header'
                },
                {
                    title: 'Top Header Contact Bar Background Color',
                    name: 'topHeaderBarBgColor',
                    type: 'color',
                    options: {
                        disableAlpha: true
                    }
                },
                {
                    title: 'Top Header Contact Bar Text Color',
                    name: 'topHeaderBarTextColor',
                    type: 'color',
                    options: {
                        disableAlpha: true
                    }
                },
            ]
        },
        {
            title: 'Header',
            name: 'header',
            type: 'headerMenu',
            group: 'header'
        },
        {
            title: 'Colors',
            name: 'mainColors',
            type: 'mainColors',
            group: 'colors'
        },
        {
            title: 'Global Button Design',
            name: 'globalButtonDesign',
            type: 'object',
            group: 'colors',
            options: {
                collapsible: true,
                collapsed: true
            },
            fields: [
                {
                    title: 'Button Corners',
                    name: 'buttonCorner',
                    description: 'Higher numbers will give more rounded button corners',
                    type: 'number',
                },
                {
                    title: 'X Axis Padding',
                    name: 'xPadding',
                    description: 'padding to the left and right of the button',
                    type: 'number',
                },
                {
                    title: 'Y Axis Padding',
                    name: 'yPadding',
                    description: 'padding to the top and bottom of the button',
                    type: 'number',
                }
            ]
        },
        {
            title: 'Footer',
            name: 'footer',
            type: 'object',
            group: 'footer',
            options: {
                collapsible: true,
                collapsed: true
            },
            fields: [
                {
                    title: 'Display Single Column',
                    name: 'singleColumn',
                    type: 'boolean',
                    description: 'Change the footer layout to single column'
                },
                {
                    title: 'Footer Logo',
                    name: 'footerLogos',
                    type: 'array',
                    of: [
                        {
                            title: 'Footer Image',
                            name: 'footerImage',
                            type: 'object',
                            fields: [
                                {
                                    title: 'Logo',
                                    name: 'logo',
                                    type: 'image'
                                },
                                {
                                    title: 'Alt Text',
                                    name: 'altText',
                                    type: 'string'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Footer Text',
                    name: 'footerText',
                    type: 'contentEditor',
                    hidden: ({parent}) => parent?.singleColumn,
                    description: 'You may include additional information about your business here'
                },
                {
                    title: 'Footer Disclaimer',
                    name: 'footerDisclaimer',
                    type: 'contentEditor',
                },
                {
                    title: 'Short Text',
                    name: 'shortText',
                    type: 'text',
                    hidden: ({parent}) => parent?.singleColumn,
                    description: 'Displays below your logo. Best for a short bio.'
                },
                {
                    title: 'Quick Links Heading',
                    name: 'quickLinksHeading',
                    type: 'string',
                },
                {
                    title: "Quick links",
                    name: "quickLinks",
                    type: "array",
                    of: [{ type: "links" }]
                },
                {
                    title: 'Quick Links 2 Heading',
                    name: 'quickLinksTwoHeading',
                    hidden: ({parent}) => parent?.singleColumn,
                    type: 'string',
                },
                {
                    title: "Second Quick links",
                    name: "secondQuickLinks",
                    type: "array",
                    hidden: ({parent}) => parent?.singleColumn,
                    of: [{ type: "links" }]
                },
                {
                    title: 'Footer Background Color',
                    name: 'footerBackgroundColor',
                    type: 'color',
                },
                {
                    title: 'Header Color',
                    name: 'headerColor',
                    type: 'color',
                },
                {
                    title: 'Text Color',
                    name: 'textColor',
                    type: 'color',
                }
            ]
        }
    ],
    preview: {
        prepare(){
            return {
                title: 'Appearance'
            }
        }
    }
})