'use client';

import { Webinar } from '../../data/webinars';
import { CalendarDays, User, Clock } from 'lucide-react';

interface WebinarCardProps {
  webinar: Webinar;
}

export default function WebinarCard({ webinar }: WebinarCardProps) {
  const webinarDate = new Date(webinar.date);
  const formattedDate = webinarDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const formattedTime = webinarDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const handleViewDetails = () => {
    console.log(`Viewing details for webinar ID: ${webinar.id}`);
    alert(`You're viewing details for: ${webinar.title}\n\nSpeaker: ${webinar.speaker}\nDate: ${formattedDate}\nTime: ${formattedTime}\n\nDescription: ${webinar.description}`);
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6">
        {/* Title with gradient text */}
        <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {webinar.title}
        </h2>

        {/* Speaker info with icon */}
        <div className="flex items-center gap-2 mb-3 text-gray-600">
          <User size={16} className="text-blue-500" />
          <span className="font-medium">{webinar.speaker}</span>
        </div>

        {/* Date with icon */}
        <div className="flex items-center gap-2 mb-3 text-gray-600">
          <CalendarDays size={16} className="text-purple-500" />
          <span>{formattedDate}</span>
        </div>

        {/* Time with icon */}
        <div className="flex items-center gap-2 mb-4 text-gray-600">
          <Clock size={16} className="text-blue-500" />
          <span>{formattedTime}</span>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6 line-clamp-2">{webinar.description}</p>

        {/* Button with hover effect */}
        <button
          onClick={handleViewDetails}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-lg font-medium
            hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          View Details
        </button>
      </div>
    </div>
  );
} 