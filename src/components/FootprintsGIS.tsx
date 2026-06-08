/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FOOTPRINTS } from '../data/presentationData';
import { FootprintPoint } from '../types';
import { 
  MapPin, 
  Calendar, 
  Quote, 
  ArrowRight, 
  Search, 
  Globe2, 
  FileCheck2, 
  Building2, 
  ShieldCheck, 
  Compass, 
  Trees, 
  Anchor 
} from 'lucide-react';

export default function FootprintsGIS() {
  const [selectedId, setSelectedId] = useState<string>(FOOTPRINTS[0].id);
  const [searchTerm, setSearchTerm] = useState('');
  const [showIntroNotes, setShowIntroNotes] = useState(false);

  const selectedPoint = FOOTPRINTS.find(p => p.id === selectedId) || FOOTPRINTS[0];

  const filteredPoints = FOOTPRINTS.filter(p => 
    p.name.includes(searchTerm) || 
    p.theory.includes(searchTerm) || 
    p.city.includes(searchTerm)
  );

  const getMarkerIcon = (pointId: string) => {
    switch (pointId) {
      case 'anji': return <Trees className="text-emerald-700" size={16} />;
      case 'pujiang': return <Compass className="text-blue-700" size={16} />;
      case 'zhuji': return <ShieldCheck className="text-amber-700" size={16} />;
      case 'jiaxing': return <Anchor className="text-red-700" size={16} />;
      case 'wenzhou': return <Building2 className="text-orange-700" size={16} />;
      default: return <MapPin className="text-red-800" size={16} />;
    }
  };

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* 序章融合：源起之江的理学渊源与课程介绍 */}
      <div className="bg-brand-red/5 border-2 border-brand-dark p-5 sm:p-6 rounded-none relative overflow-hidden">
        {/* Decorative corner tag */}
        <div className="absolute top-0 right-0 bg-brand-red text-brand-beige text-[10px] font-bold px-3 py-1 font-serif select-none uppercase tracking-wider">
          思想开场·序章研读
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-brand-dark/20 mb-4">
          <div>
            <span className="text-brand-red font-serif font-black tracking-widest text-[11px] uppercase mr-2 bg-brand-red/10 px-2.5 py-0.5 border border-brand-red/30">
              源起之江 · 思政实践汇报
            </span>
            <h2 className="text-lg md:text-xl font-serif font-black text-brand-dark mt-1.5 leading-tight">
              习近平在浙江的积累对新时代思想形成的影响
            </h2>
          </div>
          
          <button
            id="btn-toggle-intro-notes"
            onClick={() => setShowIntroNotes(!showIntroNotes)}
            className="px-3 py-1.5 bg-white border border-brand-dark hover:bg-brand-beige transition-all text-xs font-serif font-bold text-brand-dark cursor-pointer shadow-sm shrink-0"
          >
            {showIntroNotes ? "隐藏主讲人汇报备课本" : "显示主讲人汇报备课本"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          <div className="md:col-span-8 text-xs sm:text-[13px] text-stone-700 leading-relaxed font-serif font-light text-justify flex flex-col gap-3">
            <p>
              浙江，是中国革命红船起航地、改革开放排头兵，更在新世纪之交率先感知并解答了中国发展的一系列时代难题。在2002年至2007年担任浙江省党政主要领导期间，习近平同志立足于浙江省情实际，开展了全方位、深层次的省域综合性改革与协调治理探索。
            </p>
            <p>
              本系统将系统探讨这一阶段地方首创、务实扎根的经验（试验田积淀），直观梳理其如何一步步升华演变，成为高悬在今天中国上空的科学宏图——<strong>“习近平新时代中国特色社会主义思想”</strong>，以及今日作为“先行示范区”如何生动作出实践解答。
            </p>
          </div>

          <div className="md:col-span-4 bg-white border border-brand-dark/20 p-4 rounded-none font-serif relative">
            <Quote size={16} className="text-brand-red/30 absolute top-3 left-3" />
            <div className="pl-6">
              <p className="italic text-xs font-bold text-brand-dark leading-relaxed text-justify mb-2">
                “干在实处，走在前列，勇立潮头。”
              </p>
              <p className="text-[10px] text-stone-400 text-right font-light">
                —— 习近平同志对浙江工作的勉励
              </p>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showIntroNotes && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-4 pt-4 border-t border-brand-dark/20 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-brand-beige/50 border border-brand-dark/15 p-4 rounded-none text-xs font-serif">
                  <p className="font-extrabold text-brand-red mb-1.5 flex items-center gap-1">
                    <span>📢 汇报人演说词备课批注 (Presenter Notes)：</span>
                  </p>
                  <p className="text-stone-600 leading-relaxed text-justify font-light">
                    一、开场引入：多维度介绍本场思政分享的主题学理和逻辑闭环。强调强调“浙里是起点，也是示范”。指出在浙江主政期间，习近平同志走遍了全省县市区，通过高水准理论规划与真抓实干的民生治理，让浙江成为后来新时代核心政党思想极其宝贵的<strong>“萌发地”、“实践地”与“先行地”</strong>。
                  </p>
                </div>

                <div className="bg-brand-beige/50 border border-brand-dark/15 p-4 rounded-none text-xs font-serif">
                  <p className="font-extrabold text-brand-dark mb-1.5 flex items-center gap-1">
                    <span>🎓 专业教材考核学术指引 (Academic Context)：</span>
                  </p>
                  <p className="text-stone-600 leading-relaxed text-justify font-light">
                    《习近平新时代中国特色社会主义思想概论》指明：科学理论是在应对实践挑战、总结地方经验、升华为国家意志的过程中形成并生动完善的。浙江省域探索经验是新时代核心理论思想的源头活水。深刻领悟萌芽与全国实践体系，也是顺利作答论述、通过答辩的关键点。
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
      {/* Visual GIS Interactive Map Section */}
      <div className="flex-1 bg-white border-2 border-brand-dark rounded-none p-5 md:p-6 flex flex-col justify-between shadow-sm relative min-h-[420px] overflow-hidden">
        
        {/* Absolute Ribbon Map Deco */}
        <div className="absolute top-4 right-4 text-stone-450 font-mono text-[9px] pointer-events-none text-right font-light leading-snug select-none">
          ZHEJIANG GIS MAP SCALE 1:1,200,000<br/>
          COORDINATES: PROVINCE GRID CONCEPT<br/>
          WGS-84 HEIGHT INDEX SYSTEM
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Globe2 className="text-brand-red" size={20} />
            <h3 className="font-serif font-black text-brand-dark text-base md:text-lg uppercase tracking-wider">
              浙江思想足迹 GIS 概念规划盘 (Geographic footprints map)
            </h3>
          </div>
          
          <p className="text-xs text-stone-600 mb-6 font-serif font-light leading-relaxed">
            通过交互GIS落点，盘点习近平同志主政浙江期间所驻足、谋划的关键历史节点，直观感悟‘理论从泥土中成长’的唯物认识论路径。
          </p>
        </div>

        {/* Visual Map Canvas Base */}
        <div className="flex-1 relative border border-brand-dark bg-brand-beige/50 p-4 min-h-[300px] overflow-hidden flex items-center justify-center">
          
          {/* Zhejiang Province Traditional Visual Contour SVG Background */}
          <svg className="absolute inset-0 w-full h-full opacity-10 blur-[0.5px]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M 30,10 Q 55,8 65,15 T 80,35 T 75,60 T 60,86 T 45,95 T 32,80 T 25,55 T 20,30 Z" 
              fill="#A31D1D" 
              stroke="#A31D1D" 
              strokeWidth="1.5"
            />
          </svg>

          {/* Styled GIS Compass deco */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 opacity-40 select-none">
            <Compass size={24} className="animate-spin-slow text-brand-dark" />
            <span className="font-serif text-[10px] text-brand-dark font-bold">N</span>
          </div>

          {/* GRID lines coordinates for GIS context */}
          <div className="absolute inset-0 border border-dashed border-brand-dark/20 grid grid-cols-6 grid-rows-6 opacity-30 pointer-events-none" />

          {/* Geographic pulsate nodes markers */}
          {FOOTPRINTS.map((pt) => {
            const isSelected = pt.id === selectedId;
            return (
              <button
                id={`marker-${pt.id}`}
                key={pt.id}
                onClick={() => setSelectedId(pt.id)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none z-20 group transition-all"
                style={{ left: `${pt.location.x}%`, top: `${pt.location.y}%` }}
              >
                {/* Outer Ring waves indicator */}
                <span className={`absolute inline-flex h-10 w-10 -left-5 -top-5 rounded-none opacity-40 animate-ping transition-all ${
                  isSelected ? 'bg-brand-red' : 'bg-brand-dark/20 group-hover:bg-brand-dark/40'
                }`} />
                
                {/* Node Label tag */}
                <div 
                  className={`absolute left-6 -top-2 px-2.5 py-1 text-[10px] font-bold border uppercase whitespace-nowrap transition-all shadow-sm rounded-none ${
                    isSelected 
                      ? 'bg-brand-red text-brand-beige border-brand-dark scale-110 font-serif' 
                      : 'bg-white text-brand-dark border-brand-dark group-hover:border-brand-red group-hover:text-brand-red group-hover:scale-105 font-serif'
                  }`}
                >
                  <span className="font-serif block font-extrabold leading-tight">{pt.city} · {pt.name}</span>
                  <span className="text-[8px] font-normal tracking-wide opacity-80">{pt.theory}</span>
                </div>

                {/* Inner core button icon */}
                <div className={`h-8 w-8 rounded-none border-2 flex items-center justify-center transition-all ${
                  isSelected 
                    ? 'bg-brand-beige border-brand-red scale-125 ring-4 ring-brand-red/10' 
                    : 'bg-white border-brand-dark hover:border-brand-red group-hover:scale-110'
                }`}>
                  {getMarkerIcon(pt.id)}
                </div>
              </button>
            );
          })}

          {/* Informational Hint Banner */}
          <div className="absolute bottom-2 right-2 bg-brand-dark text-brand-beige px-2 py-1 text-[9px] font-serif border border-brand-dark">
            🖱️ 点击地图核心，查看演进与国家顶层方案
          </div>
        </div>

        {/* List Selector Bottom */}
        <div className="mt-4 pt-4 border-t border-brand-dark/20">
          <div className="relative mb-3">
            <Search className="absolute left-2.5 top-2.5 text-stone-400" size={14} />
            <input
              id="search-point-field"
              type="text"
              placeholder="搜索城市、经典理论、地名..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs bg-brand-beige/50 border border-brand-dark rounded-none pl-8 pr-3 py-2 text-brand-dark focus:outline-none focus:ring-1 focus:ring-brand-red focus:bg-white transition-all font-serif"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {filteredPoints.map((pt) => (
              <button
                id={`btn-select-pt-${pt.id}`}
                key={pt.id}
                onClick={() => setSelectedId(pt.id)}
                className={`px-3 py-1.5 rounded-none text-xs font-serif font-bold flex items-center gap-1 shrink-0 transition-all cursor-pointer whitespace-nowrap border ${
                  pt.id === selectedId
                    ? 'bg-brand-red text-brand-beige border-brand-dark scale-102 shadow-sm'
                    : 'bg-white text-brand-dark hover:bg-brand-beige border-brand-dark'
                }`}
              >
                <span>{pt.city} · {pt.name}</span>
              </button>
            ))}
            {filteredPoints.length === 0 && (
              <span className="text-xs text-stone-400 my-1 pl-1">未匹配到相应地标...</span>
            )}
          </div>
        </div>
      </div>

      {/* Investigation Details & National Transition Pathway Details Panel */}
      <div className="w-full lg:w-[410px] xl:w-[460px] flex flex-col gap-5 shrink-0 animate-fade-in">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPoint.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.28 }}
            className="bg-white border-2 border-brand-dark rounded-none p-5 md:p-6 shadow-sm flex-1 flex flex-col justify-between"
          >
            {/* Header Description */}
            <div>
              <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-brand-dark/25">
                <span className="bg-brand-red/5 text-brand-red border border-brand-red/40 px-2.5 py-0.5 rounded-none text-xs font-serif font-bold flex items-center gap-1 shadow-sm">
                  <Calendar size={12} />
                  <span>{selectedPoint.year} 年底蕴</span>
                </span>
                
                <span className="font-serif font-bold text-brand-dark/50 text-xs tracking-wider uppercase">
                  Zhejiang Origin Footprints
                </span>
              </div>

              {/* Title Point */}
              <div className="mt-4">
                <h4 className="font-serif text-xl font-black text-brand-dark flex items-baseline gap-1.5 leading-tight">
                  <span className="text-brand-red font-black">{selectedPoint.city}</span>
                  <span className="text-stone-300 text-sm font-semibold">/</span>
                  <span className="text-brand-dark text-base font-bold">{selectedPoint.name}</span>
                </h4>
                
                <div className="text-xs text-brand-red bg-brand-red/5 font-bold px-3 py-2 border-l-4 border-brand-red rounded-none mt-2 font-serif leading-relaxed">
                  核心萌发思想: “{selectedPoint.theory}”
                </div>
              </div>

              {/* Geographical Background */}
              <div className="mt-4 text-xs font-serif font-light text-stone-600 bg-brand-beige p-3 rounded-none border border-brand-dark/15 leading-relaxed text-justify">
                <p className="font-bold text-brand-dark mb-1">🔍 浙江原点背景情势：</p>
                <p>{selectedPoint.background}</p>
              </div>

              {/* Historical Investigation Details */}
              <div className="mt-4">
                <span className="text-xs font-bold text-brand-dark block mb-1">📜 历史积淀与实录：</span>
                <p className="text-xs sm:text-[13px] text-stone-800 leading-relaxed text-justify font-light font-serif">
                  {selectedPoint.historyDetails}
                </p>
              </div>

              {/* Historic Quote banner */}
              <div className="mt-4 p-3 bg-brand-red/5 border border-brand-red/20 rounded-none">
                <div className="flex items-start gap-2">
                  <Quote size={18} className="text-brand-red/40 shrink-0" />
                  <p className="font-serif italic text-xs leading-relaxed text-brand-dark text-justify">
                    “{selectedPoint.originalQuote}”
                  </p>
                </div>
              </div>
            </div>

            {/* National Policy Transition Block (Influence) */}
            <div className="mt-6 pt-5 border-t border-brand-dark/25">
              <div className="flex items-center gap-1.5 text-brand-red mb-2.5">
                <FileCheck2 size={16} />
                <span className="font-serif font-bold text-xs uppercase tracking-wider">
                  理论升华脉络与国家转化实践 (Transition Framework)
                </span>
              </div>
              
              <div className="bg-brand-red text-brand-beige rounded-none p-4 shadow-sm relative overflow-hidden border border-brand-dark">
                <div className="absolute right-2 bottom-2 text-white/5 font-mono select-none pointer-events-none text-xs">
                  NATIONAL SCALE
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-brand-beige text-brand-red font-serif font-black text-[10px] px-2 py-0.5 rounded-none leading-none border border-brand-red/10">
                    顶层理论转化
                  </span>
                  <h5 className="font-serif font-bold text-sm text-yellow-300 tracking-wider">
                    {selectedPoint.nationalPolicyTitle}
                  </h5>
                </div>
                
                <p className="text-xs text-stone-100 leading-relaxed text-justify font-light font-serif">
                  {selectedPoint.nationalPolicy}
                </p>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    </div>
  );
}
