
import Hero from "@/components/Hero";
import MemoriesGallery from "@/components/MemoriesGallery";
import Timeline from "@/components/Timeline";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <MemoriesGallery />
      <Timeline />
      <Footer />
    </div>
  );
};

export default Index;
