import Image from "next/image";

export default function PreviewCardTrending() {
  return (
    <div className="rounded-2xl md:h-80 h-40 w-full  relative ">
      <Image
        src="/pexels-undo-kim-2153633398-34683317 1.png"
        alt="Nasi Goreng Udang Mentega"
        width={800}
        height={400}
        loading="lazy"
        className="h-full w-full object-cover rounded-2xl"
      />

      <div className="absolute inset-0 bg-black/50 rounded-2xl" />

      <div className="absolute inset-0 flex flex-col justify-center md:px-18 px-12">
        <span className="md:text-base text-sm font-medium text-primary font-montserrat">
          Sedang Trending
        </span>
        <h2 className="text-2xl font-semibold text-white md:text-3xl font-montserrat">
          Nasi Goreng Udang Mentega
        </h2>
      </div>
    </div>
  );
}
