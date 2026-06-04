import React from "react";

// Shared Gradients Definition to be injected in the SVGs
export const IconGradients = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      {/* Primary Ocean Gradient */}
      <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0EA5E9" /> {/* sky-500 */}
        <stop offset="100%" stopColor="#0284C7" /> {/* sky-600 */}
      </linearGradient>

      {/* Cyan/Aqua Gradient */}
      <linearGradient id="aquaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" /> {/* sky-400 */}
        <stop offset="100%" stopColor="#06B6D4" /> {/* cyan-500 */}
      </linearGradient>

      {/* Dark Oceanic Gradient */}
      <linearGradient id="deepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0F172A" /> {/* slate-900 */}
        <stop offset="100%" stopColor="#1E293B" /> {/* slate-800 */}
      </linearGradient>

      {/* Soft Glow Gradient */}
      <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.8" /> {/* sky-100 */}
        <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.2" /> {/* sky-200 */}
      </linearGradient>
    </defs>
  </svg>
);

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

// 1. AI SaaS Icon: Neural/Chip/AI Hub with floating nodes
export const AiSaaSIcon = ({ className = "w-12 h-12", ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} {...props}>
    {/* Glow Background */}
    <circle cx="24" cy="24" r="20" fill="url(#glowGrad)" />
    
    {/* Neural Network Nodes */}
    <path d="M12 24H36M24 12V36" stroke="url(#aquaGrad)" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.6" />
    <path d="M15 15L33 33M15 33L33 15" stroke="url(#aquaGrad)" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.6" />

    {/* Central Smart Chip */}
    <rect x="16" y="16" width="16" height="16" rx="4" fill="url(#oceanGrad)" stroke="#FFFFFF" strokeWidth="1.5" />
    
    {/* Chip Pins */}
    <path d="M20 12V16M24 12V16M28 12V16M20 32V36M24 32V36M28 32V36M12 20H16M12 24H16M12 28H16M32 20H36M32 24H36M32 28H36" stroke="url(#oceanGrad)" strokeWidth="1.5" strokeLinecap="round" />

    {/* AI Sparkles */}
    <path d="M24 21L25 24L28 25L25 26L24 29L23 26L20 25L23 24L24 21Z" fill="#FFFFFF" />
    
    {/* Active Outer Node */}
    <circle cx="12" cy="24" r="3" fill="url(#aquaGrad)" stroke="#FFFFFF" strokeWidth="1" />
    <circle cx="36" cy="24" r="3" fill="url(#aquaGrad)" stroke="#FFFFFF" strokeWidth="1" />
    <circle cx="24" cy="12" r="3" fill="url(#aquaGrad)" stroke="#FFFFFF" strokeWidth="1" />
    <circle cx="24" cy="36" r="3" fill="url(#aquaGrad)" stroke="#FFFFFF" strokeWidth="1" />
  </svg>
);

// 2. Mobile Applications Icon: Phone with payment card emerging
export const MobileAppsIcon = ({ className = "w-12 h-12", ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} {...props}>
    {/* Glow Background */}
    <circle cx="24" cy="24" r="20" fill="url(#glowGrad)" />

    {/* Smartphone Frame */}
    <rect x="15" y="8" width="18" height="32" rx="4" fill="url(#deepGrad)" stroke="#FFFFFF" strokeWidth="1.5" />
    
    {/* Screen Area */}
    <rect x="17" y="11" width="14" height="23" rx="2" fill="#FFFFFF" opacity="0.15" />

    {/* Floating Payment Card emerging from screen */}
    <g filter="drop-shadow(0px 2px 4px rgba(14, 165, 233, 0.3))">
      <rect x="21" y="16" width="18" height="12" rx="2" fill="url(#oceanGrad)" stroke="#FFFFFF" strokeWidth="1" />
      <circle cx="25" cy="20" r="1.5" fill="#FFFFFF" opacity="0.8" />
      <line x1="29" y1="20" x2="35" y2="20" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="25" y1="24" x2="31" y2="24" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    </g>

    {/* Phone Details */}
    <line x1="22" y1="9.5" x2="26" y2="9.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    <circle cx="24" cy="36" r="1.5" fill="#FFFFFF" opacity="0.6" />
  </svg>
);

// 3. Desktop Software Icon: Monitor with licensing window and terminal
export const DesktopSoftwareIcon = ({ className = "w-12 h-12", ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} {...props}>
    {/* Glow Background */}
    <circle cx="24" cy="24" r="20" fill="url(#glowGrad)" />

    {/* Monitor Frame */}
    <rect x="10" y="10" width="28" height="20" rx="3" fill="url(#deepGrad)" stroke="#FFFFFF" strokeWidth="1.5" />
    
    {/* Screen Reflection / Area */}
    <path d="M11 11H37V24H11V11Z" fill="#FFFFFF" opacity="0.05" />

    {/* Stand */}
    <path d="M21 30H27L29 36H19L21 30Z" fill="url(#deepGrad)" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="16" y1="36" x2="32" y2="36" stroke="url(#deepGrad)" strokeWidth="1.5" strokeLinecap="round" />

    {/* Floating Code/License Window */}
    <g filter="drop-shadow(0px 2px 4px rgba(14, 165, 233, 0.25))">
      <rect x="18" y="14" width="22" height="14" rx="2" fill="url(#oceanGrad)" stroke="#FFFFFF" strokeWidth="1" />
      {/* Window Controls */}
      <circle cx="21.5" cy="17.5" r="1" fill="#FF5F56" />
      <circle cx="24.5" cy="17.5" r="1" fill="#FFBD2E" />
      <circle cx="27.5" cy="17.5" r="1" fill="#27C93F" />
      
      {/* Code Lines */}
      <line x1="21.5" y1="21" x2="35.5" y2="21" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      <line x1="21.5" y1="24" x2="31.5" y2="24" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
    </g>

    {/* Key Symbol on Software Screen */}
    <path d="M14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 16.7613 17.5772 17.4241 16.9583 17.7639L17 21H15V19.5H14V18H15.0417C14.4228 17.4241 14 16.7613 14 16Z" fill="url(#aquaGrad)" />
  </svg>
);

