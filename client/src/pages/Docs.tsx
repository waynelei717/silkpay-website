/**
 * DESIGN SYSTEM: Neo-Oceanic Minimalism (新海洋极简主义)
 * Silkpay Documentation Page - showcasing the robust API endpoints
 */

import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Terminal, 
  Cpu, 
  Key, 
  Webhook, 
  BookOpen, 
  Play, 
  Code, 
  Shield, 
  CheckCircle,
  Copy,
  Check
} from "lucide-react";
import { toast } from "sonner";

export default function Docs() {
  const [activeTab, setActiveTab] = useState("payin");
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    toast.success("Code block copied to clipboard!");
    setTimeout(() => setCopiedText(""), 2000);
  };

  // API reference content
  const apiEndpoints = {
    payin: {
      title: "Pay-in (收单) API",
      desc: "Process standard card checkouts, create dynamic payment intents, securely tokenize cards, or accept cryptocurrencies globally.",
      endpoints: [
        {
          method: "POST",
          path: "/v1/checkout/sessions",
          desc: "Create a hosted checkout session to redirect customers to a secure payment page.",
          request: `curl -X POST https://api.silkpay.com/v1/checkout/sessions \\
  -H "Authorization: Bearer sk_live_silkpay_123456" \\
  -H "Content-Type: application/json" \\
  -d '{
    "success_url": "https://yoursite.com/success",
    "cancel_url": "https://yoursite.com/cancel",
    "customer_email": "customer@example.com",
    "line_items": [
      {
        "price_data": {
          "currency": "usd",
          "product_data": {
            "name": "AI SaaS Pro Subscription"
          },
          "unit_amount": 2900,
          "recurring": { "interval": "month" }
        },
        "quantity": 1
      }
    ]
  }'`,
          response: `{
  "id": "cs_live_987654321",
  "object": "checkout.session",
  "url": "https://checkout.silkpay.com/pay/cs_live_987654321",
  "status": "open",
  "payment_status": "unpaid",
  "currency": "usd",
  "amount_total": 2900
}`
        },
        {
          method: "POST",
          path: "/v1/payment_intents",
          desc: "Create a Payment Intent to orchestrate custom checkout flows in your own frontend UI.",
          request: `curl -X POST https://api.silkpay.com/v1/payment_intents \\
  -H "Authorization: Bearer sk_live_silkpay_123456" \\
  -d "amount=4900" \\
  -d "currency=usd" \\
  -d "payment_method_types[]=card"`,
          response: `{
  "id": "pi_live_abc123xyz",
  "object": "payment_intent",
  "amount": 4900,
  "currency": "usd",
  "status": "requires_payment_method",
  "client_secret": "pi_live_abc123xyz_secret_999"
}`
        }
      ]
    },
    subscription: {
      title: "Subscription (订阅) API",
      desc: "Manage flexible subscription plans, trial tiers, automatic renewals, and churn recovery smart-retries.",
      endpoints: [
        {
          method: "POST",
          path: "/v1/plans",
          desc: "Create a subscription billing plan with customizable intervals and trial periods.",
          request: `curl -X POST https://api.silkpay.com/v1/plans \\
  -H "Authorization: Bearer sk_live_silkpay_123456" \\
  -d "name=Premium Plan" \\
  -d "amount=9900" \\
  -d "currency=usd" \\
  -d "interval=month" \\
  -d "trial_period_days=14"`,
          response: `{
  "id": "plan_premium_99",
  "object": "plan",
  "name": "Premium Plan",
  "amount": 9900,
  "currency": "usd",
  "interval": "month",
  "trial_period_days": 14,
  "created_at": 1780650313
}`
        }
      ]
    },
    payout: {
      title: "Pay-out (代付) API",
      desc: "Execute mass payments or individual payouts to bank accounts and digital wallets worldwide.",
      endpoints: [
        {
          method: "POST",
          path: "/v1/payouts",
          desc: "Initiate a payout to a pre-authorized bank account or digital wallet.",
          request: `curl -X POST https://api.silkpay.com/v1/payouts \\
  -H "Authorization: Bearer sk_live_silkpay_123456" \\
  -d "amount=50000" \\
  -d "currency=usd" \\
  -d "destination=ba_live_99887766" \\
  -d "description=Developer revenue share"`,
          response: `{
  "id": "po_live_55443322",
  "object": "payout",
  "amount": 50000,
  "currency": "usd",
  "status": "pending",
  "destination": "ba_live_99887766",
  "arrival_expected_at": 1780736713
}`
        }
      ]
    }
  };

  return (
    <Layout>
      {/* Background Glows */}
      <div className="mesh-glow top-10 left-10" />
      <div className="mesh-glow bottom-40 right-10" />

      {/* Hero Section */}
      <section className="pt-16 pb-12 border-b border-sky-50 bg-slate-50/30">
        <div className="container text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="border-sky-200 text-sky-700 bg-sky-50 mb-4 px-3 py-1 font-semibold">
            Developer Documentation
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
            Build with Silkpay API
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Integrate global payment processing, automated MoR tax compliance, and smart recurring billing into your SaaS or application with just a few lines of code.
          </p>
        </div>
      </section>

      {/* Main Documentation Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sidebar Menu */}
            <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-28">
              <div className="text-left space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Get Started</h3>
                <div className="flex flex-col gap-1">
                  <Button variant="ghost" className="justify-start text-sky-600 bg-sky-50/50 font-semibold rounded-xl">
                    <BookOpen className="w-4 h-4 mr-2" /> API Overview
                  </Button>
                  <Button variant="ghost" className="justify-start text-slate-600 hover:text-sky-600 hover:bg-sky-50/30 font-semibold rounded-xl">
                    <Key className="w-4 h-4 mr-2" /> Authentication
                  </Button>
                  <Button variant="ghost" className="justify-start text-slate-600 hover:text-sky-600 hover:bg-sky-50/30 font-semibold rounded-xl">
                    <Webhook className="w-4 h-4 mr-2" /> Webhooks
                  </Button>
                </div>
              </div>

              <div className="text-left space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">API Core Modules</h3>
                <div className="flex flex-col gap-1">
                  <Button 
                    variant="ghost" 
                    onClick={() => setActiveTab("payin")}
                    className={`justify-start font-semibold rounded-xl ${activeTab === "payin" ? "text-sky-600 bg-sky-50/50" : "text-slate-600 hover:text-sky-600 hover:bg-sky-50/30"}`}
                  >
                    <Code className="w-4 h-4 mr-2" /> Pay-in (收单)
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={() => setActiveTab("subscription")}
                    className={`justify-start font-semibold rounded-xl ${activeTab === "subscription" ? "text-sky-600 bg-sky-50/50" : "text-slate-600 hover:text-sky-600 hover:bg-sky-50/30"}`}
                  >
                    <Code className="w-4 h-4 mr-2" /> Subscription (订阅)
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={() => setActiveTab("payout")}
                    className={`justify-start font-semibold rounded-xl ${activeTab === "payout" ? "text-sky-600 bg-sky-50/50" : "text-slate-600 hover:text-sky-600 hover:bg-sky-50/30"}`}
                  >
                    <Code className="w-4 h-4 mr-2" /> Pay-out (代付)
                  </Button>
                </div>
              </div>

              {/* Developer Environment Box */}
              <div className="bg-sky-50/50 border border-sky-100/50 rounded-2xl p-5 text-left space-y-3">
                <div className="flex items-center gap-2 text-sky-700">
                  <Terminal className="w-4 h-4" />
                  <span className="font-bold text-xs uppercase tracking-wider">Sandbox Environment</span>
                </div>
                <p className="text-xs text-sky-800 leading-relaxed">
                  We provide a mirrored <strong>Sandbox Console</strong> (sandbox.silkpay.com) for development. Test all API requests and webhook flows using simulated card numbers.
                </p>
                <a href="https://sandbox.silkpay.com" target="_blank" rel="noreferrer">
                  <Button size="sm" className="w-full bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold py-1 rounded-lg">
                    Launch Sandbox <Play className="w-3 h-3 ml-1" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Interactive Code Panel */}
            <div className="lg:col-span-9 space-y-12">
              {Object.entries(apiEndpoints).map(([key, section]) => {
                if (activeTab !== key) return null;
                return (
                  <div key={key} className="space-y-8 text-left animate-in fade-in duration-300">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">{section.title}</h2>
                      <p className="text-slate-600 text-base">{section.desc}</p>
                    </div>

                    {/* Endpoints details */}
                    <div className="space-y-10">
                      {section.endpoints.map((endpoint, index) => (
                        <div key={index} className="space-y-4 border-b border-slate-100 pb-10 last:border-b-0">
                          {/* Method & Path Header */}
                          <div className="flex flex-wrap items-center gap-3">
                            <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-2.5 py-1 rounded-md">
                              {endpoint.method}
                            </Badge>
                            <span className="font-mono text-base font-bold text-slate-800 bg-slate-50 border border-slate-100 px-3 py-1 rounded-lg">
                              {endpoint.path}
                            </span>
                            <span className="text-slate-500 text-sm font-medium">{endpoint.desc}</span>
                          </div>

                          {/* Code Blocks Grid (Request & Response) */}
                          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                            {/* Request Code */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
                                <span>Request Example (cURL)</span>
                                <button 
                                  onClick={() => handleCopy(endpoint.request)}
                                  className="hover:text-sky-600 flex items-center gap-1 transition-colors"
                                >
                                  {copiedText === endpoint.request ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                                  {copiedText === endpoint.request ? "Copied" : "Copy"}
                                </button>
                              </div>
                              <pre className="bg-slate-900 text-sky-100 p-5 rounded-2xl overflow-x-auto font-mono text-xs leading-relaxed border border-slate-800 shadow-lg shadow-black/5">
                                {endpoint.request}
                              </pre>
                            </div>

                            {/* Response Code */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
                                <span>Response (JSON)</span>
                                <button 
                                  onClick={() => handleCopy(endpoint.response)}
                                  className="hover:text-sky-600 flex items-center gap-1 transition-colors"
                                >
                                  {copiedText === endpoint.response ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                                  {copiedText === endpoint.response ? "Copied" : "Copy"}
                                </button>
                              </div>
                              <pre className="bg-slate-900 text-emerald-300 p-5 rounded-2xl overflow-x-auto font-mono text-xs leading-relaxed border border-slate-800 shadow-lg shadow-black/5">
                                {endpoint.response}
                              </pre>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Security Certification Section */}
      <section className="bg-slate-50/50 py-16 border-t border-sky-100/50">
        <div className="container">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">PCI-DSS Level 1</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Complete tokenization of card holder data ensuring highest standards of global security compliance.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">99.99% Uptime</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Multi-region payment processing servers guaranteeing your checkout page is always online.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
                <Terminal className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Sandbox Mode</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Test entire billing, customer checkout, and webhook lifecycle without triggering actual card transactions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
