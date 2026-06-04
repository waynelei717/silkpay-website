/**
 * DESIGN SYSTEM: Neo-Oceanic Minimalism (新海洋极简主义)
 * Silkpay Homepage - replicating buzipay.com content and layout
 */

import React from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  Globe, 
  Cpu, 
  Smartphone, 
  Monitor, 
  Gamepad2, 
  GraduationCap, 
  FileText,
  Lock,
  Percent,
  Sparkles
} from "lucide-react";

export default function Home() {
  // Service groups cards content
  const whoWeServe = [
    {
      title: "AI SaaS Solutions",
      description: "Provide complete subscription management, seamless checkout flows, and tailored B2B revenue optimization tools to grow your MRR.",
      icon: Cpu,
      badge: "AI SaaS解决方案",
    },
    {
      title: "Mobile Applications",
      description: "Support in-app subscriptions, recurring billing, and single purchases. Scale your mobile user growth and global revenue easily.",
      icon: Smartphone,
      badge: "移动应用",
    },
    {
      title: "Desktop Software",
      description: "Flexible one-time or recurring billing options. Out-of-the-box integration with mainstream license key authorization systems.",
      icon: Monitor,
      badge: "桌面软件",
    },
    {
      title: "Interactive Games",
      description: "Direct-to-player checkout. Accept local payments globally and seamlessly integrate with your existing game store or client.",
      icon: Gamepad2,
      badge: "互动游戏",
    },
    {
      title: "Online Education & Courses",
      description: "Host courses on self-built platforms or systems. Process global card payments with extremely low operational and gateway fees.",
      icon: GraduationCap,
      badge: "在线教育与课程",
    },
    {
      title: "Digital Products",
      description: "Sell e-books, design assets, audio/video media files, and more. A fully-managed, incredibly easy-to-use checkout platform.",
      icon: FileText,
      badge: "数字产品",
    },
  ];

  // Core values content
  const coreValues = [
    {
      title: "Accelerate Business Growth",
      subtitle: "加速业务增长",
      description: "Boost your customer lifetime value and recurring revenue with powerful up-sell tools, flexible multi-tier subscription plans, and dynamic trial models. Silkpay is built to maximize your global conversion rates.",
      details: [
        "Dynamic smart checkout with local payment methods",
        "Intelligent retry logic for failed subscription renewals",
        "Seamless cross-selling and coupon campaign tools"
      ],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482574470/Exv8FcWMEtBrqH2LABSRC2/payment_flow-6zyhqngnK9XkAobQHvFYDt.webp",
      icon: TrendingUp
    },
    {
      title: "One-Stop Tax Compliance (MoR Mode)",
      subtitle: "一站式税务合规",
      description: "Operate as your global Merchant of Record (MoR). We take full legal, financial, and tax liability for sales in over 100+ countries. Sell globally without setting up complex local entities.",
      details: [
        "Automatic calculations, filing, and remittance of VAT/GST/Sales Tax",
        "Complete compliance with global digital product tax laws",
        "No local entity setup required in overseas markets"
      ],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482574470/Exv8FcWMEtBrqH2LABSRC2/mor_compliance-hM6N93yrBHA6hnycJr9v7B.webp",
      icon: Globe
    },
    {
      title: "Global Risk & Fraud Management",
      subtitle: "全球风险管控",
      description: "Rest easy with advanced built-in fraud prevention systems, proactive chargeback dispute management, and complete regulatory compliance. We keep your funds and customer data completely secure.",
      details: [
        "Advanced machine-learning anti-fraud engine",
        "Automated chargeback dispute handling and evidence filing",
        "Strict PCI-DSS Level 1 security and secure data tokenization"
      ],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482574470/Exv8FcWMEtBrqH2LABSRC2/hero_background-SbJaiZYP5bXT5dYXeCR7GA.webp",
      icon: Shield
    }
  ];

  return (
    <Layout>
      {/* Background Glows */}
      <div className="mesh-glow top-20 left-10" />
      <div className="mesh-glow top-[1200px] right-10" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-36 border-b border-sky-50">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Trust Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Secure", "Trustworthy", "Efficient", "Simple"].map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="bg-sky-50/80 text-sky-700 hover:bg-sky-100/80 border border-sky-100/50 px-3 py-1 text-xs font-semibold rounded-full"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-1.5 inline-block"></span>
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Silkpay: Your Virtual <br />
                <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                  Payment Solutions
                </span> <br />
                Provider
              </h1>

              {/* Subheading / Copy */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                Replicating the industry's most robust global virtual payment and Merchant of Record (MoR) model. Sell your SaaS, apps, games, and digital products globally with automated taxes, zero friction, and instant scaling.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/docs">
                  <Button size="lg" className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-bold text-base px-8 py-6 rounded-xl shadow-xl shadow-sky-600/20 hover:shadow-sky-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-sky-200 text-sky-700 hover:bg-sky-50/50 font-bold text-base px-8 py-6 rounded-xl transition-all">
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Trust Badge / Features list */}
              <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  No Hidden Fees
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  100% Tax Compliant
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  Instant Activation
                </div>
              </div>
            </div>

            {/* Right Abstract Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Glow */}
                <div className="absolute -inset-4 bg-sky-500/10 rounded-full blur-3xl" />
                
                {/* Hero Main Image (Rendered wave) */}
                <div className="relative rounded-2xl overflow-hidden border border-sky-100/50 shadow-2xl shadow-sky-500/10">
                  <img 
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482574470/Exv8FcWMEtBrqH2LABSRC2/hero_background-SbJaiZYP5bXT5dYXeCR7GA.webp" 
                    alt="Silkpay Flow Background" 
                    className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Glass Widget */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-md border border-white/40 p-4 rounded-xl shadow-lg flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center text-white">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">MoR Merchant Model</p>
                      <p className="text-sm font-bold text-slate-800">Global tax & fraud handled automatically</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Who Silkpay Serves */}
      <section className="py-20 lg:py-32 bg-slate-50/50 relative border-b border-sky-50">
        <div className="container">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Who Silkpay Serves</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Empowering Digital Businesses Worldwide
            </h3>
            <p className="text-slate-600 text-base sm:text-lg">
              Silkpay provides robust, scalable virtual payment checkout and Merchant of Record solutions tailored to six core digital industries.
            </p>
          </div>

          {/* Grid Cards (2x3 or 1x3 depending on screen) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whoWeServe.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="glacier-card group overflow-hidden border-0">
                  <CardContent className="p-8 flex flex-col items-start text-left h-full">
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Chinese Translation Sub-badge */}
                    <Badge variant="outline" className="border-sky-100 text-sky-600 bg-sky-50/30 text-xs mb-3 font-medium">
                      {item.badge}
                    </Badge>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section: Core Value Propositions */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="container">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-3">Silkpay Powers Your Business</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Our Core Value Propositions
            </h3>
            <p className="text-slate-600 text-base sm:text-lg">
              Scale without borders. Silkpay takes care of everything from local acquirers to global compliance, so you can focus on building products.
            </p>
          </div>

          {/* Value rows */}
          <div className="space-y-24 lg:space-y-36">
            {coreValues.map((val, index) => {
              const IconComponent = val.icon;
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Column */}
                  <div className={`lg:col-span-6 flex flex-col items-start text-left ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}>
                    {/* Icon Header */}
                    <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 mb-6">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Chinese Subtitle */}
                    <span className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-2">
                      {val.subtitle}
                    </span>

                    {/* Title */}
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                      {val.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-600 text-base leading-relaxed mb-6">
                      {val.description}
                    </p>

                    {/* Feature bullet list */}
                    <ul className="space-y-3">
                      {val.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 font-medium">
                          <CheckCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}>
                    <div className="relative rounded-2xl overflow-hidden border border-sky-100/30 shadow-xl bg-slate-50">
                      <img 
                        src={val.image} 
                        alt={val.title} 
                        className="w-full h-auto object-cover aspect-[4/3] hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-gradient-to-tr from-sky-900 via-sky-800 to-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
        {/* Glow lines */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-sky-400 via-transparent to-transparent" />
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Ready to scale your digital business worldwide?
          </h2>
          <p className="text-sky-100/80 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Get started with Silkpay virtual payment solutions in minutes. Integrate our hosted checkout or flexible subscription API today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/docs">
              <Button size="lg" className="bg-white hover:bg-sky-50 text-sky-900 font-bold text-base px-8 py-6 rounded-xl shadow-xl shadow-black/10 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-sky-400/50 text-white hover:bg-sky-800/50 font-bold text-base px-8 py-6 rounded-xl transition-all">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
