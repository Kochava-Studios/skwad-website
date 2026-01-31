import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { getAssetPath } from '../utils/paths';

export default function ScreenshotLightbox() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={getAssetPath('images/hero-screenshot.png')}
        alt="Skwad App Screenshot"
        className="w-full cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => setOpen(true)}
      />

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: getAssetPath('images/hero-screenshot.png') }
        ]}
        carousel={{ finite: true }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </>
  );
}
