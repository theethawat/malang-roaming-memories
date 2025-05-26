import { MapPin, Calendar } from "lucide-react";
import memoriesData from "../data/memories.json";

const Timeline = () => {
  const sortedMemories = memoriesData.memories.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <section id='timeline' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 gradient-text'>
            Journey Timeline
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Follow our chronological adventure from 2021 to 2025
          </p>
        </div>

        <div className='relative max-w-4xl mx-auto'>
          {/* Timeline line */}
          <div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sunset-400 to-ocean-400 transform md:-translate-x-0.5'></div>

          {sortedMemories.map((memory, index) => (
            <div
              key={memory.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className='absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg transform md:-translate-x-2 z-10'></div>

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='bg-sunset-100 rounded-full p-2'>
                      <Calendar className='w-5 h-5 text-sunset-600' />
                    </div>
                    <span className='text-sm font-medium text-sunset-600 bg-sunset-50 px-3 py-1 rounded-full'>
                      {new Date(memory.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className='text-xl font-bold mb-3 text-foreground'>
                    {memory.title}
                  </h3>

                  <div className='flex items-center gap-2 mb-3 text-muted-foreground'>
                    <MapPin className='w-4 h-4' />
                    <span className='text-sm'>{memory.location}</span>
                  </div>

                  <p className='text-muted-foreground leading-relaxed'>
                    {memory.description}
                  </p>

                  <div className='mt-4'>
                    <img
                      src={
                        memory.image?.startsWith("https://")
                          ? memory?.image
                          : `https://tdckhawtang.blob.core.windows.net/malang/${memory.image}`
                      }
                      alt={memory.title}
                      className='w-full h-32 object-cover rounded-lg'
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
