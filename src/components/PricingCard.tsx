import { motion } from 'motion/react';

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  delay?: number;
}

export function PricingCard({ name, price, features, delay = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative p-10 rounded-xl bg-white hover:bg-[#FAFAFA] transition-all duration-500 shadow-sm hover:shadow-lg"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#43BFF1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Plan name */}
      <div className="mb-2 text-sm text-black/40 tracking-wider uppercase">{name}</div>
      
      {/* Price */}
      <div className="mb-8">
        <span className="text-5xl text-black/90">{price}</span>
      </div>

      {/* Features */}
      <ul className="space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-1.5 w-1 h-1 rounded-full bg-[#43BFF1]" />
            <span className="text-black/60">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-10 w-full py-3 rounded-lg border border-black/10 text-black/80 hover:border-[#43BFF1]/50 hover:text-black/90 transition-all duration-300"
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}
