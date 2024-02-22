import Image from "next/image";
import CallToActionWithIllustration from "./components/HeroBullets/HeroBullets";
import Testimonials from "./components/testimonials/testimonials";
import FeaturesHeading from "./components/features/featuresHeading";

export default function Home() {
  return (
    <main>
      <div>
        <CallToActionWithIllustration />
        <FeaturesHeading />
        <Testimonials />
      </div>
    </main>
  );
}
