import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Check } from 'lucide-react';
import { toast } from 'sonner';

export function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Thank you for your RSVP! We look forward to celebrating with you.');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', guests: '1', attending: 'yes', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-rose-50 to-emerald-50 px-4 py-20">
      {/* Animated background circles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-amber-400 to-rose-400 opacity-10"
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl text-gray-800 md:text-5xl">RSVP</h2>
          <p className="text-lg text-gray-600">Please let us know if you'll be joining us</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl md:p-12"
        >
          {/* Decorative corners */}
          <div className="absolute left-0 top-0 h-32 w-32 border-l-4 border-t-4 border-amber-600 opacity-20" />
          <div className="absolute bottom-0 right-0 h-32 w-32 border-b-4 border-r-4 border-amber-600 opacity-20" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mb-6 rounded-full bg-emerald-500 p-6"
              >
                <Check className="h-16 w-16 text-white" />
              </motion.div>
              <h3 className="mb-2 font-serif text-3xl text-gray-800">Thank You!</h3>
              <p className="text-center text-gray-600">Your RSVP has been received. We can't wait to celebrate with you!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-colors focus:border-amber-600 focus:outline-none"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-colors focus:border-amber-600 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="guests" className="mb-2 block text-sm font-semibold text-gray-700">
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-colors focus:border-amber-600 focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="attending" className="mb-2 block text-sm font-semibold text-gray-700">
                    Will you attend? *
                  </label>
                  <select
                    id="attending"
                    name="attending"
                    value={formData.attending}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-colors focus:border-amber-600 focus:outline-none"
                  >
                    <option value="yes">Yes, I'll be there!</option>
                    <option value="no">Sorry, can't make it</option>
                  </select>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700">
                  Message for the Couple
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-colors focus:border-amber-600 focus:outline-none"
                  placeholder="Share your wishes and blessings..."
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-amber-600 via-rose-600 to-emerald-600 px-8 py-4 font-semibold text-white shadow-xl transition-all hover:shadow-2xl"
              >
                <motion.div
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="relative flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Submit RSVP
                </span>
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
