
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BRAND_BLUE = "#0B1E3A";
const BRAND_GOLD = "#D4AF37";

const zh = {
  title: "代表實績",
  projects: [
    { name: "台元科技園區九期", img: "/images/taiyen.jpg", blurb: "科技廠房｜鋁包板＋玻璃帷幕｜疫情期間如期交付" },
    { name: "遠東百貨 A13", img: "/images/fareastA13.jpg", blurb: "商辦百貨｜雙層金屬板＋玻璃帷幕｜複合型專案" },
    { name: "華南銀行土城商辦大樓", img: "/images/hnbank.jpg", blurb: "金融辦公大樓｜鋁板＋玻璃帷幕｜精緻化設計" },
  ],
};

const en = {
  title: "Projects",
  projects: [
    { name: "Taiyen Science Park Phase 9", img: "/images/taiyen.jpg", blurb: "Tech facility | Aluminum + glass façade | On-time delivery during pandemic" },
    { name: "Far Eastern A13", img: "/images/fareastA13.jpg", blurb: "Retail/office complex | Double-skin metal + glass | Mixed-use project" },
    { name: "Hua Nan Bank Tucheng", img: "/images/hnbank.jpg", blurb: "Office tower | Aluminum + glass façade | Refined detailing" },
  ],
};

export default function Page() {
  const [lang, setLang] = useState<"zh"|"en">("zh");
  const t = lang === "zh" ? zh : en;

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold md:text-3xl" style={{ color: BRAND_BLUE }}>{t.title}</h2>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setLang(lang==="zh"?"en":"zh")}>{lang==="zh"?"EN":"中文"}</Button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.projects.map((p, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader className="p-0">
                <img src={p.img} alt={p.name} className="h-40 w-full rounded-t-2xl object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg">{p.name}</CardTitle>
                <p className="mt-2 text-sm text-slate-600">{p.blurb}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
