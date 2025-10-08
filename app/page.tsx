'use client';
import { useEffect, useState } from 'react';
const BRAND_BLUE = '#0B1E3A' as const;
const BRAND_GOLD = '#D4AF37' as const;
type Lang = 'zh' | 'en';
const TEXTS = {
  zh: {
    brand: '瀚森金屬工程有限公司',
    nav:{services:'服務項目',projects:'代表實績',about:'關於我們',contact:'聯絡我們'},
    hero:{title:'金屬外牆．玻璃帷幕．鋁包板', subtitle:'十年以上大型商辦與科技廠房經驗｜準時品質、專業承諾', cta:'聯絡我們'},
    services:{title:'服務項目', items:[
      {name:'玻璃帷幕',desc:'依建築需求，設計最佳帷幕系統'},
      {name:'鋁板/金屬包板',desc:'兼具建築美學及經濟效益'},
      {name:'不鏽鋼/金屬格柵',desc:'綜合建築機能及設計需求，以達遮陽及通風效果'},
      {name:'結構補強/整修',desc:'專業評估，翻新及補強規劃'},
    ]},
    projects:'代表實績',
    about:{title:'關於我們',text:'瀚森金屬工程專精於金屬外牆與玻璃帷幕工程，從細部設計、材料選型到現場安裝，提供一站式服務。以「準時交付、專業承諾」為核心價值，累積多年大型專案經驗，代表實績涵蓋商辦、百貨、金融與科技產業。',bullets:[
      '台元九期、遠百 A13、華南土城 等大型專案經驗',
      '提供外牆規劃、大樣設計、結構評估',
      '鋁擠型、金屬板、玻璃、石材、不鏽鋼材料設計及評估',
      '現場施工管理與品質控管，準時交付',
    ]},
    contact:{title:'聯絡我們',address:'桃園市中壢區中山東路三段160號',email:'hsmetal060825@gmail.com',phone:'0985321566',lineId:'wenkai987',lineBtn:'加 Line 諮詢',lineQr:'/images/line-qr.jpg'},
  },
  en: {
    brand: 'HS Metal Co., Ltd.',
    nav:{services:'Services',projects:'Projects',about:'About',contact:'Contact'},
    hero:{title:'Metal Façade · Glass Curtain Wall · Aluminum Cladding', subtitle:'10+ years in office towers & science parks | On-time quality, professional commitment', cta:'Contact'},
    services:{title:'Services', items:[
      {name:'Glass Curtain Wall',desc:'Design optimal systems based on building needs'},
      {name:'Aluminum / Metal Cladding',desc:'Balance architectural aesthetics and cost-effectiveness'},
      {name:'Stainless / Grilles',desc:'Combine functional and design needs for shading and ventilation'},
      {name:'Retrofit / Reinforcement',desc:'Professional evaluation for renovation and strengthening'},
    ]},
    projects:'Projects',
    about:{title:'About',text:'We focus on metal façades and glass curtain walls from detail design to installation, delivering end-to-end with on-time, professional commitment.',bullets:[
      'Experience in major office & retail projects (A13, Hua Nan Tucheng, etc.)',
      'Façade planning, detail design and structural study',
      'Design & evaluation of aluminum extrusion, panels, glazing, stone & stainless',
      'On-site management & quality control with on-time delivery',
    ]},
    contact:{title:'Contact',address:'No.160, Sec. 3, Zhongshan E. Rd., Zhongli Dist., Taoyuan City',email:'hsmetal060825@gmail.com',phone:'+886 985 321 566',lineId:'wenkai987',lineBtn:'Chat on Line',lineQr:'/images/line-qr.jpg'},
  },
} as const;

const PROJECTS = [
  { zh: '台元科技園區九期', en:'Taiyen Science Park Phase 9', img:'/images/taiyen.jpg', blurb_zh:'科技廠房｜玻璃帷幕、鋁包板、金屬桁架', blurb_en:'Tech facility — Aluminum + Glass' },
  { zh: '遠東百貨 A13', en:'Far Eastern A13', img:'/images/fareastA13.jpg', blurb_zh:'商辦百貨｜複層金屬板、結構玻璃、玻璃帷幕', blurb_en:'Retail/Office — Double-skin metal & glass' },
  { zh: '華南銀行土城', en:'Hua Nan Bank Tucheng', img:'/images/hnbank.jpg', blurb_zh:'商辦大樓｜玻璃帷幕、鋁包板', blurb_en:'Office tower — Aluminum + Glass' },
  { zh: '宏普世貿', en:'Hung Pu World Trade', img:'/images/hongpu.jpg', blurb_zh:'商辦大樓｜玻璃帷幕、石材帷幕', blurb_en:'Office building — Glass & Stone curtain wall' },
] as const;

