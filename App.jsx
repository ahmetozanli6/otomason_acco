import React, { useState, useEffect, useMemo } from 'react';

// ============================================================================
// İKONLAR (SVG Formatında Korundu)
// ============================================================================
const SvgIcon = ({ children, size = 20, className = '', fill = 'none', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {children}
  </svg>
);

const LayoutDashboard = (p) => <SvgIcon {...p}><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></SvgIcon>;
const Package = (p) => <SvgIcon {...p}><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></SvgIcon>;
const Users = (p) => <SvgIcon {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></SvgIcon>;
const CircleDollarSign = (p) => <SvgIcon {...p}><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></SvgIcon>;
const Send = (p) => <SvgIcon {...p}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></SvgIcon>;
const FileText = (p) => <SvgIcon {...p}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></SvgIcon>;
const Menu = (p) => <SvgIcon {...p}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></SvgIcon>;
const X = (p) => <SvgIcon {...p}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></SvgIcon>;
const Search = (p) => <SvgIcon {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></SvgIcon>;
const Plus = (p) => <SvgIcon {...p}><path d="M5 12h14"/><path d="M12 5v14"/></SvgIcon>;
const Calculator = (p) => <SvgIcon {...p}><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16.01" y1="14" y2="14"/><line x1="16" x2="16.01" y1="18" y2="18"/><line x1="12" x2="12.01" y1="14" y2="14"/><line x1="12" x2="12.01" y1="18" y2="18"/><line x1="8" x2="8.01" y1="14" y2="14"/><line x1="8" x2="8.01" y1="18" y2="18"/></SvgIcon>;
const CheckCircle = (p) => <SvgIcon {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></SvgIcon>;
const Zap = (p) => <SvgIcon {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></SvgIcon>;
const Edit2 = (p) => <SvgIcon {...p}><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></SvgIcon>;
const Trash2 = (p) => <SvgIcon {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></SvgIcon>;
const RefreshCw = (p) => <SvgIcon {...p}><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></SvgIcon>;
const AlertCircle = (p) => <SvgIcon {...p}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></SvgIcon>;
const Camera = (p) => <SvgIcon {...p}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></SvgIcon>;
const Archive = (p) => <SvgIcon {...p}><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><line x1="10" x2="14" y1="12" y2="12"/></SvgIcon>;
const FileBarChart = (p) => <SvgIcon {...p}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="12" x2="12" y1="18" y2="12"/><line x1="8" x2="8" y1="18" y2="15"/><line x1="16" x2="16" y1="18" y2="14"/></SvgIcon>;

// ============================================================================
// SUPABASE & MOCK VERİLER
// ============================================================================
const SUPABASE_URL = 'https://zmlbdpjcergcvcurihuy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptbGJkcGpjZXJnY3ZjdXJpaHV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1MTA2MzIsImV4cCI6MjA5MTA4NjYzMn0.Jh4e_UXSL7CH7EzLBhhXtQYM0-iQwrFU3GHnoe-njBM';
const PHOTO_BUCKET = 'numune-photos';

let supabase = null;

const MOCK_CUSTOMERS = [ { firma_adi: 'ZARA' }, { firma_adi: 'H&M' }, { firma_adi: 'MANGO' }, { firma_adi: 'LC WAIKIKI' } ];
const MOCK_SAMPLES = [
  { id: 101, firma: 'ZARA', numune: 'ZR-24-KABAN', fiyat: '$18.50', durum: 'Onaylandı', aciklama: 'Kumaş kalınlaştırılacak', arsiv: false, created_at: new Date().toISOString() },
  { id: 102, firma: 'ZARA', numune: '↳ Siyah Varyant', fiyat: '$18.50', durum: 'Onaylandı', aciklama: 'ZR-24-KABAN|Siyah fermuar eklendi', arsiv: false, created_at: new Date().toISOString() },
  { id: 103, firma: 'H&M', numune: 'HM-YAZ-TSHIRT', fiyat: '$4.20', durum: 'Beklemede', aciklama: 'Baskı testi bekleniyor', arsiv: false, created_at: new Date(Date.now()-86400000).toISOString() },
  { id: 104, firma: 'MANGO', numune: 'MG-ELBISE-01', fiyat: '$22.00', durum: 'Takip Et', aciklama: 'Kalıp dar, revize istendi', arsiv: false, created_at: new Date(Date.now()-172800000).toISOString() }
];

// ============================================================================
// YARDIMCILAR
// ============================================================================
const formatDate = (dateStr) => {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr), now = new Date();
    const diff = Math.floor((now - d) / 86400000);
    if (diff === 0) return 'bugün';
    if (diff === 1) return 'dün';
    if (diff < 7) return diff + 'g';
    if (diff < 30) return Math.floor(diff / 7) + 'h';
    return d.toLocaleDateString('tr-TR', { day: '2-digit', month: 'short' });
  } catch (e) { return dateStr; }
};

const isV = (n) => typeof n === 'string' && n.startsWith('↳');
const dName = (n) => typeof n === 'string' ? n.replace(/^↳\s*/, '').trim() : '';
const trl = (s) => (s || '').toString().replaceAll('İ', 'i').replaceAll('I', 'ı').toLowerCase();

// ============================================================================
// YER TUTUCU MODÜL (Diğer Sekmeler İçin)
// ============================================================================
const PlaceholderModule = ({ title, icon: Icon }) => (
  <div className="flex flex-col items-center justify-center h-full p-8 text-center text-slate-500">
    <div className="w-20 h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
       <Icon size={40} className="text-cyan-600" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="max-w-xs text-sm leading-relaxed">Bu modül entegrasyon aşamasındadır. Lütfen yan menüden "Numuneler" sekmesini seçin.</p>
  </div>
);

// ============================================================================
// ANA UYGULAMA (App.jsx Root)
// ============================================================================
export default function App() {
  const [activeTab, setActiveTab] = useState('samples'); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dbError, setDbError] = useState(null);
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  
  // TASARIM YÜKLENDİ Mİ KONTROLÜ
  const [isCssLoaded, setIsCssLoaded] = useState(false);

  const [customers, setCustomers] = useState([]);
  const [samples, setSamples] = useState([]);

  const navItems = [
    { id: 'dashboard', label: 'Özet Panel',  icon: LayoutDashboard },
    { id: 'samples',   label: 'Numuneler',   icon: Package },
    { id: 'customers', label: 'Müşteriler',  icon: Users },
    { id: 'prices',    label: 'Fiyatlar',    icon: CircleDollarSign },
    { id: 'cost',      label: 'Maliyet',     icon: Calculator },
    { id: 'offers',    label: 'Teklifler',   icon: Send },
    { id: 'notes',     label: 'Notlarım',    icon: FileText },
  ];

  // Supabase ve TAILWIND CSS Yükleme
  useEffect(() => {
    let isMounted = true;
    let timeoutId;

    // 1. Önce Tailwind CSS'i Zorla Yükle
    if (!window.tailwind) {
      const twScript = document.createElement('script');
      twScript.src = 'https://cdn.tailwindcss.com';
      twScript.onload = () => { if (isMounted) setIsCssLoaded(true); };
      document.head.appendChild(twScript);
    } else {
      setIsCssLoaded(true);
    }

    // 2. Veri Yükleme Mantığı
    const applyMockData = () => {
      if(!isMounted) return;
      setCustomers(MOCK_CUSTOMERS);
      setSamples(MOCK_SAMPLES);
      setIsLoading(false);
      setIsOfflineMode(true);
      setDbError('Bağlantı kurulamadı. Örnek (çevrimdışı) verilerle çalışıyorsunuz.');
    };

    const loadData = async () => {
      setIsLoading(true);
      timeoutId = setTimeout(() => {
        if(isLoading && isMounted) applyMockData();
      }, 3000);

      try {
        if (window.supabase) {
          if (!supabase) supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
          await fetchRealData();
        } else {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
          script.onload = async () => {
            if (!isMounted) return;
            if (!supabase) supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            await fetchRealData();
          };
          script.onerror = () => {
            clearTimeout(timeoutId);
            applyMockData();
          };
          document.head.appendChild(script);
        }
      } catch (err) {
        clearTimeout(timeoutId);
        applyMockData();
      }
    };

    const fetchRealData = async () => {
      if (!supabase) return;
      try {
        const { data: cData, error: cErr } = await supabase.from('musteriler').select('firma_adi').order('firma_adi');
        if (cErr) throw cErr;

        const { data: sData, error: sErr } = await supabase.from('numuneler').select('*').order('created_at', { ascending: false });
        if (sErr) throw sErr;

        if(isMounted) {
          setCustomers(cData || []);
          setSamples(sData || []);
          setIsOfflineMode(false);
          setDbError(null);
          clearTimeout(timeoutId);
          setIsLoading(false);
        }
      } catch (err) {
        throw err; 
      }
    };

    loadData();
    return () => { isMounted = false; clearTimeout(timeoutId); };
  }, []);

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsSidebarOpen(false); // Mobilde menüyü kapat
  };

  // TASARIM YÜKLENMEDEN EKRANI AÇMA
  if (!isCssLoaded) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#F3F5F7', fontFamily: 'sans-serif', color: '#4A6880' }}>
        <div style={{ width: 40, height: 40, border: '4px solid #0891B2', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: 16 }}></div>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        <p style={{ fontWeight: 600 }}>Tasarım Dosyaları Yükleniyor...</p>
      </div>
    );
  }

  return (
    <>
      <style>{`
        /* Ekstra scrollbar ve pürüzsüzleştirme ayarları */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        html, body, #root { width: 100%; height: 100%; margin: 0; padding: 0; overflow: hidden; font-family: 'Inter', sans-serif; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .hide-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Ana Konteyner - Tam Ekran (Responsive flex) 100dvh ile mobil adres çubuğu sorunu çözüldü */}
      <div className="flex w-full bg-slate-50 text-slate-900 overflow-hidden relative" style={{ height: '100dvh' }}>
        
        {/* Mobil Karartma (Overlay) */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-sm transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Yan Menü (Sidebar) */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 flex flex-col transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          {/* Sidebar Başlık */}
          <div className="h-16 px-5 flex items-center justify-between bg-slate-950 border-b border-slate-800/50 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
                <Zap size={18} />
              </div>
              <span className="text-[17px] font-extrabold text-white tracking-tight">
                Yanteks<span className="text-cyan-400">Pro</span>
              </span>
            </div>
            {/* Mobilde Kapat Butonu */}
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors">
              <X size={20} />
            </button>
          </div>
          
          {/* Menü Linkleri */}
          <nav className="flex-1 overflow-y-auto py-4 px-3 hide-scroll">
            <p className="px-3 pb-2 text-[10px] font-bold text-slate-500 tracking-wider uppercase">ANA MENÜ</p>
            {navItems.map(({ id, label, icon: Icon }) => {
              const active = activeTab === id;
              return (
                <button 
                  key={id} 
                  onClick={() => handleNavClick(id)} 
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 mb-1 rounded-xl text-sm font-semibold transition-all duration-200
                    ${active ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}
                  `}
                >
                  <Icon size={18} className={active ? 'text-white' : 'opacity-70'} />
                  <span>{label}</span>
                  {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/80" />}
                </button>
              );
            })}
          </nav>
          
          {/* Sidebar Alt */}
          <div className="p-4 border-t border-slate-800/50 text-[10px] font-semibold text-slate-500 tracking-wider">
            YANTEKS PRO v2.0
          </div>
        </aside>

        {/* Ana İçerik Alanı */}
        <main className="flex-1 flex flex-col h-full min-w-0 bg-slate-50 relative">
          
          {/* Üst Bilgi Çubuğu (Header) */}
          <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 flex items-center justify-between shrink-0 z-10">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Mobil Menü Açma Butonu */}
              <button 
                onClick={() => setIsSidebarOpen(true)} 
                className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <Menu size={22} />
              </button>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-none">
                  {navItems.find(i => i.id === activeTab)?.label}
                </h2>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5 hidden sm:block">
                  Sisteme hoş geldiniz, iyi çalışmalar.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              {/* Durum Göstergesi */}
              <button className="p-2 text-slate-400 hover:text-cyan-600 transition-colors rounded-lg flex items-center">
                <span className={isLoading ? 'animate-spin' : ''}>
                  <RefreshCw size={18} className={isOfflineMode ? 'text-amber-500' : 'text-slate-400'} />
                </span>
              </button>
              {/* Profil */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm border-2 border-white shadow-sm cursor-pointer">
                YP
              </div>
            </div>
          </header>

          {/* Dinamik Sayfa İçeriği */}
          <div className="flex-1 overflow-y-auto relative hide-scroll">
            
            {dbError && (
              <div className="mx-4 sm:mx-6 lg:mx-8 mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl shadow-sm">
                <div className="flex items-center gap-2 text-amber-700 font-bold mb-1">
                  <AlertCircle size={18} /> Sistem Uyarısı
                </div>
                <p className="text-amber-900 text-sm font-medium">{dbError}</p>
              </div>
            )}
            
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-64 gap-4">
                <RefreshCw size={36} className="text-cyan-600 animate-spin" />
                <p className="text-slate-500 font-medium">Sistem Hazırlanıyor…</p>
              </div>
            ) : (
              <div className="h-full">
                {activeTab === 'samples' && <SamplesView initialData={samples} customers={customers} offline={isOfflineMode} />}
                {activeTab === 'dashboard' && <PlaceholderModule title="Özet Panel" icon={LayoutDashboard} />}
                {activeTab === 'customers' && <PlaceholderModule title="Müşteriler" icon={Users} />}
                {activeTab === 'prices'    && <PlaceholderModule title="Fiyatlar" icon={CircleDollarSign} />}
                {activeTab === 'cost'      && <PlaceholderModule title="Maliyet" icon={Calculator} />}
                {activeTab === 'offers'    && <PlaceholderModule title="Teklifler" icon={Send} />}
                {activeTab === 'notes'     && <PlaceholderModule title="Notlarım" icon={FileText} />}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

// ============================================================================
// NUMUNELER GÖRÜNÜMÜ
// ============================================================================
function SamplesView({ initialData, customers, offline }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  const [filter, setFilter] = useState('Hepsi');
  const [sort, setSort] = useState('date');
  const [searchQuery, setSearchQuery] = useState('');
  const [firmaBanner, setFirmaBanner] = useState('');
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [toastMsg, setToastMsg] = useState(null);

  const [photoCache, setPhotoCache] = useState({});
  const [uploading, setUploading] = useState(false);
  const [uploadText, setUploadText] = useState('');

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  
  const [formFirma, setFormFirma] = useState('');
  const [firmaSearchQ, setFirmaSearchQ] = useState('');
  const [isFirmaDdOpen, setIsFirmaDdOpen] = useState(false);
  const [formRows, setFormRows] = useState([{ id: Date.now(), kod: '', fiyat: '', var: '', not: '' }]);

  const [pvOpen, setPvOpen] = useState(false);
  const [pvPhotos, setPvPhotos] = useState([]);
  const [pvIndex, setPvIndex] = useState(0);

  const VALID_STATUS = ['Beklemede', 'Takip Et', 'Gönderildi', 'Onaylandı', 'Reddedildi'];
  
  const uniqueCustomers = useMemo(() => {
    return [...new Set((customers || []).map(m => (m.firma_adi || '').trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'tr'));
  }, [customers]);

  useEffect(() => {
    const sorted = [...(initialData || [])].sort((a,b) => {
      const ta = new Date(a.created_at).getTime(), tb = new Date(b.created_at).getTime();
      if(ta === tb) return isV(a.numune) ? 1 : -1;
      return tb - ta;
    });
    setData(sorted);
    
    if (!offline) {
      const ids = sorted.slice(0, 50).map(r => r.id); 
      preloadPhotos(ids);
    }
  }, [initialData, offline]);

  useEffect(() => {
    let result = [...data];
    if (filter === 'Arşiv') result = result.filter(i => i.arsiv === true);
    else {
      result = result.filter(i => i.arsiv !== true);
      if (filter !== 'Hepsi') result = result.filter(i => i.durum === filter);
    }
    if (firmaBanner) result = result.filter(i => (i.firma || '').toUpperCase() === firmaBanner);
    if (searchQuery) {
      const q = trl(searchQuery);
      result = result.filter(i => trl(i.firma).includes(q) || trl(i.numune).includes(q) || trl(i.aciklama).includes(q));
    }
    setFilteredData(result);
  }, [data, filter, searchQuery, firmaBanner]);

  const groupedData = useMemo(() => {
    const G = {};
    filteredData.forEach(i => {
      const f = (i.firma || 'BELİRSİZ').toUpperCase();
      if(!G[f]) G[f] = [];
      G[f].push(i);
    });

    let fKeys = Object.keys(G);
    if(sort === 'alpha') fKeys.sort((a,b) => a.localeCompare(b, 'tr'));
    else if(sort === 'status') {
      fKeys.sort((a,b) => {
        const sA = Math.min(...G[a].map(i => VALID_STATUS.indexOf(i.durum || 'Beklemede')));
        const sB = Math.min(...G[b].map(i => VALID_STATUS.indexOf(i.durum || 'Beklemede')));
        return sA - sB || a.localeCompare(b, 'tr');
      });
    } else {
      fKeys.sort((a,b) => {
        const lA = Math.max(...G[a].map(i => new Date(i.updated_at || i.created_at || 0).getTime()));
        const lB = Math.max(...G[b].map(i => new Date(i.updated_at || i.created_at || 0).getTime()));
        return lB - lA;
      });
    }

    return fKeys.map(firma => {
      let items = [...G[firma]];
      if(sort === 'alpha') items.sort((a,b) => dName(a.numune).localeCompare(dName(b.numune), 'tr'));
      else if(sort === 'status') items.sort((a,b) => VALID_STATUS.indexOf(a.durum || 'Beklemede') - VALID_STATUS.indexOf(b.durum || 'Beklemede'));
      
      const anaItems = items.filter(i => !isV(i.numune));
      const varItems = items.filter(i => isV(i.numune));
      const finalItems = [];
      const usedVarIds = new Set();

      anaItems.forEach(ana => {
        finalItems.push(ana);
        const anaKod = dName(ana.numune);
        const altlar = varItems.filter(v => {
          if(usedVarIds.has(v.id)) return false;
          const pc = (v.aciklama || '').split('|')[0];
          if(pc && trl(pc) === trl(anaKod)) return true;
          const ac = v.aciklama || '';
          if(ac.startsWith(anaKod+'|') || ac === anaKod) return true;
          return false;
        });
        altlar.forEach(v => { usedVarIds.add(v.id); finalItems.push(v); });
      });
      varItems.filter(v => !usedVarIds.has(v.id)).forEach(v => finalItems.push(v));

      return { firma, items: finalItems, originalItems: G[firma] };
    });
  }, [filteredData, sort]);

  // --- Photo Functions ---
  const fetchPhotos = async (numeneId) => {
    if(offline || !supabase) return [];
    try {
      const { data, error } = await supabase.storage.from(PHOTO_BUCKET).list('numune_'+numeneId, { sortBy: { column: 'created_at', order: 'asc' }});
      if (error || !data) return [];
      return data.filter(f => f.name && !f.name.endsWith('/')).map(f => {
        const { data: ud } = supabase.storage.from(PHOTO_BUCKET).getPublicUrl('numune_'+numeneId+'/'+f.name);
        return { name: f.name, url: ud.publicUrl, path: 'numune_'+numeneId+'/'+f.name };
      });
    } catch (e) { return []; }
  };

  const preloadPhotos = async (ids) => {
    if(offline) return;
    const needed = ids.filter(id => !(id in photoCache));
    if(needed.length === 0) return;
    const newCache = { ...photoCache };
    await Promise.all(needed.map(async id => { newCache[id] = await fetchPhotos(id); }));
    setPhotoCache(prev => ({ ...prev, ...newCache }));
  };

  const handlePhotoUpload = async (e, numeneId) => {
    if(offline || !supabase) { showToast('Çevrimdışı modda fotoğraf yüklenemez.', 'err'); return; }
    const files = Array.from(e.target.files || []);
    if(!files.length) return;
    e.target.value = '';
    
    setUploading(true); setUploadText(`Fotoğraf yükleniyor (0/${files.length})`);
    let ok = 0;
    for(let i=0; i<files.length; i++) {
      const file = files[i];
      setUploadText(`Yükleniyor (${i+1}/${files.length})`);
      
      const compressed = await new Promise(resolve => {
        const img = new Image(), url = URL.createObjectURL(file);
        img.onload = () => {
          URL.revokeObjectURL(url);
          let { width: w, height: h } = img;
          const maxSize = 1200;
          if (w > maxSize || h > maxSize) { if (w > h) { h = Math.round(h * maxSize / w); w = maxSize; } else { w = Math.round(w * maxSize / h); h = maxSize; } }
          const canvas = document.createElement('canvas'); canvas.width = w; canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          canvas.toBlob(blob => resolve(blob || file), 'image/jpeg', 0.82);
        };
        img.onerror = () => resolve(file);
        img.src = url;
      });

      const ext = file.name.split('.').pop().toLowerCase() || 'jpg';
      const fname = Date.now() + '_' + Math.random().toString(36).slice(2) + '.' + ext;
      const path = 'numune_' + numeneId + '/' + fname;
      const { error } = await supabase.storage.from(PHOTO_BUCKET).upload(path, compressed, { contentType: compressed.type || 'image/jpeg' });
      if(!error) ok++;
    }
    
    const newPhotos = await fetchPhotos(numeneId);
    setPhotoCache(prev => ({ ...prev, [numeneId]: newPhotos }));
    setUploading(false);
    showToast(ok ? `${ok} fotoğraf eklendi` : 'Yükleme başarısız', ok ? 'ok' : 'err');
  };

  const handleDeletePhoto = async (numeneId, photoPath) => {
    if(offline || !supabase) return;
    setUploading(true); setUploadText('Siliniyor...');
    const { error } = await supabase.storage.from(PHOTO_BUCKET).remove([photoPath]);
    if(error) { showToast('Silinemedi', 'err'); }
    else {
      const newPhotos = await fetchPhotos(numeneId);
      setPhotoCache(prev => ({ ...prev, [numeneId]: newPhotos }));
      if(pvOpen) {
        const remaining = newPhotos.map(p => ({...p, numeneId}));
        if(remaining.length === 0) setPvOpen(false);
        else { setPvPhotos(remaining); setPvIndex(Math.min(pvIndex, remaining.length - 1)); }
      }
      showToast('Fotoğraf silindi', 'ok');
    }
    setUploading(false);
  };

  const showToast = (msg, type='info') => {
    setToastMsg({ msg, type });
    setTimeout(() => setToastMsg(null), 3000);
  };

  const updateField = async (id, field, value) => {
    if(offline) {
      setData(prev => prev.map(item => item.id == id ? { ...item, [field]: value } : item));
      if(field === 'durum') showToast(`Durum: ${value} (Yerel)`, 'ok');
      return;
    }
    const { error } = await supabase.from('numuneler').update({ [field]: value }).eq('id', id);
    if(error) { showToast('Güncelleme hatası', 'err'); return; }
    setData(prev => prev.map(item => item.id == id ? { ...item, [field]: value } : item));
    if(field === 'durum') showToast(`Durum: ${value}`, 'ok');
  };

  const toggleArchive = async (id, currentVal) => {
    await updateField(id, 'arsiv', !currentVal);
    showToast(!currentVal ? '📂 Arşivlendi' : '↩ Çıkarıldı', 'ok');
  };

  const deleteSample = async (id) => {
    if(!window.confirm('Bu numune silinsin mi?')) return;
    if(!offline) {
      const { error } = await supabase.from('numuneler').delete().eq('id', id);
      if(error) { showToast('Silinemedi', 'err'); return; }
    }
    setData(prev => prev.filter(item => item.id != id));
    setSelectedIds(prev => { const n = new Set(prev); n.delete(id); return n; });
    showToast('Silindi', 'ok');
  };

  const handleBulkStatus = async (status) => {
    if(selectedIds.size === 0) return;
    const ids = Array.from(selectedIds);
    if(!offline) {
      const { error } = await supabase.from('numuneler').update({ durum: status }).in('id', ids);
      if(error) { showToast('Toplu güncelleme hatası', 'err'); return; }
    }
    setData(prev => prev.map(i => ids.includes(i.id) ? { ...i, durum: status } : i));
    setSelectedIds(new Set());
    showToast(`${ids.length} numune: ${status}`, 'ok');
  };

  const handleBulkDelete = async () => {
    if(selectedIds.size === 0) return;
    if(!window.confirm(`${selectedIds.size} numune silinsin mi?`)) return;
    const ids = Array.from(selectedIds);
    if(!offline) {
      const { error } = await supabase.from('numuneler').delete().in('id', ids);
      if(error) { showToast('Silinemedi', 'err'); return; }
    }
    setData(prev => prev.filter(i => !ids.includes(i.id)));
    setSelectedIds(new Set());
    showToast(`${ids.length} silindi`, 'ok');
  };

  const exportData = () => {
    if(filteredData.length === 0) { showToast('Dışa aktarılacak veri yok', 'err'); return; }
    const runExport = async () => {
      try {
        const wb = new window.ExcelJS.Workbook();
        const sh = wb.addWorksheet('Numuneler');
        sh.addRow(['İSTEKÇİ FİRMA', 'NUMUNE', 'FİYAT', 'DURUM', 'NOTLAR', 'TARİH']);
        [...filteredData].sort((a,b) => (a.firma||'').localeCompare(b.firma||'')).forEach(i => {
          const v = isV(i.numune), pc = (i.aciklama||'').split('|')[0], note = (i.aciklama||'').includes('|') ? (i.aciklama||'').split('|')[1] : i.aciklama;
          const excelAd = v ? (pc ? pc+'-'+dName(i.numune) : dName(i.numune)) : dName(i.numune);
          const dt = i.updated_at ? new Date(i.updated_at).toLocaleDateString('tr-TR') : '';
          sh.addRow([i.firma||'', excelAd, i.fiyat||'-', i.durum||'', note||'-', dt]);
        });
        const buf = await wb.xlsx.writeBuffer();
        const blob = new Blob([buf], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
        a.download = `Yanteks_Numune_${new Date().toLocaleDateString('tr-TR')}.xlsx`;
        a.click();
        showToast('Excel indirildi', 'ok');
      } catch (err) { showToast('Excel oluşturulamadı', 'err'); }
    };

    if(!window.ExcelJS) {
      setUploading(true); setUploadText('Hazırlanıyor...');
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.3.0/exceljs.min.js';
      script.onload = () => { setUploading(false); runExport(); };
      script.onerror = () => { setUploading(false); showToast('Excel kütüphanesi yüklenemedi.', 'err'); };
      document.body.appendChild(script);
    } else runExport();
  };

  const openNewDrawer = () => {
    setEditId(null); setFormFirma(firmaBanner || '');
    setFormRows([{ id: Date.now(), kod: '', fiyat: '', var: '', not: '' }]);
    setIsDrawerOpen(true);
  };

  const openEditDrawer = (id) => {
    const item = data.find(i => i.id == id);
    if(!item) return;
    setEditId(id);
    const v = isV(item.numune);
    const acParts = (item.aciklama||'').split('|');
    const note = acParts.length > 1 ? acParts[1] : item.aciklama;
    setFormFirma(item.firma || '');
    setFormRows([{ id: Date.now(), kod: dName(item.numune), fiyat: (item.fiyat||'').replace(/^\$/,''), var: '', not: note||'' }]);
    setIsDrawerOpen(true);
  };

  const handleSaveDrawer = async () => {
    if(editId) {
      const row = formRows[0];
      if(!row.kod) { showToast('Kod zorunlu', 'err'); return; }
      const item = data.find(i => i.id == editId);
      const v = isV(item.numune);
      let ac = row.not;
      if(v) { const pc = (item.aciklama||'').split('|')[0]; ac = `${pc}|${row.not}`; }

      const payload = {
        numune: v ? '↳ ' + row.kod : row.kod,
        fiyat: row.fiyat ? (row.fiyat.startsWith('$') ? row.fiyat : '$'+row.fiyat) : '',
        aciklama: ac
      };
      
      if(!offline) {
        setUploading(true); setUploadText('Güncelleniyor...');
        const { error } = await supabase.from('numuneler').update(payload).eq('id', editId);
        setUploading(false);
        if(error) { showToast('Hata oluştu', 'err'); return; }
      }
      
      setData(prev => prev.map(i => i.id == editId ? { ...i, ...payload } : i));
      showToast('Güncellendi', 'ok');
      setIsDrawerOpen(false);
    } else {
      const f = formFirma.toUpperCase().trim();
      if(!f) { showToast('Firma seçin', 'err'); return; }
      
      const pkg = [];
      formRows.forEach(r => {
        const k = r.kod.trim(), pr = r.fiyat.trim(), nt = r.not.trim(), vStr = r.var.trim();
        if(!k) return;
        const fs = pr ? (pr.startsWith('$') ? pr : '$'+pr) : '';
        const tempId = Date.now() + Math.floor(Math.random()*1000);
        pkg.push({ id: tempId, firma: f, numune: k, fiyat: fs, aciklama: nt, durum: 'Beklemede', arsiv: false });
        if(vStr) {
          vStr.split(',').forEach(v => {
            const vt = v.trim();
            if(vt) pkg.push({ id: tempId + 1, firma: f, numune: '↳ '+vt, fiyat: fs, aciklama: `${k}|${nt}`, durum: 'Beklemede', arsiv: false });
          });
        }
      });
      
      if(!pkg.length) { showToast('En az bir kod girin', 'err'); return; }
      
      if(!offline) {
        setUploading(true); setUploadText('Kaydediliyor...');
        const insertPkg = pkg.map(({id, ...rest}) => rest);
        const { data: inserted, error } = await supabase.from('numuneler').insert(insertPkg).select();
        setUploading(false);
        if(error) { showToast('Hata: '+error.message, 'err'); return; }
        setData(prev => [...inserted, ...prev]);
      } else setData(prev => [...pkg, ...prev]);
      
      showToast(`${pkg.length} kayıt eklendi`, 'ok');
      setIsDrawerOpen(false);
    }
  };

  const getStatusStyle = (st) => {
    const map = {
      'Beklemede': { tw: 'bg-amber-100 text-amber-700 border-amber-200' },
      'Takip Et':  { tw: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
      'Gönderildi':{ tw: 'bg-blue-100 text-blue-700 border-blue-200' },
      'Onaylandı': { tw: 'bg-green-100 text-green-700 border-green-200' },
      'Reddedildi':{ tw: 'bg-red-100 text-red-700 border-red-200' },
    };
    return map[st] || map['Beklemede'];
  };

  const activeCount = data.filter(i => !i.arsiv).length;

  return (
    <div className="p-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto pb-24">
      
      {/* 1. Üst Aksiyon Çubuğu (Flex wrap) */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <button onClick={openNewDrawer} className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2.5 rounded-xl font-bold shadow-md shadow-cyan-600/20 transition-all">
            <Plus size={18} /> Yeni Ekle
          </button>
          <button onClick={exportData} className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-semibold shadow-sm transition-all">
            <FileBarChart size={18} /> Excel
          </button>
        </div>

        {/* Filtre Çipler (Yatay kaydırılabilir) */}
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scroll">
          {['Hepsi', 'Beklemede', 'Takip Et', 'Gönderildi', 'Onaylandı', 'Reddedildi', 'Arşiv'].map(f => {
            const count = f === 'Hepsi' ? activeCount : f === 'Arşiv' ? data.filter(i => i.arsiv).length : data.filter(i => !i.arsiv && i.durum === f).length;
            const active = filter === f;
            return (
              <button 
                key={f} 
                onClick={() => setFilter(f)} 
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors border
                  ${active ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              >
                {f} <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${active ? 'bg-white/20' : 'bg-slate-100'}`}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Toplu İşlem Çubuğu (Görünürse) */}
      {selectedIds.size > 0 && (
        <div className="bg-slate-900 text-white p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-start sm:items-center mb-6 shadow-xl animate-[fadeUp_0.2s_ease]">
          <span className="font-bold text-sm bg-white/10 px-3 py-1 rounded-lg">{selectedIds.size} seçili</span>
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {['Beklemede', 'Takip Et', 'Gönderildi', 'Onaylandı'].map(s => (
              <button key={s} onClick={() => handleBulkStatus(s)} className="bg-white/10 hover:bg-white/20 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors">{s}</button>
            ))}
            <button onClick={handleBulkDelete} className="bg-red-500/20 hover:bg-red-500/40 text-red-300 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors ml-auto sm:ml-2">Sil</button>
            <button onClick={() => setSelectedIds(new Set())} className="p-1.5 text-slate-400 hover:text-white transition-colors"><X size={18} /></button>
          </div>
        </div>
      )}

      {/* 3. Arama & Sıralama */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 group">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-600 transition-colors" />
          <input 
            type="text" 
            placeholder="Firma, kod veya not ile ara..." 
            value={searchQuery} 
            onChange={e => setSearchQuery(e.target.value)} 
            className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-cyan-600/20 focus:border-cyan-600 outline-none shadow-sm transition-all"
          />
          {searchQuery && (
            <X size={16} onClick={() => setSearchQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer" />
          )}
        </div>
        
        <div className="flex bg-white border border-slate-200 rounded-xl p-1 shadow-sm shrink-0">
          {[{id:'date', label:'Tarih'}, {id:'alpha', label:'A-Z'}, {id:'status', label:'Durum'}].map(s => (
            <button 
              key={s.id} 
              onClick={() => setSort(s.id)} 
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${sort === s.id ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Firma Filtresi Aktifse Gösterilen Banner */}
      {firmaBanner && (
        <div className="bg-cyan-50 border border-cyan-200 p-3 sm:p-4 rounded-xl flex justify-between items-center mb-6 text-cyan-800">
          <span className="font-bold text-sm flex items-center gap-2">🏢 {firmaBanner} <span className="font-normal opacity-75 hidden sm:inline">firmasına ait kayıtlar listeleniyor</span></span>
          <button onClick={() => setFirmaBanner('')} className="text-cyan-700 hover:text-cyan-900 font-bold text-xs bg-cyan-100 px-3 py-1.5 rounded-lg">Tümünü Göster</button>
        </div>
      )}

      {/* 4. Liste Alanı */}
      <div className="flex flex-col gap-6">
        {groupedData.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-10 bg-white border border-slate-200 border-dashed rounded-2xl text-slate-500">
            <Package size={48} className="opacity-20 mb-4" />
            <p className="font-bold">Sonuç bulunamadı</p>
            <p className="text-sm mt-1">Farklı bir arama yapın veya yeni kayıt ekleyin.</p>
          </div>
        ) : (
          groupedData.map(({ firma, items, originalItems }) => (
            <div key={firma} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              
              {/* Grup Başlığı (Firma) */}
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex flex-wrap justify-between items-center gap-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-extrabold text-slate-900 cursor-pointer hover:text-cyan-600 transition-colors" onClick={() => setFirmaBanner(firma)}>🏢 {firma}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Onaylandı', 'Takip Et', 'Gönderildi', 'Reddedildi', 'Beklemede'].map(st => {
                      const c = originalItems.filter(i => i.durum === st).length;
                      if(c === 0) return null;
                      const s = getStatusStyle(st);
                      return <span key={st} className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${s.tw}`}>{c} {st}</span>;
                    })}
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-lg shadow-sm">{items.length} kayıt</span>
              </div>

              {/* Grup İçeriği (Satırlar) */}
              <div className="flex flex-col">
                {items.map(item => {
                  const v = isV(item.numune);
                  const isSel = selectedIds.has(item.id);
                  const acParts = (item.aciklama || '').split('|');
                  const note = acParts.length > 1 ? acParts[1] : item.aciklama;
                  const stStyle = getStatusStyle(item.durum);
                  const photos = photoCache[item.id] || [];

                  return (
                    <div key={item.id} className={`p-3 sm:p-4 border-b border-slate-100 transition-colors ${isSel ? 'bg-cyan-50/50' : 'hover:bg-slate-50'} ${v ? 'ml-4 sm:ml-8 border-l-4 border-l-slate-200' : ''}`}>
                      <div className="flex items-start gap-3">
                        
                        <input 
                          type="checkbox" 
                          checked={isSel} 
                          onChange={(e) => {
                            const n = new Set(selectedIds);
                            e.target.checked ? n.add(item.id) : n.delete(item.id);
                            setSelectedIds(n);
                          }} 
                          className="mt-1 w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-600 cursor-pointer shrink-0" 
                        />
                        
                        <div className="flex-1 min-w-0">
                          {/* Satır 1: Başlık & Tarih */}
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="font-bold text-slate-900 text-[13px] sm:text-sm break-words leading-tight">
                              {dName(item.numune) || 'İsimsiz'}
                              {item.fiyat && <span className="ml-2 font-mono text-green-700 bg-green-50 px-1.5 py-0.5 rounded text-xs border border-green-200">{item.fiyat}</span>}
                            </h4>
                            <span className="text-[10px] sm:text-xs font-medium text-slate-400 whitespace-nowrap shrink-0">{formatDate(item.updated_at || item.created_at)}</span>
                          </div>
                          
                          {/* Satır 2: Not, Durum & Aksiyonlar (Mobilde alta kayar) */}
                          <div className="mt-2.5 flex flex-col sm:flex-row gap-2 sm:items-center">
                            
                            {/* Not Input */}
                            <input 
                              type="text" 
                              defaultValue={note} 
                              placeholder="Not ekle..." 
                              onBlur={(e) => {
                                const val = e.target.value.trim();
                                if(val !== note) updateField(item.id, 'aciklama', v ? `${acParts[0]}|${val}` : val);
                              }}
                              onKeyDown={e => e.key === 'Enter' && e.target.blur()}
                              className="w-full sm:flex-1 text-xs px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all placeholder-slate-400" 
                            />
                            
                            {/* Durum & Butonlar Grubu */}
                            <div className="flex flex-wrap items-center gap-1.5 shrink-0 mt-1 sm:mt-0">
                              <select 
                                value={item.durum || 'Beklemede'} 
                                onChange={(e) => updateField(item.id, 'durum', e.target.value)} 
                                className={`appearance-none text-xs font-bold px-2.5 py-1.5 rounded-lg border outline-none cursor-pointer pr-6 ${stStyle.tw}`}
                                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.25rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.25em 1.25em' }}
                              >
                                {VALID_STATUS.map(s => <option key={s} value={s}>{s}</option>)}
                              </select>
                              
                              <label className={`cursor-pointer p-1.5 rounded-lg border flex items-center justify-center transition-colors relative ${photos.length ? 'bg-cyan-50 border-cyan-200 text-cyan-600 hover:bg-cyan-100' : 'bg-white border-slate-200 text-slate-400 hover:bg-slate-50'}`}>
                                <Camera size={14} />
                                {photos.length > 0 && <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-500 border-2 border-white"/>}
                                <input type="file" accept="image/*" multiple onChange={(e) => handlePhotoUpload(e, item.id)} className="hidden" />
                              </label>
                              
                              <button onClick={() => openEditDrawer(item.id)} className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center"><Edit2 size={14} /></button>
                              <button onClick={() => toggleArchive(item.id, item.arsiv)} className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center"><Archive size={14} /></button>
                              <button onClick={() => deleteSample(item.id)} className="p-1.5 rounded-lg bg-white border border-slate-200 text-red-400 hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-colors flex items-center justify-center"><Trash2 size={14} /></button>
                            </div>
                          </div>

                          {/* Fotoğraf Şeridi */}
                          {photos.length > 0 && (
                            <div className="flex gap-2 overflow-x-auto pt-3 mt-3 border-t border-slate-100 hide-scroll">
                              {photos.map((p, pIdx) => (
                                <div key={pIdx} className="relative shrink-0 group">
                                  <img 
                                    src={p.url} 
                                    className="w-12 h-12 rounded-lg object-cover border border-slate-200 cursor-pointer hover:border-cyan-400 transition-colors" 
                                    onClick={() => { setPvPhotos(photos.map(x=>({...x, numeneId: item.id}))); setPvIndex(pIdx); setPvOpen(true); }} 
                                    alt="Numune"
                                  />
                                  <button 
                                    className="absolute -top-1.5 -right-1.5 bg-red-500 text-white border-2 border-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" 
                                    onClick={() => handleDeletePhoto(item.id, p.path)}
                                  >
                                    <X size={10} />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}

                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* --- Çekmeceler ve Modallar --- */}

      {/* Drawer Arkaplan Karartması */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-[90] backdrop-blur-sm transition-opacity" 
          onClick={() => setIsDrawerOpen(false)} 
        />
      )}
      
      {/* Çekmece (Drawer / Bottom Sheet) */}
      <div className={`
        fixed inset-x-0 bottom-0 z-[100] bg-white rounded-t-3xl p-5 sm:p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] 
        transform transition-transform duration-300 ease-out max-h-[90vh] overflow-y-auto hide-scroll
        ${isDrawerOpen ? 'translate-y-0' : 'translate-y-full'}
      `}>
        {/* Çekmece Tutamacı */}
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6" />
        
        <h2 className="text-xl font-extrabold text-slate-900 mb-6">{editId ? '✏️ Kaydı Düzenle' : '📦 Yeni Numune Ekle'}</h2>

        {/* Firma Seçimi */}
        {!editId && (
          <div className="mb-5 relative">
            <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Firma</label>
            <div className="relative">
              <input 
                type="text" 
                value={isFirmaDdOpen ? firmaSearchQ : formFirma} 
                onChange={(e) => { setFirmaSearchQ(e.target.value); setIsFirmaDdOpen(true); }}
                onFocus={() => { setFirmaSearchQ(formFirma); setIsFirmaDdOpen(true); }}
                placeholder="Firma ara veya yeni isim yaz..." 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none transition-all" 
              />
              {isFirmaDdOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl max-h-48 overflow-y-auto z-10 shadow-xl py-1 hide-scroll">
                  {uniqueCustomers.filter(c => c.toLowerCase().includes(firmaSearchQ.toLowerCase())).slice(0,20).map((c, i) => (
                    <div 
                      key={i} 
                      onClick={() => { setFormFirma(c); setIsFirmaDdOpen(false); }} 
                      className="px-4 py-2.5 cursor-pointer hover:bg-slate-50 border-b border-slate-50 last:border-0 text-sm font-semibold text-slate-700"
                    >
                      {c}
                    </div>
                  ))}
                  {uniqueCustomers.filter(c => c.toLowerCase().includes(firmaSearchQ.toLowerCase())).length === 0 && firmaSearchQ && (
                    <div className="px-4 py-3 text-xs text-slate-500 font-medium italic">
                      "{firmaSearchQ}" yeni firma olarak eklenecek.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Form Satırları */}
        {formRows.map((r, i) => (
          <div key={r.id} className="bg-slate-50 border border-slate-200 p-4 rounded-2xl mb-4 relative">
            {!editId && formRows.length > 1 && (
              <button 
                onClick={() => setFormRows(prev => prev.filter(x => x.id !== r.id))} 
                className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <X size={16}/>
              </button>
            )}
            
            <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Kod / Fiyat</label>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input 
                type="text" 
                value={r.kod} 
                onChange={e => { const n = [...formRows]; n[i].kod = e.target.value; setFormRows(n); }} 
                placeholder="Örn: FDY 100" 
                className="flex-2 px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none w-full" 
              />
              <input 
                type="text" 
                value={r.fiyat} 
                onChange={e => { const n = [...formRows]; n[i].fiyat = e.target.value; setFormRows(n); }} 
                placeholder="Fiyat ($)" 
                className="flex-1 px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-mono focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none w-full" 
              />
            </div>

            {!editId && (
              <div className="mb-4">
                <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Varyantlar <span className="normal-case opacity-70">(Virgülle ayırın)</span></label>
                <input 
                  type="text" 
                  value={r.var} 
                  onChange={e => { const n = [...formRows]; n[i].var = e.target.value; setFormRows(n); }} 
                  placeholder="Siyah, Beyaz, Kırmızı..." 
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none" 
                />
              </div>
            )}

            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Not</label>
              <input 
                type="text" 
                value={r.not} 
                onChange={e => { const n = [...formRows]; n[i].not = e.target.value; setFormRows(n); }} 
                placeholder="Açıklama veya detay girin..." 
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none" 
              />
            </div>
          </div>
        ))}

        {!editId && (
          <button 
            onClick={() => setFormRows([...formRows, { id: Date.now(), kod: '', fiyat: '', var: '', not: '' }])} 
            className="w-full mb-6 py-3.5 border-2 border-dashed border-cyan-200 text-cyan-600 rounded-2xl text-sm font-extrabold hover:bg-cyan-50 hover:border-cyan-300 transition-colors"
          >
            + YENİ SATIR EKLE
          </button>
        )}

        <div className="flex gap-3 pt-2">
          <button onClick={() => setIsDrawerOpen(false)} className="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm transition-colors">
            İptal
          </button>
          <button onClick={handleSaveDrawer} className="flex-[2] py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm shadow-md transition-colors">
            {editId ? 'Değişiklikleri Kaydet' : 'Numuneleri Ekle'}
          </button>
        </div>
      </div>

      {/* Fotoğraf Görüntüleyici (Lightbox) */}
      {pvOpen && (
        <div className="fixed inset-0 bg-black/95 z-[200] flex flex-col backdrop-blur-sm">
          <div className="p-4 sm:p-6 flex justify-between items-center text-white shrink-0">
            <span className="font-bold bg-white/10 px-3 py-1.5 rounded-lg text-sm">{pvIndex + 1} / {pvPhotos.length}</span>
            <button onClick={() => setPvOpen(false)} className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"><X size={20}/></button>
          </div>
          
          <div className="flex-1 flex items-center justify-center relative p-4 min-h-0">
            {pvIndex > 0 && (
              <button onClick={() => setPvIndex(p=>p-1)} className="absolute left-4 sm:left-8 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center backdrop-blur-md transition-colors z-10 text-xl font-light">‹</button>
            )}
            <img src={pvPhotos[pvIndex]?.url} className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg" alt="Büyük Görünüm"/>
            {pvIndex < pvPhotos.length - 1 && (
              <button onClick={() => setPvIndex(p=>p+1)} className="absolute right-4 sm:right-8 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center backdrop-blur-md transition-colors z-10 text-xl font-light">›</button>
            )}
          </div>
          
          <div className="p-6 flex justify-center shrink-0">
            <button onClick={() => handleDeletePhoto(pvPhotos[pvIndex].numeneId, pvPhotos[pvIndex].path)} className="bg-red-500/20 hover:bg-red-500/40 text-red-200 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors border border-red-500/20">
              <Trash2 size={18}/> Fotoğrafı Sil
            </button>
          </div>
        </div>
      )}

      {/* Yükleme Bildirimi */}
      {uploading && (
        <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-slate-900 text-white px-5 py-3.5 rounded-xl flex items-center gap-3 z-[999] shadow-xl border border-slate-700 animate-[fadeUp_0.3s_ease]">
          <RefreshCw size={18} className="animate-spin text-cyan-400" />
          <span className="text-sm font-bold">{uploadText}</span>
        </div>
      )}

      {/* Başarı/Hata Bildirimi (Toast) */}
      {toastMsg && (
        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3.5 rounded-full text-white text-sm font-bold z-[999] shadow-xl flex items-center gap-2.5 animate-[fadeUp_0.2s_ease] ${toastMsg.type === 'err' ? 'bg-red-600' : 'bg-slate-900'}`}>
          {toastMsg.type === 'err' ? <AlertCircle size={18} className="text-red-200" /> : <CheckCircle size={18} className="text-cyan-400" />}
          {toastMsg.msg}
        </div>
      )}

    </div>
  );
}
