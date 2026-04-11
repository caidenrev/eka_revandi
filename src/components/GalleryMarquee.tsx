"use client";

import {
  Column,
  Heading,
  Media,
} from "@once-ui-system/core";
import { gallery } from "@/resources";

export const GalleryMarquee: React.FC = () => {
  const allImages = gallery.images;
  
  // Split images into two rows for the dual effect
  const firstRow = allImages.slice(0, Math.ceil(allImages.length / 2));
  const secondRow = allImages.slice(Math.ceil(allImages.length / 2));

  // Helper to render a marquee row
  const MarqueeRow = ({ images, direction }: { images: typeof allImages, direction: 'left' | 'right' }) => (
    <div className={`marquee-container marquee-${direction}`}>
      <div className="marquee-track">
        {images.map((img) => (
          <div key={`${img.src}-${direction}-1`} className="marquee-item">
            <Media
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      {/* Duplicate track for seamless loop */}
      <div className="marquee-track" aria-hidden="true">
        {images.map((img) => (
          <div key={`${img.src}-${direction}-2`} className="marquee-item">
            <Media
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Column fillWidth gap="m" paddingBottom="40">
      <Heading as="h2" variant="display-strong-xs" marginBottom="m" paddingLeft="l">
        Visual Journey
      </Heading>
      
      <Column 
        fillWidth 
        gap="16" 
        style={{ 
            marginTop: '24px',
            overflow: 'hidden'
        }}
      >
        {/* Top Row: Right */}
        <MarqueeRow images={firstRow} direction="right" />
        
        {/* Bottom Row: Left */}
        <MarqueeRow images={secondRow} direction="left" />
      </Column>
    </Column>
  );
};
