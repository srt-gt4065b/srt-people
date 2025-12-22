import React, { useState, useEffect, useMemo, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  onAuthStateChanged, 
  signInWithCustomToken 
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  serverTimestamp, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { 
  Search, 
  User, 
  Phone, 
  Users, 
  Edit3, 
  Plus, 
  Save, 
  X, 
  Upload, 
  FileSpreadsheet, 
  Trash2,
  Camera,
  Filter,
  MapPin,
  Calendar,
  Database,
  Lock // Added Lock icon
} from 'lucide-react';

// --- Firebase Configuration & Initialization ---
const firebaseConfig = {
  apiKey: "AIzaSyCEcu-um43cfv89xX8znl2DYinlR8KHrlU",
  authDomain: "srt-people.firebaseapp.com",
  projectId: "srt-people",
  storageBucket: "srt-people.firebasestorage.app",
  messagingSenderId: "246383141664",
  appId: "1:246383141664:web:bc0f03928643b866f3ad45"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// appId is no longer dynamic based on platform, using projectId or a fixed string as needed for logic, 
// but for the collection path helper below, we should stick to a consistent path or simplify it.
// Since we are moving to a personal DB, let's simplify the path to 'members' as recommended in the deployment guide,
// OR keep the existing structure if you want to maintain the same logic. 
// For now, I will keep the logic robust by defaulting appId to 'srt-people-app' if not defined, 
// or better yet, just simplify the collection path to be cleaner for a production app.

const appId = 'srt-people-prod'; // Fixed App ID for your production environment

// Collection Path Helper
const getCollectionPath = () => {
  // Using a cleaner path for your personal DB: 'srt_members' collection at the root or under artifacts
  // Let's stick to the previous structure for consistency but use the fixed appId
  return collection(db, 'artifacts', appId, 'public', 'data', 'srt_members');
};

// --- Raw Data (Provided by User) ---
const SRT_MEMBER_LIST_RAW = `1 54 남 양갑섭 금남면
2 57 남 신웅철 천안
3 60 남 김만환 한솔동
4 60 남 정흠진 해밀동
5 61 남 김천식 나성동
6 61 남 이일상 대전
7 62 남 민경직 다정동
8 62 남 최부웅 대전
9 63 남 민경일 세종
10 63 남 송시범 세종
11 63 남 우상돈 도담동
12 63 남 차창석 나성동
13 63 남 홍성호 한솔동
14 64 남 김성호 아름동
15 64 남 오동영 금남면
16 65 남 최우혁 오송
17 66 남 김동주 나성동
18 66 남 채승필 조치원
19 68 남 임남규 오송
20 69 남 김명국 도담동
21 69 여 김자영 새롬동
22 69 남 박종문 보람동
23 69 여 서문정화 어진동
24 69 남 이석휘 아름동
25 69 남 임주열 소담동
26 69 여 황경연 해밀동
27 70 남 권길호 도담동
28 70 남 김수현 새롬동
29 70 남 김유성 한솔동
30 70 남 김형태 도담동
31 70 남 노재호 한솔동
32 70 여 박진희 대평동
33 70 여 서정화 보람동
34 70 여 신명순 다정동
35 70 남 이용문 보람동
36 70 남 이중원 청주
37 71 남 김기항 고운동
38 71 남 김덕겸 새롬동
39 71 남 김상남 공주
40 71 여 양승란 아름동
41 71 여 이신영 한솔동
42 71 여 이춘화 새롬동
43 71 남 이현배 나성동
44 71 남 장혁동 계룡시
45 71 남 전세환 새롬동
46 71 남 주환종 한솔동
47 72 남 김병찬 새롬동
48 72 남 김연갑 종촌동
49 72 여 김점옥 새롬동
50 72 남 박재곤 고운동
51 72 여 서현미 다정동
52 72 남 신영섭 한솔동
53 72 남 엄주언 보람동
54 72 남 윤여홍 소담동
55 72 여 이윤희 새롬동
56 72 남 이증희 보람동
57 72 남 정웅호 반곡동
58 72 남 정지철 나성동
59 72 남 조남수 둔곡동
60 73 남 김용민 아름동
61 73 남 김재산 고운동
62 73 남 도재협 고운동
63 73 여 방희선 보람동
64 73 남 서주식 새롬동
65 73 남 신기섭 아름동
66 73 남 안길석 소담동
67 73 여 윤수정 고운동
68 73 남 윤오중 공주
69 73 여 윤희순 조치원
70 73 여 이경민 소담동
71 73 남 이성관 도담동
72 73 여 이윤경 소담동
73 73 남 임정식 보람동
74 73 남 천기우 대평동
75 73 남 최광영 고운동
76 74 여 김미영 한솔동
77 74 여 김성옥 대전
78 74 남 김수완 조치원
79 74 여 김영아 나성동
80 74 남 김용호 광명
81 74 여 김운선 청주
82 74 여 김유미 아름동
83 74 여 김은희 도담동
84 74 남 김호종 다정동
85 74 남 민병구 관평동
86 74 남 서한석 한솔동
87 74 여 송부자 종촌동
88 74 남 이병희 반곡동
89 74 여 이정연 종촌동
90 74 남 이진 대전
91 74 남 이환혁 보람동
92 74 여 이효실 종촌동
93 75 남 김병식 대전
94 75 여 김준희 새롬동
95 75 남 유창우 종촌동
96 75 남 이희연 고운동
97 75 남 최승욱 새롬동
98 76 남 곽비룡 도담동
99 76 여 김민재 다정동
100 76 남 박재성 아름동
101 76 여 방성경 대전
102 76 여 백수미 종촌동
103 76 남 손수돈 종촌동
104 76 여 유경희 보람동
105 76 남 이병찬 어진동
106 76 남 이연규 새롬동
107 76 남 최정훈 종촌동
108 76 여 허현정 도담동
109 77 여 강은영 새롬동
110 77 남 김광진 다정동
111 77 여 김미화 새롬동
112 77 남 김종승 새롬동
113 77 여 류영덕 아름동
114 77 여 박명선 고운동
115 77 여 박은정 고운동
116 77 남 서인수 다정동
117 77 남 손홍기 다정동
118 77 여 송채한 어진동
119 77 남 신현규 대평동
120 77 남 이용구 논산
121 77 남 이의명 보람동
122 77 여 전미옥 대전
123 77 남 정찬진 아름동
124 77 남 조기욱 한솔동
125 77 남 주성해 종촌동
126 77 여 표영숙 새롬동
127 77 여 홍수연 봉명동
128 78 남 김정남 한솔동
129 78 여 김희연 다정동
130 78 여 마세정 종촌동
131 78 남 박무영 아름동
132 78 남 박재영 해밀동
133 78 남 박지원 소담동
134 78 남 소병득 새롬동
135 78 남 안지훈 종촌동
136 78 여 윤은정 도담동
137 78 남 이상훈 도담동
138 78 남 이승철 나성동
139 78 여 전영선 다정동
140 78 여 천미혜 한솔동
141 78 남 한태희 해밀동
142 79 남 강동현 종촌동
143 79 남 강전문 종촌동
144 79 여 고정현 새롬동
145 79 남 권수안 대평동
146 79 여 김남희 한솔동
147 79 남 김민기 대전
148 79 남 김병기 새롬동
149 79 남 김성균 도담동
150 79 여 김외선 어진동
151 79 남 김용섭 도담동
152 79 남 박범진 공주
153 79 남 박찬성 한솔동
154 79 남 변영수 새롬동
155 79 남 성규동 종촌동
156 79 남 신철 한솔동
157 79 남 오길선 대평동
158 79 남 오완목 논산
159 79 남 윤종성 반곡동
160 79 남 윤태수 종촌동
161 79 남 이준엽 대평동
162 79 남 임종오 도담동
163 79 남 전찬규 고운동
164 79 남 정덕수 연서면
165 79 여 조원경 종촌동
166 79 남 조홍석 새롬동
167 79 남 진중현 나성동
168 79 여 한혜수 도담동
169 80 여 강현정 도담동
170 80 남 고명백 청주
171 80 남 고찬민 아름동
172 80 남 박종희 다정동
173 80 여 전영란 아름동
174 80 여 정미 반곡동
175 80 남 정우열 도담동
176 80 여 최혜정 고운동
177 81 남 강동훈 고운동
178 81 남 고영근 대전
179 81 여 기희연 청주
180 81 남 김윤식 나성동
181 81 남 김진우 어진동
182 81 여 민수경 나성동
183 81 남 박경현 다정동
184 81 남 박성환 산울동
185 81 여 박은정 다정동
186 81 남 박종봉 보람동
187 81 남 신천은 대평동
188 81 남 양정국 아름동
189 81 여 윤혜림 보람동
190 81 남 이승준 집현동
191 81 남 이우용 아름동
192 81 여 장윤미 종촌동
193 81 여 전정화 고운동
194 81 여 전해경 새롬동
195 82 남 김성환 보람동
196 82 남 김영석 종촌동
197 82 남 김오태  
198 82 남 박창선 보람동
199 82 남 유기수 대평동
200 82 남 유기화 새롬동
201 82 남 이현진 오송
202 82 남 정한수 집현동
203 83 남 김지성 대전
204 83 남 김진용 해밀동
205 83 남 김행석 나성동
206 83 여 김현희 한솔동
207 83 남 박건우 종촌동
208 83 여 손수련 대전
209 83 남 윤종석 한솔동
210 83 남 윤호근 대전
211 83 여 이아련 다정동
212 83 남 이준우 도담동
213 83 여 임지영 세종
214 83 남 주효석 집현동
215 84 남 강수환 조치원
216 84 남 권해훈 집현동
217 84 남 김병오 집현동
218 84 여 손미연 종촌동
219 84 남 천상준 반곡동
220 84 남 허성무 대전
221 85 남 김요한 다정동
222 85 여 김유라 나성동
223 85 남 서항석 보람동
224 85 남 오성 아름동
225 85 여 이선옥 다정동
226 85 남 이진희 도담동
227 86 여 김민주 보람동
228 86 여 안태경 청주
229 86 남 이종섭 청주
230 86 남 전민규 해밀동
231 87 남 김태영 다정동
232 87 여 김한나 집현동
233 87 남 심민국 대전
234 87 남 정진우 종촌동
235 87 남 천둥 고운동
236 88 여 김소연 청주
237 88 남 안경현 계룡시
238 88 남 이진호 조치원
239 89 남 이승훈 나성동
240 89 남 임경훈 대전
241 90 남 공지환 집현동
242 90 여 오은경 부강
243 90 남 유우열 나성동
244 90 여 이은진 반곡동
245 90 남 이형우 산울동
246 91 남 김대용 보람동
247 91 여 김도운 반곡동
248 91 여 김수연 다정동
249 92 남 변성현 나성동
250 92 남 임장혁 공주
251 93 여 김송희 오송
252 94 남 김찬석 조치원
253 00 남 한상지 청주`;

export default function App() {
  const [user, setUser] = useState(null);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('All');
  
  // Auth State for Password Gate
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  
  // Modal States
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState(null); 

  // --- Password Logic ---
  useEffect(() => {
    // Check session storage on load
    const isAuth = sessionStorage.getItem('srt_auth');
    if (isAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === '20251214') {
      setIsAuthenticated(true);
      setLoginError(false);
      sessionStorage.setItem('srt_auth', 'true');
    } else {
      setLoginError(true);
    }
  };

  // --- Firebase Auth & Data Fetching ---
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (error) {
        console.error("Auth failed", error);
      }
    };
    initAuth();

    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    // Fetch data regardless of UI auth state, so it's ready when they log in
    const q = query(getCollectionPath());
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      data.sort((a, b) => {
        const aUpdated = (a.imageUrl || a.phone) ? 1 : 0;
        const bUpdated = (b.imageUrl || b.phone) ? 1 : 0;
        if (aUpdated !== bUpdated) return bUpdated - aUpdated; 
        return (a.name || '').localeCompare(b.name || '');
      });
      setMembers(data);
      setLoading(false);
    }, (error) => {
      console.error("Firestore Error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  // --- Helpers ---
  const groups = useMemo(() => {
    const g = new Set(members.map(m => m.region || m.group).filter(Boolean));
    return ['All', ...Array.from(g).sort()];
  }, [members]);

  const filteredMembers = useMemo(() => {
    return members.filter(member => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        (member.name?.toLowerCase().includes(searchLower)) ||
        (member.phone?.includes(searchTerm)) ||
        (member.region?.toLowerCase().includes(searchLower)) ||
        (member.birthYear?.includes(searchTerm));
      
      const regionOrGroup = member.region || member.group;
      const matchesGroup = selectedGroup === 'All' || regionOrGroup === selectedGroup;
      
      return matchesSearch && matchesGroup;
    });
  }, [members, searchTerm, selectedGroup]);

  // --- Actions ---
  const handleEditClick = (member) => {
    setCurrentMember(member);
    setIsEditModalOpen(true);
  };

  const handleAddNew = () => {
    setCurrentMember(null);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('정말 이 회원 정보를 삭제하시겠습니까?')) {
      try {
        await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'srt_members', id));
      } catch (e) {
        alert('삭제 중 오류가 발생했습니다.');
      }
    }
  };

  // --- 1. Login Screen ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden p-8 border border-slate-200">
           <div className="text-center mb-8">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-700 shadow-sm">
                <Lock size={32} />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">SRT 회원 명부</h1>
              <p className="text-slate-500 text-sm mt-2">회원 전용 공간입니다.<br/>공지된 비밀번호를 입력해주세요.</p>
           </div>
           
           <form onSubmit={handleLogin} className="space-y-4">
             <div>
               <input
                 type="password"
                 value={passwordInput}
                 onChange={(e) => setPasswordInput(e.target.value)}
                 className={`w-full px-4 py-3 border rounded-xl focus:ring-2 outline-none transition text-center text-lg tracking-widest placeholder:tracking-normal
                   ${loginError 
                     ? 'border-red-300 focus:ring-red-200 focus:border-red-500 bg-red-50' 
                     : 'border-slate-300 focus:ring-indigo-200 focus:border-indigo-500 bg-slate-50'}`}
                 placeholder="비밀번호 입력"
                 autoFocus
               />
               {loginError && (
                 <p className="text-red-500 text-xs mt-2 text-center font-medium animate-pulse">
                   비밀번호가 올바르지 않습니다.
                 </p>
               )}
             </div>
             <button
               type="submit"
               className="w-full bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-indigo-200/50"
             >
               입장하기
             </button>
           </form>
           <div className="mt-8 text-center pt-6 border-t border-slate-100">
             <p className="text-xs text-slate-400">SRT Sejong Running Team</p>
           </div>
        </div>
      </div>
    );
  }

  // --- 2. Main App (Authenticated) ---
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
              <Users size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">SRT 동호회 마스터 DB</h1>
              <p className="text-xs text-indigo-200">2025년 정회원 리스트</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 w-full sm:w-auto">
             <button 
              onClick={() => setIsImportModalOpen(true)}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition backdrop-blur-sm"
            >
              <FileSpreadsheet size={16} />
              <span>엑셀 등록</span>
            </button>
            <button 
              onClick={handleAddNew}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-2 bg-white text-indigo-900 hover:bg-indigo-50 px-4 py-2 rounded-lg text-sm font-semibold transition shadow-sm"
            >
              <Plus size={16} />
              <span>신규 회원</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Search & Filter Controls */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200 sticky top-[80px] z-0">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="이름, 지역(동), 00년생 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <Filter className="h-5 w-5 text-slate-400 flex-shrink-0" />
            <div className="flex space-x-2">
              {groups.map(group => (
                <button
                  key={group}
                  onClick={() => setSelectedGroup(group)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedGroup === group 
                      ? 'bg-indigo-100 text-indigo-800 ring-1 ring-indigo-500' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {group}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mb-6 flex items-center justify-between text-sm text-slate-500 px-1">
          <span>총 회원: <strong className="text-slate-900">{filteredMembers.length}</strong>명</span>
          <span className="text-xs bg-slate-100 px-2 py-1 rounded">
            검색 후 본인 이름을 클릭하여 정보를 업데이트하세요.
          </span>
        </div>

        {/* Members Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-900 mx-auto"></div>
            <p className="mt-4 text-slate-500">데이터를 불러오는 중입니다...</p>
          </div>
        ) : filteredMembers.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
            <Users className="mx-auto h-12 w-12 text-slate-300" />
            <h3 className="mt-2 text-sm font-medium text-slate-900">검색 결과 없음</h3>
            <p className="mt-1 text-sm text-slate-500">조건에 맞는 회원이 없거나 아직 등록되지 않았습니다.</p>
             {members.length === 0 && (
              <button 
                onClick={() => setIsImportModalOpen(true)}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition"
              >
                기본 데이터 불러오기
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map(member => (
              <MemberCard 
                key={member.id} 
                member={member} 
                onEdit={() => handleEditClick(member)}
                onDelete={() => handleDelete(member.id)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Modals */}
      {isEditModalOpen && (
        <EditMemberModal 
          isOpen={isEditModalOpen} 
          onClose={() => setIsEditModalOpen(false)} 
          member={currentMember}
          appId={appId}
          groups={groups}
        />
      )}

      {isImportModalOpen && (
        <ImportModal 
          isOpen={isImportModalOpen}
          onClose={() => setIsImportModalOpen(false)}
          appId={appId}
        />
      )}
    </div>
  );
}

// --- Sub-Components ---

function MemberCard({ member, onEdit, onDelete }) {
  const isProfileIncomplete = !member.phone;

  return (
    <div className={`bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition group relative
      ${isProfileIncomplete ? 'border-slate-200' : 'border-indigo-100'}
    `}>
      <div className={`h-24 relative ${isProfileIncomplete ? 'bg-slate-100' : 'bg-gradient-to-r from-indigo-500 to-purple-600'}`}>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
          <button 
            onClick={(e) => { e.stopPropagation(); onEdit(); }}
            className="p-1.5 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-sm"
          >
            <Edit3 size={14} />
          </button>
           <button 
            onClick={(e) => { e.stopPropagation(); onDelete(); }}
            className="p-1.5 bg-red-500/50 hover:bg-red-500/80 text-white rounded-full backdrop-blur-sm"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>
      
      <div className="px-5 pb-5">
        <div className="relative flex justify-between items-end -mt-10 mb-3">
          <div className="relative">
            {member.imageUrl ? (
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-sm bg-white"
              />
            ) : (
              <div className={`h-20 w-20 rounded-full border-4 border-white flex items-center justify-center shadow-sm 
                ${member.gender === '여' ? 'bg-pink-50 text-pink-300' : 'bg-blue-50 text-blue-300'}`}>
                <User size={32} />
              </div>
            )}
            {/* Status Dot */}
            <div className={`absolute bottom-0 right-0 h-5 w-5 border-2 border-white rounded-full 
              ${isProfileIncomplete ? 'bg-slate-300' : 'bg-green-400'}`} 
              title={isProfileIncomplete ? "미등록" : "정보 등록됨"}>
            </div>
          </div>
          <div className="flex flex-col items-end">
             <span className="mb-1 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">
              {member.birthYear ? `${member.birthYear}년생` : '연도미상'}
            </span>
             <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-50 text-indigo-700">
              {member.region || member.group || '지역없음'}
            </span>
          </div>
        </div>
        
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
          <span className="text-xs text-slate-500">{member.gender === '여' ? '여성' : '남성'}</span>
        </div>
        
        <div className="mt-3 space-y-2 min-h-[40px]">
          {member.phone ? (
            <div className="flex items-center text-sm text-slate-600">
              <Phone size={14} className="mr-2 text-slate-400" />
              <a href={`tel:${member.phone}`} className="hover:text-indigo-600 hover:underline font-medium">
                {member.phone}
              </a>
            </div>
          ) : (
             <div className="flex items-center text-sm text-slate-400 italic">
               <Phone size={14} className="mr-2 opacity-50" />
               <span>연락처 미등록</span>
             </div>
          )}
        </div>
        
        <button 
          onClick={onEdit}
          className={`mt-4 w-full py-2 px-4 text-sm font-medium rounded-lg border transition flex justify-center items-center
            ${isProfileIncomplete 
              ? 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100' 
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}
          `}
        >
          {isProfileIncomplete ? (
            <>
              <Edit3 size={14} className="mr-1.5" /> 정보 업데이트
            </>
          ) : '정보 수정'}
        </button>
      </div>
    </div>
  );
}

function EditMemberModal({ isOpen, onClose, member, appId, groups }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: '',
    group: '', // Used as Region fallback
    region: '',
    email: '',
    imageUrl: '',
    birthYear: '',
    gender: '남'
  });
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (member) {
      setFormData({
        name: member.name || '',
        phone: member.phone || '',
        role: member.role || '회원',
        group: member.group || '',
        region: member.region || '',
        email: member.email || '',
        imageUrl: member.imageUrl || '',
        birthYear: member.birthYear || '',
        gender: member.gender || '남'
      });
    } else {
      setFormData({ 
        name: '', phone: '', role: '회원', group: '일반', 
        region: '', email: '', imageUrl: '', birthYear: '', gender: '남' 
      });
    }
  }, [member]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024) { // 1MB Limit
        alert("이미지 크기는 1MB 이하여야 합니다.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imageUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const colRef = collection(db, 'artifacts', appId, 'public', 'data', 'srt_members');
      
      const payload = {
        ...formData,
        // Ensure Group matches Region if not set separately, or logic can be customized
        group: formData.region || formData.group,
        updatedAt: serverTimestamp(),
      };

      if (member) {
        await updateDoc(doc(colRef, member.id), payload);
      } else {
        await addDoc(colRef, { ...payload, createdAt: serverTimestamp() });
      }
      onClose();
    } catch (error) {
      console.error("Save failed", error);
      alert("저장에 실패했습니다.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-fade-in-up">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h2 className="text-lg font-bold text-slate-800">
            {member ? `${member.name}님 정보 수정` : '새 회원 등록'}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Image Upload Area */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div 
              className="relative w-28 h-28 rounded-full border-4 border-slate-100 bg-slate-50 overflow-hidden cursor-pointer hover:border-indigo-200 transition group"
              onClick={() => fileInputRef.current?.click()}
            >
              {formData.imageUrl ? (
                <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-300">
                  <Camera size={32} />
                  <span className="text-[10px] mt-1">사진 추가</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                 <Camera size={24} className="text-white opacity-0 group-hover:opacity-100" />
              </div>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleImageChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500">이름 <span className="text-red-500">*</span></label>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
             <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500">연락처</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="010-0000-0000"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500">생년(YY)</label>
              <input
                name="birthYear"
                value={formData.birthYear}
                onChange={handleChange}
                placeholder="71"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500">성별</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
              >
                <option value="남">남성</option>
                <option value="여">여성</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500">지역(동)</label>
              <input
                name="region"
                value={formData.region}
                onChange={handleChange}
                list="region-options"
                placeholder="한솔동"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
               <datalist id="region-options">
                 {groups.filter(g => g !== 'All').map(g => <option key={g} value={g} />)}
              </datalist>
            </div>
          </div>
          
          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 font-medium transition"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="flex-1 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium shadow-md shadow-indigo-200 transition flex justify-center items-center"
            >
              {isSaving ? '저장 중...' : '저장하기'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ImportModal({ isOpen, onClose, appId }) {
  const [csvText, setCsvText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const loadDefaultData = () => {
    setCsvText(SRT_MEMBER_LIST_RAW);
  };

  const handleImport = async () => {
    if (!csvText.trim()) return;
    setIsProcessing(true);
    
    // Parser for "Index Year Gender Name Region" (Space/Tab separated)
    const lines = csvText.trim().split('\n');
    let successCount = 0;
    
    try {
      const batchPromises = lines.map(async (line) => {
        // Clean line
        const trimmed = line.trim();
        if (!trimmed) return null;
        
        // Split by whitespace
        const parts = trimmed.split(/\s+/);
        
        // Expected parts: [index, birthYear, gender, name, region]
        // Example: "1", "54", "남", "양갑섭", "금남면"
        // But some names might have spaces? Assuming name is one token for now based on provided data
        
        if (parts.length < 4) return null; // Safety check

        // Careful parsing
        // Sometimes index is missing or format varies, but based on provided data:
        // Index is col 0, Year col 1, Gender col 2, Name col 3, Region col 4
        // Example: 197 82 남 김오태 (Region missing sometimes?)
        
        const birthYear = parts[1];
        const gender = parts[2];
        const name = parts[3];
        const region = parts.length > 4 ? parts[4] : '';

        if (!name) return null;

        await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'srt_members'), {
          name,
          birthYear,
          gender,
          region,
          group: region || '일반', // Default group to region
          role: '회원',
          phone: '', // Empty initially
          email: '',
          imageUrl: '',
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
        successCount++;
      });

      await Promise.all(batchPromises);
      alert(`${successCount}명의 회원이 추가되었습니다.`);
      onClose();
      setCsvText('');
    } catch (e) {
      console.error(e);
      alert('데이터 처리 중 오류가 발생했습니다.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
     <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-fade-in-up">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center space-x-2">
            <Database className="text-indigo-600" size={24} />
             <h2 className="text-lg font-bold text-slate-800">회원 DB 초기화</h2>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
             <div className="text-sm text-slate-600">
               아래 텍스트 상자에 데이터를 붙여넣거나 버튼을 클릭하세요.
             </div>
             <button 
               onClick={loadDefaultData}
               className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full font-bold hover:bg-indigo-100 transition flex items-center"
             >
               <FileSpreadsheet size={12} className="mr-1" />
               2025 SRT 명단 불러오기
             </button>
          </div>

          <textarea
            className="w-full h-64 p-4 border border-slate-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none bg-slate-50"
            placeholder="데이터 형식: 순번 생년 성별 이름 지역 (띄어쓰기 구분)"
            value={csvText}
            onChange={(e) => setCsvText(e.target.value)}
          ></textarea>

          <div className="mt-4 flex justify-end gap-3">
             <button
              onClick={onClose}
              className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
            >
              취소
            </button>
            <button
              onClick={handleImport}
              disabled={isProcessing || !csvText}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
               {isProcessing ? '처리 중...' : (
                 <>
                   <Upload size={18} className="mr-2" /> 일괄 등록하기
                 </>
               )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
