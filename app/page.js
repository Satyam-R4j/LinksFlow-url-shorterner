import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight:"100 900" 
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>The best URL Shortener</p>
          <p>We are the most straightforward URL shortener in the world</p>
          <div className="flex gap-3">
            <Link href="/Shorten">
              {" "}
              <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-2 font-bold">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              {" "}
              <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-2 font-bold">
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex justify-start relative"> 
          <Image alt="vector Image" src={"/vector.png"} fill={true} />
        </div>
      </section>
    </main>
  );
}
