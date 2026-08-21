import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Instagram, Facebook, Send, CheckCircle2, Sparkles, Heart } from 'lucide-react';
import { ContactFormData } from '../types';
import { SectionHeading } from '../components/SectionHeading';
import { StitchDivider } from '../components/StitchDivider';
import { PageHeader } from '../components/PageHeader';

// Easily customizable contact placeholders (as requested: do not invent fake personal data, keep clearly marked)
const CONTACT_CONFIG = {
  whatsappNumber: '+91 98765 43210', // Placeholder: replace with artist's WhatsApp number
  whatsappDirectUrl: 'https://wa.me/919876543210?text=Hello,%20I%20am%20interested%20in%20your%20handmade%20embroidery%20work!',
  emailAddress: 'contact.sutoygolpo@example.com', // Placeholder: replace with artist's email
  instagramHandle: '@sutoy_golpo', // Placeholder: replace with Instagram handle
  facebookPage: 'sutoygolpo.embroidery', // Placeholder: replace with Facebook page
  locationNote: 'West Bengal, India • Shipping handmade art worldwide'
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    contact: '',
    email: '',
    interest: 'Custom Artwork',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.contact.trim()) {
      newErrors.contact = 'Please enter your phone or WhatsApp number';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please share a brief note about your request (at least 10 characters)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      contact: '',
      email: '',
      interest: 'Custom Artwork',
      message: ''
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <div className="space-y-12 md:space-y-16 py-4 sm:py-6">
      
      {/* STYLISH CONTACT PAGE HEADER */}
      <section id="contact-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          badge="Connect & Custom Orders"
          title="Have a Handmade Idea?"
          description="If you would like to inquire about an artwork, discuss a custom embroidered piece, collaborate, or simply connect with the artist, we'd love to hear from you."
          icon="mail"
        />
      </section>

      {/* MAIN CONTACT CONTENT */}
      <section id="contact-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Methods & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="border-b border-[#E6DCC9] pb-4">
              <h2 className="text-2xl font-serif font-semibold text-[#0F3829]">
                Direct Conversations
              </h2>
              <p className="text-sm text-[#5C5449] mt-1 font-sans">
                Feel free to connect directly via your preferred channel:
              </p>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#E6DCC9] shadow-xs hover:border-[#174D38] transition-colors flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#174D38] text-[#FFFDF7]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#0F3829]">
                    WhatsApp Chat
                  </h3>
                  <p className="text-xs text-[#5C5449] mt-1 leading-relaxed">
                    Discuss an artwork, ask questions about dimensions, or talk about a custom embroidery idea.
                  </p>
                  <p className="text-xs font-mono text-[#8A7D6B] mt-2">
                    {CONTACT_CONFIG.whatsappNumber}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-dashed border-[#E6DCC9]">
                <a
                  href={CONTACT_CONFIG.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#174D38] hover:bg-[#0F3829] text-[#FFFDF7] text-xs font-semibold tracking-wide transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#E6DCC9] shadow-xs hover:border-[#B85C38] transition-colors flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#F8F3E8] text-[#B85C38] border border-[#E6DCC9]">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-[#0F3829]">
                  Email Enquiries
                </h3>
                <p className="text-xs text-[#5C5449] mt-1 leading-relaxed">
                  For formal collaborations, detailed custom requests, or exhibition queries.
                </p>
                <a 
                  href={`mailto:${CONTACT_CONFIG.emailAddress}`}
                  className="text-xs font-medium text-[#174D38] hover:underline block mt-2 font-mono"
                >
                  {CONTACT_CONFIG.emailAddress}
                </a>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="bg-[#F8F3E8] p-6 rounded-2xl border border-[#E6DCC9]">
              <h3 className="font-serif text-base font-semibold text-[#0F3829] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C9A45C]" />
                <span>Follow & View Work in Progress</span>
              </h3>
              <p className="text-xs text-[#5C5449] mb-4 leading-relaxed">
                Watch threads take shape and view behind-the-scenes stitching reels.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="#instagram"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FFFDF7] hover:bg-[#FFFDF7] text-[#0F3829] hover:text-[#B85C38] border border-[#E6DCC9] text-xs font-medium transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#B85C38]" />
                  <span>{CONTACT_CONFIG.instagramHandle}</span>
                </a>
                <a
                  href="#facebook"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FFFDF7] hover:bg-[#FFFDF7] text-[#0F3829] hover:text-[#174D38] border border-[#E6DCC9] text-xs font-medium transition-colors"
                >
                  <Facebook className="w-4 h-4 text-[#174D38]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Artwork & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFDF7] p-8 sm:p-10 rounded-3xl border-2 border-dashed border-[#C9A45C]/60 shadow-xl relative overflow-hidden">
              
              {/* Outer decorative ribbon */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                <div className="absolute transform rotate-45 bg-[#B85C38] text-[#FFFDF7] text-[9px] font-bold py-1 right-[-35px] top-[18px] w-[120px] text-center uppercase tracking-widest">
                  Custom Art
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#0F3829]">
                  Tell Us Your Idea
                </h2>
                <p className="text-sm font-medium text-[#174D38] font-serif mt-1">
                  Share your preferred design or plan with us
                </p>
                <p className="text-xs sm:text-sm text-[#5C5449] mt-2 font-sans">
                  Whether it’s a bespoke textile for your living space or a personalized gift for a loved one, let's start the conversation.
                </p>
              </div>

              {isSubmitted ? (
                <div 
                  id="contact-success-state"
                  className="py-12 px-6 text-center space-y-4 bg-[#F8F3E8] rounded-2xl border border-dashed border-[#C9A45C] animate-in fade-in zoom-in-95 duration-300"
                >
                  <div className="w-14 h-14 bg-[#174D38] text-[#C9A45C] rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-semibold text-[#0F3829]">
                    Thank you, {formData.name}!
                  </h3>
                  
                  <p className="text-base text-[#174D38] font-serif">
                    Your message has been received with care.
                  </p>
                  
                  <p className="text-xs sm:text-sm text-[#5C5449] max-w-md mx-auto leading-relaxed">
                    The artist will review your details and reach out via WhatsApp or email soon to discuss threads, colors, and timelines.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full bg-[#174D38] text-[#FFFDF7] text-xs font-semibold hover:bg-[#0F3829] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#0F3829] mb-1.5">
                      Your Name <span className="text-[#A83232]">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Mukherjee"
                      className={`w-full px-4 py-3 rounded-xl border bg-[#F8F3E8]/50 text-[#292621] text-sm focus:outline-none focus:ring-2 focus:ring-[#174D38] transition-colors ${
                        errors.name ? 'border-[#A83232] bg-[#A83232]/5' : 'border-[#E6DCC9]'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-[#A83232] mt-1">{errors.name}</p>}
                  </div>

                  {/* Contact Number & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#0F3829] mb-1.5">
                        Phone / WhatsApp <span className="text-[#A83232]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="+91 98765 00000"
                        className={`w-full px-4 py-3 rounded-xl border bg-[#F8F3E8]/50 text-[#292621] text-sm focus:outline-none focus:ring-2 focus:ring-[#174D38] transition-colors ${
                          errors.contact ? 'border-[#A83232] bg-[#A83232]/5' : 'border-[#E6DCC9]'
                        }`}
                      />
                      {errors.contact && <p className="text-xs text-[#A83232] mt-1">{errors.contact}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#0F3829] mb-1.5">
                        Email Address <span className="text-[#A83232]">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ananya@example.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-[#F8F3E8]/50 text-[#292621] text-sm focus:outline-none focus:ring-2 focus:ring-[#174D38] transition-colors ${
                          errors.email ? 'border-[#A83232] bg-[#A83232]/5' : 'border-[#E6DCC9]'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-[#A83232] mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Interest Selection */}
                  <div>
                    <label htmlFor="contact-interest" className="block text-xs font-semibold uppercase tracking-wider text-[#0F3829] mb-1.5">
                      What are you interested in?
                    </label>
                    <select
                      id="contact-interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E6DCC9] bg-[#F8F3E8]/50 text-[#292621] text-sm focus:outline-none focus:ring-2 focus:ring-[#174D38] transition-colors"
                    >
                      <option value="Custom Artwork">Custom Artwork</option>
                      <option value="Existing Artwork">Enquiry About Existing Artwork</option>
                      <option value="Collaboration">Artistic Collaboration / Exhibition</option>
                      <option value="General Enquiry">General Appreciation / Enquiry</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#0F3829] mb-1.5">
                      Your Message / Idea <span className="text-[#A83232]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the motif, fabric preference, color palette, or occasion for this handmade piece..."
                      className={`w-full px-4 py-3 rounded-xl border bg-[#F8F3E8]/50 text-[#292621] text-sm focus:outline-none focus:ring-2 focus:ring-[#174D38] transition-colors resize-none ${
                        errors.message ? 'border-[#A83232] bg-[#A83232]/5' : 'border-[#E6DCC9]'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-[#A83232] mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#174D38] text-[#FFFDF7] font-semibold text-base hover:bg-[#0F3829] active:scale-98 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 group cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center text-[11px] text-[#8A7D6B] pt-2 flex items-center justify-center gap-1.5">
                    <Heart className="w-3 h-3 text-[#B85C38]" />
                    <span>Every inquiry is answered directly by the artist.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
