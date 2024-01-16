import { urlForImage } from "../../../../../sanity/lib/image"
import getYouTubeID from 'get-youtube-id'
import Youtube from "react-youtube"

const serializers = {
    types: {
        youtube: ({ value }) => {

            const opts = {
                height: `${value.height ?? '600'}`,
                width: `${value.width ?? '400'}`,
                playerVars: {
                    autoplay: 0,
                },
            };

            const { url } = value
            const id = getYouTubeID(url)
            return (<Youtube videoId={id} opts={opts} />)
        },
        image: ({ value }) => {
            return (
                <div className={
                    `relative flex ${value.imageAlign == 'left' && 'justify-start' || value.imageAlign == 'center' && 'justify-center' || value.imageAlign =='right' && 'justify-end'}`
                }>
                        <img src={value.asset !== undefined && urlForImage(value).url()} alt={value.altTag} width={value.imageWidth} className="my-10"/>
                </div>
            )
        },
        line: ({ value }) => {
            return (
                <>
                    {value.lines === 'horizontal' && <div className="bg-accent h-[2px] w-60 mb-10"/>}
                    {value.lines === 'vertical' && <div className="bg-accent h-10 w-[2px] mb-10 mx-auto"/>}
                </>
            )
        }
    },
    marks: {
        link: ({ value, children }) => {
            return (
                <a href={value.href} target={value.newTab ? '_blank' : '_self'} className="accent">{children}</a>
            )
        },
        color: ({ value, children }) => {
            return (
                <span style={{ color: value?.hex }}>{children}</span>
            )
        }
    }
}

export default serializers