import { MapPin, Calendar, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-lime-50 via-accent to-ocean-50'>
      {/* Floating background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-10 w-20 h-20 bg-lime-200 rounded-full opacity-30 float-animation'></div>
        <div
          className='absolute bottom-32 right-16 w-16 h-16 bg-ocean-200 rounded-full opacity-40 float-animation'
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className='absolute top-1/3 right-1/4 w-12 h-12 bg-primary/20 rounded-full opacity-50 float-animation'
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className='container mx-auto px-4 text-center relative z-10'>
        <div className='fade-in-up'>
          <div className='mb-8'>
            <Laptop className='w-20 h-20 mx-auto mb-6 text-primary float-animation text-emerald-500' />
          </div>

          <h1 className='text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight'>
            Malang's Journey
          </h1>

          <p className='text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto'>
            แมลง - The Super Computer
          </p>

          <p className='text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed'>
            บางทีเพื่อนที่ดีของเราก็อาจจะเป็นคอมพิวเตอร์เครื่องหนึ่ง
            ที่เราขาดมันไม่ได้ในแต่ละวัน เราขึ้นเหนือลงใต้ด้วยกัน ทำงานด้วยกัน
            และเป็นส่วนหนึ่งในความสำเร็จของเราตลอดเวลา
            หลายครั้งที่เราทำงานกันในรถ หลายครั้งที่ทำงานกันอย่างเหน็ดเหนื่อย
            เป็นความทรงจำที่ดีที่ได้ร่วมเดินทางไปด้วยกัน ตลอด 4 ปีที่ผ่านมา
          </p>

          <div className='flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base'>
            <div className='flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full'>
              <Calendar className='w-4 h-4 text-lime-600' />
              <span className='font-medium'>2021 - 2025</span>
            </div>
            <div className='flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full'>
              <MapPin className='w-4 h-4 text-orange-600' />
              <span className='font-medium'>Thailand & Beyond</span>
            </div>
            <div className='flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full'>
              <Laptop className='w-4 h-4 text-primary' />
              <span className='font-medium'>
                Acer Aspire 5 515-45 • AMD Ryzen 5 • 8GB RAM{" "}
              </span>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              className='bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300'
              onClick={() =>
                document
                  .getElementById("memories")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Our Journey
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300'
              onClick={() =>
                document
                  .getElementById("timeline")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Timeline
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-primary rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-primary rounded-full mt-2 animate-pulse'></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