// 4. Interactive Games Icon: Controller with floating payment gems
export const InteractiveGamesIcon = ({ className = "w-12 h-12", ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} {...props}>
    {/* Glow Background */}
    <circle cx="24" cy="24" r="20" fill="url(#glowGrad)" />

    {/* Gamepad shape */}
    <path d="M12 16H36C39.3137 16 42 18.6863 42 22V28C42 31.3137 39.3137 34 36 34C34.5 34 33 33 32 31L29 27H19L16 31C15 33 13.5 34 12 34C8.68629 34 6 31.3137 6 28V22C6 18.6863 8.68629 16 12 16Z" fill="url(#deepGrad)" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />

    {/* D-Pad */}
    <path d="M12 22H14V24H16V26H14V28H12V26H10V24H12V22Z" fill="url(#aquaGrad)" />

    {/* Action Buttons */}
    <circle cx="34" cy="23" r="1.5" fill="#FFFFFF" />
    <circle cx="37" cy="26" r="1.5" fill="#FFFFFF" />
    <circle cx="31" cy="26" r="1.5" fill="#FFFFFF" />
    <circle cx="34" cy="29" r="1.5" fill="#FFFFFF" />

    {/* Floating Coin / Gem above controller */}
    <g filter="drop-shadow(0px 2px 4px rgba(14, 165, 233, 0.4))">
      <path d="M24 8L29 13L24 18L19 13L24 8Z" fill="url(#oceanGrad)" stroke="#FFFFFF" strokeWidth="1" />
      <path d="M24 10L27 13L24 16L21 13L24 10Z" fill="#FFFFFF" opacity="0.6" />
    </g>
  </svg>
);

// 5. Online Education Icon: Graduation cap and virtual payment track
export const OnlineEducationIcon = ({ className = "w-12 h-12", ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} {...props}>
    {/* Glow Background */}
    <circle cx="24" cy="24" r="20" fill="url(#glowGrad)" />

    {/* Open Book in background */}
    <path d="M12 26C12 22.5 18 21 24 24C30 21 36 22.5 36 26V36C36 32.5 30 31 24 34C18 31 12 32.5 12 36V26Z" fill="#FFFFFF" opacity="0.4" stroke="url(#oceanGrad)" strokeWidth="1" />

    {/* Cap Diamond */}
    <path d="M24 10L39 16L24 22L9 16L24 10Z" fill="url(#oceanGrad)" stroke="#FFFFFF" strokeWidth="1.5" />
    
    {/* Cap Skull base */}
    <path d="M15 20.5V25C15 28 19 30 24 30C29 30 33 28 33 25V20.5" fill="url(#deepGrad)" stroke="#FFFFFF" strokeWidth="1.5" />

    {/* Tassel */}
    <path d="M24 16L35 21V27" stroke="url(#aquaGrad)" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="35" cy="28" r="1.5" fill="url(#aquaGrad)" />

    {/* Certificate / Seal badge on the side */}
    <g filter="drop-shadow(0px 2px 4px rgba(6, 182, 212, 0.3))">
      <circle cx="33" cy="29" r="5" fill="url(#aquaGrad)" stroke="#FFFFFF" strokeWidth="1" />
      <path d="M31.5 29L32.5 30L35 27.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 6. Digital Products Icon: Overlapping documents with global growth/check
export const DigitalProductsIcon = ({ className = "w-12 h-12", ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} {...props}>
    {/* Glow Background */}
    <circle cx="24" cy="24" r="20" fill="url(#glowGrad)" />

    {/* Back Document */}
    <rect x="14" y="10" width="18" height="24" rx="2" fill="url(#deepGrad)" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.5" />

    {/* Front Document */}
    <rect x="18" y="14" width="18" height="24" rx="2" fill="#FFFFFF" stroke="url(#oceanGrad)" strokeWidth="1.5" />
    
    {/* Doc lines */}
    <line x1="22" y1="20" x2="32" y2="20" stroke="url(#oceanGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    <line x1="22" y1="24" x2="32" y2="24" stroke="url(#oceanGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    <line x1="22" y1="28" x2="28" y2="28" stroke="url(#oceanGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

    {/* Floating Download / Success Arrow */}
    <g filter="drop-shadow(0px 2px 4px rgba(14, 165, 233, 0.35))">
      <circle cx="32" cy="30" r="8" fill="url(#oceanGrad)" stroke="#FFFFFF" strokeWidth="1.5" />
      {/* Down arrow inside circle */}
      <path d="M32 26V32M32 32L29 29M32 32L35 29" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);
