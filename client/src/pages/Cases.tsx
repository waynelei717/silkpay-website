/**
 * DESIGN SYSTEM: Neo-Oceanic Minimalism (Neo-Oceanic Minimalism)
 * Silkpay Cases Page
 */

import React from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, CheckCircle, TrendingUp, Users, Globe } from "lucide-react";

export default function Cases() {
  const cases = [
    {
      company: "Aether AI",
      industry: "AI SaaS & LLM Services",
      logoLetter: "A",
      logoColor: "from-purple-500 to-indigo-500",
      quote: "Silkpay's MoR checkout simplified our global launch. We didn't have to spend months understanding European VAT and US Sales Tax. Everything just works.",
      author: "Dr. Sarah Chen",
      role: "Founder & CEO",
      metrics: [
        { label: "MRR Growth", value: "+145%", icon: TrendingUp },
        { label: "Countries Covered", value: "120+", icon: Globe },
        { label: "Billing Setup Time", value: "3 Days", icon: Users }
      ],
      solution: "Integrated Silkpay Hosted Checkout with dynamic pricing based on user regions. Leveraged the built-in automatic VAT/GST handling to completely offload tax liabilities."
    },
    {
      company: "PixelStream Studio",
      industry: "Interactive Games & Assets",
      logoLetter: "P",
      logoColor: "from-pink-500 to-rose-500",
      quote: "We serve players in over 80 countries. Silkpay's ability to accept localized cards and alternative payments increased our checkout conversion rate by 28%.",
      author: "Marcus Vance",
      role: "VP of Operations",
      metrics: [
        { label: "Checkout Conv.", value: "+28%", icon: TrendingUp },
        { label: "Chargeback Rate", value: "<0.1%", icon: Globe },
        { label: "Active Players", value: "2.4M", icon: Users }
      ],
      solution: "Embedded Silkpay's lightweight Checkout overlay into their game launcher, allowing in-game purchases without redirecting players to an external browser."
    },
    {
      company: "EduSphere",
      industry: "Online Courses & Education",
      logoLetter: "E",
      logoColor: "from-emerald-500 to-teal-500",
      quote: "Managing recurring subscriptions for our students used to be a nightmare with high failure rates. Silkpay's smart retry system recovered 18% of our churn.",
      author: "Elena Rostova",
      role: "Head of Product",
      metrics: [
        { label: "Churn Recovered", value: "18%", icon: TrendingUp },
        { label: "Annual Revenue", value: "$4.2M", icon: Globe },
        { label: "Active Students", value: "45K", icon: Users }
      ],
      solution: "Utilized Silkpay's Subscription API to manage course plans. Integrated the intelligent renewal retry mechanism to dynamically handle failed payments."
    }
  ];

  return (
    <Layout>
      {/* Background Glows */}
      <div className="mesh-glow top-40 left-10" />
      <div className="mesh-glow bottom-20 right-10" />

      {/* Hero Section */}
      <section className="pt-16 pb-20 border-b border-sky-50 bg-slate-50/30">
        <div className="container text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="border-sky-200 text-sky-700 bg-sky-50 mb-4 px-3 py-1 font-semibold">
            Customer Success Cases
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
            Trusted by Digital Pioneers Globally
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            See how SaaS developers, game studios, and digital content creators leverage Silkpay's global payment solutions to drive growth, streamline tax operations, and scale.
          </p>
        </div>
      </section>

      {/* Cases List */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="space-y-20 lg:space-y-32">
            {cases.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Left Column: Metrics & Info */}
                  <div className={`lg:col-span-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}>
                    {/* Company Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.logoColor} flex items-center justify-center text-white font-extrabold text-2xl shadow-md`}>
                        {item.logoLetter}
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-slate-900">{item.company}</h3>
                        <p className="text-sm font-semibold text-sky-600">{item.industry}</p>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {item.metrics.map((metric, idx) => {
                        const MetricIcon = metric.icon;
                        return (
                          <div key={idx} className="bg-sky-50/50 border border-sky-100/50 rounded-xl p-4 text-center">
                            <MetricIcon className="w-5 h-5 text-sky-500 mx-auto mb-2" />
                            <p className="text-xl font-extrabold text-slate-900">{metric.value}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{metric.label}</p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Solution Description */}
                    <div className="bg-white border border-slate-100 rounded-xl p-6">
                      <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wider">The Solution</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.solution}</p>
                    </div>
                  </div>

                  {/* Right Column: Quote Card */}
                  <div className={`lg:col-span-7 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}>
                    <Card className="glacier-card border-0 p-8 sm:p-10 relative overflow-hidden h-full flex flex-col justify-center">
                      <Quote className="absolute top-8 right-8 w-20 h-20 text-sky-500/5 pointer-events-none" />
                      
                      <blockquote className="text-xl sm:text-2xl font-medium text-slate-800 leading-relaxed mb-8 relative z-10">
                        "{item.quote}"
                      </blockquote>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold text-sm">
                          {item.author[0]}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-base">{item.author}</p>
                          <p className="text-xs font-semibold text-slate-400">{item.role}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-sky-50/50 py-20 border-t border-sky-100/50">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Join hundreds of scaling global companies
          </h2>
          <p className="text-slate-600 mb-8">
            Set up virtual payment gateways, subscription plans, and secure MoR checkouts in hours, not weeks.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/docs">
              <Button className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-8 py-6 rounded-xl shadow-lg shadow-sky-600/10">
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50 font-bold px-8 py-6 rounded-xl">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
