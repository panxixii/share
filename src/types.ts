/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  category: '序言' | '思想萌发' | '理论演进' | '浙江实践' | '学术探讨' | '结语';
  content: string[];
  quotes?: { text: string; source: string }[];
  presenterNotes: string; // Detail teacher/classmate prompt notes
  academicContext: string; // Standard policy text mapping
}

export interface FootprintPoint {
  id: string;
  name: string;
  city: string;
  location: { x: number; y: number }; // Coordinate ratios (0-100) for visual SVG map representation
  theory: string; // The seed idea (e.g. "绿水青山就是金山银山")
  year: string;
  background: string;
  historyDetails: string;
  originalQuote: string;
  nationalPolicy: string; // The evolved national policy
  nationalPolicyTitle: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  citation: string;
}

export interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
