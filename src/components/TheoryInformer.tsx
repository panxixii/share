/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Network, 
  ArrowRight, 
  Leaf, 
  Home, 
  Scale, 
  Sparkle,
  Zap,
  TrendingUp,
  Award,
  Link2
} from 'lucide-react';

interface EvolutionaryPathway {
  id: string;
  category: string;
  icon: React.ReactNode;
  seedTitle: string;
  seedTime: string;
  seedBody: string;
  theoryTitle: string;
  theoryBody: string;
  practiceTitle: string;
  practiceBody: string;
  achievementMetric: string;
}

const PATHWAYS: EvolutionaryPathway[] = [
  {
    id: "ecology",
    category: "绿色发展 · 生态省建设",
    icon: <Leaf className="text-emerald-700" size={20} />,
    seedTitle: "安吉余村“两山论”生态省规划",
    seedTime: "2005年起生态浙江战略",
    seedBody: "习近平同志提出‘绿水青山就是金山银山’，开启省域‘生态省’战略。在面临水泥矿山经济阵痛时，高瞻远瞩地确立生态本身即是资产，不惜关停重污染矿山，铺平绿色生态民富路线。",
    theoryTitle: "习近平生态文明思想",
    theoryBody: "‘两山论’被写进党章宪法，构建起涵盖生态红线审计、排污权交易、中央环保督察及碳达峰碳中和‘1+N’政策体制，重新定义了人与自然和谐共生的中国式现代化发展方式。",
    practiceTitle: "生态价值转化先行者",
    practiceBody: "现代浙江率先出台全国首个‘生态系统生产总值（GEP）’核算标准，并在全省推广绿色金融。千村万户依托民宿、有机农业和竹木碳汇，实现了既保绿色又获真金白银的共赢局面。",
    achievementMetric: "GEP核算标准全省覆盖，部分试点区绿色GDP占比超过80%，居全国首列。"
  },
  {
    id: "rural",
    category: "城乡统筹 · 乡村重塑",
    icon: <Home className="text-cyan-700" size={20} />,
    seedTitle: "德政千万工程与良性统筹",
    seedTime: "2003年起推行万村整治",
    seedBody: "针对城乡差距高及农村空心污浊环境，高标准启动‘千村示范、万村整治’，通过公共财政向村级倾斜，硬化道路，净化污水污泥，实现就地升级的全面‘三农’协调和全面统筹。",
    theoryTitle: "乡村振兴战略 & 共同富裕理论",
    theoryBody: "十九大将‘乡村振兴’升格为党和国家的核心战略。重构产业、人才、文化、生态、组织五个振兴，把实现区域均衡作为打破城乡剪刀差、健全二元福利结构的关键突破口。",
    practiceTitle: "共同富裕示范区城乡均等",
    practiceBody: "现代浙江正在构建高水平共同富裕。山区26县‘山海协作’政策，推动杭州宁波等发达企业及教育医共体下沉。建设农村智慧食堂、城乡公交一体化、新老农人共同创业模式。",
    achievementMetric: "浙江城乡居民收入比缩小至1.86，是全国城乡绝对差距和相对差距最小的省份之一。"
  },
  {
    id: "governance",
    category: "基层治理 · 法治社会",
    icon: <Scale className="text-amber-700" size={20} />,
    seedTitle: "干部诸暨枫桥、浦江下访接访",
    seedTime: "2003年领导下访和纠纷调解",
    seedBody: "习近平同志亲自部署‘枫桥经验’拓展与‘浦江经验’确立。即：干部不回避积重老大难民怨，带头深入深水区下访接访矛盾；同时依靠依靠群众，本地化协商、化矛盾于萌芽形态。",
    theoryTitle: "国家治理体系和治理能力现代化",
    theoryBody: "在新时代演绎为‘平安中国建设’。形成推进基层自治、法治、德治‘三治融合’的现代善治网络。把党组织带头担当贯穿到大调解、大信访、全过程民主、微网格治理的全局体系里。",
    practiceTitle: "数字化“一网通办”与办事不求人",
    practiceBody: "现代浙江大步推进‘最多跑一次’改革及‘省域数字化转轨升级’。依托‘浙里办’‘浙政钉’数字网络，构建无感智慧治理，让数据多跑路、群众少跑腿。连续多年平安考评全国最优。",
    achievementMetric: "“最多跑一次”满意度超98%，基层社会信访积案化解率保持在95%以上高水平运营。"
  },
  {
    id: "economy",
    category: "活水民企 · 数字转型",
    icon: <Zap className="text-purple-700" size={20} />,
    seedTitle: "温商民营呵护与“数字浙江”",
    seedTime: "2003年布局科技浙江",
    seedBody: "主政期间坚决呵护温台传统民生私营活水。面对关于私营地位的风浪顶住压力。同时富有前瞻性地谋划‘数字浙江’建设，引入互联网、电子商务、科技先驱（阿里巴巴、正泰等）入局生根。",
    theoryTitle: "新发展理念 & “两个毫不动摇”",
    theoryBody: "新时代明确全面支持及呵护民营经济蓬勃健康。同时提出‘网络强国’和‘数字中国’国家工程战略，把数据要素列入核心生产要素，引导传统产业走向‘网络化、绿色化、智能制造化’升级。",
    practiceTitle: "“专精特新”与未来工厂示范省",
    practiceBody: "浙江当前拥有全国最高密度的国家级‘专精特新’小巨人企业群。在萧山、余杭、滨江大步建设数字孪生‘未来工厂’，构建高效新型民营营商环境示范，引领国家高新制造业突破。",
    achievementMetric: "国家专精特新“小巨人”企业总数居全国各省（区）最前列，民营经济贡献全省超60%税收。"
  }
];

