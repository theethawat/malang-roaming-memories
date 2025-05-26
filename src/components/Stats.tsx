
import { MapPin, Calendar, Code, Coffee } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Calendar,
      value: "4+",
      label: "Years Together",
      description: "From 2021 to 2025"
    },
    {
      icon: MapPin,
      value: "15+",
      label: "Cities Visited",
      description: "Across Thailand and beyond"
    },
    {
      icon: Code,
      value: "100+",
      label: "Projects Built",
      description: "Websites, apps, and more"
    },
    {
      icon: Coffee,
      value: "∞",
      label: "Late Night Sessions",
      description: "Countless coding marathons"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-sunset-500 to-ocean-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Journey in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Statistics that tell the story of our incredible partnership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-white/80 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
