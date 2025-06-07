import { webinars } from '../data/webinars';
import WebinarCard from './components/WebinarCard';

export default function WebinarPage() {
  // Sort webinars by date (most recent first)
  const sortedWebinars = [...webinars].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Upcoming Webinars
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our expert-led sessions designed to help you navigate the journey of parenthood with confidence and knowledge.
          </p>
        </div>

        {/* Webinars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedWebinars.map((webinar) => (
            <WebinarCard key={webinar.id} webinar={webinar} />
          ))}
        </div>

        {/* Empty State */}
        {sortedWebinars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No upcoming webinars at the moment. Please check back later!
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 