import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface WireframeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function WireframeCard({ icon: Icon, title, description, delay = 0 }: WireframeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative p-8 rounded-xl border border-black/5 hover:border-[#43BFF1]/20 transition-all duration-500"
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 bg-[#43BFF1]/0 group-hover:bg-[#43BFF1]/5 rounded-xl transition-all duration-500 blur-xl" />
      
      <div className="relative">
        {/* Icon */}
        <div className="mb-6 inline-flex p-3 rounded-lg border border-black/5 group-hover:border-[#43BFF1]/20 transition-all duration-500">
          <Icon className="w-6 h-6 text-black/60" strokeWidth={0.5} />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-black/90">{title}</h3>

        {/* Description */}
        <p className="text-black/50 leading-relaxed">{description}</p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-[#43BFF1]/40 to-transparent transition-all duration-700" />
      </div>
    </motion.div>
  );
}
