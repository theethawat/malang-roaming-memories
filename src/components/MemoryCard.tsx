
import { MapPin, Calendar, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

interface MemoryCardProps {
  memory: Memory;
  onClick: (memory: Memory) => void;
}

const MemoryCard = ({ memory, onClick }: MemoryCardProps) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-md"
      onClick={() => onClick(memory)}
    >
      <div className="relative overflow-hidden">
        <img
          src={`https://images.unsplash.com/${memory.image}?w=800&h=600&fit=crop`}
          alt={memory.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-bold mb-2 line-clamp-1">
            {memory.title}
          </h3>
          <div className="flex items-center gap-4 text-white/90 text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span className="line-clamp-1">{memory.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(memory.date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {memory.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {memory.tags.slice(0, 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-sunset-100 text-sunset-800 hover:bg-sunset-200 transition-colors"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </Badge>
          ))}
          {memory.tags.length > 3 && (
            <Badge variant="outline" className="text-muted-foreground">
              +{memory.tags.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MemoryCard;