const SIcon = ({ d }: { d: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7" style={{ fill: "none", stroke: BRAND_GOLD, strokeWidth: 1.8 }}>
    <path d={d} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const GoldIconPin   = () => (<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-6 w-6' style={{fill:'none',stroke:BRAND_GOLD,strokeWidth:1.8}}><path d='M12 21s-7-4.686-7-10a7 7 0 1 1 14 0c0 5.314-7 10-7 10Z' /><circle cx='12' cy='10.5' r='2.5' /></svg>);
const GoldIconMail  = () => (<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-6 w-6' style={{fill:'none',stroke:BRAND_GOLD,strokeWidth:1.8}}><rect x='3' y='5' width='18' height='14' rx='2' /><path d='M3 7l9 6 9-6' /></svg>);
const GoldIconPhone = () => (<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-6 w-6' style={{fill:'none',stroke:BRAND_GOLD,strokeWidth:1.8}}><path d='M2.5 5.5c0-.8.7-1.5 1.5-1.5h2l2 4-1.5 1.5a14 14 0 0 0 7 7L15 15l4 2v2c0 .8-.7 1.5-1.5 1.5h-1A17.5 17.5 0 0 1 2.5 6.5v-1Z' /></svg>);
const GoldIconBuilding = () => (<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-5 w-5' style={{fill:'none',stroke:BRAND_GOLD,strokeWidth:1.8}}><rect x='6' y='3' width='10' height='18' rx='1' /><path d='M9 7h2M9 10h2M9 13h2M13 7h2M13 10h2M13 13h2M8 21h8' /></svg>);
const GoldIconRuler = () => (<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-5 w-5' style={{fill:'none',stroke:BRAND_GOLD,strokeWidth:1.8}}><path d='M3 14l11-11 7 7L10 21 3 14Z' /><path d='M14 3l7 7M13 7l4 4M9 11l4 4M5 15l4 4' /></svg>);
const GoldIconLayers = () => (<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-5 w-5' style={{fill:'none',stroke:BRAND_GOLD,strokeWidth:1.8}}><path d='M12 3 3 8l9 5 9-5-9-5Z' /><path d='M3 12l9 5 9-5M3 16l9 5 9-5' /></svg>);
const GoldIconHammer = () => (<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-5 w-5' style={{fill:'none',stroke:BRAND_GOLD,strokeWidth:1.8}}><path d='M3 7h6l2 2h4l3 3-2 2-3-3H9l-2 2H3V7Z' /><path d='M13 14l-6 6' /></svg>);

export default function HsMetalLanding() {
  const [lang, setLang] = useState<Lang>('zh');
  const t = TEXTS[lang];
  useEffect(()=>{
    console.assert(PROJECTS.length===4,'[TEST] 4 projects');
    console.assert(!!t.contact.email && !!t.contact.phone,'[TEST] contact present');
  },[lang,t]);
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="text-lg font-semibold" style={{ color: BRAND_BLUE }}>{t.brand}</div>
          <nav className="hidden gap-6 md:flex text-sm">
            <a href="#services" className="hover:underline">{t.nav.services}</a>
            <a href="#projects" className="hover:underline">{t.nav.projects}</a>
            <a href="#about" className="hover:underline">{t.nav.about}</a>
            <a href="#contact" className="hover:underline">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang==='zh'?'en':'zh')} className="rounded-full border border-slate-300 px-3 py-1 text-sm">{lang==='zh'?'EN':'中文'}</button>
            <a href="#contact" className="rounded-lg bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-95">{t.nav.contact}</a>
          </div>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-[url('/images/taiyen.jpg')] bg-cover bg-center">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 bg-black/30 text-white">
          <h1 className="text-3xl font-bold md:text-5xl drop-shadow" style={{letterSpacing:'.1em'}}>{t.hero.title}</h1>
          <p className="mt-4 max-w-3xl text-slate-100 md:text-lg">{t.hero.subtitle}</p>
          <a href="#contact" className="mt-6 inline-block rounded-lg bg-[#D4AF37] px-5 py-2 text-sm font-semibold text-white shadow hover:brightness-95">{t.hero.cta}</a>
        </div>
      </section>

      <section id="services" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-semibold md:text-3xl" style={{ color: BRAND_BLUE }}>{t.services.title}</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
            {t.services.items.map((s,i)=>(
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-left">
                <div className="mb-3">
                  {i===0 && <SIcon d="M6 3h8a2 2 0 0 1 2 2v14H6V3Z M10 3v16 M8 7h4 M8 11h4" />}
                  {i===1 && <SIcon d="M12 4 4 8l8 4 8-4-8-4Z M4 12l8 4 8-4 M4 16l8 4 8-4" />}
                  {i===2 && <SIcon d="M4 6h16 M4 10h16 M4 14h16 M4 18h16 M8 4v16 M12 4v16 M16 4v16" />}
                  {i===3 && <SIcon d="M3 7h6l2 2h4l3 3-2 2-3-3H9l-2 2H3V7Z M13 14l-6 6" />}
                </div>
                <div className="font-semibold">{s.name}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-semibold md:text-3xl" style={{ color: BRAND_BLUE }}>{t.projects}</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {PROJECTS.map((p,i)=>(
              <div key={i} className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="w-full flex justify-center">
                  <img src={p.img} alt={(lang==='zh'?p.zh:p.en)} className="w-1/2 aspect-[3/4] rounded-lg object-cover shadow-md" />
                </div>
                <div className="mt-4 text-left w-full">
                  <div className="font-semibold">{lang==='zh'?p.zh:p.en}</div>
                  <div className="mt-1 text-sm text-slate-600">{lang==='zh'?p.blurb_zh:p.blurb_en}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl" style={{ color: BRAND_BLUE }}>{t.about.title}</h2>
            <p className="mt-4 leading-7 text-slate-700">{t.about.text}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <div className="flex items-start gap-3"><GoldIconBuilding /><p className="text-slate-700">{t.about.bullets[0]}</p></div>
            <div className="flex items-start gap-3"><GoldIconRuler /><p className="text-slate-700">{t.about.bullets[1]}</p></div>
            <div className="flex items-start gap-3"><GoldIconLayers /><p className="text-slate-700">{t.about.bullets[2]}</p></div>
            <div className="flex items-start gap-3"><GoldIconHammer /><p className="text-slate-700">{t.about.bullets[3]}</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-semibold md:text-3xl" style={{ color: BRAND_BLUE }}>{t.contact.title}</h2>
          <div className="mt-8 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="space-y-5 text-lg">
              <div className="flex items-center gap-3"><GoldIconPin /><span>{t.contact.address}</span></div>
              <div className="flex items-center gap-3"><GoldIconMail /><a href={`mailto:${t.contact.email}`} className="underline decoration-slate-400 underline-offset-4 hover:text-slate-900">{t.contact.email}</a></div>
              <div className="flex items-center gap-3"><GoldIconPhone /><a href={`tel:${lang==='zh'?'0985321566':'+886985321566'}`} className="underline decoration-slate-400 underline-offset-4 hover:text-slate-900">{t.contact.phone}</a></div>
              <div className="pt-2">
                <a href={`https://line.me/ti/p/~${t.contact.lineId}`} className="inline-flex items-center gap-2 rounded-lg bg-[#06C755] px-4 py-2 font-semibold text-white shadow transition hover:brightness-95">
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' className='h-5 w-5'><path fill='#fff' d='M18 2C9.7 2 3 7.9 3 15.4c0 4.1 2.3 7.8 5.9 10.1L8 33l6.6-3.5c1.1.3 2.3.5 3.5.5 8.3 0 15-5.9 15-13.4S26.3 2 18 2z' /></svg>
                  {t.contact.lineBtn}
                </a>
                <div className="mt-1 text-sm text-slate-500">Line ID：{t.contact.lineId}</div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={t.contact.lineQr} alt="Line QR Code" className="h-44 w-44 rounded-lg border border-slate-200 object-contain shadow" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-sm text-slate-600 md:flex-row">
          <div>© {new Date().getFullYear()} 瀚森金屬工程有限公司</div>
          <div>
            <a className="underline" href="mailto:hsmetal060825@gmail.com">hsmetal060825@gmail.com</a>
            <span className="mx-2">｜</span>
            <a className="underline" href="tel:0985321566">0985321566</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
