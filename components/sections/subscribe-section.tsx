"use client";
import { Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function SubscribeSection() {
  const [email, setEmail] = useState<string>("");

  const handleSubmitSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
    alert("Terima kasih telah berlangganan");
  };
  return (
    <section className="w-full  bg-white  overflow-x-hidden py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center md:gap-6 gap-y-8">
        <div className="flex flex-col md:order-0 order-1">
          <div>
            <h1 className="text-black text-2xl font-semibold  font-montserrat">
              Dapatan menu menarik setiap hari
            </h1>
            <p className="mt-6 text-black font-montserrat">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          <form
            onSubmit={handleSubmitSubscribe}
            className="flex flex-col sm:flex-row gap-3 mt-6"
          >
            <div className="relative flex-1">
              <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-11 pr-4 py-4 text-gray-800 text-sm font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium text-sm transition-colors"
            >
              Langganan
            </button>
          </form>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-70 h-100 md:w-80 md:h-125">
            <div className="absolute inset-0 scale-105 rounded-full bg-primary bg-linear-to-t from-neutral-100" />

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[90%] overflow-hidden rounded-full translate-y-[2%]">
              <Image
                src="/people-chef-subscribe.png"
                alt="Chef"
                fill
                className="object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
