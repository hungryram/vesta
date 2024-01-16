import { defineType } from "sanity";
import { textAlign } from "../lib/classes";

export default defineType({
    title: 'Hero',
    name: 'hero',
    type: 'object',
    groups: [
        { name: 'content', title: 'Content' },
        { name: 'settings', title: 'Settings' },
    ],
    fields: [
        {
            title: "Layout Type",
            name: "layoutType",
            type: "string",
            options: {
                list: [
                    { title: "Slider", value: "heroSwiper" },
                    { title: "Static Hero", value: "static" },
                    { title: "Side by Side", value: "sideByside" },
                    { title: "Basic", value: "basic" },
                ],
            },
            initialValue: "static"
        },
        {
            title: "Image Height",
            name: "imageHeight",
            type: "string",
            hidden: ({ parent }) => parent?.layoutType !== 'static',
            options: {
                list: [
                    { title: "Full Screen", value: "fullscreen" },
                    { title: "Medium", value: "mediumScreen" },
                    { title: "Small", value: "smallScreen" },
                ],
            },
            initialValue: "h-[70vh]"
        },
        {
            title: 'Content',
            name: 'content',
            type: 'contentEditor',
            hidden: ({ parent }) => parent?.layoutType === 'heroSwiper',
            group: 'content'
        },
        {
            title: 'Text Align',
            name: 'textAlign',
            type: 'string',
            options: {
                list: textAlign
            },
        },
        {
            title: 'Images',
            name: 'images',
            type: 'array',
            hidden: ({ parent }) => parent?.layoutType !== 'heroSwiper',
            of: [
                {
                    title: 'Image',
                    type: 'image',
                    fields: [
                        {
                            title: 'Content',
                            name: 'content',
                            type: 'contentEditor'
                        },
                        {
                            title: 'Primary Button',
                            name: 'button',
                            type: 'buttonSettings',
                        },
                        {
                            title: 'Secondary Button',
                            name: 'secondaryButton',
                            type: 'secondaryButton',
                        },
                    ]
                },
            ],
            options: {
                layout: 'grid',
            },
        },
        //   {
        //     title: 'Animation',
        //     name: 'animation',
        //     hidden: ({ parent }) => parent?.layoutType === 'static',
        //     type: 'string',
        //     options: {
        //       list: [
        //         { title: 'Fade', value: 'fade' },
        //         { title: 'Slide', value: 'slide' },
        //       ]
        //     },
        //     group: 'settings',
        //   },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            group: 'content',
            hidden: ({ parent }) => parent?.layoutType === 'heroSwiper'
        },
        {
            title: 'Image Overlay Color',
            name: 'imageOverlayColor',
            hidden: ({ parent }) => parent?.layoutType === 'heroSwiper' || parent?.layoutType === 'sideByside' || parent?.layoutType === 'basic',
            type: 'color',
        },
        {
            title: 'Primary Button',
            name: 'button',
            type: 'buttonSettings',
            group: 'content'
        },
        {
            title: 'Secondary Button',
            name: 'secondaryButton',
            type: 'secondaryButton',
            group: 'content'
        },
        {
            title: 'Disable Navigation Arrows',
            name: 'disableNavigation',
            type: 'boolean',
            hidden: ({ parent }) => parent?.layoutType !== 'heroSwiper',
            group: 'settings',
        },
        {
            title: 'Navigation Arrow Colors',
            name: 'navigationColors',
            hidden: ({ parent }) => parent?.layoutType !== 'heroSwiper',
            type: 'color',
            group: 'settings'
        },
        {
            title: 'Text Color',
            name: 'textColor',
            type: 'color',
            group: 'settings'
        },
    ],
    preview: {
        select: {
          content: 'content',
        },
        prepare({ content }) {
          const hasContent = content && content[0]?.children?.length > 0;
      
          return {
            title: hasContent ? content[0].children[0].text : 'Hero Section',
          };
        },
      },
})