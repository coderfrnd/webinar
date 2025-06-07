// Types for our webinar data
export interface Webinar {
  id: number;
  title: string;
  speaker: string;
  date: string;
  description: string;
}

// Mock data for webinars
export const webinars: Webinar[] = [
  {
    id: 1,
    title: "Understanding Your Baby's Sleep Patterns",
    speaker: "Dr. Sumitra Meena",
    date: "2024-03-25T10:00:00",
    description: "Learn about healthy sleep habits and routines for your little one."
  },
  {
    id: 2,
    title: "Nutrition Essentials for Newborns",
    speaker: "Dr. Priya Sharma",
    date: "2024-03-28T14:00:00",
    description: "Expert guidance on feeding and nutrition for your newborn."
  },
  {
    id: 3,
    title: "Early Childhood Development Milestones",
    speaker: "Dr. Rajesh Kumar",
    date: "2024-04-01T11:00:00",
    description: "Understanding key developmental milestones in the first year."
  }
];

// Mock API functions
export const webinarApi = {
  // Get all webinars
  getAll: (): Promise<Webinar[]> => {
    return Promise.resolve(webinars);
  },

  // Get a single webinar by ID
  getById: (id: number): Promise<Webinar | undefined> => {
    const webinar = webinars.find(w => w.id === id);
    return Promise.resolve(webinar);
  },

  // Get upcoming webinars (future dates)
  getUpcoming: (): Promise<Webinar[]> => {
    const now = new Date();
    const upcoming = webinars.filter(w => new Date(w.date) > now);
    return Promise.resolve(upcoming);
  }
}; 