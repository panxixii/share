/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import FootprintsGIS from './components/FootprintsGIS';
import TheoryInformer from './components/TheoryInformer';
import { BIBLIOGRAPHY } from './data/presentationData';
import { 
  Map, 
  Layers, 
  Library, 
  BookMarked,
  Sparkles,
  ChevronRight,
  BookOpen
} from 'lucide-react';

type TabType = 'gis' | 'evolution' | 'bib';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('gis');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'gis':
        return <FootprintsGIS />;
      case 'evolution':
        return <TheoryInformer />;
      case 'bib':
        return (
          <div className="bg-brand-beige border-2 border-brand-dark rounded-none p-5 md:p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3.5 border-b-2 border-brand-dark mb-6">
                <BookMarked className="text-brand-red" size={22} />
                <h3 className="font-serif font-bold text-brand-dark text-base md:text-lg">
                  学术引征：第一手参考文献及政策文献汇编 (Bibliography)
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {BIBLIOGRAPHY.map((bib, idx) => (
                  <div key={idx} className="bg-white border-b-4 border-brand-dark p-6 rounded-none shadow-sm border border-brand-dark/20 hover:border-brand-dark transition-all">
                    <div className="flex justify-between items-start gap-2 mb-3 flex-wrap text-xs">
                      <span className="font-serif font-bold text-brand-red bg-brand-red/5 px-2 py-0.5 border border-brand-red/25">
                        {bib.type}
                      </span>
                      <span className="text-stone-400 font-mono italic">
                        {bib.year}
                      </span>
                    </div>

                    <h4 className="font-serif font-extrabold text-brand-dark text-sm sm:text-base mb-1">
                      {bib.title}
                    </h4>

                    <p className="text-xs text-brand-red/80 mb-3 block font-serif">
                      编著作者：{bib.authors}
                    </p>

                    <p className="text-xs text-stone-600 leading-relaxed text-justify font-light border-t border-stone-100 pt-3">
                      {bib.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-brand-dark/25 text-xs text-stone-500 font-serif leading-relaxed text-center sm:text-left italic">
              * 注：本平台引征的政策文集均归口于中央文献出版社、高等教育出版社、人民出版社及新华社等国家级权威学术出版单元。有助于汇报人在讲台上向老师做完备解释，支撑答辩环节。
            </div>
          </div>
        );
      default:
        return <FootprintsGIS />;
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-brand-red/10 bg-brand-beige text-brand-dark">
      
      {/* Upper Scholarly Ribbon Banner */}
      <div className="bg-brand-red text-brand-beige text-center py-1.5 px-4 text-[11px] tracking-widest font-serif font-bold h-7 leading-4 select-none flex items-center justify-center gap-1">
        <Sparkles size={11} className="animate-pulse text-amber-305" />
        <span>浙江：习近平新时代中国特色社会主义思想的重要萌发地、实践地、先行地</span>
      </div>

      {/* Main Container Workspace */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-6">
        
        {/* Header Branding */}
        <header className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-5 border-b-2 border-brand-dark flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-brand-red text-brand-beige font-serif font-extrabold text-[10px] px-2.5 py-0.5 rounded-none shadow-sm uppercase tracking-wider">
                课堂分享 · 时代光芒
              </span>
              <span className="h-4 bg-brand-dark/20 w-px" />
              <span className="text-stone-500 font-sans font-light text-xs tracking-wider">
                【思想政治教育探究实验系统】
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-black text-brand-dark tracking-tighter leading-none">
              红色足迹：新时代思想的浙江萌发与今日实践
            </h1>
            <p className="text-xs text-stone-605 font-serif font-light mt-2 flex items-center gap-1.5 flex-wrap">
              <span>《习近平新时代中国特色社会主义思想概论》课堂专题汇报</span>
              <span className="text-brand-red font-bold">/</span>
              <span className="text-brand-dark font-normal">长效思政实践、GIS思想足迹图、互动考核与专家多语问答</span>
            </p>
          </div>

          {/* Quick Stats Indicator */}
          <div className="flex items-center gap-2 border border-brand-dark bg-white p-3 rounded-none shrink-0">
            <BookOpen size={16} className="text-brand-red" />
            <div>
              <p className="text-[9px] uppercase tracking-widest text-[#A31D1D] font-mono font-bold leading-none">理论研讨实践</p>
              <p className="text-xs font-serif font-extrabold text-brand-dark leading-normal mt-1">温故而知新，可以为师矣</p>
            </div>
          </div>
        </header>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap gap-2 border-b border-brand-dark pb-1 flex-row shrink-0">
          <button
            id="tab-btn-gis"
            onClick={() => setActiveTab('gis')}
            className={`px-4 py-2.5 font-serif font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border-b-2 -mb-1 ${
              activeTab === 'gis'
                ? 'border-brand-red text-brand-red bg-white/40'
                : 'border-transparent text-stone-500 hover:text-brand-dark bg-transparent'
            }`}
          >
            <Map size={16} />
            <span>思想足迹 GIS (Footprints)</span>
          </button>

          <button
            id="tab-btn-evolution"
            onClick={() => setActiveTab('evolution')}
            className={`px-4 py-2.5 font-serif font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border-b-2 -mb-1 ${
              activeTab === 'evolution'
                ? 'border-brand-red text-brand-red bg-white/40'
                : 'border-transparent text-stone-500 hover:text-brand-dark bg-transparent'
            }`}
          >
            <Layers size={16} />
            <span>理论升华脉络 (Evolution)</span>
          </button>

          <button
            id="tab-btn-bib"
            onClick={() => setActiveTab('bib')}
            className={`px-4 py-2.5 font-serif font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border-b-2 -mb-1 ${
              activeTab === 'bib'
                ? 'border-brand-red text-brand-red bg-white/40'
                : 'border-transparent text-stone-500 hover:text-brand-dark bg-transparent'
            }`}
          >
            <Library size={16} />
            <span>参考文献汇编 (Citations)</span>
          </button>
        </div>

        {/* Tab Panels Arena container */}
        <div className="flex-1 min-h-0 bg-white/20 border border-brand-dark/25 p-1 rounded-none">
          {renderTabContent()}
        </div>

      </main>

      {/* Footer copyright */}
      <footer className="w-full bg-brand-dark text-brand-beige/70 py-6 px-4 md:px-8 shrink-0 border-t-2 border-brand-dark">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif font-light text-center sm:text-left">
          <div>
            <p className="text-white font-bold">《习近平新时代中国特色社会主义思想概论》课堂汇报专题系统</p>
            <p className="text-white/40 mt-1">&copy; 2026 潘茜茜研制 | 课堂分享</p>
          </div>
          
          <div className="flex items-center gap-1.5 text-white/50 tracking-wider">
            <span>厚德载物</span>
            <span>·</span>
            <span>干在实处</span>
            <span>·</span>
            <span>勇立潮头</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
