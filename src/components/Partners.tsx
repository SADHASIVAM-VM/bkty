import {motion} from 'framer-motion'


const brands = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  source: "/brands/f"+(i + 1)+".jpg", 
}));
const BrandSection = () => {
  return (
    <section className="py-6 md:py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 transition={{ ease: "easeOut", duration: 1, delay:1}} initial={{ opacity: 0, y:100 }}   animate={{ opacity: 1, y:0 }} className=" max-w-4xl mx-auto text-4xl md:text-5xl font-bold text-white/70 mb-4">Powering the Digital Initiatives of <span className='text-orange-400'>Global Companies </span> </motion.h2>
        <p className='text-gray-300 max-w-2xl mx-auto text-base md:text-lg'>
          By blending in our service excellence, we have designed purpose-specific digital transformation strategies with our cross-domain expertise and years of experience to put our clients ahead of the curve.


        </p>
        <div className="relative overflow-hidden py-10 min-h-[150px] flex items-center ">
          <div className="flex w-max animate-brandscroll  gap-3">
            {brands.map((brand) => (
            <div key={brand.id} className="flex flex-shrink-0  justify-center">
              <img
                src={brand.source}
                alt={`Brand ${brand.id}`}
                className="w-16 md:w-32 rounded-xl grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}

           {brands.map((brand) => (
            <div key={brand.id} className="flex flex-shrink-0  justify-center">
              <img
                src={brand.source}
                alt={`Brand ${brand.id}`}
                className="w-16 md:w-32 grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
          </div>

          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r  from-[#000000] via-[#000000]/90  to-transparent">
</div>
<div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#000000] via-[#000000]/90  to-transparent">
</div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection