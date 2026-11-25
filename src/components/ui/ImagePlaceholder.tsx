type ImagePlaceholderProps = {
  alt: string
  className?: string
  aspectRatio?: 'video' | 'square' | 'portrait'
}

const aspectClasses = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
}

export function ImagePlaceholder({
  alt,
  className = '',
  aspectRatio = 'video',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-[20px] bg-smoke ${aspectClasses[aspectRatio]} ${className}`}
      role="img"
      aria-label={alt}
    >
      <img
        src="/placeholder.svg"
        alt={alt}
        className="h-full w-full object-cover opacity-60"
      />
    </div>
  )
}
