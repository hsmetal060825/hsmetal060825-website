import Nav from "../components/Nav";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <Nav />
      </header>

      <section className="border-b border-slate-200 bg-[url('/images/taiyen.jpg')] bg-cover bg-center">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 bg-black/30 text-white">
          <h1 className="text-3xl font-bold md:text-5xl drop-shadow" style={{letterSpacing:'.1em'}}>金屬外牆．玻璃帷幕．鋁包板</h1>
          <p className="mt-4 max-w-3xl text-slate-100 md:text-lg">十年以上大型商辦與科技廠房經驗｜準時品質、專業承諾</p>
          <a href="#contact" className="mt-6 inline-block rounded-lg bg-[#D4AF37] px-5 py-2 text-sm font-semibold text-white shadow hover:brightness-95">聯絡我們</a>
        </div>
      </section>

      {/* 服務項目 */}
      <section id="services" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-semibold md:text-3xl" style={{color:'var(--brand-blue)'}}>服務項目</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
            {['玻璃帷幕','鋁板/金屬包板','不鏽鋼/金屬格柵','結構補強/整修'].map((name, i)=>(
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-left">
                <div className="mb-3 h-7 w-7 rounded-full bg-[color:var(--brand-gold)]/20"></div>
                <div className="font-semibold">{name}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">
                  {i===0 && '根據建築外觀及設計需求，選擇最適合的帷幕牆系統與玻璃配置，確保性能及美學兼具'}
                  {i===1 && '兼具設計美學及經濟效益，提供耐久性及穩定外觀的方案'}
                  {i===2 && '綜合建築機能及設計需求，評估遮陽、通風效果，並選擇合適材質及形式'}
                  {i===3 && '透過專業檢測掌握舊樓外牆問題，量身打造翻新及補強措施'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 代表實績 2x2 */}
      <section id="projects" className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-semibold md:text-3xl" style={{color:'var(--brand-blue)'}}>代表實績</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {name:'台元科技園區九期', img:'/images/taiyen.jpg', blurb:'科技廠房｜玻璃帷幕、鋁包板、金屬桁架'},
              {name:'遠東百貨 A13', img:'/images/fareastA13.jpg', blurb:'商辦百貨｜複層金屬板、結構玻璃、玻璃帷幕'},
              {name:'華南銀行土城', img:'/images/hnbank.jpg', blurb:'商辦大樓｜玻璃帷幕、鋁包板'},
              {name:'宏普世貿', img:'/images/hongpu.jpg', blurb:'商辦大樓｜玻璃帷幕、石材帷幕'},
            ].map((p,i)=>(
              <div key={i} className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="w-full flex justify-center">
                  <img src={p.img} alt={p.name} className="w-1/2 rounded-lg object-cover shadow-md" />
                </div>
                <div className="mt-4 w-full text-left">
                  <div className="font-semibold">{p.name}</div>
                  <div className="mt-1 text-sm text-slate-600">{p.blurb}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 關於我們 */}
      <section id="about" className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl" style={{color:'var(--brand-blue)'}}>關於我們</h2>
            <p className="mt-4 leading-7 text-slate-700">
              瀚森金屬工程專精於金屬外牆與玻璃帷幕工程，從細部設計、材料選型到現場安裝，提供一站式服務。以『準時交付、專業承諾』為核心價值，累積多年大型專案經驗，代表實績涵蓋商辦、百貨、金融與科技產業。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            {['台元九期、遠百 A13、華南土城 等大型專案經驗','提供外牆規劃、大樣設計、結構評估','鋁擠型、金屬板、玻璃、石材、不鏽鋼材料設計及評估','現場施工管理與品質控管，準時交付'].map((b, i)=>(
              <div key={i} className="flex items-start gap-3">
                <div className="h-5 w-5 rounded bg-[color:var(--brand-gold)]/30"></div>
                <p className="text-slate-700">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 聯絡我們 */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-semibold md:text-3xl" style={{color:'var(--brand-blue)'}}>聯絡我們</h2>
          <div className="mt-8 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="space-y-5 text-lg">
              <div className="flex items-center gap-3"><span className="h-6 w-6 rounded bg-[color:var(--brand-gold)]/30"></span><span>桃園市中壢區中山東路三段160號</span></div>
              <div className="flex items-center gap-3"><span className="h-6 w-6 rounded bg-[color:var(--brand-gold)]/30"></span><a href="mailto:hsmetal060825@gmail.com" className="underline decoration-slate-400 underline-offset-4 hover:text-slate-900">hsmetal060825@gmail.com</a></div>
              <div className="flex items-center gap-3"><span className="h-6 w-6 rounded bg-[color:var(--brand-gold)]/30"></span><a href="tel:0985321566" className="underline decoration-slate-400 underline-offset-4 hover:text-slate-900">0985321566</a></div>
              <div className="pt-2">
                <a href="https://line.me/ti/p/~wenkai987" className="inline-flex items-center gap-2 rounded-lg bg-[#06C755] px-4 py-2 font-semibold text-white shadow transition hover:brightness-95">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="h-5 w-5"><path fill="#fff" d="M18 2C9.7 2 3 7.9 3 15.4c0 4.1 2.3 7.8 5.9 10.1L8 33l6.6-3.5c1.1.3 2.3.5 3.5.5 8.3 0 15-5.9 15-13.4S26.3 2 18 2z" /></svg>
                  加 Line 諮詢
                </a>
                <div className="mt-1 text-sm text-slate-500">Line ID：wenkai987</div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/images/line-qr.jpg" alt="Line QR Code" className="h-44 w-44 rounded-lg border border-slate-200 object-contain shadow" />
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
