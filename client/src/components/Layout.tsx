/**
 * DESIGN SYSTEM: Neo-Oceanic Minimalism (新海洋极简主义)
 * Layout component for Silkpay website
 */

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Globe, Award, HelpCircle } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Cases", href: "/cases" },
    { name: "Contact Us", href: "/contact" },
    { name: "Documentation", href: "/docs" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Top Banner for Trust / Highlight */}
      <div className="bg-sky-50 text-sky-800 text-xs py-2 px-4 text-center font-medium border-b border-sky-100 z-50">
        <span className="inline-flex items-center gap-1">
          <Shield className="w-3.5 h-3.5" />
          Silkpay: Global Merchant of Record (MoR) with 100% Tax Compliance & Fraud Prevention.
        </span>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-sky-100/50 shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-xl tracking-tight">S</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-sky-700 to-sky-500 bg-clip-text text-transparent">
              Silkpay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-sky-600 ${
                    isActive ? "text-sky-600" : "text-slate-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50 font-semibold transition-all">
                Contact Sales
              </Button>
            </Link>
            <Link href="/docs">
              <Button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-lg shadow-sky-600/15 hover:shadow-sky-600/25 transition-all">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-sky-50 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-sky-100 shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-base font-semibold py-2 border-b border-slate-50 ${
                      isActive ? "text-sky-600" : "text-slate-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="w-full">
                <Button variant="outline" className="w-full border-sky-200 text-sky-700 hover:bg-sky-50 font-semibold">
                  Contact Sales
                </Button>
              </Link>
              <Link href="/docs" className="w-full">
                <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow relative">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand column */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white">
                  <span className="font-extrabold text-base">S</span>
                </div>
                <span className="font-extrabold text-xl text-white tracking-tight">Silkpay</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Silkpay is your premium global Merchant of Record (MoR) and payment solutions provider. We help digital businesses scale worldwide without administrative or tax burdens.
              </p>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Solutions</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="hover:text-sky-400 transition-colors">AI SaaS Payments</Link></li>
                <li><Link href="/" className="hover:text-sky-400 transition-colors">Mobile App Billing</Link></li>
                <li><Link href="/" className="hover:text-sky-400 transition-colors">Desktop Software License</Link></li>
                <li><Link href="/" className="hover:text-sky-400 transition-colors">Digital Products Store</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/docs" className="hover:text-sky-400 transition-colors">API Documentation</Link></li>
                <li><Link href="/docs" className="hover:text-sky-400 transition-colors">SDKs & Libraries</Link></li>
                <li><Link href="/cases" className="hover:text-sky-400 transition-colors">Customer Cases</Link></li>
                <li><Link href="/contact" className="hover:text-sky-400 transition-colors">Support & Help</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Legal & Compliance</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-sky-400" /> PCI-DSS Level 1 Secure</li>
                <li className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-sky-400" /> Global Tax MoR Compliance</li>
                <li className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-sky-400" /> SOC2 Audited</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Silkpay Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Cookies Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
