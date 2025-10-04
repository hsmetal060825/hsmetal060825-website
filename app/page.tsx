
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building2, Hammer, Layers, Ruler, Mail, Phone, MapPin } from "lucide-react";

const BRAND_BLUE = "#0B1E3A";
const BRAND_GOLD = "#D4AF37";

const zh = {
  nav: { services: "服務項目", projects: "代表實績", about: "關於我們", contact: "聯絡我們" },
  hero: { title: "金屬外牆．玻璃帷幕．鋁包板", subtitle: "十年以上大型商辦與科技廠房經驗｜品質準時雙保證", cta: "聯絡我們" },
  services: {
    title: "服務項目",
    items: [
      { icon:"Building2", name:"玻璃帷幕", desc:"高氣密/耐候設計，結合節能與景觀需求" },
      { icon:"Layers", name:"鋁板/金屬包板", desc:"雙層金屬板系統、氟碳塗裝、烤漆處理" },
      { icon:"Ruler", name:"不鏽鋼/金屬格柵", desc:"耐蝕等級選材，外觀與功能兼具" },
      { icon:"Hammer", name:"結構補強/整修", desc:"舊樓改裝、外牆更新、設計值審核" },
    ]
  },
  projects: "代表實績",
  about: { title: "關於我們", text: "瀚森金屬工程專精於金屬外牆與玻璃帷幕工程，從細部設計、shop drawing、材料選型到現場安裝，皆提供一站式服務。以深藍＋金色為品牌識別，代表穩重與品質承諾。" },
  contact: { title: "聯絡我們", address: "服務範圍：台北・新北・桃園・新竹・台中", email: "hsmetal060825@gmail.com", phone: "0985321566", message: "歡迎留下需求與圖說，我們將盡速與您聯繫。" }
};
const en = {
  nav: { services: "Services", projects: "Projects", about: "About", contact: "Contact" },
  hero: { title: "Metal Façade, Glass Curtain Wall & Aluminum Cladding", subtitle: "10+ years in office towers & science parks — on-time and on-quality", cta: "Contact Us" },
  services: {
    title: "Services",
    items: [
      { icon:"Building2", name:"Glass Curtain Wall", desc:"High air-tightness, weather resistance & energy saving" },
      { icon:"Layers", name:"Aluminum/Metal Cladding", desc:"Double-skin metal panels, PVDF/paint finishing" },
      { icon:"Ruler", name:"Stainless & Grilles", desc:"Corrosion-grade selection, aesthetics and function" },
      { icon:"Hammer", name:"Retrofit & Reinforcement", desc:"Renovation, recladding, design review support" },
    ]
  },
  projects: "Projects",
  about: { title: "About Us", text: "HS Metal specializes in metal façades and glass curtain walls. From detail design and shop drawings to material selection and on-site installation, we deliver an end-to-end service. The deep blue & gold palette stands for reliability and quality." },
  contact: { title: "Contact", address: "Service Area: Taipei, New Taipei, Taoyuan, Hsinchu, Taichung", email: "hsmetal060825@gmail.com", phone: "0985321566", message: "Leave your requirements and drawings — we’ll get back shortly." }
};

const projects = [
  { zh:"台元科技園區九期", en:"Taiyen Science Park Phase 9", img:"/images/taiyen.jpg", blurb_zh:"科技廠房｜鋁包板＋玻璃帷幕", blurb_en:"Tech facility — Aluminum + Glass" },
  { zh:"遠東百貨 A13", en:"Far Eastern A13", img:"/images/fareastA13.jpg", blurb_zh:"商辦百貨｜雙層金屬板", blurb_en:"Retail/Office — Double-skin metal" },
  { zh:"華南銀行土城", en:"Hua Nan Bank Tucheng", img:"/images/hnbank.jpg", blurb_zh:"辦公大樓｜鋁板＋玻璃帷幕", blurb_en:"Office tower — Aluminum + Glass" },
];

