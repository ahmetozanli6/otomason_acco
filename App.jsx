import React, { useState, useEffect, useRef, useMemo } from 'react';

// ============================================================================
// İKONLAR
// ============================================================================
const SvgIcon = ({ children, size = 24, className = '', fill = 'none', ...props }) => (
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
const Bell = (p) => <SvgIcon {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></SvgIcon>;
const Plus = (p) => <SvgIcon {...p}><path d="M5 12h14"/><path d="M12 5v14"/></SvgIcon>;
const Calculator = (p) => <SvgIcon {...p}><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16.01" y1="14" y2="14"/><line x1="16" x2="16.01" y1="18" y2="18"/><line x1="12" x2="12.01" y1="14" y2="14"/><line x1="12" x2="12.01" y1="18" y2="18"/><line x1="8" x2="8.01" y1="14" y2="14"/><line x1="8" x2="8.01" y1="18" y2="18"/></SvgIcon>;
const ArrowRight = (p) => <SvgIcon {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></SvgIcon>;
const Clock = (p) => <SvgIcon {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></SvgIcon>;
const CheckCircle = (p) => <SvgIcon {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></SvgIcon>;
const Smartphone = (p) => <SvgIcon {...p}><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></SvgIcon>;
const Zap = (p) => <SvgIcon {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></SvgIcon>;
const Edit2 = (p) => <SvgIcon {...p}><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></SvgIcon>;
const Trash2 = (p) => <SvgIcon {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></SvgIcon>;
const RefreshCw = (p) => <SvgIcon {...p}><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></SvgIcon>;
const AlertCircle = (p) => <SvgIcon {...p}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></SvgIcon>;
const Camera = (p) => <SvgIcon {...p}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></SvgIcon>;
const Archive = (p) => <SvgIcon {...p}><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><line x1="10" x2="14" y1="12" y2="12"/></SvgIcon>;
const FileBarChart = (p) => <SvgIcon {...p}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="12" x2="12" y1="18" y2="12"/><line x1="8" x2="8" y1="18" y2="15"/><line x1="16" x2="16" y1="18" y2="14"/></SvgIcon>;

// ============================================================================
// SUPABASE (Dinamik Yükleme için sadece sabitler bırakıldı)
// ============================================================================
const SUPABASE_URL = 'https://zmlbdpjcergcvcurihuy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptbGJkcGpjZXJnY3ZjdXJpaHV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1MTA2MzIsImV4cCI6MjA5MTA4NjYzMn0.Jh4e_UXSL7CH7EzLBhhXtQYM0-iQwrFU3GHnoe-njBM';
const PHOTO_BUCKET = 'numune-photos';

let supabase = null; // Script yüklendikten sonra tanımlanacak

// ============================================================================
// YARDIMCILAR
// ============================================================================
const getVal = (item, possibleKeys, fallback = null) => {
  if (!item) return fallback;
  const originalKeys = Object.keys(item);
  for (let pKey of possibleKeys) {
    const cleanSearchKey = pKey.toLocaleLowerCase('tr-TR').replace(/[^a-z0-9ğüşöçı]/g, '');
    for (let oKey of originalKeys) {
      const cleanOriginalKey = oKey.toLocaleLowerCase('tr-TR').replace(/[^a-z0-9ğüşöçı]/g, '');
      if (cleanOriginalKey === cleanSearchKey && item[oKey] !== null && item[oKey] !== '') return item[oKey];
    }
  }
  for (let pKey of possibleKeys) {
    const cleanSearchKey = pKey.toLocaleLowerCase('tr-TR').replace(/[^a-z0-9ğüşöçı]/g, '');
    if (cleanSearchKey.length < 3) continue;
    for (let oKey of originalKeys) {
      const cleanOriginalKey = oKey.toLocaleLowerCase('tr-TR').replace(/[^a-z0-9ğüşöçı]/g, '');
      if (cleanOriginalKey.includes(cleanSearchKey) && item[oKey] !== null && item[oKey] !== '') return item[oKey];
    }
  }
  return fallback;
};

const getDebugVal = (item, possibleKeys) => {
  const val = getVal(item, possibleKeys, null);
  if (val !== null) return val;
  return '-';
};

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

const isV = (n) => (n || '').toString().startsWith('↳');
const dName = (n) => (n || '').replace(/^↳\s*/, '').trim();
const trl = (s) => (s || '').toString().replaceAll('İ', 'i').replaceAll('I', 'ı').toLowerCase();

// ============================================================================
// TEMA SABİTLERİ
// ============================================================================
const T = {
  sidebarBg:      '#0F172A',
  sidebarHeadBg:  '#0A1520',
  sidebarBorder:  'rgba(255,255,255,0.07)',
  navText:        'rgba(255,255,255,0.5)',
  navHover:       'rgba(255,255,255,0.08)',
  navActiveBg:    'linear-gradient(135deg, #0672A0, #0891B2)',
  navActiveGlow:  '0 4px 14px rgba(8,145,178,0.35)',
  pageBg:         '#F3F5F7',
  surface:        '#FFFFFF',
  border:         'rgba(30,45,61,0.1)',
  border2:        'rgba(30,45,61,0.16)',
  textPrimary:    '#0A1520',
  textSecondary:  '#4A6880',
  teal:           '#0891B2',
  tealLight:      '#38BDF8',
  tealSoft:       'rgba(8,145,178,0.1)',
  tealGlow:       'rgba(8,145,178,0.2)',
  green:          '#15803D',
  red:            '#991B1B',
  orange:         '#EA580C',
  navy:           '#1E2D3D',
};

// ============================================================================
// ANA UYGULAMA (App.jsx Root)
// ============================================================================
export default function App() {
  const [activeTab, setActiveTab]     = useState('samples'); // Varsayılan olarak Numuneler sekmesi açık
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading]     = useState(true);
  const [dbError, setDbError]         = useState(null);

  const [customers, setCustomers] = useState([]);
  const [samples,   setSamples]   = useState([]);
  const [prices,    setPrices]    = useState([]);
  const [costs,     setCosts]     = useState([]);
  const [notes,     setNotes]     = useState([]);

  const navItems = [
    { id: 'dashboard', label: 'Özet Panel',  icon: LayoutDashboard },
    { id: 'samples',   label: 'Numuneler',   icon: Package },
    { id: 'customers', label: 'Müşteriler',  icon: Users },
    { id: 'prices',    label: 'Fiyatlar',    icon: CircleDollarSign },
    { id: 'cost',      label: 'Maliyet',     icon: Calculator },
    { id: 'offers',    label: 'Teklifler',   icon: Send },
    { id: 'notes',     label: 'Notlarım',    icon: FileText },
  ];

  // Supabase yükleme ve veri çekme
  useEffect(() => {
    const initSupabase = () => {
      setIsLoading(true);
      if (window.supabase) {
        if (!supabase) supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        fetchAllData();
      } else {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
        script.onload = () => {
          if (!supabase) supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
          fetchAllData();
        };
        script.onerror = () => {
          setDbError('Supabase kütüphanesi yüklenemedi. İnternet bağlantınızı kontrol edip sayfayı yenileyin.');
          setIsLoading(false);
        };
        document.head.appendChild(script);
      }
    };

    initSupabase();
  }, []);

  const fetchAllData = async () => {
    if (!supabase) return;
    
    setIsLoading(true);
    setDbError(null);
    try {
      let errorMessages = [];

      const { data: customersData, error: customersError } = await supabase.from('musteriler').select('firma_adi').order('firma_adi');
      if (customersError) errorMessages.push(`Müşteriler: ${customersError.message}`);
      else setCustomers(customersData || []);

      let { data: samplesData, error: samplesError } = await supabase.from('numuneler').select('*').order('created_at', { ascending: false });
      if (samplesError) errorMessages.push(`Numuneler: ${samplesError.message}`);
      if (samplesData) setSamples(samplesData || []);

      const { data: pricesData, error: pricesError } = await supabase.from('fiyatlar').select('*');
      if (!pricesError) setPrices(pricesData || []);

      const { data: costsData, error: costsError } = await supabase.from('maliyetler').select('*');
      if (!costsError) setCosts(costsData || []);

      const { data: notesData, error: notesError } = await supabase.from('notlar').select('*');
      if (!notesError) setNotes(notesData || []);

      if (errorMessages.length > 0) setDbError(errorMessages.join(' | '));
    } catch (error) {
      setDbError(`Sistemsel Hata: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
        body { font-family: 'Inter', sans-serif; background: ${T.pageBg}; }
        .yp-scrollbar { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,.12) transparent; }
        .yp-scrollbar::-webkit-scrollbar { width: 4px; }
        .yp-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,.15); border-radius: 4px; }
        .yp-anim { animation: fadeUp .22s both; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
        .yp-spin { animation: spin .9s linear infinite; }
        @keyframes spin { to { transform:rotate(360deg); } }
        .mono { font-family: 'JetBrains Mono', monospace; }

        .yp-sidebar {
          position: fixed; top: 0; left: 0; bottom: 0;
          transform: translateX(-100%);
          transition: transform .28s cubic-bezier(.32,.72,0,1);
          z-index: 50;
        }
        .yp-sidebar.open { transform: translateX(0); }

        @media (min-width: 1024px) {
          .yp-sidebar { position: relative !important; transform: translateX(0) !important; transition: none !important; flex-shrink: 0; }
          .yp-menu-btn { display: none !important; }
          .yp-sidebar-close { display: none !important; }
          .yp-search { display: flex !important; }
        }
        @media (max-width: 1023px) { .yp-search { display: none !important; } }
      `}</style>

      <div style={{ display:'flex', height:'100vh', background: T.pageBg, color: T.textPrimary, fontFamily:'Inter,sans-serif' }}>
        {isSidebarOpen && (
          <div onClick={() => setIsSidebarOpen(false)} style={{ position:'fixed', inset:0, background:'rgba(10,21,32,0.65)', zIndex:40, backdropFilter:'blur(3px)' }} />
        )}

        <aside style={{ width: 252, background: T.sidebarBg, borderRight: `1px solid ${T.sidebarBorder}`, boxShadow: '4px 0 24px rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column' }} className={`yp-sidebar${isSidebarOpen ? ' open' : ''}`}>
          <div style={{ height: 72, padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: T.sidebarHeadBg, borderBottom: `1px solid ${T.sidebarBorder}`, flexShrink: 0 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: 'linear-gradient(135deg, #0672A0, #0891B2)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', boxShadow:'0 2px 10px rgba(8,145,178,0.4)' }}>
                <Zap size={18} />
              </div>
              <span style={{ fontSize:18, fontWeight:800, color:'#fff', letterSpacing:'-.01em' }}>Yanteks<span style={{ color: T.tealLight }}>Pro</span></span>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="yp-sidebar-close" style={{ background:'none', border:'none', color:'rgba(255,255,255,0.45)', cursor:'pointer', padding:6, borderRadius:8, display:'flex' }}>
              <X size={18} />
            </button>
          </div>
          <nav className="yp-scrollbar" style={{ flex:1, overflowY:'auto', padding:'12px 0' }}>
            <p style={{ padding:'8px 20px 6px', fontSize:9, fontWeight:700, color:'rgba(255,255,255,0.25)', letterSpacing:'.13em', textTransform:'uppercase' }}>ANA MENÜ</p>
            {navItems.map(({ id, label, icon: Icon }) => {
              const active = activeTab === id;
              return (
                <button key={id} onClick={() => handleNavClick(id)} style={{ width: 'calc(100% - 16px)', display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', margin: '2px 8px', borderRadius: 12, border: 'none', cursor: 'pointer', fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 600, transition: 'background .15s, color .15s', background: active ? T.navActiveBg : 'transparent', boxShadow: active ? T.navActiveGlow : 'none', color: active ? '#fff' : T.navText }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.background = T.navHover; e.currentTarget.style.color = 'rgba(255,255,255,0.9)'; }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.navText; } }}>
                  <span style={{ width:22, textAlign:'center', flexShrink:0, opacity: active ? 1 : 0.75 }}><Icon size={18} /></span>
                  <span>{label}</span>
                  {active && <span style={{ marginLeft:'auto', width:6, height:6, borderRadius:'50%', background:'rgba(255,255,255,0.7)' }} />}
                </button>
              );
            })}
          </nav>
          <div style={{ padding: '14px 20px', borderTop: `1px solid ${T.sidebarBorder}`, fontSize: 10, fontWeight:600, color:'rgba(255,255,255,0.2)', letterSpacing:'.06em' }}>YANTEKS PRO v2.0</div>
        </aside>

        <main style={{ flex:1, display:'flex', flexDirection:'column', height:'100vh', overflow:'hidden', minWidth:0, position:'relative' }}>
          <header style={{ height: 72, background: T.surface, borderBottom: `1.5px solid ${T.border2}`, boxShadow: '0 1px 0 rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', flexShrink: 0, zIndex: 10 }}>
            <div style={{ display:'flex', alignItems:'center', gap:14 }}>
              <button onClick={() => setIsSidebarOpen(true)} className="yp-menu-btn" style={{ background:'none', border: `1px solid ${T.border}`, borderRadius:10, padding:8, cursor:'pointer', color: T.textSecondary, display:'flex', alignItems:'center' }}>
                <Menu size={20} />
              </button>
              <div>
                <h2 style={{ fontSize:18, fontWeight:800, color: T.textPrimary, letterSpacing:'-.02em' }}>{navItems.find(i => i.id === activeTab)?.label}</h2>
                <p style={{ fontSize:11, color: T.textSecondary, fontWeight:500, marginTop:1 }}>Sisteme hoş geldiniz, iyi çalışmalar.</p>
              </div>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <div className="yp-search" style={{ position:'relative' }}>
                <span style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', color: T.textSecondary, display:'flex' }}><Search size={15} /></span>
                <input type="text" placeholder="Müşteri veya ürün ara..." style={{ paddingLeft: 36, paddingRight: 16, paddingTop: 9, paddingBottom: 9, width: 260, background: T.pageBg, border: `1px solid ${T.border2}`, borderRadius: 22, fontSize: 12, fontWeight:500, color: T.textPrimary, fontFamily:'Inter,sans-serif', outline:'none' }}
                  onFocus={e => { e.target.style.borderColor = T.teal; e.target.style.boxShadow = `0 0 0 3px ${T.tealGlow}`; }}
                  onBlur={e =>  { e.target.style.borderColor = T.border2; e.target.style.boxShadow = 'none'; }} />
              </div>
              <button onClick={fetchAllData} title="Verileri Yenile" style={{ background:'none', border:`1px solid ${T.border}`, borderRadius:10, padding:8, cursor:'pointer', color: T.textSecondary, display:'flex' }}>
                <span className={isLoading ? 'yp-spin' : ''} style={{ display:'flex' }}><RefreshCw size={18} /></span>
              </button>
              <div style={{ width: 38, height: 38, borderRadius:'50%', background: 'linear-gradient(135deg, #0672A0, #0891B2)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:800, fontSize:13, cursor:'pointer', boxShadow:'0 2px 8px rgba(8,145,178,0.35)', border:'3px solid #fff' }}>YP</div>
            </div>
          </header>

          <div style={{ flex:1, overflowY:'auto', position:'relative' }} className="yp-scrollbar">
            {dbError && (
              <div style={{ background:'#FEF2F2', borderLeft:`4px solid #DC2626`, padding:'16px 20px', margin:28, borderRadius:'0 12px 12px 0' }}>
                <div style={{ display:'flex', alignItems:'center', gap:8, color:'#991B1B', fontWeight:700, marginBottom:6 }}><AlertCircle size={18} /> Veritabanı Uyarısı</div>
                <p style={{ fontSize:13, color:'#B91C1C', fontWeight:500 }}>{dbError}</p>
              </div>
            )}
            {isLoading ? (
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:280, gap:14 }}>
                <span className="yp-spin" style={{ color: T.teal, display:'flex' }}><RefreshCw size={38} /></span>
                <p style={{ color: T.textSecondary, fontWeight:500 }}>Veriler yükleniyor…</p>
              </div>
            ) : (
              <>
                {activeTab === 'dashboard'  && <div style={{padding:28}}>Özet Panel modülü</div>}
                {activeTab === 'customers'  && <div style={{padding:28}}>Müşteriler modülü</div>}
                {activeTab === 'samples'    && <SamplesView initialData={samples} customers={customers} onRefresh={fetchAllData} />}
                {activeTab === 'prices'     && <div style={{padding:28}}>Fiyatlar modülü</div>}
                {activeTab === 'cost'       && <div style={{padding:28}}>Maliyet modülü</div>}
                {activeTab === 'notes'      && <div style={{padding:28}}>Notlarım modülü</div>}
                {activeTab === 'offers'     && <div style={{padding:28}}>Teklifler modülü</div>}
              </>
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
function SamplesView({ initialData, customers, onRefresh }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  // UI States
  const [filter, setFilter] = useState('Hepsi');
  const [sort, setSort] = useState('date');
  const [searchQuery, setSearchQuery] = useState('');
  const [firmaBanner, setFirmaBanner] = useState('');
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [toastMsg, setToastMsg] = useState(null);

  // Photos Cache: { sampleId: [ {url, path, name} ] }
  const [photoCache, setPhotoCache] = useState({});
  const [uploading, setUploading] = useState(false);
  const [uploadText, setUploadText] = useState('');

  // Modals
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  
  // Drawer Form State
  const [formFirma, setFormFirma] = useState('');
  const [firmaSearchQ, setFirmaSearchQ] = useState('');
  const [isFirmaDdOpen, setIsFirmaDdOpen] = useState(false);
  const [formRows, setFormRows] = useState([{ id: Date.now(), kod: '', fiyat: '', var: '', not: '' }]);

  // Photo Viewer
  const [pvOpen, setPvOpen] = useState(false);
  const [pvPhotos, setPvPhotos] = useState([]);
  const [pvIndex, setPvIndex] = useState(0);

  // Constants
  const VALID_STATUS = ['Beklemede', 'Takip Et', 'Gönderildi', 'Onaylandı', 'Reddedildi'];
  const uniqueCustomers = useMemo(() => {
    return [...new Set((customers || []).map(m => (m.firma_adi || '').trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'tr'));
  }, [customers]);

  // Load Data
  useEffect(() => {
    const sorted = [...(initialData || [])].sort((a,b) => {
      const ta = new Date(a.created_at).getTime(), tb = new Date(b.created_at).getTime();
      if(ta === tb) return isV(a.numune) ? 1 : -1;
      return tb - ta;
    });
    setData(sorted);
    
    const ids = sorted.slice(0, 50).map(r => r.id); 
    preloadPhotos(ids);
  }, [initialData]);

  // Filter Data
  useEffect(() => {
    let result = [...data];
    
    if (filter === 'Arşiv') {
      result = result.filter(i => i.arsiv === true);
    } else {
      result = result.filter(i => i.arsiv !== true);
      if (filter !== 'Hepsi') {
        result = result.filter(i => i.durum === filter);
      }
    }

    if (firmaBanner) result = result.filter(i => (i.firma || '').toUpperCase() === firmaBanner);
    
    if (searchQuery) {
      const q = trl(searchQuery);
      result = result.filter(i => trl(i.firma).includes(q) || trl(i.numune).includes(q) || trl(i.aciklama).includes(q));
    }

    setFilteredData(result);
  }, [data, filter, searchQuery, firmaBanner]);

  // Group & Sort Logic for Render
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
      if(sort === 'alpha') {
        items.sort((a,b) => dName(a.numune).localeCompare(dName(b.numune), 'tr'));
      } else if(sort === 'status') {
        items.sort((a,b) => VALID_STATUS.indexOf(a.durum || 'Beklemede') - VALID_STATUS.indexOf(b.durum || 'Beklemede'));
      }
      
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
    if(!supabase) return [];
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
    const needed = ids.filter(id => !(id in photoCache));
    if(needed.length === 0) return;
    
    const newCache = { ...photoCache };
    await Promise.all(needed.map(async id => {
      newCache[id] = await fetchPhotos(id);
    }));
    setPhotoCache(prev => ({ ...prev, ...newCache }));
  };

  const handlePhotoUpload = async (e, numeneId) => {
    if(!supabase) { showToast('Veritabanı bağlantısı henüz hazır değil.', 'err'); return; }
    const files = Array.from(e.target.files || []);
    if(!files.length) return;
    e.target.value = '';
    
    setUploading(true);
    setUploadText(`Fotoğraf yükleniyor (0/${files.length})`);
    
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
    if(!supabase) return;
    setUploading(true); setUploadText('Siliniyor...');
    const { error } = await supabase.storage.from(PHOTO_BUCKET).remove([photoPath]);
    if(error) { showToast('Silinemedi', 'err'); }
    else {
      const newPhotos = await fetchPhotos(numeneId);
      setPhotoCache(prev => ({ ...prev, [numeneId]: newPhotos }));
      
      if(pvOpen) {
        const remaining = newPhotos.map(p => ({...p, numeneId}));
        if(remaining.length === 0) setPvOpen(false);
        else {
          setPvPhotos(remaining);
          setPvIndex(Math.min(pvIndex, remaining.length - 1));
        }
      }
      showToast('Fotoğraf silindi', 'ok');
    }
    setUploading(false);
  };

  // --- Database Operations ---
  const showToast = (msg, type='info') => {
    setToastMsg({ msg, type });
    setTimeout(() => setToastMsg(null), 3000);
  };

  const updateField = async (id, field, value) => {
    if(!supabase) return;
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
    if(!supabase) return;
    if(!window.confirm('Bu numune silinsin mi?')) return;
    const { error } = await supabase.from('numuneler').delete().eq('id', id);
    if(error) { showToast('Silinemedi', 'err'); return; }
    setData(prev => prev.filter(item => item.id != id));
    setSelectedIds(prev => { const n = new Set(prev); n.delete(id); return n; });
    showToast('Silindi', 'ok');
  };

  const handleBulkStatus = async (status) => {
    if(!supabase || selectedIds.size === 0) return;
    const ids = Array.from(selectedIds);
    const { error } = await supabase.from('numuneler').update({ durum: status }).in('id', ids);
    if(error) { showToast('Toplu güncelleme hatası', 'err'); return; }
    setData(prev => prev.map(i => ids.includes(i.id) ? { ...i, durum: status } : i));
    setSelectedIds(new Set());
    showToast(`${ids.length} numune: ${status}`, 'ok');
  };

  const handleBulkDelete = async () => {
    if(!supabase || selectedIds.size === 0) return;
    if(!window.confirm(`${selectedIds.size} numune silinsin mi?`)) return;
    const ids = Array.from(selectedIds);
    const { error } = await supabase.from('numuneler').delete().in('id', ids);
    if(error) { showToast('Silinemedi', 'err'); return; }
    setData(prev => prev.filter(i => !ids.includes(i.id)));
    setSelectedIds(new Set());
    showToast(`${ids.length} silindi`, 'ok');
  };

  // --- Excel Export ---
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
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `Yanteks_Numune_${new Date().toLocaleDateString('tr-TR')}.xlsx`;
        a.click();
        showToast('Excel indirildi', 'ok');
      } catch (err) {
        showToast('Excel oluşturulamadı', 'err');
      }
    };

    if(!window.ExcelJS) {
      setUploading(true); setUploadText('Hazırlanıyor...');
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.3.0/exceljs.min.js';
      script.onload = () => { setUploading(false); runExport(); };
      document.body.appendChild(script);
    } else {
      runExport();
    }
  };

  // --- Drawer (Form) Logic ---
  const openNewDrawer = () => {
    setEditId(null);
    setFormFirma(firmaBanner || '');
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
    if(!supabase) return;
    
    if(editId) {
      // Update single
      const row = formRows[0];
      if(!row.kod) { showToast('Kod zorunlu', 'err'); return; }
      const item = data.find(i => i.id == editId);
      const v = isV(item.numune);
      
      let ac = row.not;
      if(v) {
        const pc = (item.aciklama||'').split('|')[0];
        ac = `${pc}|${row.not}`;
      }

      const payload = {
        numune: v ? '↳ ' + row.kod : row.kod,
        fiyat: row.fiyat ? (row.fiyat.startsWith('$') ? row.fiyat : '$'+row.fiyat) : '',
        aciklama: ac
      };
      
      setUploading(true); setUploadText('Güncelleniyor...');
      const { error } = await supabase.from('numuneler').update(payload).eq('id', editId);
      setUploading(false);
      
      if(error) { showToast('Hata oluştu', 'err'); return; }
      setData(prev => prev.map(i => i.id == editId ? { ...i, ...payload } : i));
      showToast('Güncellendi', 'ok');
      setIsDrawerOpen(false);
    } else {
      // Insert new
      const f = formFirma.toUpperCase().trim();
      if(!f) { showToast('Firma seçin', 'err'); return; }
      
      const pkg = [];
      formRows.forEach(r => {
        const k = r.kod.trim(), pr = r.fiyat.trim(), nt = r.not.trim(), vStr = r.var.trim();
        if(!k) return;
        const fs = pr ? (pr.startsWith('$') ? pr : '$'+pr) : '';
        pkg.push({ firma: f, numune: k, fiyat: fs, aciklama: nt, durum: 'Beklemede', arsiv: false });
        if(vStr) {
          vStr.split(',').forEach(v => {
            const vt = v.trim();
            if(vt) pkg.push({ firma: f, numune: '↳ '+vt, fiyat: fs, aciklama: `${k}|${nt}`, durum: 'Beklemede', arsiv: false });
          });
        }
      });
      
      if(!pkg.length) { showToast('En az bir kod girin', 'err'); return; }
      
      setUploading(true); setUploadText('Kaydediliyor...');
      const { data: inserted, error } = await supabase.from('numuneler').insert(pkg).select();
      setUploading(false);
      
      if(error) { showToast('Hata: '+error.message, 'err'); return; }
      setData(prev => [...inserted, ...prev]);
      showToast(`${pkg.length} kayıt eklendi`, 'ok');
      setIsDrawerOpen(false);
    }
  };

  // --- Render Helpers ---
  const getStatusStyle = (st) => {
    const map = {
      'Beklemede': { bg:'rgba(217,119,6,0.1)', color:'#B45309', border:'rgba(217,119,6,0.2)' },
      'Takip Et':  { bg:'rgba(8,145,178,0.1)', color:'#0891B2', border:'rgba(8,145,178,0.2)' },
      'Gönderildi':{ bg:'rgba(29,78,216,0.1)', color:'#1D4ED8', border:'rgba(29,78,216,0.2)' },
      'Onaylandı': { bg:'rgba(21,128,61,0.1)', color:'#15803D', border:'rgba(21,128,61,0.2)' },
      'Reddedildi':{ bg:'rgba(153,27,27,0.1)', color:'#991B1B', border:'rgba(153,27,27,0.2)' },
    };
    return map[st] || map['Beklemede'];
  };

  const activeCount = data.filter(i => !i.arsiv).length;

  return (
    <div style={{ position:'relative', minHeight:'100%', padding: '20px' }}>
      <style>{`
        .sample-row { transition: background 0.2s; }
        .sample-row:hover { background: #F8FAFC; }
        .sample-row.variant { background: #F8FAFC; border-left: 3px solid #E2E8F0; margin-left: 20px; }
        .sample-row.variant:hover { background: #F1F5F9; }
        .st-select { appearance: none; background: transparent; border: none; font-size: 11px; font-weight: 700; cursor: pointer; padding: 4px 8px; border-radius: 6px; outline: none; }
        .hide-scroll::-webkit-scrollbar { display: none; }
        
        .photo-strip { display: flex; gap: 8px; overflow-x: auto; padding-top: 8px; margin-top: 8px; border-top: 1px dashed ${T.border}; }
        .photo-thumb { width: 44px; height: 44px; border-radius: 6px; object-fit: cover; cursor: pointer; border: 1px solid ${T.border}; }
        .photo-wrap { position: relative; }
        .photo-del { position: absolute; top: -4px; right: -4px; background: #DC2626; color: white; border: none; border-radius: 50%; width: 16px; height: 16px; font-size: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center; }
      `}</style>

      {/* Toolbar & Filters */}
      <div style={{ display:'flex', flexWrap:'wrap', gap: 16, marginBottom: 20, alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ display:'flex', gap: 10 }}>
          <button onClick={openNewDrawer} style={{ background: T.teal, color: '#fff', border: 'none', padding: '8px 16px', borderRadius: 8, fontWeight: 700, cursor: 'pointer', display:'flex', alignItems:'center', gap:6 }}>
            <Plus size={16} /> Yeni Numune
          </button>
          <button onClick={exportData} style={{ background: T.surface, color: T.textPrimary, border: `1px solid ${T.border2}`, padding: '8px 16px', borderRadius: 8, fontWeight: 600, cursor: 'pointer', display:'flex', alignItems:'center', gap:6 }}>
            <FileBarChart size={16} /> Excel
          </button>
        </div>

        <div style={{ display:'flex', gap: 6, overflowX:'auto' }} className="hide-scroll">
          {['Hepsi', 'Beklemede', 'Takip Et', 'Gönderildi', 'Onaylandı', 'Reddedildi', 'Arşiv'].map(f => {
            const count = f === 'Hepsi' ? activeCount : f === 'Arşiv' ? data.filter(i => i.arsiv).length : data.filter(i => !i.arsiv && i.durum === f).length;
            const active = filter === f;
            return (
              <button key={f} onClick={() => setFilter(f)} style={{
                background: active ? T.navy : T.surface, color: active ? '#fff' : T.textSecondary,
                border: `1px solid ${active ? T.navy : T.border}`, padding: '6px 12px', borderRadius: 20,
                fontSize: 12, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', display:'flex', alignItems:'center', gap:6
              }}>
                {f} <span style={{ background: active ? 'rgba(255,255,255,0.2)' : T.pageBg, padding: '2px 6px', borderRadius: 10, fontSize: 10 }}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bulk Actions Bar */}
      {selectedIds.size > 0 && (
        <div style={{ background: T.navy, color: '#fff', padding: '10px 20px', borderRadius: 12, display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 16, animation: 'fadeUp .2s' }}>
          <span style={{ fontWeight: 700 }}>{selectedIds.size} seçili</span>
          <div style={{ display:'flex', gap: 8 }}>
            {['Beklemede', 'Takip Et', 'Gönderildi', 'Onaylandı', 'Reddedildi'].map(s => (
              <button key={s} onClick={() => handleBulkStatus(s)} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: 6, fontSize: 11, cursor: 'pointer' }}>{s}</button>
            ))}
            <button onClick={handleBulkDelete} style={{ background: '#DC2626', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: 6, fontSize: 11, cursor: 'pointer', marginLeft: 10 }}>Sil</button>
            <button onClick={() => setSelectedIds(new Set())} style={{ background: 'transparent', color: '#fff', border: 'none', padding: '6px', cursor: 'pointer' }}><X size={16} /></button>
          </div>
        </div>
      )}

      {/* Search & Sort */}
      <div style={{ display:'flex', gap: 10, marginBottom: 20 }}>
        <div style={{ position:'relative', flex: 1, maxWidth: 400 }}>
          <Search size={16} style={{ position:'absolute', left: 12, top: 10, color: T.textSecondary }} />
          <input type="text" placeholder="Firma, kod veya not ara..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} 
            style={{ width: '100%', padding: '9px 12px 9px 36px', borderRadius: 8, border: `1px solid ${T.border2}`, outline:'none' }} />
          {searchQuery && <X size={14} onClick={() => setSearchQuery('')} style={{ position:'absolute', right:12, top:11, color:T.textSecondary, cursor:'pointer' }} />}
        </div>
        <div style={{ display:'flex', gap:4, background: T.surface, border: `1px solid ${T.border}`, borderRadius:8, padding:4 }}>
          {[{id:'date', label:'Tarih'}, {id:'alpha', label:'A-Z'}, {id:'status', label:'Durum'}].map(s => (
            <button key={s.id} onClick={() => setSort(s.id)} style={{ background: sort === s.id ? T.pageBg : 'transparent', border:'none', padding:'6px 12px', borderRadius:6, fontSize:12, fontWeight:600, color: sort === s.id ? T.textPrimary : T.textSecondary, cursor:'pointer' }}>{s.label}</button>
          ))}
        </div>
      </div>

      {/* Firma Banner */}
      {firmaBanner && (
        <div style={{ background: T.tealSoft, border: `1px solid ${T.teal}`, padding: '10px 16px', borderRadius: 8, display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 16, color: T.teal }}>
          <span style={{ fontWeight: 700 }}>🏢 {firmaBanner} firmasının numuneleri</span>
          <button onClick={() => setFirmaBanner('')} style={{ background:'transparent', border:'none', color:T.teal, cursor:'pointer', fontWeight:700 }}>✕ Tüm firmalar</button>
        </div>
      )}

      {/* List */}
      <div style={{ display:'flex', flexDirection:'column', gap: 20 }}>
        {groupedData.length === 0 ? (
          <div style={{ textAlign:'center', padding: '60px 20px', color: T.textSecondary, background: T.surface, borderRadius: 16, border: `1px dashed ${T.border2}` }}>
            <Package size={48} style={{ opacity: 0.2, margin: '0 auto 16px' }} />
            <p style={{ fontWeight: 600 }}>Sonuç bulunamadı.</p>
          </div>
        ) : (
          groupedData.map(({ firma, items, originalItems }) => (
            <div key={firma} style={{ background: T.surface, borderRadius: 12, border: `1px solid ${T.border}`, overflow:'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
              
              {/* Firma Header */}
              <div style={{ background: '#F8FAFC', padding: '12px 16px', borderBottom: `1px solid ${T.border}`, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
                  <span style={{ fontWeight: 800, color: T.textPrimary, cursor:'pointer' }} onClick={() => setFirmaBanner(firma)}>🏢 {firma}</span>
                  <div style={{ display:'flex', gap: 4 }}>
                    {['Onaylandı', 'Takip Et', 'Gönderildi', 'Reddedildi', 'Beklemede'].map(st => {
                      const c = originalItems.filter(i => i.durum === st).length;
                      if(c === 0) return null;
                      const s = getStatusStyle(st);
                      return <div key={st} style={{ background: s.color, color:'#fff', fontSize:10, fontWeight:700, padding:'2px 6px', borderRadius:10 }}>{c}</div>;
                    })}
                  </div>
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: T.textSecondary, background: T.pageBg, padding: '4px 8px', borderRadius: 12 }}>{items.length} numune</span>
              </div>

              {/* Items */}
              <div style={{ display:'flex', flexDirection:'column' }}>
                {items.map(item => {
                  const v = isV(item.numune);
                  const isSel = selectedIds.has(item.id);
                  const acParts = (item.aciklama || '').split('|');
                  const note = acParts.length > 1 ? acParts[1] : item.aciklama;
                  const stStyle = getStatusStyle(item.durum);
                  const photos = photoCache[item.id] || [];

                  return (
                    <div key={item.id} className={`sample-row ${v ? 'variant' : ''}`} style={{ padding: '12px 16px', borderBottom: `1px solid ${T.border}`, background: isSel ? '#F0F9FF' : undefined }}>
                      <div style={{ display:'flex', alignItems:'flex-start', gap: 12 }}>
                        
                        <input type="checkbox" checked={isSel} onChange={(e) => {
                          const n = new Set(selectedIds);
                          e.target.checked ? n.add(item.id) : n.delete(item.id);
                          setSelectedIds(n);
                        }} style={{ marginTop: 4, cursor:'pointer' }} />
                        
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                            <div style={{ fontWeight: 700, color: T.textPrimary, fontSize: 13 }}>
                              {dName(item.numune) || 'İsimsiz'}
                              {item.fiyat && <span className="mono" style={{ color: T.green, fontSize: 11, marginLeft: 8 }}>{item.fiyat}</span>}
                            </div>
                            <span style={{ fontSize: 11, color: T.textSecondary }}>{formatDate(item.updated_at || item.created_at)}</span>
                          </div>
                          
                          <div style={{ display:'flex', alignItems:'center', gap: 8, marginTop: 8, flexWrap:'wrap' }}>
                            {/* Editable Note */}
                            <input type="text" defaultValue={note} placeholder="Not..." 
                              onBlur={(e) => {
                                const val = e.target.value.trim();
                                if(val !== note) updateField(item.id, 'aciklama', v ? `${acParts[0]}|${val}` : val);
                              }}
                              onKeyDown={e => e.key === 'Enter' && e.target.blur()}
                              style={{ flex: 1, minWidth: 150, padding: '6px 10px', fontSize: 12, borderRadius: 6, border: `1px solid ${T.border2}`, background: '#fff', outline:'none' }} 
                            />
                            
                            {/* Status Select */}
                            <select value={item.durum || 'Beklemede'} onChange={(e) => updateField(item.id, 'durum', e.target.value)} 
                              className="st-select" style={{ background: stStyle.bg, color: stStyle.color, border: `1px solid ${stStyle.border}` }}>
                              {VALID_STATUS.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                            
                            {/* Actions */}
                            <div style={{ display:'flex', gap: 4 }}>
                              <label style={{ cursor:'pointer', padding: 6, borderRadius: 6, background: photos.length ? T.tealSoft : T.surface, color: photos.length ? T.teal : T.textSecondary, border:`1px solid ${T.border}`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                                <Camera size={14} />
                                {photos.length > 0 && <span style={{ width:6, height:6, borderRadius:'50%', background:T.teal, position:'absolute', top:2, right:2 }}/>}
                                <input type="file" accept="image/*" multiple onChange={(e) => handlePhotoUpload(e, item.id)} style={{ display:'none' }} />
                              </label>
                              <button onClick={() => openEditDrawer(item.id)} style={{ cursor:'pointer', padding: 6, borderRadius: 6, background: T.surface, color: T.textSecondary, border:`1px solid ${T.border}`, display:'flex', alignItems:'center', justifyContent:'center' }}><Edit2 size={14} /></button>
                              <button onClick={() => toggleArchive(item.id, item.arsiv)} style={{ cursor:'pointer', padding: 6, borderRadius: 6, background: T.surface, color: T.textSecondary, border:`1px solid ${T.border}`, display:'flex', alignItems:'center', justifyContent:'center' }}><Archive size={14} /></button>
                              <button onClick={() => deleteSample(item.id)} style={{ cursor:'pointer', padding: 6, borderRadius: 6, background: T.surface, color: '#DC2626', border:`1px solid ${T.border}`, display:'flex', alignItems:'center', justifyContent:'center' }}><Trash2 size={14} /></button>
                            </div>
                          </div>

                          {/* Photos Strip */}
                          {photos.length > 0 && (
                            <div className="photo-strip hide-scroll">
                              {photos.map((p, pIdx) => (
                                <div key={pIdx} className="photo-wrap">
                                  <img src={p.url} className="photo-thumb" onClick={() => { setPvPhotos(photos.map(x=>({...x, numeneId: item.id}))); setPvIndex(pIdx); setPvOpen(true); }} alt=""/>
                                  <button className="photo-del" onClick={() => handleDeletePhoto(item.id, p.path)}><X size={10}/></button>
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

      {/* Drawer (Add/Edit) Overlay */}
      {isDrawerOpen && <div onClick={() => setIsDrawerOpen(false)} style={{ position:'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, backdropFilter:'blur(2px)' }} />}
      
      {/* Drawer Container */}
      <div style={{ position:'fixed', bottom: 0, left: 0, right: 0, background: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 24, zIndex: 101, transform: `translateY(${isDrawerOpen ? '0' : '100%'})`, transition: 'transform 0.3s cubic-bezier(0.32,0.72,0,1)', maxHeight: '90vh', overflowY:'auto', boxShadow:'0 -10px 40px rgba(0,0,0,0.2)' }}>
        <div style={{ width: 40, height: 4, background: T.border2, borderRadius: 2, margin: '0 auto 20px' }} />
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 20 }}>{editId ? '✏️ Düzenle' : '📦 Yeni Numune'}</h2>

        {/* Firma Alanı (Sadece yeni eklerken veya ana öğe düzenlerken) */}
        {!editId && (
          <div style={{ marginBottom: 16, position:'relative' }}>
            <label style={{ display:'block', fontSize: 11, fontWeight: 700, color: T.textSecondary, marginBottom: 6 }}>Firma</label>
            <div style={{ position:'relative' }}>
              <input type="text" value={isFirmaDdOpen ? firmaSearchQ : formFirma} 
                onChange={(e) => { setFirmaSearchQ(e.target.value); setIsFirmaDdOpen(true); }}
                onFocus={() => { setFirmaSearchQ(formFirma); setIsFirmaDdOpen(true); }}
                placeholder="Firma ara veya yaz..." 
                style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: `1px solid ${T.border2}`, outline:'none', fontSize: 14 }} 
              />
              {isFirmaDdOpen && (
                <div style={{ position:'absolute', top:'100%', left:0, right:0, background:'#fff', border:`1px solid ${T.navy}`, borderRadius:8, marginTop:4, maxHeight:200, overflowY:'auto', zIndex:10, boxShadow:'0 10px 25px rgba(0,0,0,0.1)' }}>
                  {uniqueCustomers.filter(c => c.toLowerCase().includes(firmaSearchQ.toLowerCase())).slice(0,20).map((c, i) => (
                    <div key={i} onClick={() => { setFormFirma(c); setIsFirmaDdOpen(false); }} style={{ padding:'10px 14px', cursor:'pointer', borderBottom:`1px solid ${T.border}`, fontSize:13, fontWeight:600 }}>{c}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Satırlar */}
        {formRows.map((r, i) => (
          <div key={r.id} style={{ background: T.pageBg, padding: 16, borderRadius: 12, marginBottom: 12, position:'relative', border:`1px solid ${T.border}` }}>
            {!editId && formRows.length > 1 && (
              <button onClick={() => setFormRows(prev => prev.filter(x => x.id !== r.id))} style={{ position:'absolute', top:8, right:8, background:'transparent', border:'none', color:T.textSecondary, cursor:'pointer' }}><X size={16}/></button>
            )}
            
            <label style={{ display:'block', fontSize: 11, fontWeight: 700, color: T.textSecondary, marginBottom: 6 }}>Kod / Fiyat</label>
            <div style={{ display:'flex', gap: 10, marginBottom: 12 }}>
              <input type="text" value={r.kod} onChange={e => { const n = [...formRows]; n[i].kod = e.target.value; setFormRows(n); }} placeholder="Örn: FDY 100" style={{ flex: 2, padding: '10px 12px', borderRadius: 8, border: `1px solid ${T.border2}`, outline:'none' }} />
              <input type="text" value={r.fiyat} onChange={e => { const n = [...formRows]; n[i].fiyat = e.target.value; setFormRows(n); }} placeholder="Fiyat ($)" style={{ flex: 1, padding: '10px 12px', borderRadius: 8, border: `1px solid ${T.border2}`, outline:'none' }} />
            </div>

            {!editId && (
              <div style={{ marginBottom: 12 }}>
                <label style={{ display:'block', fontSize: 11, fontWeight: 700, color: T.textSecondary, marginBottom: 6 }}>Varyantlar (virgülle ayırın)</label>
                <input type="text" value={r.var} onChange={e => { const n = [...formRows]; n[i].var = e.target.value; setFormRows(n); }} placeholder="Siyah, Beyaz, Kırmızı..." style={{ width:'100%', padding: '10px 12px', borderRadius: 8, border: `1px solid ${T.border2}`, outline:'none' }} />
              </div>
            )}

            <div>
              <label style={{ display:'block', fontSize: 11, fontWeight: 700, color: T.textSecondary, marginBottom: 6 }}>Not</label>
              <input type="text" value={r.not} onChange={e => { const n = [...formRows]; n[i].not = e.target.value; setFormRows(n); }} placeholder="Açıklama..." style={{ width:'100%', padding: '10px 12px', borderRadius: 8, border: `1px solid ${T.border2}`, outline:'none' }} />
            </div>
          </div>
        ))}

        {!editId && (
          <button onClick={() => setFormRows([...formRows, { id: Date.now(), kod: '', fiyat: '', var: '', not: '' }])} style={{ width:'100%', background: 'transparent', color: T.teal, border: `2px dashed ${T.tealSoft}`, padding: '12px', borderRadius: 12, fontWeight: 700, cursor: 'pointer', marginBottom: 20 }}>
            + BİR SATIR DAHA EKLE
          </button>
        )}

        <div style={{ display:'flex', gap: 10 }}>
          <button onClick={() => setIsDrawerOpen(false)} style={{ flex:1, padding:'12px', borderRadius:8, border:`1px solid ${T.border2}`, background:T.surface, fontWeight:600, cursor:'pointer' }}>İptal</button>
          <button onClick={handleSaveDrawer} style={{ flex:2, padding:'12px', borderRadius:8, border:'none', background:T.navy, color:'#fff', fontWeight:700, cursor:'pointer' }}>{editId ? 'Güncelle' : 'Kaydet'}</button>
        </div>
      </div>

      {/* Photo Viewer Overlay */}
      {pvOpen && (
        <div style={{ position:'fixed', inset: 0, background: '#000', zIndex: 200, display:'flex', flexDirection:'column' }}>
          <div style={{ padding: '20px', display:'flex', justifyContent:'space-between', color:'#fff' }}>
            <span style={{ fontWeight:600 }}>{pvIndex + 1} / {pvPhotos.length}</span>
            <button onClick={() => setPvOpen(false)} style={{ background:'transparent', border:'none', color:'#fff', cursor:'pointer' }}><X size={24}/></button>
          </div>
          <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
            {pvIndex > 0 && <button onClick={() => setPvIndex(p=>p-1)} style={{ position:'absolute', left:20, background:'rgba(255,255,255,0.2)', border:'none', color:'#fff', borderRadius:'50%', width:40, height:40, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>‹</button>}
            <img src={pvPhotos[pvIndex]?.url} style={{ maxWidth:'100%', maxHeight:'100%', objectFit:'contain' }} alt=""/>
            {pvIndex < pvPhotos.length - 1 && <button onClick={() => setPvIndex(p=>p+1)} style={{ position:'absolute', right:20, background:'rgba(255,255,255,0.2)', border:'none', color:'#fff', borderRadius:'50%', width:40, height:40, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>›</button>}
          </div>
          <div style={{ padding: '20px', display:'flex', justifyContent:'center' }}>
            <button onClick={() => handleDeletePhoto(pvPhotos[pvIndex].numeneId, pvPhotos[pvIndex].path)} style={{ background:'#DC2626', color:'#fff', border:'none', padding:'10px 20px', borderRadius:8, fontWeight:600, cursor:'pointer', display:'flex', alignItems:'center', gap:8 }}><Trash2 size={16}/> Fotoğrafı Sil</button>
          </div>
        </div>
      )}

      {/* Uploading Overlay */}
      {uploading && (
        <div style={{ position:'fixed', bottom: 20, right: 20, background: T.navy, color: '#fff', padding: '12px 20px', borderRadius: 12, display:'flex', alignItems:'center', gap: 12, zIndex: 999, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
          <span className="yp-spin"><RefreshCw size={18} /></span>
          <span style={{ fontSize: 13, fontWeight: 600 }}>{uploadText}</span>
        </div>
      )}

      {/* Toast Notification */}
      {toastMsg && (
        <div style={{ position:'fixed', bottom: 40, left: '50%', transform: 'translateX(-50%)', background: toastMsg.type === 'err' ? '#DC2626' : T.navy, color: '#fff', padding: '12px 24px', borderRadius: 30, fontSize: 13, fontWeight: 700, zIndex: 999, boxShadow: '0 4px 12px rgba(0,0,0,0.15)', display:'flex', alignItems:'center', gap:8, animation: 'fadeUp 0.2s' }}>
          {toastMsg.type === 'err' ? <AlertCircle size={16}/> : <CheckCircle size={16}/>}
          {toastMsg.msg}
        </div>
      )}

    </div>
  );
}
