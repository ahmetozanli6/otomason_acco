```react
import React, { useState, useEffect, useMemo } from 'react';

// ============================================================================
// İKONLAR (Saf SVG - Boyut ve Renkler Garantili)
// ============================================================================
const SvgIcon = ({ children, size = 20, color = 'currentColor', className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
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
// GÖMÜLÜ SAF CSS KODLARI (JavaScript ile Zorla Enjekte Edilecek)
// ============================================================================
const APP_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
  
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
  body, html, #root { width: 100%; height: 100%; font-family: 'Inter', sans-serif; background-color: #F3F5F7; color: #0A1520; overflow: hidden; }
  
  .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
  .hide-scroll::-webkit-scrollbar { display: none; }

  .app-container { display: flex; width: 100%; height: 100vh; overflow: hidden; position: relative; }
  
  .sidebar { width: 260px; background-color: #0F172A; color: #fff; display: flex; flex-direction: column; flex-shrink: 0; z-index: 50; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); border-right: 1px solid rgba(255,255,255,0.05); }
  .sidebar-mobile-hidden { transform: translateX(-100%); position: absolute; inset: 0 auto 0 0; }
  .sidebar-mobile-open { transform: translateX(0); position: absolute; inset: 0 auto 0 0; }
  .sidebar-header { height: 64px; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; border-bottom: 1px solid rgba(255,255,255,0.08); flex-shrink: 0; }
  .nav-button { display: flex; align-items: center; gap: 12px; width: 100%; padding: 12px 16px; margin-bottom: 4px; border-radius: 12px; border: none; background: transparent; color: rgba(255,255,255,0.6); font-family: inherit; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; text-align: left; }
  .nav-button:hover { background: rgba(255,255,255,0.05); color: #fff; }
  .nav-button.active { background: linear-gradient(135deg, #0891B2, #0284C7); color: #fff; box-shadow: 0 4px 12px rgba(8,145,178,0.3); }

  .main-content { flex: 1; display: flex; flex-direction: column; min-width: 0; position: relative; background: #F3F5F7; }
  .overlay { position: absolute; inset: 0; background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(2px); z-index: 40; }
  
  .header { height: 64px; background: #fff; border-bottom: 1px solid rgba(30,45,61,0.1); display: flex; align-items: center; justify-content: space-between; padding: 0 24px; flex-shrink: 0; z-index: 10; }
  .scroll-area { flex: 1; overflow-y: auto; padding: 24px; position: relative; }

  @media (min-width: 1024px) {
    .sidebar-mobile-hidden { transform: translateX(0); position: relative; }
    .menu-toggle-btn { display: none !important; }
    .overlay { display: none !important; }
  }

  .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 16px; border-radius: 8px; border: none; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: inherit; }
  .btn:active { transform: scale(0.96); }
  .btn-primary { background-color: #0891B2; color: #fff; box-shadow: 0 2px 10px rgba(8,145,178,0.2); }
  .btn-primary:hover { background-color: #0E7490; }
  .btn-outline { background-color: #fff; color: #4A6880; border: 1px solid rgba(30,45,61,0.2); }
  .btn-outline:hover { background-color: #F8FAFC; color: #0A1520; }
  .btn-icon { background: #fff; border: 1px solid rgba(30,45,61,0.15); border-radius: 8px; padding: 6px; cursor: pointer; color: #4A6880; transition: all 0.2s; display: flex; align-items: center; justify-content: center; }
  .btn-icon:hover { background: #F3F5F7; color: #0A1520; }

  .input { width: 100%; padding: 10px 14px; border-radius: 8px; border: 1px solid rgba(30,45,61,0.2); font-family: inherit; font-size: 13px; outline: none; transition: all 0.2s; background: #fff; }
  .input:focus { border-color: #0891B2; box-shadow: 0 0 0 3px rgba(8,145,178,0.15); }
  
  .card { background: #fff; border-radius: 16px; border: 1px solid rgba(30,45,61,0.1); overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.02); margin-bottom: 24px; }
  .card-header { background: #F8FAFC; padding: 16px; border-bottom: 1px solid rgba(30,45,61,0.1); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
  .list-item { padding: 16px; border-bottom: 1px solid rgba(30,45,61,0.06); display: flex; gap: 16px; transition: background 0.2s; }
  .list-item:hover { background: #F8FAFC; }
  .list-item:last-child { border-bottom: none; }
  .list-item.variant { margin-left: 32px; border-left: 3px solid rgba(30,45,61,0.1); }

  .chip-filter { padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 700; cursor: pointer; border: 1px solid rgba(30,45,61,0.15); background: #fff; color: #4A6880; transition: all 0.2s; white-space: nowrap; display: flex; align-items: center; gap: 6px; }
  .chip-filter.active { background: #0F172A; color: #fff; border-color: #0F172A; }
  
  .drawer { position: fixed; bottom: 0; left: 0; right: 0; background: #fff; border-radius: 24px 24px 0 0; padding: 24px; z-index: 100; transform: translateY(100%); transition: transform 0.3s cubic-bezier(0.32,0.72,0,1); max-height: 90vh; overflow-y: auto; box-shadow: 0 -10px 40px rgba(0,0,0,0.2); }
  .drawer.open { transform: translateY(0); }
  .drawer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(2px); z-index: 90; opacity: 0; pointer-events: none; transition: opacity 0.3s; }
  .drawer-overlay.open { opacity: 1; pointer-events: auto; }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes spin { to { transform: rotate(360deg); } }
  .anim-spin { animation: spin 1s linear infinite; }
  .anim-fade { animation: fadeUp 0.3s ease forwards; }
`;

