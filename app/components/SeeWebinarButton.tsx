'use client';

import { useRouter } from 'next/navigation';

export default function SeeWebinarButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/webinar');
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg
        hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
    >
      See Webinars
    </button>
  );
} 