export default function Page() {
  const [lang, setLang] = useState<"zh"|"en">("zh");
  const t = lang==="zh"?zh:en;

  return (
    <main>
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-200">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{background:BRAND_GOLD}}/>
            <span className="text-sm font-semibold" style={{color:BRAND_BLUE}}>HS Metal</span>
          </div>
          <div className="hidden gap-5 md:flex">
            <a href="#services">{t.nav.services}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn btn-outline" onClick={()=>setLang(lang==="zh"?"en":"zh")}>{lang==="zh"?"EN":"中文"}</button>
            <a href="#contact"><button className="btn btn-gold">{t.hero.cta}</button></a>
          </div>
        </div>
      </nav>

      <header className="relative">
        <img src="/images/hero.jpg" alt="hero" className="h-[52vh] w-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(11,30,58,0.35)]" />
        <div className="container absolute inset-0 flex flex-col justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-semibold drop-shadow">{t.hero.title}</h1>
          <p className="mt-3 text-white/95 md:text-lg">{t.hero.subtitle}</p>
          <div className="mt-6"><a href="#contact"><button className="btn btn-gold">{t.hero.cta}</button></a></div>
        </div>
      </header>

      <section id="services" className="py-16 md:py-20">
        <div className="container">
          <h2 className="section-title">{t.services.title}</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
            {t.services.items.map((s, i)=> (
              <div key={i} className="card p-6">
                <div className="text-brandGold mb-3">
                  {s.icon==="Building2" && <Building2 />}
                  {s.icon==="Layers" && <Layers />}
                  {s.icon==="Ruler" && <Ruler />}
                  {s.icon==="Hammer" && <Hammer />}
                </div>
                <div className="font-semibold">{s.name}</div>
                <div className="text-sm text-slate-600 mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="section-title">{t.projects}</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((p, i)=> (
              <div key={i} className="card overflow-hidden">
                <img src={p.img} alt={lang==="zh"?p.zh:p.en} className="h-44 w-full object-cover" />
                <div className="p-6">
                  <div className="font-semibold">{lang==="zh"?p.zh:p.en}</div>
                  <div className="text-sm text-slate-600 mt-1">{lang==="zh"?p.blurb_zh:p.blurb_en}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-20">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="section-title">{t.about.title}</h2>
            <p className="mt-4 text-slate-700 leading-7">{t.about.text}</p>
          </div>
          <div className="card p-6">
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-3"><Building2 className="text-brandGold"/><span>台元九期、遠百 A13、華南土城 等大型專案經驗</span></li>
              <li className="flex items-center gap-3"><Ruler className="text-brandGold"/><span>提供 Shop Drawing、細部節點、結構計算建議</span></li>
              <li className="flex items-center gap-3"><Layers className="text-brandGold"/><span>鋁板、玻璃、不鏽鋼、格柵材料選型與測試</span></li>
              <li className="flex items-center gap-3"><Hammer className="text-brandGold"/><span>現場安裝與品質控管，準時交付</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center gap-3"><MapPin className="text-brandGold"/><span>{t.contact.address}</span></div>
              <div className="mt-3 flex items-center gap-3"><Mail className="text-brandGold"/><a href="mailto:hsmetal060825@gmail.com">hsmetal060825@gmail.com</a></div>
              <div className="mt-3 flex items-center gap-3"><Phone className="text-brandGold"/><a href="tel:0985321566">0985321566</a></div>
              <p className="mt-4 text-sm text-slate-600">{t.contact.message}</p>
            </div>
            <div className="md:col-span-2 card p-6">
              <div className="text-sm text-slate-600">
                本站不提供線上詢價表單。如需估價，請以 Email/電話聯絡，我們將安排專員回覆。
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} HS Metal. All rights reserved.</div>
          <div className="text-sm">Email: <a className="text-brandBlue" href="mailto:hsmetal060825@gmail.com">hsmetal060825@gmail.com</a> ｜ Tel: <a className="text-brandBlue" href="tel:0985321566">0985321566</a></div>
        </div>
      </footer>
    </main>
  );
}
