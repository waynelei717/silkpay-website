/**
 * DESIGN SYSTEM: Neo-Oceanic Minimalism (Neo-Oceanic Minimalism)
 * Silkpay Contact Page
 */

import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { 
  Shield, 
  Mail, 
  MessageSquare, 
  MapPin, 
  CheckCircle, 
  Sparkles,
  Loader2
} from "lucide-react";
import { toast } from "sonner";

// Contact form schema
const contactSchema = zod.object({
  name: zod.string().min(2, "Name is required (at least 2 characters)"),
  email: zod.string().email("Please enter a valid email address"),
  company: zod.string().min(1, "Company name is required"),
  website: zod.string().url("Please enter a valid URL (including https://)").optional().or(zod.literal("")),
  message: zod.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = zod.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Thank you! Your inquiry has been submitted successfully.");
    reset();
  };

  return (
    <Layout>
      {/* Background Glows */}
      <div className="mesh-glow top-20 right-10" />
      <div className="mesh-glow bottom-20 left-10" />

      {/* Hero Header */}
      <section className="pt-16 pb-12 border-b border-sky-50 bg-slate-50/30">
        <div className="container text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="border-sky-200 text-sky-700 bg-sky-50 mb-4 px-3 py-1 font-semibold">
            Contact Us
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
            Let's Talk About Your Payments
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our global payment and MoR compliance experts are ready to help you optimize your billing checkout, handle taxes, and scale globally.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="text-left">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Why Contact Silkpay?</h2>
                <p className="text-slate-600">
                  Whether you're launch-ready or migrating from an existing payment gateway, we provide custom onboarding support and pricing structures.
                </p>
              </div>

              {/* Info cards */}
              <div className="space-y-4">
                <div className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Email Sales</h4>
                    <p className="text-slate-600 text-sm">sales@silkpay.ink</p>
                    <p className="text-slate-400 text-xs mt-1">We typically reply within 2 hours.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Developer Support</h4>
                    <p className="text-slate-600 text-sm">dev-support@silkpay.ink</p>
                    <p className="text-slate-400 text-xs mt-1">Technical questions & integration help.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Global HQ</h4>
                    <p className="text-slate-600 text-sm">Silkpay Inc.</p>
                    <p className="text-slate-500 text-xs mt-1">100 Marina Boulevard, Suite 400, San Francisco, CA 94123</p>
                  </div>
                </div>
              </div>

              {/* Compliance Trust Seal */}
              <div className="bg-sky-50/50 border border-sky-100/50 rounded-2xl p-6 flex items-center gap-4">
                <Shield className="w-10 h-10 text-sky-500 shrink-0" />
                <p className="text-xs text-sky-800 leading-relaxed font-medium">
                  <strong>GDPR & PCI-DSS Compliant:</strong> Your personal information and billing details are fully encrypted and securely handled in compliance with international laws.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <Card className="glacier-card border-0 p-8 sm:p-10 shadow-xl shadow-sky-500/5">
                <CardContent className="p-0">
                  {isSuccess ? (
                    <div className="text-center py-12 space-y-6">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mx-auto border border-emerald-100 shadow-sm">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-extrabold text-slate-900">Message Sent!</h3>
                        <p className="text-slate-600 max-w-md mx-auto">
                          Thank you for reaching out to Silkpay. One of our payment solutions experts will get back to you shortly.
                        </p>
                      </div>
                      <Button 
                        onClick={() => setIsSuccess(false)} 
                        className="bg-sky-600 hover:bg-sky-700 text-white font-semibold"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-extrabold text-slate-900">Inquire About Silkpay</h3>
                        <p className="text-slate-500 text-sm">Fill out the form below and we will design a custom proposal for your business.</p>
                      </div>

                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          {...register("name")}
                          className="border-sky-100 focus-visible:ring-sky-500 rounded-xl"
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500 font-semibold">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Grid for Email & Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Email */}
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-bold text-slate-700">Business Email</label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            {...register("email")}
                            className="border-sky-100 focus-visible:ring-sky-500 rounded-xl"
                          />
                          {errors.email && (
                            <p className="text-xs text-red-500 font-semibold">{errors.email.message}</p>
                          )}
                        </div>

                        {/* Company */}
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-bold text-slate-700">Company Name</label>
                          <Input
                            id="company"
                            placeholder="Acme Inc."
                            {...register("company")}
                            className="border-sky-100 focus-visible:ring-sky-500 rounded-xl"
                          />
                          {errors.company && (
                            <p className="text-xs text-red-500 font-semibold">{errors.company.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Website */}
                      <div className="space-y-2">
                        <label htmlFor="website" className="text-sm font-bold text-slate-700">Company Website (Optional)</label>
                        <Input
                          id="website"
                          placeholder="https://acme.com"
                          {...register("website")}
                          className="border-sky-100 focus-visible:ring-sky-500 rounded-xl"
                        />
                        {errors.website && (
                          <p className="text-xs text-red-500 font-semibold">{errors.website.message}</p>
                        )}
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-bold text-slate-700">How can Silkpay help your business?</label>
                        <Textarea
                          id="message"
                          rows={4}
                          placeholder="Tell us about your digital products, monthly transaction volume, target markets, or migration needs..."
                          {...register("message")}
                          className="border-sky-100 focus-visible:ring-sky-500 rounded-xl resize-none"
                        />
                        {errors.message && (
                          <p className="text-xs text-red-500 font-semibold">{errors.message.message}</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-6 rounded-xl shadow-lg shadow-sky-600/10 hover:scale-[1.01] active:scale-[0.99] transition-all"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-1.5">
                            <Sparkles className="w-5 h-5" /> Submit Inquiry
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
