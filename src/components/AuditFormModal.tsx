import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface AuditFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuditFormModal({ isOpen, onClose }: AuditFormModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    website: '',
    city: '',
    country: '',
    businessType: '',
    email: '',
    customerType: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSending(true);

  try {
    const SERVICE_ID = 'service_2mnxjx8';
    const TEMPLATE_ID = 'template_yunwcku';
    const PUBLIC_KEY = '5XNgcGBwzCU9jfTVM';

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        businessName: formData.businessName,
        website: formData.website,
        city: formData.city,
        country: formData.country,
        businessType: formData.businessType,
        email: formData.email,
        customerType: formData.customerType,
      },
      PUBLIC_KEY
    );

    console.log('EmailJS success:', response.status, response.text);

    setIsSending(false);
    setIsSubmitted(true);

    // Reset the form data
    setFormData({
      name: '',
      businessName: '',
      website: '',
      city: '',
      country: '',
      businessType: '',
      email: '',
      customerType: '',
    });

    // Auto-close after 10s like before
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 10000);
  } catch (err) {
    console.error('EmailJS error:', err);
    setIsSending(false);
    alert('Something went wrong sending your request. Please try again.');
  }
};


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop - dark blur */}
          <div className="absolute inset-0 bg-[#0D0D0D]/80 backdrop-blur-xl" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glass card */}
            <div className="relative bg-white/95 backdrop-blur-2xl rounded-2xl border border-black/5 shadow-2xl p-8 sm:p-10">
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-[#43BFF1]/5 blur-3xl rounded-2xl pointer-events-none" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors"
              >
                <X className="w-5 h-5 text-black/40" strokeWidth={1} />
              </button>

              {/* Success State */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="mb-4 w-16 h-16 mx-auto rounded-full border border-[#43BFF1]/30 bg-[#43BFF1]/10 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#43BFF1]/20 animate-pulse" />
                  </div>
                  <h3 className="text-2xl text-black/90 mb-2">Audit requested.</h3>
                  <p className="text-black/50">We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <>
                  {/* Header */}
                  <div className="relative mb-8">
                    <h3 className="text-3xl text-black/90 mb-2">
                      Request Your AI Visibility Audit
                    </h3>
                    <p className="text-black/50">Help us understand your business better.</p>
                  </div>

                  {/* Form */}
                  <form
                     onSubmit={handleSubmit} className="space-y-5"

                  >
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm text-black/60 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-black/10 bg-white/50 text-black/90 placeholder:text-black/30 focus:outline-none focus:border-[#43BFF1]/50 focus:bg-white transition-all"
                        placeholder="John Smith"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label htmlFor="businessName" className="block text-sm text-black/60 mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-black/10 bg-white/50 text-black/90 placeholder:text-black/30 focus:outline-none focus:border-[#43BFF1]/50 focus:bg-white transition-all"
                        placeholder="Acme Corporation"
                      />
                    </div>

                    {/* Website URL */}
                    <div>
                      <label htmlFor="website" className="block text-sm text-black/60 mb-2">
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        required
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-black/10 bg-white/50 text-black/90 placeholder:text-black/30 focus:outline-none focus:border-[#43BFF1]/50 focus:bg-white transition-all"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>

                    {/* Location - City & Country */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm text-black/60 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-black/10 bg-white/50 text-black/90 placeholder:text-black/30 focus:outline-none focus:border-[#43BFF1]/50 focus:bg-white transition-all"
                          placeholder="London"
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm text-black/60 mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-black/10 bg-white/50 text-black/90 placeholder:text-black/30 focus:outline-none focus:border-[#43BFF1]/50 focus:bg-white transition-all"
                          placeholder="United Kingdom"
                        />
                      </div>
                    </div>

                    {/* Business Type */}
                    <div>
                      <label htmlFor="businessType" className="block text-sm text-black/60 mb-2">
                        Business Type
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-black/10 bg-white/50 text-black/90 focus:outline-none focus:border-[#43BFF1]/50 focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select a type</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="saas">SaaS</option>
                        <option value="agency">Agency</option>
                        <option value="consulting">Consulting</option>
                        <option value="local">Local Business</option>
                        <option value="professional">Professional Services</option>
                        <option value="creative">Creative Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm text-black/60 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-black/10 bg-white/50 text-black/90 placeholder:text-black/30 focus:outline-none focus:border-[#43BFF1]/50 focus:bg-white transition-all"
                        placeholder="hello@yourwebsite.com"
                      />
                    </div>

                    {/* Customer Type (Optional) */}
                    <div>
                      <label htmlFor="customerType" className="block text-sm text-black/60 mb-2">
                        What kind of customers do you want AI to send you?{' '}
                        <span className="text-black/30">(Optional)</span>
                      </label>
                      <textarea
                        id="customerType"
                        name="customerType"
                        rows={3}
                        value={formData.customerType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-black/10 bg-white/50 text-black/90 placeholder:text-black/30 focus:outline-none focus:border-[#43BFF1]/50 focus:bg-white transition-all resize-none"
                        placeholder="E.g., Tech startups looking for AI integration services..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: isSending ? 1 : 1.01 }}
                      whileTap={{ scale: isSending ? 1 : 0.99 }}
                      disabled={isSending}
                      className="w-full py-4 rounded-lg border border-[#43BFF1]/30 bg-[#43BFF1]/10 text-black/90 hover:border-[#43BFF1] hover:bg-[#43BFF1]/20 transition-all duration-300 mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSending ? 'Sending...' : 'Request My Audit'}
                    </motion.button>
                  </form>
                </>
              )}

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#43BFF1]/20 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#43BFF1]/20 pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
