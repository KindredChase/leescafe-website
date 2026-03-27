import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import SignatureMenu from "@/components/SignatureMenu";
import SpaceMood from "@/components/SpaceMood";
import Locations from "@/components/Locations";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BrandStory />
        <SignatureMenu />
        <SpaceMood />
        <Locations />

      </main>
      <Footer />
    </>
  );
}
