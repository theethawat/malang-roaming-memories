import { Heart, Laptop, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <div className='flex items-center justify-center gap-2 mb-6'>
            <Laptop className='w-8 h-8 text-primary' />
            <h3 className='text-2xl font-bold'>Malang's Journey</h3>
          </div>

          <p className='text-gray-400 mb-6 max-w-2xl mx-auto'>
            A digital memory hall celebrating the incredible journey of a trusty
            laptop and its human companion across Thailand and beyond.
          </p>

          <div className='flex items-center justify-center gap-2 text-sm text-gray-500 mb-6'>
            <MapPin className='w-4 h-4' />
            <span>From Hat Yai, Thailand</span>
          </div>

          <div className='flex items-center justify-center gap-2 text-gray-400'>
            <span>Made with</span>
            <Heart className='w-4 h-4 text-red-500 fill-current' />
            <span>for Malang (แมลง)</span>
          </div>

          <div className='border-t border-gray-800 mt-8 pt-8'>
            <p className='text-gray-500 text-sm'>
              © 2025 Malang's Journey. Code and UI Designed by{" "}
              <a href='https://lovable.dev'>Lovable AI</a>, Data and Site
              Adjustment by Tin and TDC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