// ============================================================================
// ANA UYGULAMA (App.jsx Root)
// ============================================================================
export default function App() {
  const [activeTab, setActiveTab] = useState('samples'); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dbError, setDbError] = useState(null);
  const [isOfflineMode, setIsOfflineMode] = useState(false);

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

  // GÜVENLİ CSS ENJEKSİYONU (Bunu hiçbir sistem engelleyemez)
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = APP_STYLES;
    document.head.appendChild(styleEl);
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // Supabase Yükleme ve Veri Çekme
  useEffect(() => {
    let isMounted = true;
    let timeoutId;

    const applyMockData = () => {
      if(!isMounted) return;
      setCustomers(MOCK_CUSTOMERS);
      setSamples(MOCK_SAMPLES);
      setIsLoading(false);
      setIsOfflineMode(true);
      setDbError('Veritabanı bağlantısı sağlanamadı. Örnek (çevrimdışı) verilerle çalışıyorsunuz.');
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
    setIsSidebarOpen(false); 
  };

  return (
    <div className="app-container">
      {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)} />}

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'sidebar-mobile-open' : 'sidebar-mobile-hidden'}`}>
        <div className="sidebar-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, #0891B2, #0284C7)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(8,145,178,0.4)' }}>
              <Zap size={18} color="#fff" />
            </div>
            <span style={{ fontSize: '18px', fontWeight: '800', letterSpacing: '-0.5px' }}>
              Yanteks<span style={{ color: '#38BDF8' }}>Pro</span>
            </span>
          </div>
          <button className="menu-toggle-btn" onClick={() => setIsSidebarOpen(false)} style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>
        
        <nav className="hide-scroll" style={{ flex: 1, overflowY: 'auto', padding: '16px 12px' }}>
          <p style={{ padding: '0 16px 8px', fontSize: '10px', fontWeight: '700', color: '#64748B', letterSpacing: '1px' }}>ANA MENÜ</p>
          {navItems.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => handleNavClick(id)} className={`nav-button ${activeTab === id ? 'active' : ''}`}>
              <Icon size={18} color={activeTab === id ? '#fff' : 'currentColor'} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button className="menu-toggle-btn btn-icon" onClick={() => setIsSidebarOpen(true)} style={{ border: 'none', padding: '4px' }}>
              <Menu size={24} color="#0A1520" />
            </button>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '800', margin: 0 }}>{navItems.find(i => i.id === activeTab)?.label}</h2>
              <p style={{ fontSize: '12px', color: '#64748B', margin: '2px 0 0 0', display: window.innerWidth > 600 ? 'block' : 'none' }}>Sisteme hoş geldiniz, iyi çalışmalar.</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ position: 'relative', display: window.innerWidth > 768 ? 'block' : 'none' }}>
              <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="text" placeholder="Arama yap..." className="input" style={{ paddingLeft: '36px', width: '240px', borderRadius: '20px' }} />
            </div>
            <button className="btn-icon" title="Durum">
              <RefreshCw size={18} className={isLoading ? 'anim-spin' : ''} color={isOfflineMode ? '#D97706' : '#16A34A'} />
            </button>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #0891B2, #0284C7)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', border: '2px solid #fff', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
              YP
            </div>
          </div>
        </header>

        <div className="scroll-area hide-scroll">
          {dbError && (
            <div style={{ background: '#FFFBEB', borderLeft: '4px solid #D97706', padding: '16px', borderRadius: '8px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <strong style={{ color: '#B45309', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}><AlertCircle size={16}/> Sistem Uyarısı</strong>
              <span style={{ color: '#92400E', fontSize: '13px' }}>{dbError}</span>
            </div>
          )}
          
          {isLoading ? (
            <div style={{ height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', color: '#0891B2' }}>
              <RefreshCw size={32} className="anim-spin" />
              <span style={{ fontWeight: '600', color: '#4A6880' }}>Sistem Hazırlanıyor...</span>
            </div>
          ) : (
            <>
              {activeTab === 'samples' && <SamplesView initialData={samples} customers={customers} offline={isOfflineMode} />}
              {activeTab !== 'samples' && (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748B' }}>
                  <div style={{ width: '80px', height: '80px', background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                    <Package size={40} color="#0891B2" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0A1520', marginBottom: '8px' }}>Bu modül entegrasyon aşamasında</h3>
                  <p style={{ fontSize: '14px', maxWidth: '300px', margin: '0 auto' }}>Lütfen sol menüden "Numuneler" sekmesine geçiş yapın.</p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
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
      'Beklemede': { bg: '#FEF3C7', color: '#B45309', border: '#FDE68A' },
      'Takip Et':  { bg: '#CFFAFE', color: '#0E7490', border: '#A5F3FC' },
      'Gönderildi':{ bg: '#DBEAFE', color: '#1D4ED8', border: '#BFDBFE' },
      'Onaylandı': { bg: '#DCFCE7', color: '#15803D', border: '#BBF7D0' },
      'Reddedildi':{ bg: '#FEE2E2', color: '#B91C1C', border: '#FECACA' },
    };
    return map[st] || map['Beklemede'];
  };

  const activeCount = data.filter(i => !i.arsiv).length;

  return (
    <div className="anim-fade" style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '60px' }}>
      
      {/* 1. Üst Araç Çubuğu */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={openNewDrawer} className="btn btn-primary"><Plus size={18} /> Yeni Ekle</button>
          <button onClick={exportData} className="btn btn-outline"><FileBarChart size={18} /> Excel</button>
        </div>

        <div className="hide-scroll" style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
          {['Hepsi', 'Beklemede', 'Takip Et', 'Gönderildi', 'Onaylandı', 'Reddedildi', 'Arşiv'].map(f => {
            const count = f === 'Hepsi' ? activeCount : f === 'Arşiv' ? data.filter(i => i.arsiv).length : data.filter(i => !i.arsiv && i.durum === f).length;
            const active = filter === f;
            return (
              <button key={f} onClick={() => setFilter(f)} className={`chip-filter ${active ? 'active' : ''}`}>
                {f} <span style={{ padding: '2px 6px', borderRadius: '10px', fontSize: '10px', background: active ? 'rgba(255,255,255,0.2)' : '#F3F5F7' }}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Toplu İşlemler */}
      {selectedIds.size > 0 && (
        <div className="anim-fade" style={{ background: '#0F172A', color: '#fff', padding: '12px 20px', borderRadius: '12px', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <span style={{ fontWeight: '700', fontSize: '14px', background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '8px' }}>{selectedIds.size} Seçili</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['Beklemede', 'Takip Et', 'Gönderildi', 'Onaylandı'].map(s => (
              <button key={s} onClick={() => handleBulkStatus(s)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>{s}</button>
            ))}
            <button onClick={handleBulkDelete} style={{ background: 'rgba(220,38,38,0.2)', color: '#FCA5A5', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>Sil</button>
            <button onClick={() => setSelectedIds(new Set())} style={{ background: 'transparent', border: 'none', color: '#94A3B8', padding: '6px', cursor: 'pointer' }}><X size={16} /></button>
          </div>
        </div>
      )}

      {/* 3. Arama ve Sıralama */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '250px' }}>
          <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
          <input type="text" placeholder="Kayıt arayın..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="input" style={{ paddingLeft: '40px' }} />
          {searchQuery && <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}><X size={16} /></button>}
        </div>
        
        <div style={{ display: 'flex', background: '#fff', border: '1px solid rgba(30,45,61,0.15)', borderRadius: '8px', padding: '4px' }}>
          {[{id:'date', label:'Tarih'}, {id:'alpha', label:'A-Z'}, {id:'status', label:'Durum'}].map(s => (
            <button key={s.id} onClick={() => setSort(s.id)} style={{ padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '700', border: 'none', background: sort === s.id ? '#F3F5F7' : 'transparent', color: sort === s.id ? '#0A1520' : '#64748B', cursor: 'pointer' }}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {firmaBanner && (
        <div style={{ background: '#ECFEFF', border: '1px solid #A5F3FC', padding: '12px 20px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', color: '#0E7490' }}>
          <span style={{ fontWeight: '700', fontSize: '14px' }}>🏢 {firmaBanner} filtreli görünüm</span>
          <button onClick={() => setFirmaBanner('')} style={{ background: '#CFFAFE', border: 'none', color: '#0891B2', fontWeight: '700', fontSize: '12px', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>Tümünü Göster</button>
        </div>
      )}

      {/* 4. Veri Listesi */}
      <div>
        {groupedData.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '16px', border: '1px dashed rgba(30,45,61,0.2)' }}>
            <Package size={48} color="#94A3B8" style={{ opacity: 0.5, marginBottom: '16px' }} />
            <p style={{ fontWeight: '700', color: '#0A1520', fontSize: '16px' }}>Kayıt Bulunamadı</p>
            <p style={{ fontSize: '14px', color: '#64748B', marginTop: '4px' }}>Arama kriterlerini değiştirin veya yeni ekleyin.</p>
          </div>
        ) : (
          groupedData.map(({ firma, items, originalItems }) => (
            <div key={firma} className="card">
              
              <div className="card-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: '800', fontSize: '15px', color: '#0A1520', cursor: 'pointer' }} onClick={() => setFirmaBanner(firma)}>🏢 {firma}</span>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {['Onaylandı', 'Takip Et', 'Gönderildi', 'Reddedildi', 'Beklemede'].map(st => {
                      const c = originalItems.filter(i => i.durum === st).length;
                      if(c === 0) return null;
                      const s = getStatusStyle(st);
                      return <span key={st} style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}`, fontSize: '10px', fontWeight: '800', padding: '2px 8px', borderRadius: '6px' }}>{c} {st}</span>;
                    })}
                  </div>
                </div>
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#64748B', background: '#fff', border: '1px solid rgba(0,0,0,0.1)', padding: '4px 10px', borderRadius: '8px' }}>{items.length} Kayıt</span>
              </div>

              <div>
                {items.map(item => {
                  const v = isV(item.numune);
                  const isSel = selectedIds.has(item.id);
                  const acParts = (item.aciklama || '').split('|');
                  const note = acParts.length > 1 ? acParts[1] : item.aciklama;
                  const s = getStatusStyle(item.durum);
                  const photos = photoCache[item.id] || [];

                  return (
                    <div key={item.id} className={`list-item ${v ? 'variant' : ''}`} style={{ background: isSel ? '#F0F9FF' : '' }}>
                      <input type="checkbox" checked={isSel} onChange={(e) => {
                        const n = new Set(selectedIds); e.target.checked ? n.add(item.id) : n.delete(item.id); setSelectedIds(n);
                      }} style={{ width: '16px', height: '16px', cursor: 'pointer', marginTop: '4px' }} />
                      
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                          <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#0A1520', margin: 0 }}>
                            {dName(item.numune) || 'İsimsiz'}
                            {item.fiyat && <span style={{ marginLeft: '8px', fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#15803D', background: '#DCFCE7', padding: '2px 6px', borderRadius: '4px' }}>{item.fiyat}</span>}
                          </h4>
                          <span style={{ fontSize: '11px', fontWeight: '500', color: '#94A3B8', whiteSpace: 'nowrap' }}>{formatDate(item.updated_at || item.created_at)}</span>
                        </div>
                        
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                          <input type="text" defaultValue={note} placeholder="Not ekle..." onBlur={(e) => {
                            const val = e.target.value.trim(); if(val !== note) updateField(item.id, 'aciklama', v ? `${acParts[0]}|${val}` : val);
                          }} onKeyDown={e => e.key === 'Enter' && e.target.blur()} className="input" style={{ flex: 1, minWidth: '150px', padding: '6px 10px', fontSize: '12px' }} />
                          
                          <select value={item.durum || 'Beklemede'} onChange={(e) => updateField(item.id, 'durum', e.target.value)} style={{ appearance: 'none', background: s.bg, color: s.color, border: `1px solid ${s.border}`, padding: '6px 28px 6px 10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', outline: 'none', cursor: 'pointer', backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 6px center', backgroundRepeat: 'no-repeat', backgroundSize: '16px 16px' }}>
                            {VALID_STATUS.map(st => <option key={st} value={st}>{st}</option>)}
                          </select>
                          
                          <div style={{ display: 'flex', gap: '4px' }}>
                            <label className="btn-icon" style={{ background: photos.length ? '#ECFEFF' : '#fff', borderColor: photos.length ? '#A5F3FC' : '', color: photos.length ? '#0891B2' : '', position: 'relative' }}>
                              <Camera size={14} />
                              {photos.length > 0 && <span style={{ position: 'absolute', top: '-4px', right: '-4px', width: '10px', height: '10px', background: '#0891B2', borderRadius: '50%', border: '2px solid #fff' }} />}
                              <input type="file" accept="image/*" multiple onChange={(e) => handlePhotoUpload(e, item.id)} style={{ display: 'none' }} />
                            </label>
                            <button onClick={() => openEditDrawer(item.id)} className="btn-icon"><Edit2 size={14} /></button>
                            <button onClick={() => toggleArchive(item.id, item.arsiv)} className="btn-icon"><Archive size={14} /></button>
                            <button onClick={() => deleteSample(item.id)} className="btn-icon" style={{ color: '#DC2626' }}><Trash2 size={14} /></button>
                          </div>
                        </div>

                        {photos.length > 0 && (
                          <div className="hide-scroll" style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                            {photos.map((p, pIdx) => (
                              <div key={pIdx} style={{ position: 'relative', flexShrink: 0 }}>
                                <img src={p.url} onClick={() => { setPvPhotos(photos.map(x=>({...x, numeneId: item.id}))); setPvIndex(pIdx); setPvOpen(true); }} style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'cover', border: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer' }} alt=""/>
                                <button onClick={() => handleDeletePhoto(item.id, p.path)} style={{ position: 'absolute', top: '-6px', right: '-6px', width: '20px', height: '20px', background: '#DC2626', color: '#fff', border: '2px solid #fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><X size={10} /></button>
                              </div>
                            ))}
                          </div>
                        )}

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* --- ÇEKMECE & MODALLAR --- */}
      <div className={`drawer-overlay ${isDrawerOpen ? 'open' : ''}`} onClick={() => setIsDrawerOpen(false)} />
      
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div style={{ width: '40px', height: '6px', background: '#E2E8F0', borderRadius: '10px', margin: '0 auto 24px' }} />
        <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '24px', color: '#0A1520' }}>{editId ? '✏️ Düzenle' : '📦 Yeni Kayıt'}</h2>

        {!editId && (
          <div style={{ marginBottom: '20px', position: 'relative' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#64748B', marginBottom: '6px', textTransform: 'uppercase' }}>Firma Seçimi</label>
            <input type="text" value={isFirmaDdOpen ? firmaSearchQ : formFirma} onChange={(e) => { setFirmaSearchQ(e.target.value); setIsFirmaDdOpen(true); }} onFocus={() => { setFirmaSearchQ(formFirma); setIsFirmaDdOpen(true); }} placeholder="Firma adını yazın..." className="input" style={{ padding: '12px 16px', fontSize: '14px' }} />
            {isFirmaDdOpen && (
              <div className="hide-scroll" style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '8px', background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', maxHeight: '200px', overflowY: 'auto', zIndex: 10, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                {uniqueCustomers.filter(c => c.toLowerCase().includes(firmaSearchQ.toLowerCase())).slice(0,10).map((c, i) => (
                  <div key={i} onClick={() => { setFormFirma(c); setIsFirmaDdOpen(false); }} style={{ padding: '12px 16px', borderBottom: '1px solid rgba(0,0,0,0.05)', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>{c}</div>
                ))}
              </div>
            )}
          </div>
        )}

        {formRows.map((r, i) => (
          <div key={r.id} style={{ background: '#F8FAFC', border: '1px solid rgba(30,45,61,0.1)', borderRadius: '16px', padding: '16px', marginBottom: '16px', position: 'relative' }}>
            {!editId && formRows.length > 1 && <button onClick={() => setFormRows(prev => prev.filter(x => x.id !== r.id))} style={{ position: 'absolute', top: '12px', right: '12px', background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}><X size={18}/></button>}
            
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#64748B', marginBottom: '6px', textTransform: 'uppercase' }}>Kod & Fiyat</label>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <input type="text" value={r.kod} onChange={e => { const n = [...formRows]; n[i].kod = e.target.value; setFormRows(n); }} placeholder="Örn: X-100" className="input" style={{ flex: 2 }} />
              <input type="text" value={r.fiyat} onChange={e => { const n = [...formRows]; n[i].fiyat = e.target.value; setFormRows(n); }} placeholder="Fiyat ($)" className="input" style={{ flex: 1, fontFamily: 'JetBrains Mono' }} />
            </div>

            {!editId && (
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#64748B', marginBottom: '6px', textTransform: 'uppercase' }}>Varyantlar (Virgülle)</label>
                <input type="text" value={r.var} onChange={e => { const n = [...formRows]; n[i].var = e.target.value; setFormRows(n); }} placeholder="Siyah, Beyaz..." className="input" />
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#64748B', marginBottom: '6px', textTransform: 'uppercase' }}>Not</label>
              <input type="text" value={r.not} onChange={e => { const n = [...formRows]; n[i].not = e.target.value; setFormRows(n); }} placeholder="Açıklama girin..." className="input" />
            </div>
          </div>
        ))}

        {!editId && <button onClick={() => setFormRows([...formRows, { id: Date.now(), kod: '', fiyat: '', var: '', not: '' }])} style={{ width: '100%', padding: '14px', background: 'transparent', border: '2px dashed #A5F3FC', color: '#0891B2', borderRadius: '12px', fontWeight: '800', fontSize: '13px', cursor: 'pointer', marginBottom: '24px' }}>+ SATIR EKLE</button>}

        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={() => setIsDrawerOpen(false)} style={{ flex: 1, padding: '14px', background: '#F1F5F9', border: 'none', borderRadius: '12px', fontWeight: '700', color: '#475569', cursor: 'pointer' }}>İptal</button>
          <button onClick={handleSaveDrawer} style={{ flex: 2, padding: '14px', background: '#0F172A', border: 'none', borderRadius: '12px', fontWeight: '700', color: '#fff', cursor: 'pointer' }}>{editId ? 'Kaydet' : 'Numuneleri Oluştur'}</button>
        </div>
      </div>

      {/* Fotoğraf Büyük Görüntüleme */}
      {pvOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 200, display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#fff', fontWeight: '700', background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '8px' }}>{pvIndex + 1} / {pvPhotos.length}</span>
            <button onClick={() => setPvOpen(false)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}><X size={24}/></button>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '24px' }}>
            {pvIndex > 0 && <button onClick={() => setPvIndex(p=>p-1)} style={{ position: 'absolute', left: '24px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer' }}>‹</button>}
            <img src={pvPhotos[pvIndex]?.url} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} alt=""/>
            {pvIndex < pvPhotos.length - 1 && <button onClick={() => setPvIndex(p=>p+1)} style={{ position: 'absolute', right: '24px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer' }}>›</button>}
          </div>
          <div style={{ padding: '32px', textAlign: 'center' }}>
            <button onClick={() => handleDeletePhoto(pvPhotos[pvIndex].numeneId, pvPhotos[pvIndex].path)} style={{ background: 'rgba(220,38,38,0.2)', border: '1px solid rgba(220,38,38,0.3)', color: '#FECACA', padding: '12px 24px', borderRadius: '12px', fontWeight: '700', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Trash2 size={18}/> Bu Fotoğrafı Sil</button>
          </div>
        </div>
      )}

      {/* Yükleme ve Toast Bildirimleri */}
      {uploading && (
        <div className="anim-fade" style={{ position: 'fixed', bottom: '24px', right: '24px', background: '#0F172A', color: '#fff', padding: '14px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 999, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
          <RefreshCw size={20} className="anim-spin" color="#38BDF8" />
          <span style={{ fontSize: '14px', fontWeight: '700' }}>{uploadText}</span>
        </div>
      )}

      {toastMsg && (
        <div className="anim-fade" style={{ position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)', background: toastMsg.type === 'err' ? '#DC2626' : '#0F172A', color: '#fff', padding: '14px 24px', borderRadius: '30px', fontSize: '14px', fontWeight: '700', zIndex: 999, boxShadow: '0 10px 25px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          {toastMsg.type === 'err' ? <AlertCircle size={20} color="#FECACA" /> : <CheckCircle size={20} color="#38BDF8" />}
          {toastMsg.msg}
        </div>
      )}

    </div>
  );
}


```
