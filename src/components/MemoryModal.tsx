
import { X, MapPin, Calendar, Tag } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

interface MemoryModalProps {
  memory: Memory | null;
  isOpen: boolean;
  onClose: () => void;
}

const MemoryModal = ({ memory, isOpen, onClose }: MemoryModalProps) => {
  if (!memory) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-white">
        <div className="relative">
          <img
            src={`https://images.unsplash.com/${memory.image}?w=1200&h=600&fit=crop`}
            alt={memory.title}
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-3xl font-bold gradient-text mb-4">
              {memory.title}
            </DialogTitle>
            
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-sunset-600" />
                <span className="font-medium">{memory.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-ocean-600" />
                <span className="font-medium">
                  {new Date(memory.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </DialogHeader>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg leading-relaxed text-foreground">
              {memory.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <Tag className="w-5 h-5" />
              Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {memory.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                  className="bg-sunset-100 text-sunset-800 hover:bg-sunset-200 transition-colors px-3 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-accent/50 rounded-lg">
            <p className="text-sm text-muted-foreground italic">
              "Every pixel tells a story, every keystroke a memory. This moment captured forever in Malang's digital heart." 💻✨
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MemoryModal;
