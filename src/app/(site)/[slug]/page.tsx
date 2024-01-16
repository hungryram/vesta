import { notFound } from "next/navigation";
import { getPage } from "../../../../lib/groq-data";
import Main from "../components/templates/main";
import { Metadata } from 'next';
export const revalidate = 0

type Props = {
    params: {
        slug: string;
        pageBuilder: any;
        allTestimonials: any;
        allBlog: any;
        allTeam: any;
        profileSettings: any;
    };
};

type Meta = {
    params: {
        slug: string
    }
}

// GENERATES SEO
export async function generateMetadata({ params }: Meta): Promise<Metadata> {
    const slug = params.slug
    const page = await getPage(slug)

    return {
        title: page?.pages?.seo?.title_tag,
        description: page?.pages?.seo?.meta_description,
        alternates: {
            canonical: page?.pages?.slug
        },
        openGraph: {
            title: page?.pages?.seo?.title_tag,
            description: page?.pages?.seo?.meta_description,
            url: page?.pages?.slug,
            siteName: page?.profileSettings?.company_name,
            locale: 'en-US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: page?.pages?.seo?.title_tag,
            description: page?.pages?.seo?.meta_description,
            creator: '@' + page?.profileSettings?.seo?.twitterHandle,
        },
        icons: {
            icon: page.appearances?.branding?.favicon?.asset?.url,
            shortcut: page.appearances?.branding?.favicon?.asset?.url,
            apple: page.appearances?.branding?.favicon?.asset?.url,
        },
        robots: {
            index: page?.pages?.seo?.noIndex ? false : true,
            follow: page?.pages?.seo?.noIndex ? false : true,
        }
    }
}

// GENERATES PAGE DATA
export default async function Page({ params }: Props) {
    const slug = params.slug;
    const page = await getPage(slug)

    if (!page?.pages) {
        notFound()
    }

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        ...page?.pages?.title && { "name": page.pages.title },
        ...page?.profileSettings?.settings?.websiteName && { "url": page.profileSettings.settings.websiteName },
        ...page?.pages?.seo?.meta_description && { "description": page.pages.seo.meta_description },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${page?.profileSettings?.settings?.websiteName}/${slug}`
        },
        "publisher": {
            "@type": "Organization",
            ...page?.profileSettings?.company_name && { "name": page.profileSettings.company_name },
            ...page?.profileSettings?.settings?.websiteName && { "url": page.profileSettings.settings.websiteName }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <Main
                pageBuilder={page?.pages?.pageBuilder}
                // CONTACT
                email={page?.profileSettings?.contact_information?.email}
                phone_number={page?.profileSettings?.contact_information?.phone_number}
                office_number={page?.profileSettings?.contact_information?.office_number}
                address={page?.profileSettings?.address?.address}
                city={page?.profileSettings?.address?.city}
                state={page?.profileSettings?.address?.state}
                zip_code={page?.profileSettings?.address?.zip_code}
                // SOCIAL
                facebook={page?.profileSettings?.social?.facebook}
                youtube={page?.profileSettings?.social?.youtube}
                instagram={page?.profileSettings?.social?.instagram}
                twitter={page?.profileSettings?.social?.twitter}
                reddit={page?.profileSettings?.social?.reddit}
                linkedin={page?.profileSettings?.social?.linkedin}
                yelp={page?.profileSettings?.social?.yelp}
                pinterest={page?.profileSettings?.social?.pinterest}
                tiktok={page?.profileSettings?.social?.tiktok}
                zillow={page?.profileSettings?.social?.zillow}
                // PAGE FOLDERS
                allTestimonials={page?.allTestimonial}
                allBlog={page?.allBlog}
                allNeighborhood={page?.allNeighborhood}
                allAvailabilities={page?.allAvailabilities}
            />
        </>
    )
}
