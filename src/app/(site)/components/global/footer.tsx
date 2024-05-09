import Link from "next/link"
import Image from "next/image"
import ContentEditor from "../util/content-editor"
import Styles from './footer.module.css'
import { urlForImage } from "../../../../../sanity/lib/image"

interface Props {
  company_name: string
  image: string
  altText: string
  address: string
  city: string
  state: string
  zip_code: string
  phone_number: string
  email: string
  office_number: string
  blurData: string
  quickLinksHeading: string;
  googleBusiness: string;
  facebook: string;
  youtube: string;
  instagram: string;
  twitter: string;
  reddit: string;
  linkedin: string;
  yelp: string;
  pinterest: string;
  tiktok: string;
  zillow: string;
  size: string;
  footerDisclaimer: any;
  legal: any;
  links: any;
  secondLinks: any;
  quickLinksTwoHeading: string;
  footerText: any;
  shortText: string;
  singleColumn: boolean
  footerLogos: any;
  website?: string;
}

export default function Footer({
  company_name,
  image,
  altText,
  address,
  city,
  state,
  zip_code,
  phone_number,
  email,
  website,
  footerDisclaimer,
  // SOCIAL
  googleBusiness,
  legal,
  singleColumn,
  footerLogos
}: Props) {

  const FooterLogoComponent = ({ image }: any) => {
    const imageContent = (
      <div className="mx-3">
        <Image
          src={image?.logo?.asset?.url}
          alt={image?.altText ? image?.altText : image?.asset?.altText}
          width={image?.width ? image?.width : 60}
          height={48}
          placeholder={image?.logo?.asset?.lqip ? 'blur' : 'empty'}
          blurDataURL={image?.logo?.asset?.lqip}
          className="inline"
        />
      </div>
    )

    return (
      image?.link ? <a href={image?.link} target="_blank">{imageContent}</a> : imageContent
    )
  }


  return (
    <footer className={Styles.footer}>
      <div className="container">
        <div className="md:flex items-center md:justify-between md:text-left text-center md:space-y-0 space-y-10 mb-10">
          <div>
            <span>Contact:</span> <span><a href={`mailto:${email}`}>{email}</a></span>
            <p><a href={`https://www.google.com/maps/place/${address}+${city}+${state}+${zip_code}`} target="_blank">{address} {city}, {state} {zip_code}</a></p>
          </div>
          <div>
            {footerLogos?.map((node: any, i: number) => (
              <FooterLogoComponent image={node} id={i} />
            ))}
          </div>
        </div>
        {footerDisclaimer &&
          <div className="text-left text-[10px] my-2">
            <ContentEditor
              content={footerDisclaimer}
            />
          </div>
        }

        {legal &&
          <ul className="space-y-3 mb-2">
            {legal?.map((node: any) => (
              <li key={node._key} className="inline-block mr-2">
                <Link href={`/legal/${node.slug}`} className="text-xs">
                  {node.title}
                </Link>
              </li>
            ))}
          </ul>
        }
        {/* <p className="text-xs font-light pt-0">&copy; Copyright {new Date().getFullYear()} &middot; {company_name} &middot; Website built by <a href="https://www.hungryram.com/" className="font-bold" target="_blank">Hungry Ram</a></p> */}
      </div>
    </footer>
  )
}