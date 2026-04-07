import React, { useState } from "react";
import { motion } from "motion/react";
import { LucideIcon, ChevronDown } from "lucide-react";

// --- Bauhaus Buttons ---
export const BauhausButton = ({ 
  children, 
  variant = 'primary', 
  shape = 'square',
  className = "" 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'yellow' | 'outline' | 'ghost',
  shape?: 'square' | 'pill',
  className?: string
}) => {
  const baseStyles = "uppercase font-bold tracking-widest transition-all duration-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2 px-6 py-3 border-2 md:border-4 border-bauhaus-black";
  
  const variants = {
    primary: "bg-bauhaus-red text-white shadow-[4px_4px_0px_0px_#121212] hover:bg-bauhaus-red/90",
    secondary: "bg-bauhaus-blue text-white shadow-[4px_4px_0px_0px_#121212] hover:bg-bauhaus-blue/90",
    yellow: "bg-bauhaus-yellow text-bauhaus-black shadow-[4px_4px_0px_0px_#121212] hover:bg-bauhaus-yellow/90",
    outline: "bg-white text-bauhaus-black shadow-[4px_4px_0px_0px_#121212] hover:bg-gray-100",
    ghost: "border-none text-bauhaus-black hover:bg-gray-200 shadow-none active:translate-0"
  };

  const shapes = {
    square: "rounded-none",
    pill: "rounded-full"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${shapes[shape]} ${className}`}>
      {children}
    </button>
  );
};

// --- Bauhaus Cards ---
export const BauhausCard = ({ 
  title, 
  children, 
  accent = 'red',
  className = "" 
}: { 
  title: string, 
  children: React.ReactNode, 
  accent?: 'red' | 'blue' | 'yellow',
  className?: string,
  key?: React.Key
}) => {
  const accentColors = {
    red: "bg-bauhaus-red",
    blue: "bg-bauhaus-blue",
    yellow: "bg-bauhaus-yellow"
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className={`relative bg-white border-4 border-bauhaus-black shadow-[8px_8px_0px_0px_#121212] p-8 ${className}`}
    >
      <div className={`absolute top-4 right-4 w-4 h-4 ${accentColors[accent]} rounded-none`} />
      <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter leading-tight">{title}</h3>
      <div className="text-lg leading-relaxed text-gray-700">{children}</div>
    </motion.div>
  );
};

// --- Bauhaus Accordion ---
export const BauhausAccordion = ({ 
  items 
}: { 
  items: { question: string, answer: string }[] 
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="border-4 border-bauhaus-black shadow-[4px_4px_0px_0px_#121212] overflow-hidden">
          <button 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className={`w-full flex items-center justify-between p-6 text-left uppercase font-black tracking-tighter transition-colors duration-200 ${openIndex === idx ? 'bg-bauhaus-red text-white' : 'bg-white text-bauhaus-black'}`}
          >
            <span className="text-xl">{item.question}</span>
            <ChevronDown className={`w-8 h-8 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
          </button>
          <motion.div 
            initial={false}
            animate={{ height: openIndex === idx ? 'auto' : 0 }}
            className="overflow-hidden bg-bauhaus-yellow/10"
          >
            <div className="p-6 text-lg border-t-4 border-bauhaus-black leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

// --- Geometric Shapes Decor ---
export const GeometricDecor = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="absolute top-0 left-0 w-32 h-32 bg-bauhaus-red rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-48 h-48 bg-bauhaus-blue rounded-none opacity-10 rotate-45 translate-x-1/4 translate-y-1/4" />
    <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-bauhaus-yellow triangle-clip opacity-15 -translate-x-1/2 -translate-y-1/2 rotate-12" />
  </div>
);
