import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-secondary  overflow-x-hidden md:pt-8 pt-6 md:pb-4 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-8 items-start pb-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-beecook-white.png"
              alt="BeeCook Logo"
              width={150}
              height={150}
            />
          </div>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-4 text-default-gray">Partnership</h4>
          <ul className="space-y-3 text-sm text-default-gray">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Layanan
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Kontributor
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Iklan
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Karir
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-4 text-default-gray">Bantuan</h4>
          <ul className="space-y-3 text-sm text-default-gray">
            <li>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Kontak Kami
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Aksesibilitas
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex md:justify-end items-start gap-3">
          <Link href="/tiktok">
            <Image
              src="/socmed-tiktok.png"
              alt="TikTok"
              width={24}
              height={24}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link href="/facebook">
            <Image
              src="/socmed-facebook.png"
              alt="Facebook"
              width={24}
              height={24}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link href="/instagram">
            <Image
              src="/socmed-instagram.png"
              alt="Instagram"
              width={24}
              height={24}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link href="/x">
            <Image
              src="/socmed-x.png"
              alt="X"
              width={24}
              height={24}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
         
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto  py-4">
          <p className="text-xs text-white tracking-widest uppercase">
            Becook Media | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
