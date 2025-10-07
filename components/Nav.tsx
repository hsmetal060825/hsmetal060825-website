'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [lang, setLang] = useState<'zh'|'en'>('zh');
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
      <div className="text-lg font-semibold" style={{color:'var(--brand-blue)'}}>瀚森金屬工程有限公司</div>
      <nav className="hidden gap-6 md:flex text-sm">
        <a href="#services" className="hover:underline">{lang === 'zh' ? '服務項目' : 'Services'}</a>
        <a href="#projects" className="hover:underline">{lang === 'zh' ? '代表實績' : 'Projects'}</a>
        <a href="#about" className="hover:underline">{lang === 'zh' ? '關於我們' : 'About'}</a>
        <a href="#contact" className="hover:underline">{lang === 'zh' ? '聯絡我們' : 'Contact'}</a>
      </nav>
      <div className="flex items-center gap-3">
        <button onClick={()=>setLang(lang==='zh'?'en':'zh')} className="rounded-full border border-slate-300 px-3 py-1 text-sm">
          {lang==='zh' ? 'EN' : '中文'}
        </button>
        <a href="#contact" className="rounded-lg bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-95">
          {lang==='zh' ? '聯絡我們' : 'Contact'}
        </a>
      </div>
    </div>
  );
}
