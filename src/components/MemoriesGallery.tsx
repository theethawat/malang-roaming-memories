
import { useState } from "react";
import MemoryCard from "./MemoryCard";
import MemoryModal from "./MemoryModal";
import memoriesData from "../data/memories.json";

interface Memory {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  coordinates: { lat: number; lng: number };
}

const MemoriesGallery = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemoryClick = (memory: Memory) => {
    setSelectedMemory(memory);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMemory(null);
  };

  return (
    <section id="memories" className="py-20 bg-gradient-to-br from-accent/30 to-sunset-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Memory Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each memory represents a milestone in our journey together. From late-night coding sessions 
            to breakthrough moments, these are the stories that define our partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoriesData.memories.map((memory) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              onClick={handleMemoryClick}
            />
          ))}
        </div>

        <MemoryModal
          memory={selectedMemory}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default MemoriesGallery;
