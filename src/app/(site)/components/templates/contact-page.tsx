'use client'
import ContentEditor from '../util/content-editor';
import FormBuilder from './form-builder';
import Image from 'next/image';

interface Props {
    image: string;
    altText: string;
    blurData: string;
    email: string;
    phone_number: string;
    office_number: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    emailAlerts: string;
    sendFrom: string;
    emailBcc: string;
    emailCc: string;
    formBuilder: any;
    backgroundStyles: any
    // SOCIAL
    facebook: any;
    youtube: any;
    instagram: any;
    twitter: any;
    reddit: any;
    linkedin: any;
    yelp: any;
    pinterest: any;
    tiktok: any;
    zillow: any;
    hideContact: any;
    content: any;
    id: string;
}

export default function ContactPage({
    formBuilder,
    backgroundStyles,
    image,
    altText,
    blurData,
    content,
    id
}: Props) {
    return (
        <div style={backgroundStyles} id={id}>
            <div className="relative overflow-hidden">
                <div className="absolute -bottom-60 -right-60 -z-10">
                    {image ?
                        <Image
                            src={image}
                            alt={altText}
                            placeholder={blurData ? 'blur' : 'empty'}
                            blurDataURL={blurData}
                            width={700}
                            height={500}
                        />
                        : null
                    }
                </div>
                <div className="container">
                    <div className="pt-20 content text-center">
                        <ContentEditor content={content} />
                    </div>
                    <div className="md:flex justify-center md:space-x-20 md:space-y-0 space-y-10 pb-10">
                        <div className="md:w-3/5">
                            <div>
                                <div className="md:p-10 p-4 bg-[#E5E2D7]">
                                    <FormBuilder
                                        formSchema={formBuilder}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}