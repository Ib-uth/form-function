import { motion } from "motion/react";
import { 
  Circle, 
  Square, 
  Triangle, 
  Check, 
  Quote, 
  ArrowRight, 
  Menu, 
  X, 
  Layout, 
  Type, 
  Palette, 
  Zap, 
  Github, 
  Twitter, 
  Instagram 
} from "lucide-react";
import { useState } from "react";
import { BauhausButton, BauhausCard, BauhausAccordion, GeometricDecor } from "./components/BauhausComponents";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    { title: "Geometric Purity", icon: Circle, desc: "Every design element is derived from pure circles, squares, and triangles.", accent: 'red' },
    { title: "Primary Theory", icon: Palette, desc: "A strict adherence to the Bauhaus primary palette: Red, Blue, and Yellow.", accent: 'blue' },
    { title: "Constructivist", icon: Layout, desc: "Layouts are architectural compositions where form strictly follows function.", accent: 'yellow' },
  ];

  const stats = [
    { label: "Projects", value: "120+" },
    { label: "Awards", value: "45" },
    { label: "Shapes", value: "3" },
    { label: "Colors", value: "3" },
  ];

  const faqItems = [
    { question: "What is the Bauhaus philosophy?", answer: "The Bauhaus philosophy is centered around the idea that 'form follows function.' It seeks to combine fine arts with functional craftsmanship, emphasizing geometric simplicity and primary colors." },
    { question: "How do you apply this to modern web design?", answer: "We use constructivist grids, bold typography, and a limited color palette to create interfaces that are both artistic and highly functional, avoiding the clutter of generic modern design." },
    { question: "Can I customize the primary colors?", answer: "While we strictly follow the Bauhaus primaries by default, we can adapt the system to your brand's core palette while maintaining the geometric and structural principles." },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-bauhaus-yellow selection:text-bauhaus-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-bauhaus-white border-b-4 border-bauhaus-black px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="flex gap-1">
            <div className="w-6 h-6 rounded-full bg-bauhaus-red border-2 border-bauhaus-black group-hover:scale-110 transition-transform" />
            <div className="w-6 h-6 bg-bauhaus-blue border-2 border-bauhaus-black group-hover:rotate-45 transition-transform" />
            <div className="w-6 h-6 triangle-clip bg-bauhaus-yellow border-2 border-bauhaus-black group-hover:-translate-y-1 transition-transform" />
          </div>
          <span className="text-2xl font-black uppercase tracking-tighter">Form & Function</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Philosophy', 'Work', 'Process', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold uppercase tracking-widest hover:text-bauhaus-red transition-colors">
              {item}
            </a>
          ))}
          <BauhausButton variant="primary" shape="square" className="text-sm py-2 px-4">
            Contact
          </BauhausButton>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bauhaus-white flex flex-col items-center justify-center gap-8 p-8 md:hidden">
          {['Philosophy', 'Work', 'Process', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-black uppercase tracking-tighter hover:text-bauhaus-red transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] border-b-4 border-bauhaus-black overflow-hidden">
        <div className="p-8 sm:p-16 lg:p-24 flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-bauhaus-yellow px-4 py-1 border-2 border-bauhaus-black font-bold uppercase tracking-widest text-sm mb-6 shadow-[3px_3px_0px_0px_#121212]">
              Established 1919 / Reborn 2026
            </span>
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Form <br /> <span className="text-bauhaus-red">Follows</span> <br /> Function
            </h1>
            <p className="text-xl sm:text-2xl font-medium leading-relaxed max-w-xl mb-10">
              We build digital experiences through the lens of constructivist modernism. Pure geometry, primary colors, and architectural clarity.
            </p>
            <div className="flex flex-wrap gap-4">
              <BauhausButton variant="primary" className="px-8 py-4 text-xl">
                Start Project <ArrowRight className="w-6 h-6" />
              </BauhausButton>
              <BauhausButton variant="outline" className="px-8 py-4 text-xl">
                Our Manifesto
              </BauhausButton>
            </div>
          </motion.div>
        </div>

        <div className="bg-bauhaus-blue relative overflow-hidden flex items-center justify-center min-h-[400px] lg:min-h-full border-t-4 lg:border-t-0 lg:border-l-4 border-bauhaus-black">
          <div className="absolute inset-0 bauhaus-dot-grid" />
          
          {/* Abstract Geometric Composition */}
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 border-8 border-white rounded-full opacity-20" 
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-48 h-48 bg-bauhaus-red border-4 border-bauhaus-black shadow-[12px_12px_0px_0px_#121212]" 
            />
            <div className="absolute w-32 h-32 bg-bauhaus-yellow border-4 border-bauhaus-black -translate-x-12 translate-y-12 rotate-12" />
            <div className="absolute w-24 h-24 triangle-clip bg-white border-4 border-bauhaus-black translate-x-16 -translate-y-16 -rotate-12" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-bauhaus-yellow border-b-4 border-bauhaus-black">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-y-4 md:divide-y-0 md:divide-x-4 divide-bauhaus-black">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-12 flex flex-col items-center justify-center text-center group">
              <span className="text-6xl lg:text-8xl font-black uppercase tracking-tighter mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </span>
              <span className="text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="philosophy" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-b-4 border-bauhaus-black">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
              The <br /> <span className="text-bauhaus-blue">Modernist</span> <br /> Grid
            </h2>
            <p className="text-xl leading-relaxed text-gray-600 mb-8">
              We reject the organic and the ornate. Our work is grounded in the mathematical beauty of the grid and the purity of primary forms.
            </p>
            <div className="w-24 h-4 bg-bauhaus-red mb-2" />
            <div className="w-16 h-4 bg-bauhaus-blue mb-2" />
            <div className="w-32 h-4 bg-bauhaus-yellow" />
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <BauhausCard title={feature.title} accent={feature.accent as any}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 border-2 border-bauhaus-black bg-white shadow-[3px_3px_0px_0px_#121212]">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <p>{feature.desc}</p>
                  </div>
                </BauhausCard>
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-bauhaus-blue p-8 border-4 border-bauhaus-black shadow-[8px_8px_0px_0px_#121212] flex items-center justify-center relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bauhaus-dot-grid opacity-20" />
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 90 }}
                className="relative z-10 w-24 h-24 bg-white border-4 border-bauhaus-black flex items-center justify-center"
              >
                <ArrowRight className="w-12 h-12" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section (Red Color Block) */}
      <section id="work" className="bg-bauhaus-red text-white py-24 px-4 sm:px-8 border-b-4 border-bauhaus-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-bauhaus-yellow rounded-none opacity-20 -translate-x-1/2 translate-y-1/2 rotate-45" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter mb-16 text-center">
            Constructed <br /> For Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              "Unforgettable visual identity that stands out in a sea of generic SaaS design.",
              "Architectural clarity that guides users with mechanical precision.",
              "Bold primary colors that evoke emotion and command immediate attention."
            ].map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-bauhaus-yellow rounded-full border-4 border-bauhaus-black flex items-center justify-center mb-8 shadow-[6px_6px_0px_0px_#121212] group-hover:scale-110 transition-transform">
                  <Check className="w-10 h-10 text-bauhaus-black" />
                </div>
                <p className="text-2xl font-bold leading-tight uppercase tracking-tight">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (Rotated Elements) */}
      <section id="process" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-b-4 border-bauhaus-black">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black uppercase tracking-tighter mb-16"
        >
          The Process
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Analyze", color: "bg-bauhaus-red" },
            { step: "02", title: "Deconstruct", color: "bg-bauhaus-blue" },
            { step: "03", title: "Compose", color: "bg-bauhaus-yellow" },
            { step: "04", title: "Deploy", color: "bg-bauhaus-black" },
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pt-12 group"
            >
              <motion.div 
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 45 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: idx * 0.15 + 0.3 }}
                className={`absolute top-0 left-0 w-24 h-24 ${item.color} border-4 border-bauhaus-black flex items-center justify-center shadow-[4px_4px_0px_0px_#121212] group-hover:rotate-90 transition-transform duration-500`}
              >
                <span className={`text-3xl font-black -rotate-45 group-hover:-rotate-90 transition-transform duration-500 ${idx === 3 ? 'text-white' : 'text-bauhaus-black'}`}>
                  {item.step}
                </span>
              </motion.div>
              <div className="mt-16 p-6 border-4 border-bauhaus-black bg-white shadow-[6px_6px_0px_0px_#121212]">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">{item.title}</h3>
                <p className="text-gray-600">We break your vision down to its core geometric essence before rebuilding.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 sm:px-8 max-w-4xl mx-auto">
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-12 text-center">Questions</h2>
        <BauhausAccordion items={faqItems} />
      </section>

      {/* Final CTA (Yellow Color Block) */}
      <section className="bg-bauhaus-yellow py-24 px-4 sm:px-8 border-y-4 border-bauhaus-black relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-bauhaus-red rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-bauhaus-blue rounded-none opacity-20 translate-x-1/2 -translate-y-1/2 rotate-12" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
            Build <br /> The <br /> Future
          </h2>
          <p className="text-2xl font-bold uppercase tracking-tight mb-12">
            Ready to join the modernist revolution?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <BauhausButton variant="primary" className="w-full sm:w-auto px-12 py-6 text-2xl">
              Get Started
            </BauhausButton>
            <BauhausButton variant="outline" className="w-full sm:w-auto px-12 py-6 text-2xl">
              View Work
            </BauhausButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bauhaus-black text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex gap-1">
                <div className="w-6 h-6 rounded-full bg-bauhaus-red border-2 border-white" />
                <div className="w-6 h-6 bg-bauhaus-blue border-2 border-white" />
                <div className="w-6 h-6 triangle-clip bg-bauhaus-yellow border-2 border-white" />
              </div>
              <span className="text-3xl font-black uppercase tracking-tighter">Form & Function</span>
            </div>
            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
              A constructivist creative agency dedicated to the principles of geometric purity and functional honesty.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest mb-6 text-bauhaus-yellow">Navigation</h4>
            <ul className="space-y-4">
              {['Philosophy', 'Work', 'Process', 'FAQ', 'Manifesto'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase font-bold tracking-widest text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase tracking-widest mb-6 text-bauhaus-red">Connect</h4>
            <div className="flex gap-4">
              {[Twitter, Instagram, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 border-2 border-white hover:bg-white hover:text-bauhaus-black transition-all">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t-2 border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-500">
          <p>© 2026 Form & Function Studio. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
