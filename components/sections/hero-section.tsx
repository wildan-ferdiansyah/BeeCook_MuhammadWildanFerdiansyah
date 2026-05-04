import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden  scroll-mt-20 bg-white relative">
      <div className="mx-auto grid w-full max-w-7xl gap-6 md:gap-12 md:py-12 py-32 md:px-0 px-6 lg:grid-cols-2 items-center relative">
        <div className="flex flex-col justify-center relative z-10">
          <div className="absolute -left-30 -top-1 w-80 h-80 bg-primary/30 rounded-full blur-3xl -z-10" />
          <div className="absolute left-10 top-3 w-48 h-48 bg-primary/30 rounded-full blur-2xl -z-10" />

          <div className="flex items-start flex-col ">
            <h1 className="max-w-full text-black font-semibold  md:text-6xl text-4xl leading-tight tracking-wide">
              Where{" "}
              <span className="text-primary inline-flex items-start font-black gap-1 md:gap-2">
                Quality
                <Image
                  src="/stars.png"
                  alt="Star Icon"
                  width={28}
                  height={28}
                  className="sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-14 lg:h-16 object-contain"
                  priority
                />
              </span>
              <br />
            </h1>
            <h2 className="md:text-5xl text-4xl text-black font-semibold">
              Meets <span className="font-black">Flavor</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-8">
            <button className="rounded-md bg-black text-sm font-semibold py-4 px-8 hover:bg-black/80 w-full sm:w-auto">
              Eksplor Sekarang
            </button>
          </div>

          <div className="mt-8 md:mt-12 flex items-center gap-3 sm:gap-4">
            <div className="flex -space-x-3">
              <img
                src="/people1.png"
                alt="People 1"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full  object-cover"
              />
              <img
                src="/people2.png"
                alt="People 2"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full  object-cover"
              />
              <img
                src="/people3.png"
                alt="People 3"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full  object-cover"
              />
            </div>
            <span className="text-sm sm:text-base font-medium text-black">
              1.000+ Pengguna
            </span>
          </div>
        </div>

        <div className="relative w-full flex items-center justify-center">
          <div className="w-[85%] lg:w-full aspect-square">
            <Image
              src="/hero-image.png"
              alt="Hero Image Pasta"
              fill
              loading="eager"
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