export default function TheoryInformer() {
  const [activeTab, setActiveTab] = useState<string>("ecology");

  const currentPathway = PATHWAYS.find(p => p.id === activeTab) || PATHWAYS[0];

  return (
    <div className="bg-white border-2 border-brand-dark rounded-none p-5 md:p-6 shadow-sm h-full flex flex-col justify-between">
      
      {/* Module Title */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Network className="text-brand-red" size={22} />
          <h3 className="font-serif font-black text-brand-dark text-base md:text-lg">
            之江积累与新思想理论演进联动图 (Theory Evolution System)
          </h3>
        </div>
        <p className="text-xs text-stone-605 mb-6 font-serif font-light leading-relaxed">
          浙江的实践不单是地方治理成果，更是对中国面临不均衡痛点后形成的全国战略的先声预演。点击类别，解密每一套国家级宏图的思想推演逻辑。
        </p>

        {/* Tab Controls */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
          {PATHWAYS.map((p) => {
            const isActive = p.id === activeTab;
            return (
              <button
                id={`tab-pathway-${p.id}`}
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`p-3 rounded-none border-2 text-xs text-center font-serif font-bold transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                  isActive
                    ? 'bg-brand-red border-brand-dark text-brand-beige scale-102 shadow-sm'
                    : 'bg-white border-brand-dark/45 text-stone-700 hover:bg-brand-beige'
                }`}
              >
                {p.icon}
                <span>{p.category.split(' · ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparative Pathway Section */}
      <div className="flex-1 min-h-[300px]">
        {/* Pathway Category Display */}
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-brand-dark/15">
          <Sparkle className="text-brand-red shrink-0" size={16} />
          <span className="font-serif font-bold text-xs text-stone-400">研讨主题：</span>
          <span className="font-serif font-bold text-xs sm:text-sm text-brand-dark bg-brand-beige px-2.5 py-1 border border-brand-dark/20">
            {currentPathway.category}
          </span>
        </div>

        {/* The 3-Step Dynamic Pathway Slider Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch relative">
          
          {/* Step 1: Zhejiang origin seed */}
          <div className="bg-white border-2 border-brand-dark p-5 rounded-none shadow-sm flex flex-col justify-between transition-all relative hover:border-brand-red">
            <div>
              <div className="flex items-center justify-between gap-1 border-b border-brand-dark/15 pb-2.5 mb-3">
                <span className="text-[11px] font-bold text-stone-450 font-mono">STEP 01</span>
                <span className="bg-brand-beige text-brand-red text-[10px] font-bold px-2 py-0.5 border border-brand-red/35 font-serif">
                  之江萌发生态
                </span>
              </div>
              <h4 className="font-serif font-extrabold text-sm text-brand-dark mb-2 leading-snug">
                {currentPathway.seedTitle}
              </h4>
              <p className="text-[11px] text-brand-red/90 font-serif italic mb-3">
                📅 {currentPathway.seedTime}
              </p>
              <p className="text-xs text-stone-704 leading-relaxed text-justify font-light font-serif">
                {currentPathway.seedBody}
              </p>
            </div>
            
            {/* Visual Arrow for wide layouts */}
            <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 bg-brand-dark text-brand-beige p-0.5 rounded-none z-10 border border-brand-dark">
              <ArrowRight size={12} className="animate-pulse" />
            </div>
          </div>

          {/* Step 2: National Evolved Model */}
          <div className="bg-brand-beige border-2 border-brand-dark p-5 rounded-none shadow-sm flex flex-col justify-between transition-all relative">
            <div>
              <div className="flex items-center justify-between gap-1 border-b border-brand-dark/15 pb-2.5 mb-3">
                <span className="text-[11px] font-bold text-brand-red/70 font-mono">STEP 02</span>
                <span className="bg-brand-red text-brand-beige text-[10px] font-bold px-2 py-0.5 font-serif">
                  升华至全国宏图
                </span>
              </div>
              <h4 className="font-serif font-extrabold text-sm text-brand-red mb-3 leading-snug">
                {currentPathway.theoryTitle}
              </h4>
              <p className="text-xs text-brand-dark leading-relaxed text-justify font-light font-serif">
                {currentPathway.theoryBody}
              </p>
            </div>

            {/* Visual Arrow for wide layouts */}
            <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 bg-brand-dark text-brand-beige p-0.5 rounded-none z-10 border border-brand-dark">
              <ArrowRight size={12} className="animate-pulse" />
            </div>
          </div>

          {/* Step 3: Present Day Zhejiang Practice */}
          <div className="bg-brand-red text-brand-beige p-5 rounded-none shadow-sm flex flex-col justify-between transition-all border-2 border-brand-dark">
            <div>
              <div className="flex items-center justify-between gap-1 border-b border-white/20 pb-2.5 mb-3">
                <span className="text-[11px] font-bold text-yellow-300 font-mono">STEP 03</span>
                <span className="bg-brand-beige text-brand-red text-[10px] font-bold px-2 py-0.5 border border-brand-red/10 font-serif">
                  之江今日实践
                </span>
              </div>
              <h4 className="font-serif font-extrabold text-sm text-yellow-300 mb-3 leading-snug">
                {currentPathway.practiceTitle}
              </h4>
              <p className="text-xs text-stone-100 leading-relaxed text-justify font-light font-serif">
                {currentPathway.practiceBody}
              </p>
            </div>

            <div className="mt-4 pt-3.5 border-t border-white/20 flex items-center gap-2">
              <Award className="text-yellow-300 shrink-0" size={14} />
              <div>
                <p className="text-[9px] uppercase tracking-widest text-[#F9F7F2]/60 font-serif font-light">示范区建设指标：</p>
                <p className="text-xs font-bold text-white font-serif">{currentPathway.achievementMetric}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 理论升华深度板块：原幻灯片第6页及第7页的核心学理逻辑融合 */}
      <div className="mt-8 pt-6 border-t-2 border-brand-dark/30">
        <div className="bg-brand-beige border-2 border-brand-dark p-5 sm:p-6 rounded-none relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-brand-dark text-brand-beige text-[9px] font-bold px-3 py-1 font-serif select-none uppercase tracking-widest">
            学理中枢 · MASTER SYSTEM
          </div>

          <div className="flex items-center gap-2 pb-3 border-b border-brand-dark/20 mb-4 flex-wrap">
            <span className="bg-brand-red text-brand-beige text-[10px] font-bold font-serif px-2.5 py-0.5 rounded-none uppercase">
              理论演进深度解构
            </span>
            <h4 className="font-serif font-black text-brand-dark text-sm sm:text-base">
              地方探索至国家顶层战略上升脉络 (From Pilot to National Framework)
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Box 1: 萌发 (2002-2007) */}
            <div className="bg-white border border-brand-dark/25 p-4 rounded-none flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-stone-100 mb-2.5">
                  <span className="text-[10px] font-mono font-bold text-stone-400">PHASE 01 · 局部萌发</span>
                  <span className="text-[10px] font-serif font-extrabold text-brand-red">2002 - 2007 年</span>
                </div>
                <h5 className="font-serif font-extrabold text-xs text-brand-dark mb-1.5">主政浙江：经验闭环构建</h5>
                <p className="text-xs text-stone-600 leading-relaxed font-serif font-light text-justify">
                  主政浙江期间，习近平同志通过省情深度大调研、直面矛盾深入浦江县等基层，亲力探索并成型了涵盖了<strong>“八八战略”、“两山理论”、“千万工程”与“数字浙江”</strong>在内的完整、严密的省域综合治理方案，从源头上解答了不协调转轨期的众多烦恼。
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-stone-100 text-[10px] text-stone-400 font-serif italic text-justify">
                * 学理透视：马克思主义中国化在地方维度的科学探索。
              </div>
            </div>

            {/* Box 2: 转化 (十八大以来) */}
            <div className="bg-white border border-brand-dark/25 p-4 rounded-none flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-stone-100 mb-2.5">
                  <span className="text-[10px] font-mono font-bold text-stone-400">PHASE 02 · 全国升华</span>
                  <span className="text-[10px] font-serif font-extrabold text-[#A31D1D]">十八大至今</span>
                </div>
                <h5 className="font-serif font-extrabold text-xs text-brand-red mb-1.5">顶层飞跃：真理上升全国</h5>
                <p className="text-xs text-stone-600 leading-relaxed font-serif font-light text-justify">
                  面对全国范围更加复杂的“新常态”瓶颈、深水区民生改革以及<strong>主要社会矛盾的历史性转轨</strong>，浙江这批成功经过实证检验的局部经验，迅速升华转化成“全国乡村振兴战略”、“习近平生态文明国家思想体系”以及“构建新发展格局”等顶层核心思想决策。
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-stone-100 text-[10px] text-brand-red font-serif font-bold text-justify uppercase tracking-wider">
                💡 国家宏观总体战略总方针
              </div>
            </div>

            {/* Box 3: 认识论与实践闭环 */}
            <div className="bg-white border-2 border-brand-red p-4 rounded-none flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-brand-red/10 mb-2.5">
                  <span className="text-[10px] font-mono font-bold text-brand-red/60">PHASE 03 · 唯物闭环</span>
                  <span className="text-[10px] font-serif font-extrabold text-brand-red">示范区再深化</span>
                </div>
                <h5 className="font-serif font-extrabold text-xs text-brand-dark mb-1.5">学理规律：辩证认识论飞跃</h5>
                <p className="text-xs text-stone-700 leading-relaxed font-serif font-light text-justify">
                  构建出 <strong>实践 ➔ 认识 ➔ 再实践</strong> 的完整高度。2021年党中央、国务院再次赋能浙江高质量发展建设“共同富裕示范区”，表明国家顶层在吸收浙江等地方智慧后，再度深化并重规划示范试点先行，以此探索全人类跨越两极分化的先锋样板。
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-brand-red/20 text-[10px] text-[#A31D1D] font-serif font-bold text-justify">
                ❝ 浙江遇到的成长的烦恼，也就是全国正在或即面临的发展节点。 ❞
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-white border border-brand-dark/15 text-xs text-stone-500 font-serif leading-relaxed text-left rounded-none font-light italic text-justify">
            <strong>📢 学术答辩主讲演说笔记：</strong> 面对老师提问及讲台汇报，可主攻对辩证唯物主义认识论进行解释：浙江的探究并非凭空产生，而是从一线的肥沃土地中归纳客观规律。当它上升为党和国家意志并普度全国后，又更高标准地支持共同富裕试点，形成了循环上升的真理实证闭环。
          </div>
        </div>
      </div>

      {/* Methodology Highlight Footer */}
      <div className="mt-6 pt-5 border-t border-brand-dark/20 flex items-center justify-between flex-wrap gap-2 text-xs text-stone-500 font-serif">
        <div className="flex items-center gap-1.5 font-light">
          <Link2 size={12} className="text-brand-red" />
          <span>认识论唯物逻辑： <b>省域地方试点实践 ➔ 锤炼核心思想顶层规划 ➔ 以更高标准反哺示范区落地</b></span>
        </div>
        <span className="italic font-mono text-[9px] text-[#A31D1D] font-bold tracking-wider">METHODOLOGY PILOT-PRACTICE ENGINE</span>
      </div>

    </div>
  );
}
