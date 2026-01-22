import React, { useState } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { Location } from '@/app/components/Location';
import { About } from '@/app/components/About';
import { Footer } from '@/app/components/Footer';

export default function App() {
  const [lang, setLang] = useState<'EN' | 'ES'>('EN');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-blue-100 selection:text-[#0056D2]">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <About lang={lang} />
        <Location lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
