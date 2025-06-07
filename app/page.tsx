import Image from "next/image";
import SeeWebinarButton from './components/SeeWebinarButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <Image
            src="https://babynama.com/_next/static/media/logo-light.f8d530c6.svg"
            alt="Babynama Logo"
            width={150}
            height={35}
            priority
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Babynama
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Your trusted companion in the journey of parenthood. Explore our resources and join our expert-led webinars.
          </p>
          <SeeWebinarButton />
        </div>
      </div>
    </main>
  );
}
