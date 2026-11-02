'use client';

import React from 'react';

export default function BioPage() {
  const links = [
    {
      title: '🌐 زيارة الموقع الرسمي للأكاديمية',
      url: 'https://hodhod.academy/',
      highlight: false,
    },
    {
      title: '🎓 سجّل الآن في دورة التمكين المعرفي',
      url: 'https://whop.com/hodhod/ad9f9668-2805-49c6-b948-5',
      highlight: true,
    },
    {
      title: '💰 انضم لشراكة الآفيلييت (سوق لدوراتنا وشاركنا الأرباح)',
      url: 'https://whop.com/hodhod/affiliates/',
      highlight: false,
    },
    {
      title: '🤝 برنامج "ندربك ونشغلك معنا"',
      url: 'https://hodhod.academy/',
      highlight: false,
    },
    {
      title: '💬 تواصل معنا عبر الواتساب',
      url: 'https://wa.me/22226707025',
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-12 px-4 font-sans" dir="rtl">
      {/* الهيدر والشعار */}
      <div className="flex flex-col items-center mb-8 text-center max-w-md">
        <div className="w-24 h-24 rounded-full bg-teal-500/20 p-1 border-2 border-teal-400 mb-4 shadow-lg shadow-teal-500/20 flex items-center justify-center text-3xl font-bold text-teal-400">
          🦅
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Hodhod Academy | أكاديمية هدهد
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed px-2">
          روّاد منهاج التمكين المعرفي والاستخبار الذهني 🧠 مضاعفة الحفظ، تثبيت المعلومة، ومعالجة التشوش والخجل 🤝 ندربك ونؤهلك لتنضم معنا وتستفيد مادياً.
        </p>
      </div>

      {/* قائمة الأزرار */}
      <div className="w-full max-w-md space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full block text-center py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 border ${
              link.highlight
                ? 'bg-emerald-500 hover:bg-emerald-400 border-emerald-300 text-slate-950 animate-pulse shadow-lg shadow-emerald-500/30'
                : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-100 hover:border-slate-500'
            }`}
          >
            {link.title}
          </a>
        ))}
      </div>

      {/* الحقوق */}
      <footer className="mt-12 text-xs text-slate-500">
        © 2026 Hodhod Academy. All rights reserved.
      </footer>
    </div>
  );
}
