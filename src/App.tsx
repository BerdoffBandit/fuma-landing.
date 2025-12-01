import { motion } from 'motion/react';
import { useState } from 'react';
import { HologramCard } from './components/HologramCard';
import { WireframeCard } from './components/WireframeCard';
import { PricingCard } from './components/PricingCard';
import { AuditFormModal } from './components/AuditFormModal';
import { 
  Radar, 
  Globe, 
  Sparkles, 
  AlertCircle, 
  Search, 
  BarChart3,
  Scan,
  Zap,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Audit Form Modal */}
      <AuditFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Section 1 - Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 pb-32 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0D0D0D 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="relative max-w-4xl mx-auto text-center w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-20"
          >
            <h1 className="text-xl sm:text-2xl tracking-[0.3em] text-black/90">FUMA</h1>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 sm:mb-8 text-black/95 tracking-tight mx-auto max-w-[320px] sm:max-w-none"
            style={{ 
              fontWeight: 200,
              fontSize: '34px',
              lineHeight: '115%'
            }}
          >
            <span className="sm:hidden">Your Business. In Every AI Recommendation.</span>
            <span className="hidden sm:inline sm:text-6xl md:text-7xl lg:text-8xl">
              Your Business.<br />In Every AI Recommendation.
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl md:text-2xl text-black/50 mb-8 sm:mb-12 max-w-3xl mx-auto px-2"
          >
            FUMA makes your business discoverable inside AI systems like ChatGPT, Gemini, Claude, and Perplexity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center items-center px-2"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-[90%] sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-[#43BFF1]/30 text-black/80 hover:border-[#43BFF1] bg-white/40 backdrop-blur-sm hover:bg-[#43BFF1]/5 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              onClick={() => setIsModalOpen(true)}
            >
              Get Your AI Visibility Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </motion.button>
          </motion.div>

          {/* Hologram Card */}
          <HologramCard />
        </div>

        {/* Subtle gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white/50" />
      </section>

      {/* Section 2 - Problem Statement */}
      <section className="relative py-32 px-6 bg-[#0D0D0D] text-white">
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl text-center mb-24 text-white/95"
            style={{ fontWeight: 100 }}
          >
            AI is the new search engine.<br />
            But most businesses are invisible.
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: Search, text: "AI recommends your competitors first." },
              { icon: AlertCircle, text: "Your brand is missing from AI answers." },
              { icon: BarChart3, text: "There is no analytics layer for AI visibility." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="text-center"
              >
                <div className="mb-6 inline-flex p-4 rounded-full border border-white/10">
                  <item.icon className="w-8 h-8 text-white/60" strokeWidth={0.5} />
                </div>
                <p className="text-white/60 text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - What FUMA Does */}
      <section className="relative py-32 px-6 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl text-center mb-20 text-black/90"
            style={{ fontWeight: 100 }}
          >
            We make your business the answer.
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            <WireframeCard
              icon={Radar}
              title="AI Visibility Scan"
              description="Deep analysis of how AI systems perceive and reference your business across all major platforms."
              delay={0}
            />
            <WireframeCard
              icon={Globe}
              title="Web Footprint Analysis"
              description="Comprehensive mapping of your digital presence and how it connects to AI knowledge bases."
              delay={0.2}
            />
            <WireframeCard
              icon={Sparkles}
              title="Optimization Blueprint"
              description="Strategic recommendations to maximize your visibility in AI-generated responses."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Section 4 - AI Visibility Score */}
      <section className="relative py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl mb-16 text-black/90"
            style={{ fontWeight: 100 }}
          >
            AI Visibility Score™
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-12 rounded-2xl bg-gradient-to-br from-[#FAFAFA] to-white border border-black/5 shadow-xl"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#43BFF1]/5 blur-3xl rounded-2xl" />
            
            <div className="relative">
              {/* Main score */}
              <div className="mb-4">
                <span className="text-8xl text-black/90" style={{ fontWeight: 100 }}>68</span>
                <span className="text-3xl text-black/40 ml-2">/100</span>
              </div>

              {/* Progress indicator */}
              <div className="mb-6 max-w-md mx-auto h-1 bg-black/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '68%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-[#43BFF1] to-[#43BFF1]/60"
                />
              </div>

              {/* Subtext */}
              <p className="text-sm text-black/40">Up from 27 last month</p>

              {/* Thin glowing lines */}
              <div className="absolute top-6 right-6 w-16 h-16 border border-[#43BFF1]/20 rounded-full" />
              <div className="absolute bottom-6 left-6 w-12 h-12 border border-[#43BFF1]/20 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5 - Before & After */}
      <section className="relative py-32 px-6 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-xl border border-red-500/20 bg-red-500/5"
            >
              <div className="mb-4 text-sm text-red-400/60 tracking-wider uppercase">Before FUMA</div>
              <div className="mb-8">
                <span className="text-5xl text-white/90" style={{ fontWeight: 100 }}>1</span>
                <span className="text-xl text-white/40 ml-2">of 20 queries</span>
              </div>
              <p className="text-white/50">Irrelevant</p>
              
              {/* Visual indicator */}
              <div className="mt-8 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[5%] h-full bg-red-500/40" />
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-10 rounded-xl border border-[#43BFF1]/20 bg-[#43BFF1]/5"
            >
              <div className="mb-4 text-sm text-[#43BFF1]/60 tracking-wider uppercase">After FUMA</div>
              <div className="mb-8">
                <span className="text-5xl text-white/90" style={{ fontWeight: 100 }}>14</span>
                <span className="text-xl text-white/40 ml-2">of 20 queries</span>
              </div>
              <p className="text-white/50">Recommended</p>
              
              {/* Visual indicator */}
              <div className="mt-8 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '70%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-[#43BFF1]/60"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6 - Process */}
      <section className="relative py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl text-center mb-20 text-black/90"
            style={{ fontWeight: 100 }}
          >
            Simple. Fast. Effective.
          </motion.h3>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent hidden md:block" />

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: Scan, title: "Scan", description: "We analyze your current AI visibility across all major platforms." },
                { icon: BarChart3, title: "Analyze", description: "Get detailed insights into gaps and opportunities in your digital footprint." },
                { icon: Zap, title: "Optimize", description: "Implement strategic changes to maximize your AI discoverability." }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative text-center"
                >
                  {/* Number */}
                  <div className="relative z-10 mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full border border-black/10 bg-white">
                    <step.icon className="w-10 h-10 text-black/60" strokeWidth={0.5} />
                  </div>

                  <h4 className="mb-3 text-xl text-black/90">{step.title}</h4>
                  <p className="text-black/50">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Pricing */}
      <section className="relative py-32 px-6 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl text-center mb-20 text-black/90"
            style={{ fontWeight: 100 }}
          >
            Pricing
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              name="Starter"
              price="£149"
              features={[
                "AI Visibility Score",
                "Basic audit report",
                "5 platform analysis",
                "Email support"
              ]}
              delay={0}
            />
            <PricingCard
              name="Pro"
              price="£299"
              features={[
                "Everything in Starter",
                "Detailed optimization blueprint",
                "10 platform analysis",
                "Monthly tracking",
                "Priority support"
              ]}
              delay={0.2}
            />
            <PricingCard
              name="Premium"
              price="£499"
              features={[
                "Everything in Pro",
                "Full implementation support",
                "20+ platform analysis",
                "Weekly tracking",
                "Dedicated account manager",
                "Custom reporting"
              ]}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Section 8 - Final CTA */}
      <section className="relative py-32 px-6 bg-[#0D0D0D] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl mb-6 text-white/95"
            style={{ fontWeight: 100 }}
          >
            Be Found in the<br />Age of AI.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/50 mb-12"
          >
            Start your AI Visibility Audit today.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-4 rounded-full border border-white/20 text-white/80 hover:border-[#43BFF1] hover:bg-[#43BFF1]/10 transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-[#0D0D0D] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/40 tracking-[0.2em] text-sm">FUMA</div>
            
            <nav className="flex gap-8">
              {['About', 'Features', 'Pricing', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/40 hover:text-white/70 transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="text-white/30 text-sm">
              © 2025 FUMA. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}