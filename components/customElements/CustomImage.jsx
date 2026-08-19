import Image from 'next/image'

export default function CustomImage({source, width, height, alt}) {
  return (
    <Image 
      className="object-cover object-center" 
      src={source}
      width={width}
      height={height}
      alt={alt}
    />
  )
}
