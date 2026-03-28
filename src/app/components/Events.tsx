import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Music, Utensils, Camera } from 'lucide-react';
import hall from '../../images/hall.webp';
import couple from '../../images/couple.png';

interface Event {
  name: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  icon: any;
  color: string;
  image: string;
}

const events: Event[] = [
  {
    name: "Mehendi Ceremony",
    date: "Thursday, June 14, 2026",
    time: "4:00 PM - 8:00 PM",
    venue: "Bride's Residence",
    description: "Join us for an evening of henna art, music, and celebration as we adorn the bride's hands with intricate designs.",
    icon: Calendar,
    color: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1762162089047-97e09435984d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWhlbmRpJTIwaGFuZHMlMjBoZW5uYSUyMGRlc2lnbnxlbnwxfHx8fDE3NzQ2MTQ5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Nikkah Ceremony",
    date: "Friday, June 15, 2026",
    time: "6:00 PM - 7:00 PM",
    venue: "The Royal Gardens, Mumbai",
    description: "The sacred Nikkah ceremony where we will take our vows in the presence of our loved ones and seek Allah's blessings.",
    icon: Music,
    color: "from-rose-500 to-pink-500",
    image: couple
  },
  {
    name: "Walima Reception",
    date: "Friday, June 15, 2026",
    time: "8:00 PM - 11:00 PM",
    venue: "The Royal Gardens, Mumbai",
    description: "Celebrate with us at the Walima reception with dinner, music, and dancing. A night to remember!",
    icon: Utensils,
    color: "from-amber-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1710498689566-868b93f934c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3ZWRkaW5nJTIwbWFuZGFwJTIwZmxvcmFsfGVufDF8fHx8MTc3NDYxNDkwOHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

function EventCard({ event, index }: { event: Event; index: number }) {
  const Icon = event.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={event.image}
          alt={event.name}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Icon */}
        <motion.div
          className={`absolute right-4 top-4 rounded-full bg-gradient-to-br ${event.color} p-3 shadow-xl`}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="h-6 w-6 text-white" />
        </motion.div>

        {/* Event name overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-serif text-3xl text-white">{event.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4 space-y-3">
          <div className="flex items-center gap-3 text-gray-700">
            <Calendar className="h-5 w-5 text-amber-600" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Clock className="h-5 w-5 text-rose-600" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="h-5 w-5 text-emerald-600" />
            <span>{event.venue}</span>
          </div>
        </div>

        <p className="leading-relaxed text-gray-600">{event.description}</p>

        {/* Animated border */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`mt-4 h-1 rounded-full bg-gradient-to-r ${event.color}`}
        />
      </div>
    </motion.div>
  );
}

export function Events() {
  return (
    <section className="relative bg-gradient-to-b from-emerald-50 to-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="mb-6 inline-block"
          >
            <Camera className="h-12 w-12 text-amber-600" />
          </motion.div>
          <h2 className="mb-4 font-serif text-4xl text-gray-800 md:text-5xl">Wedding Events</h2>
          <p className="text-lg text-gray-600">Join us in celebrating our special moments</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>

        {/* Venue map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 overflow-hidden rounded-3xl bg-white shadow-2xl"
        >
          <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-emerald-600 p-6 text-center">
            <h3 className="font-serif text-2xl text-white">Vani Mahal, Chennai</h3>
            <p className="mt-2 text-white/90">662, Old, 662, Thiruvottiyur High Rd, Korukkupet, Old Washermanpet</p>
          </div>
          <div className="relative h-64 bg-gray-100">
            <img
              src={hall}
              alt="Venue"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
