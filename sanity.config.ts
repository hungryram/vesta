/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\admin\[[...index]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { colorInput } from "@sanity/color-input";
import { MdOutlineDesignServices, MdPersonOutline } from "react-icons/md"
import { apiVersion, dataset, projectId } from './sanity/env'
import { media } from 'sanity-plugin-media'
// import { settingsPlugin } from './sanity/settings';
// import { PreviewPlugin } from './sanity/productionUrl';
import { googleMapsInput } from '@sanity/google-maps-input';

//  DOCUMENTS
import authorType from './sanity/schemas/documents/author'
import postType from './sanity/schemas/documents/blog'
import homeDocument from './sanity/schemas/documents/home'
import profileDocument from './sanity/schemas/documents/profile'
import pagesDocument from './sanity/schemas/documents/pages'
import appearanceDocument from './sanity/schemas/documents/appearance'
import testimonialsDocument from './sanity/schemas/documents/testimonials'
import navigationDocument from './sanity/schemas/documents/navigation'
import legalDocument from './sanity/schemas/documents/legal'
import pageSettingsDocument from "./sanity/schemas/documents/page-settings"
import neighborhoodDocument from './sanity/schemas/documents/neighborhood';
import availabilitiesDocument from './sanity/schemas/documents/availabilities';

// OBJECTS
import contentObject from './sanity/schemas/objects/content'
import seoObject from './sanity/schemas/objects/seo'
import contactObject from './sanity/schemas/objects/contact'
import youtubeObject from './sanity/schemas/objects/youtube'
import locationObject from './sanity/schemas/objects/location'
import socialObject from './sanity/schemas/objects/social'
import mainColorObject from './sanity/schemas/objects/maincolors'
import headerMenuObject from './sanity/schemas/objects/headermenu'
import brandingObject from './sanity/schemas/objects/branding'
import imagecolorObject from './sanity/schemas/objects/imagecolor'
import submenuObject from './sanity/schemas/objects/submenu'
import navigationObject from './sanity/schemas/objects/navigation'
import linksObject from './sanity/schemas/objects/links'
import buttonSettingsObject from './sanity/schemas/objects/button-settings'
import secondaryButtonObject from './sanity/schemas/objects/secondary-button'
import codeBlockObject from './sanity/schemas/objects/codeBlock'
import backgroundStylesObject from './sanity/schemas/objects/background-style'
import formBuilderObject from './sanity/schemas/objects/form-builder'
import lineObject from './sanity/schemas/objects/line'

//  PAGEBUILDER
import heroBuilder from './sanity/schemas/pagebuilder/hero'
import contactBuilder from './sanity/schemas/pagebuilder/contact'
import bannerBuilder from './sanity/schemas/pagebuilder/call-to-action'
import disclosureBuilder from './sanity/schemas/pagebuilder/disclosure'
import codeBuilder from './sanity/schemas/pagebuilder/code'
import testimonialsBuilder from './sanity/schemas/pagebuilder/testimonials'
import imageGalleryBuilder from './sanity/schemas/pagebuilder/image-gallery'
import featuredGridBuilder from './sanity/schemas/pagebuilder/featured-grid'
import leadFormBuilder from './sanity/schemas/pagebuilder/lead-form'
import pricingBuilder from './sanity/schemas/pagebuilder/pricing'
import logosBuilder from './sanity/schemas/pagebuilder/logos'
import teamSectionBuilder from './sanity/schemas/pagebuilder/team-section'
import blogSectionBuilder from './sanity/schemas/pagebuilder/blog-section'
import servicesSectionBuilder from './sanity/schemas/pagebuilder/service-section'
import contentBuilder from './sanity/schemas/pagebuilder/content'
import mapSectionBuilder from './sanity/schemas/pagebuilder/map-section';
import availabilitiesBuilder from './sanity/schemas/pagebuilder/availabilities-section';


export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: [
      // DOCUMENTS
      // settingsType,
      appearanceDocument,
      profileDocument,
      pageSettingsDocument,
      homeDocument,
      navigationDocument,
      pagesDocument,
      testimonialsDocument,
      neighborhoodDocument,
      availabilitiesDocument,
      postType,
      authorType,
      legalDocument,
      // OBJECTS
      contentObject,
      youtubeObject,
      buttonSettingsObject,
      secondaryButtonObject,
      seoObject,
      contactObject,
      locationObject,
      socialObject,
      mainColorObject,
      headerMenuObject,
      linksObject,
      brandingObject,
      imagecolorObject,
      backgroundStylesObject,
      submenuObject,
      navigationObject,
      codeBlockObject,
      lineObject,
      formBuilderObject,
      // PAGEBUILDER
      heroBuilder,
      codeBuilder,
      testimonialsBuilder,
      imageGalleryBuilder,
      pricingBuilder,
      teamSectionBuilder,
      blogSectionBuilder,
      contactBuilder,
      bannerBuilder,
      disclosureBuilder,
      leadFormBuilder,
      featuredGridBuilder,
      servicesSectionBuilder,
      contentBuilder,
      logosBuilder,
      mapSectionBuilder,
      availabilitiesBuilder,
    ]
  },
  plugins: [
    deskTool({
      structure: (S) => {

        const profileListItem = // A singleton not using `documentListItem`, eg no built-in preview
          S.listItem()
            .title(profileDocument.title || '')
            .icon(MdPersonOutline)
            .child(
              S.editor()
                .id(profileDocument.name)
                .schemaType(profileDocument.name)
                .documentId(profileDocument.name)
            )

        const appearanceListItem = // A singleton not using `documentListItem`, eg no built-in preview
          S.listItem()
            .title(appearanceDocument.title || '')
            .icon(MdOutlineDesignServices)
            .child(
              S.editor()
                .id(appearanceDocument.name)
                .schemaType(appearanceDocument.name)
                .documentId(appearanceDocument.name)
            )

        const PageSettingsListItem = // A singleton not using `documentListItem`, eg no built-in preview
          S.listItem()
            .title(pageSettingsDocument.title || '')
            .child(
              S.editor()
                .id(pageSettingsDocument.name)
                .schemaType(pageSettingsDocument.name)
                .documentId(pageSettingsDocument.name)
            )

        const NeighborhoodListItem = // A singleton not using `documentListItem`, eg no built-in preview
          S.listItem()
            .title(neighborhoodDocument.title || '')
            .child(
              S.editor()
                .id(neighborhoodDocument.name)
                .schemaType(neighborhoodDocument.name)
                .documentId(neighborhoodDocument.name)
            )

        const AvailabilitiesListItem = // A singleton not using `documentListItem`, eg no built-in preview
          S.listItem()
            .title(availabilitiesDocument.title || '')
            .child(
              S.editor()
                .id(availabilitiesDocument.name)
                .schemaType(availabilitiesDocument.name)
                .documentId(availabilitiesDocument.name)
            )
        // The default root list items (except custom ones)
        const defaultListItems = S.documentTypeListItems().filter((listItem) => {
          const listItemID = listItem.getId();
          return (
            listItemID &&
            ![appearanceDocument.name, pageSettingsDocument.name, neighborhoodDocument.name, availabilitiesDocument.name, 'media.tag', profileDocument.name].includes(listItemID)
          );
        });

        return S.list()
          .title('Content')
          .items([profileListItem, appearanceListItem, PageSettingsListItem, S.divider(), NeighborhoodListItem, AvailabilitiesListItem, S.divider(), ...defaultListItems])
      },
    }),
    googleMapsInput({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API || ''
    }),
    // settingsPlugin({ types: [appearanceDocument.name, pageSettingsDocument.name, profileDocument.name] }),
    // PreviewPlugin({ types: ['pages', 'legal', 'blog', 'homeDesign'] }),
    colorInput(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
  ]
})