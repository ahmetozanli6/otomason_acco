<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <meta name="theme-color" content="#1E2D3D">
  <title>Yanteks Pro | Panel</title>
  
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.3.0/exceljs.min.js"></script>

  <style>
    :root {
      --bg: #F3F5F7;
      --surface: #FFFFFF;
      --border: rgba(30,45,61,0.15);
      --text: #0A1520;
      --text-sec: #64748B;
      --primary: #0891B2;
      --navy: #0F172A;
      --red: #DC2626;
      --font: 'Inter', sans-serif;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
    body, html { width: 100%; height: 100%; font-family: var(--font); background-color: var(--bg); color: var(--text); overflow: hidden; }
    
    .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
    .hide-scroll::-webkit-scrollbar { display: none; }

    /* Layout */
    .app-container { display: flex; width: 100%; height: 100vh; overflow: hidden; position: relative; }
    
    /* Sidebar */
    .sidebar { width: 260px; background-color: var(--navy); color: #fff; display: flex; flex-direction: column; flex-shrink: 0; z-index: 50; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); border-right: 1px solid rgba(255,255,255,0.05); position: relative;}
    .sidebar-header { height: 64px; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; border-bottom: 1px solid rgba(255,255,255,0.08); flex-shrink: 0; }
    .nav-button { display: flex; align-items: center; gap: 12px; width: 100%; padding: 12px 16px; margin-bottom: 4px; border-radius: 12px; border: none; background: transparent; color: rgba(255,255,255,0.6); font-family: inherit; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; text-align: left; text-decoration: none; }
    .nav-button:hover { background: rgba(255,255,255,0.05); color: #fff; }
    .nav-button.active { background: linear-gradient(135deg, var(--primary), #0284C7); color: #fff; box-shadow: 0 4px 12px rgba(8,145,178,0.3); }

    /* Main Content */
    .main-content { flex: 1; display: flex; flex-direction: column; min-width: 0; position: relative; background: var(--bg); }
    .header { height: 64px; background: var(--surface); border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; padding: 0 24px; flex-shrink: 0; z-index: 10; }
    .scroll-area { flex: 1; overflow-y: auto; padding: 24px; position: relative; }

    /* Mobile adjustments */
    @media (max-width: 1023px) {
      .sidebar { position: fixed; top: 0; left: 0; bottom: 0; transform: translateX(-100%); }
      .sidebar.open { transform: translateX(0); }
      .menu-toggle-btn { display: block; }
      .desktop-only { display: none !important; }
    }
    @media (min-width: 1024px) {
      .menu-toggle-btn { display: none; }
      .overlay { display: none !important; }
    }

    .overlay { position: fixed; inset: 0; background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(2px); z-index: 40; display: none; }
    .overlay.open { display: block; }

    /* Components */
    .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 16px; border-radius: 8px; border: none; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: inherit; }
    .btn:active { transform: scale(0.96); }
    .btn-primary { background-color: var(--primary); color: #fff; box-shadow: 0 2px 10px rgba(8,145,178,0.2); }
    .btn-outline { background-color: var(--surface); color: var(--text-sec); border: 1px solid rgba(30,45,61,0.2); }
    .btn-icon { background: var(--surface); border: 1px solid rgba(30,45,61,0.15); border-radius: 8px; padding: 6px; cursor: pointer; color: var(--text-sec); transition: all 0.2s; display: inline-flex; align-items: center; justify-content: center; }
    .btn-icon:hover { background: var(--bg); color: var(--text); }

    .input { width: 100%; padding: 10px 14px; border-radius: 8px; border: 1px solid rgba(30,45,61,0.2); font-family: inherit; font-size: 13px; outline: none; transition: all 0.2s; background: var(--surface); }
    .input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(8,145,178,0.15); }

    .card { background: var(--surface); border-radius: 16px; border: 1px solid rgba(30,45,61,0.1); overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.02); margin-bottom: 24px; }
    .card-header { background: #F8FAFC; padding: 16px; border-bottom: 1px solid rgba(30,45,61,0.1); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
    .list-item { padding: 16px; border-bottom: 1px solid rgba(30,45,61,0.06); display: flex; gap: 16px; transition: background 0.2s; }
    .list-item:hover { background: #F8FAFC; }
    .list-item:last-child { border-bottom: none; }
    .list-item.variant { margin-left: 32px; border-left: 3px solid rgba(30,45,61,0.1); }

    .chip-filter { padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 700; cursor: pointer; border: 1px solid rgba(30,45,61,0.15); background: var(--surface); color: var(--text-sec); transition: all 0.2s; white-space: nowrap; display: inline-flex; align-items: center; gap: 6px; }
    .chip-filter.active { background: var(--navy); color: #fff; border-color: var(--navy); }

    /* Drawer Modal */
    .drawer { position: fixed; bottom: 0; left: 0; right: 0; background: var(--surface); border-radius: 24px 24px 0 0; padding: 24px; z-index: 100; transform: translateY(100%); transition: transform 0.3s cubic-bezier(0.32,0.72,0,1); max-height: 90vh; overflow-y: auto; box-shadow: 0 -10px 40px rgba(0,0,0,0.2); }
    .drawer.open { transform: translateY(0); }
    .drawer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(2px); z-index: 90; display: none; }
    .drawer-overlay.open { display: block; }

    /* Photo Viewer */
    .photo-viewer { position: fixed; inset: 0; background: rgba(0,0,0,0.95); z-index: 200; display: none; flex-direction: column; }
    .photo-viewer.open { display: flex; }

    /* Notifications */
    .toast { position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%) translateY(100px); background: var(--navy); color: #fff; padding: 14px 24px; border-radius: 30px; font-size: 14px; font-weight: 700; z-index: 999; box-shadow: 0 10px 25px rgba(0,0,0,0.2); display: flex; align-items: center; gap: 10px; transition: transform 0.3s ease; opacity: 0; }
    .toast.show { transform: translateX(-50%) translateY(0); opacity: 1; }
    .toast.error { background: var(--red); }

    /* Utilities */
    .spin { animation: spin 1s linear infinite; }
    @keyframes spin { 100% { transform: rotate(360deg); } }
    
    .status-badge { font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 6px; border: 1px solid; }
    .status-beklemede { background: #FEF3C7; color: #B45309; border-color: #FDE68A; }
    .status-takip { background: #CFFAFE; color: #0E7490; border-color: #A5F3FC; }
    .status-gonderildi { background: #DBEAFE; color: #1D4ED8; border-color: #BFDBFE; }
    .status-onaylandi { background: #DCFCE7; color: #15803D; border-color: #BBF7D0; }
    .status-reddedildi { background: #FEE2E2; color: #B91C1C; border-color: #FECACA; }
  </style>
</head>
<body>

  <div class="app-container">
    <!-- Mobile Overlay -->
    <div id="mobileOverlay" class="overlay" onclick="toggleSidebar()"></div>

    <!-- Sidebar -->
    <aside id="sidebar" class="sidebar">
      <div class="sidebar-header">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 32px; height: 32px; border-radius: 8px; background: var(--primary); display: flex; align-items: center; justify-content: center;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <span style="font-size: 18px; font-weight: 800; letter-spacing: -0.5px;">Yanteks<span style="color: #38BDF8;">Pro</span></span>
        </div>
        <button class="menu-toggle-btn" onclick="toggleSidebar()" style="background: none; border: none; color: #94A3B8; cursor: pointer;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      
      <nav class="hide-scroll" style="flex: 1; overflow-y: auto; padding: 16px 12px;">
        <p style="padding: 0 16px 8px; font-size: 10px; font-weight: 700; color: #64748B; letter-spacing: 1px;">ANA MENÜ</p>
        <a href="index.html" class="nav-button"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg><span>Özet Panel</span></a>
        <a href="panel.html" class="nav-button active"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Numuneler</span></a>
        <a href="musteriler.html" class="nav-button"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><span>Müşteriler</span></a>
        <a href="fiyatlar.html" class="nav-button"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg><span>Fiyatlar</span></a>
        <a href="maliyet.html" class="nav-button"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16.01" y1="14" y2="14"/><line x1="16" x2="16.01" y1="18" y2="18"/><line x1="12" x2="12.01" y1="14" y2="14"/><line x1="12" x2="12.01" y1="18" y2="18"/><line x1="8" x2="8.01" y1="14" y2="14"/><line x1="8" x2="8.01" y1="18" y2="18"/></svg><span>Maliyet</span></a>
        <a href="fiyatteklifleri.html" class="nav-button"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg><span>Teklifler</span></a>
        <a href="notlarim.html" class="nav-button"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg><span>Notlarım</span></a>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <header class="header">
        <div style="display: flex; align-items: center; gap: 16px;">
          <button class="menu-toggle-btn btn-icon" onclick="toggleSidebar()" style="border: none; padding: 4px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
          <div>
            <h2 style="font-size: 18px; font-weight: 800; margin: 0;">Numuneler</h2>
            <p class="desktop-only" style="font-size: 12px; color: var(--text-sec); margin-top: 2px;">Sisteme hoş geldiniz.</p>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 12px;">
          <div class="desktop-only" style="position: relative;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%);"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input type="text" id="globalSearch" placeholder="Arama yap..." class="input" style="padding-left: 36px; width: 220px; border-radius: 20px;">
          </div>
          <button class="btn-icon" onclick="fetchData()" title="Yenile">
            <svg id="refreshIcon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
          </button>
          <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--primary); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px;">YP</div>
        </div>
      </header>

      <div class="scroll-area hide-scroll" style="max-width: 1200px; margin: 0 auto; width: 100%;">
        
        <!-- Loading State -->
        <div id="loadingState" style="height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; color: var(--primary);">
          <svg class="spin" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
          <span style="font-weight: 600; color: var(--text-sec);">Sistem Hazırlanıyor...</span>
        </div>

        <!-- Main Content -->
        <div id="mainContent" style="display: none; padding-bottom: 60px;">
          
          <!-- Toolbar -->
          <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between; align-items: center; margin-bottom: 24px;">
            <div style="display: flex; gap: 12px;">
              <button onclick="openDrawer()" class="btn btn-primary"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg> Yeni Ekle</button>
              <button onclick="exportExcel()" class="btn btn-outline"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="12" x2="12" y1="18" y2="12"/><line x1="8" x2="8" y1="18" y2="15"/><line x1="16" x2="16" y1="18" y2="14"/></svg> Excel</button>
            </div>

            <div id="filterChips" class="hide-scroll" style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px;">
              <!-- JS ile Doldurulacak -->
            </div>
          </div>

          <!-- Bulk Actions -->
          <div id="bulkActions" style="display: none; background: var(--navy); color: #fff; padding: 12px 20px; border-radius: 12px; flex-wrap: wrap; gap: 16px; justify-content: space-between; align-items: center; margin-bottom: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
            <span style="font-weight: 700; font-size: 14px; background: rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 8px;"><span id="selCount">0</span> Seçili</span>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <button onclick="bulkUpdateStatus('Beklemede')" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">Beklemede</button>
              <button onclick="bulkUpdateStatus('Takip Et')" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">Takip Et</button>
              <button onclick="bulkUpdateStatus('Gönderildi')" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">Gönderildi</button>
              <button onclick="bulkUpdateStatus('Onaylandı')" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">Onaylandı</button>
              <button onclick="bulkDelete()" style="background: rgba(220,38,38,0.2); color: #FCA5A5; border: none; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 700; cursor: pointer;">Sil</button>
              <button onclick="clearSelection()" style="background: transparent; border: none; color: #94A3B8; padding: 6px; cursor: pointer;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
            </div>
          </div>

          <!-- Search & Sort -->
          <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 24px;">
            <div style="position: relative; flex: 1; min-width: 250px;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%);"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input type="text" id="searchInput" placeholder="Kayıt arayın..." class="input" style="padding-left: 40px;" oninput="renderList()">
            </div>
            <div style="display: flex; background: #fff; border: 1px solid var(--border); border-radius: 8px; padding: 4px;">
              <button onclick="changeSort('date')" id="sort_date" style="padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 700; border: none; cursor: pointer;">Tarih</button>
              <button onclick="changeSort('alpha')" id="sort_alpha" style="padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 700; border: none; cursor: pointer;">A-Z</button>
              <button onclick="changeSort('status')" id="sort_status" style="padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 700; border: none; cursor: pointer;">Durum</button>
            </div>
          </div>

          <!-- Firma Banner -->
          <div id="firmaBanner" style="display: none; background: #ECFEFF; border: 1px solid #A5F3FC; padding: 12px 20px; border-radius: 12px; justify-content: space-between; align-items: center; margin-bottom: 24px; color: #0E7490;">
            <span style="font-weight: 700; font-size: 14px;">🏢 <span id="bannerFirmaName"></span> filtreli görünüm</span>
            <button onclick="setFirmaFilter('')" style="background: #CFFAFE; border: none; color: var(--primary); font-weight: 700; font-size: 12px; padding: 6px 12px; border-radius: 6px; cursor: pointer;">Tümünü Göster</button>
          </div>

          <!-- Data List -->
          <div id="dataListContainer">
            <!-- JS ile Doldurulacak -->
          </div>

        </div>
      </div>
    </main>
  </div>

  <!-- Drawer / Modal -->
  <div id="drawerOverlay" class="drawer-overlay" onclick="closeDrawer()"></div>
  <div id="drawer" class="drawer">
    <div style="width: 40px; height: 6px; background: #E2E8F0; border-radius: 10px; margin: 0 auto 24px;"></div>
    <h2 id="drawerTitle" style="font-size: 20px; font-weight: 800; margin-bottom: 24px; color: var(--text);">📦 Yeni Kayıt</h2>

    <div id="firmaSelectGroup" style="margin-bottom: 20px; position: relative;">
      <label style="display: block; font-size: 11px; font-weight: 700; color: var(--text-sec); margin-bottom: 6px; text-transform: uppercase;">Firma Seçimi</label>
      <input type="text" id="formFirma" placeholder="Firma adını yazın..." class="input" style="padding: 12px 16px; font-size: 14px;" oninput="filterFirmaDropdown()" onfocus="showFirmaDropdown()">
      <div id="firmaDropdown" class="hide-scroll" style="display: none; position: absolute; top: 100%; left: 0; right: 0; margin-top: 8px; background: #fff; border: 1px solid var(--border); border-radius: 12px; max-height: 200px; overflow-y: auto; z-index: 10; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
      </div>
    </div>

    <div id="formRowsContainer">
      <!-- Satırlar buraya gelecek -->
    </div>

    <button id="addRowBtn" onclick="addFormRow()" style="width: 100%; padding: 14px; background: transparent; border: 2px dashed #A5F3FC; color: var(--primary); border-radius: 12px; font-weight: 800; font-size: 13px; cursor: pointer; margin-bottom: 24px;">+ SATIR EKLE</button>

    <div style="display: flex; gap: 12px;">
      <button onclick="closeDrawer()" style="flex: 1; padding: 14px; background: #F1F5F9; border: none; border-radius: 12px; font-weight: 700; color: #475569; cursor: pointer;">İptal</button>
      <button id="saveBtn" onclick="saveData()" style="flex: 2; padding: 14px; background: var(--navy); border: none; border-radius: 12px; font-weight: 700; color: #fff; cursor: pointer;">Kaydet</button>
    </div>
  </div>

  <!-- Photo Viewer -->
  <div id="photoViewer" class="photo-viewer">
    <div style="padding: 24px; display: flex; justify-content: space-between; align-items: center;">
      <span id="pvCounter" style="color: #fff; font-weight: 700; background: rgba(255,255,255,0.1); padding: 6px 12px; border-radius: 8px;">1 / 1</span>
      <button onclick="closePhotoViewer()" style="background: rgba(255,255,255,0.1); border: none; color: #fff; padding: 10px; border-radius: 50%; cursor: pointer;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
    </div>
    <div style="flex: 1; display: flex; align-items: center; justify-content: center; position: relative; padding: 24px;">
      <button id="pvPrev" onclick="pvNav(-1)" style="position: absolute; left: 24px; background: rgba(255,255,255,0.1); border: none; color: #fff; width: 50px; height: 50px; border-radius: 50%; font-size: 24px; cursor: pointer;">‹</button>
      <img id="pvImage" src="" style="max-width: 100%; max-height: 100%; object-fit: contain;" alt=""/>
      <button id="pvNext" onclick="pvNav(1)" style="position: absolute; right: 24px; background: rgba(255,255,255,0.1); border: none; color: #fff; width: 50px; height: 50px; border-radius: 50%; font-size: 24px; cursor: pointer;">›</button>
    </div>
    <div style="padding: 32px; text-align: center;">
      <button onclick="deleteCurrentPhoto()" style="background: rgba(220,38,38,0.2); border: 1px solid rgba(220,38,38,0.3); color: #FECACA; padding: 12px 24px; border-radius: 12px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg> Bu Fotoğrafı Sil</button>
    </div>
  </div>

  <!-- Toast -->
  <div id="toast" class="toast">
    <svg id="toastIconOk" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
    <svg id="toastIconErr" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FECACA" stroke-width="2" style="display:none;"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
    <span id="toastMsg"></span>
  </div>

  <script>
    // ==========================================
    // 1. GLOBAL STATE & CONFIG
    // ==========================================
    var SUPABASE_URL = 'https://zmlbdpjcergcvcurihuy.supabase.co';
    var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptbGJkcGpjZXJnY3ZjdXJpaHV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1MTA2MzIsImV4cCI6MjA5MTA4NjYzMn0.Jh4e_UXSL7CH7EzLBhhXtQYM0-iQwrFU3GHnoe-njBM';
    
    // Güvenli Supabase Tanımlaması (Redeclaration hatasını çözer)
    var dbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    var state = {
      samples: [],
      customers: [],
      photoCache: {},
      filter: 'Hepsi',
      sortType: 'date',
      firmaFilter: '',
      selectedIds: new Set(),
      editId: null,
      formRows: [],
      currentPvPhotos: [],
      currentPvIndex: 0,
      VALID_STATUS: ['Beklemede', 'Takip Et', 'Gönderildi', 'Onaylandı', 'Reddedildi']
    };

    // ==========================================
    // 2. HELPERS
    // ==========================================
    function formatDate(dateStr) {
      if (!dateStr) return '-';
      try {
        var d = new Date(dateStr), now = new Date();
        var diff = Math.floor((now - d) / 86400000);
        if (diff === 0) return 'bugün';
        if (diff === 1) return 'dün';
        if (diff < 7) return diff + 'g';
        if (diff < 30) return Math.floor(diff / 7) + 'h';
        return d.toLocaleDateString('tr-TR', { day: '2-digit', month: 'short' });
      } catch (e) { return dateStr; }
    }

    function isV(n) { return typeof n === 'string' && n.startsWith('↳'); }
    function dName(n) { return typeof n === 'string' ? n.replace(/^↳\s*/, '').trim() : ''; }
    
    function getStatusStyle(status) {
      const map = {
        'Beklemede': 'status-beklemede',
        'Takip Et': 'status-takip',
        'Gönderildi': 'status-gonderildi',
        'Onaylandı': 'status-onaylandi',
        'Reddedildi': 'status-reddedildi'
      };
      return map[status] || 'status-beklemede';
    }

    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('open');
      document.getElementById('mobileOverlay').classList.toggle('open');
    }

    function showToast(msg, type = 'ok') {
      const t = document.getElementById('toast');
      document.getElementById('toastMsg').innerText = msg;
      document.getElementById('toastIconOk').style.display = type === 'ok' ? 'block' : 'none';
      document.getElementById('toastIconErr').style.display = type === 'err' ? 'block' : 'none';
      if(type === 'err') t.classList.add('error'); else t.classList.remove('error');
      
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 3000);
    }

    // ==========================================
    // 3. CORE LOGIC
    // ==========================================
    async function fetchData() {
      document.getElementById('refreshIcon').classList.add('spin');
      document.getElementById('loadingState').style.display = 'flex';
      document.getElementById('mainContent').style.display = 'none';

      try {
        const [cRes, sRes] = await Promise.all([
          dbClient.from('musteriler').select('firma_adi'),
          dbClient.from('numuneler').select('*').order('created_at', { ascending: false })
        ]);

        if (cRes.error) throw cRes.error;
        if (sRes.error) throw sRes.error;

        state.customers = [...new Set((cRes.data || []).map(c => c.firma_adi).filter(Boolean))].sort();
        
        state.samples = (sRes.data || []).sort((a,b) => {
          const ta = new Date(a.created_at).getTime(), tb = new Date(b.created_at).getTime();
          if(ta === tb) return isV(a.numune) ? 1 : -1;
          return tb - ta;
        });

        state.samples.slice(0, 20).forEach(s => fetchPhotos(s.id));

        renderList();
        
        document.getElementById('loadingState').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
      } catch (err) {
        showToast('Veri çekilirken hata oluştu.', 'err');
      } finally {
        document.getElementById('refreshIcon').classList.remove('spin');
      }
    }

    async function fetchPhotos(id) {
      if(state.photoCache[id]) return state.photoCache[id];
      try {
        const { data, error } = await dbClient.storage.from('numune-photos').list('numune_'+id, { sortBy: { column: 'created_at', order: 'asc' }});
        if(error || !data) return [];
        const photos = data.filter(f => f.name && !f.name.endsWith('/')).map(f => {
          const { data: ud } = dbClient.storage.from('numune-photos').getPublicUrl('numune_'+id+'/'+f.name);
          return { name: f.name, url: ud.publicUrl, path: 'numune_'+id+'/'+f.name, sampleId: id };
        });
        state.photoCache[id] = photos;
        renderList(); 
        return photos;
      } catch(e) { return []; }
    }

    async function handlePhotoUpload(input, id) {
      const files = Array.from(input.files);
      if(!files.length) return;
      input.value = '';
      showToast('Fotoğraflar yükleniyor...', 'ok');
      
      for(let file of files) {
        const path = 'numune_' + id + '/' + Date.now() + '_' + file.name;
        await dbClient.storage.from('numune-photos').upload(path, file);
      }
      
      delete state.photoCache[id];
      await fetchPhotos(id);
      showToast('Fotoğraflar eklendi', 'ok');
    }

    async function deletePhoto(sampleId, path) {
      await dbClient.storage.from('numune-photos').remove([path]);
      delete state.photoCache[sampleId];
      await fetchPhotos(sampleId);
      showToast('Fotoğraf silindi', 'ok');
    }

    function setFilter(f) { state.filter = f; renderList(); }
    function changeSort(s) { state.sortType = s; renderList(); }
    function setFirmaFilter(f) { state.firmaFilter = f; renderList(); }

    function renderList() {
      let activeCount = state.samples.filter(i => !i.arsiv).length;
      let chipsHtml = '';
      ['Hepsi', 'Beklemede', 'Takip Et', 'Gönderildi', 'Onaylandı', 'Reddedildi', 'Arşiv'].forEach(f => {
        let count = f === 'Hepsi' ? activeCount : f === 'Arşiv' ? state.samples.filter(i => i.arsiv).length : state.samples.filter(i => !i.arsiv && i.durum === f).length;
        let isActive = state.filter === f;
        chipsHtml += `<button onclick="setFilter('${f}')" class="chip-filter ${isActive ? 'active' : ''}">${f} <span style="padding: 2px 6px; border-radius: 10px; font-size: 10px; background: ${isActive ? 'rgba(255,255,255,0.2)' : 'var(--bg)'}">${count}</span></button>`;
      });
      document.getElementById('filterChips').innerHTML = chipsHtml;

      document.getElementById('sort_date').style.background = state.sortType === 'date' ? 'var(--bg)' : 'transparent';
      document.getElementById('sort_alpha').style.background = state.sortType === 'alpha' ? 'var(--bg)' : 'transparent';
      document.getElementById('sort_status').style.background = state.sortType === 'status' ? 'var(--bg)' : 'transparent';

      let result = [...state.samples];
      if (state.filter === 'Arşiv') result = result.filter(i => i.arsiv === true);
      else {
        result = result.filter(i => i.arsiv !== true);
        if (state.filter !== 'Hepsi') result = result.filter(i => i.durum === state.filter);
      }
      
      if (state.firmaFilter) {
        document.getElementById('firmaBanner').style.display = 'flex';
        document.getElementById('bannerFirmaName').innerText = state.firmaFilter;
        result = result.filter(i => (i.firma || '').toUpperCase() === state.firmaFilter.toUpperCase());
      } else {
        document.getElementById('firmaBanner').style.display = 'none';
      }

      const q = (document.getElementById('searchInput').value || '').toLowerCase().trim();
      if (q) {
        result = result.filter(i => (i.firma||'').toLowerCase().includes(q) || (i.numune||'').toLowerCase().includes(q) || (i.aciklama||'').toLowerCase().includes(q));
      }

      const G = {};
      result.forEach(i => {
        const f = (i.firma || 'BELİRSİZ').toUpperCase();
        if(!G[f]) G[f] = [];
        G[f].push(i);
      });

      let fKeys = Object.keys(G);
      if(state.sortType === 'alpha') fKeys.sort();
      else if(state.sortType === 'status') fKeys.sort((a,b) => Math.min(...G[a].map(i => state.VALID_STATUS.indexOf(i.durum||'Beklemede'))) - Math.min(...G[b].map(i => state.VALID_STATUS.indexOf(i.durum||'Beklemede'))));
      else fKeys.sort((a,b) => Math.max(...G[b].map(i => new Date(i.updated_at||i.created_at).getTime())) - Math.max(...G[a].map(i => new Date(i.updated_at||i.created_at).getTime())));

      const container = document.getElementById('dataListContainer');
      if (fKeys.length === 0) {
        container.innerHTML = `
          <div style="text-align: center; padding: 60px 20px; background: #fff; border-radius: 16px; border: 1px dashed var(--border);">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-sec)" stroke-width="2" style="opacity: 0.5; margin-bottom: 16px;"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
            <p style="font-weight: 700; color: var(--text); font-size: 16px;">Kayıt Bulunamadı</p>
            <p style="font-size: 14px; color: var(--text-sec); margin-top: 4px;">Arama kriterlerini değiştirin veya yeni ekleyin.</p>
          </div>`;
        return;
      }

      let html = '';
      fKeys.forEach(firma => {
        let items = G[firma];
        
        const anaItems = items.filter(i => !isV(i.numune));
        const varItems = items.filter(i => isV(i.numune));
        const finalItems = [];
        const usedVarIds = new Set();

        anaItems.forEach(ana => {
          finalItems.push(ana);
          const anaKod = dName(ana.numune);
          varItems.forEach(v => {
            if(usedVarIds.has(v.id)) return;
            const pc = (v.aciklama || '').split('|')[0];
            if(pc === anaKod || (v.aciklama||'').startsWith(anaKod+'|')) {
              usedVarIds.add(v.id); finalItems.push(v);
            }
          });
        });
        varItems.filter(v => !usedVarIds.has(v.id)).forEach(v => finalItems.push(v));

        html += `<div class="card">
          <div class="card-header">
            <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
              <span style="font-weight: 800; font-size: 15px; cursor: pointer;" onclick="setFirmaFilter('${firma}')">🏢 ${firma}</span>
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">`;
                
        state.VALID_STATUS.forEach(st => {
          const c = G[firma].filter(i => i.durum === st).length;
          if(c > 0) html += `<span class="status-badge ${getStatusStyle(st)}">${c} ${st}</span>`;
        });

        html += `</div></div>
            <span style="font-size: 12px; font-weight: 700; color: var(--text-sec); background: #fff; border: 1px solid var(--border); padding: 4px 10px; border-radius: 8px;">${finalItems.length} Kayıt</span>
          </div>
          <div>`;

        finalItems.forEach(item => {
          const isVariant = isV(item.numune);
          const isSel = state.selectedIds.has(item.id);
          const note = (item.aciklama || '').split('|').pop() || '';
          const photos = state.photoCache[item.id] || [];

          html += `
            <div class="list-item ${isVariant ? 'variant' : ''}" style="background: ${isSel ? '#F0F9FF' : 'transparent'}">
              <input type="checkbox" ${isSel ? 'checked' : ''} onclick="toggleSelection(${item.id})" style="width: 16px; height: 16px; cursor: pointer; margin-top: 4px; flex-shrink: 0;" />
              <div style="flex: 1; min-width: 0;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
                  <h4 style="font-size: 14px; font-weight: 700; margin: 0; word-break: break-word;">
                    ${dName(item.numune) || 'İsimsiz'}
                    ${item.fiyat ? `<span style="margin-left: 8px; font-family: monospace; font-size: 12px; color: #15803D; background: #DCFCE7; padding: 2px 6px; border-radius: 4px; border: 1px solid #BBF7D0;">${item.fiyat}</span>` : ''}
                  </h4>
                  <span style="font-size: 11px; font-weight: 500; color: var(--text-sec); white-space: nowrap;">${formatDate(item.updated_at || item.created_at)}</span>
                </div>
                
                <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center;">
                  <input type="text" value="${note}" placeholder="Not ekle..." onblur="updateNote(${item.id}, this.value, ${isVariant})" class="input" style="flex: 1; min-width: 150px; padding: 8px 10px; border-radius: 8px;" />
                  
                  <select onchange="updateField(${item.id}, 'durum', this.value)" class="status-badge ${getStatusStyle(item.durum)}" style="padding: 8px 28px 8px 10px; font-size: 12px; appearance: none; outline: none; cursor: pointer; background-image: url('data:image/svg+xml,%3csvg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'none\\' viewBox=\\'0 0 20 20\\'%3e%3cpath stroke=\\'%236b7280\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'1.5\\' d=\\'M6 8l4 4 4-4\\'/%3e%3c/svg%3e'); background-position: right 6px center; background-repeat: no-repeat; background-size: 16px 16px;">
                    ${state.VALID_STATUS.map(s => `<option value="${s}" ${item.durum === s ? 'selected' : ''}>${s}</option>`).join('')}
                  </select>
                  
                  <div style="display: flex; gap: 4px;">
                    <label class="btn-icon" style="position: relative; ${photos.length ? 'background: #ECFEFF; border-color: #A5F3FC; color: var(--primary);' : ''}">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                      ${photos.length ? '<span style="position: absolute; top: -4px; right: -4px; width: 10px; height: 10px; background: var(--primary); border-radius: 50%; border: 2px solid #fff;"></span>' : ''}
                      <input type="file" accept="image/*" multiple onchange="handlePhotoUpload(this, ${item.id})" style="display: none;" />
                    </label>
                    <button onclick="openEditDrawer(${item.id})" class="btn-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg></button>
                    <button onclick="updateField(${item.id}, 'arsiv', ${!item.arsiv})" class="btn-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><line x1="10" x2="14" y1="12" y2="12"/></svg></button>
                    <button onclick="deleteSample(${item.id})" class="btn-icon" style="color: var(--red);"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg></button>
                  </div>
                </div>`;

          if(photos.length > 0) {
            html += `<div class="hide-scroll" style="display: flex; gap: 8px; overflow-x: auto; margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(0,0,0,0.05);">`;
            photos.forEach((p, idx) => {
              html += `<div style="position: relative; flex-shrink: 0;">
                <img src="${p.url}" onclick="openPhotoViewer(${item.id}, ${idx})" style="width: 48px; height: 48px; border-radius: 8px; object-fit: cover; border: 1px solid var(--border); cursor: pointer;" />
                <button onclick="deletePhoto(${item.id}, '${p.path}')" style="position: absolute; top: -6px; right: -6px; width: 20px; height: 20px; background: var(--red); color: #fff; border: 2px solid #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
              </div>`;
            });
            html += `</div>`;
          }

          html += `</div></div>`;
        });
        html += `</div></div>`;
      });
      container.innerHTML = html;

      const ba = document.getElementById('bulkActions');
      if(state.selectedIds.size > 0) {
        document.getElementById('selCount').innerText = state.selectedIds.size;
        ba.style.display = 'flex';
      } else {
        ba.style.display = 'none';
      }
    }

    async function updateField(id, field, val) {
      await dbClient.from('numuneler').update({ [field]: val }).eq('id', id);
      state.samples = state.samples.map(i => i.id === id ? { ...i, [field]: val } : i);
      renderList();
      showToast('Güncellendi');
    }

    async function updateNote(id, noteVal, isVar) {
      const item = state.samples.find(i => i.id === id);
      if(!item) return;
      let finalNote = noteVal;
      if(isVar) {
        const pc = (item.aciklama||'').split('|')[0];
        finalNote = `${pc}|${noteVal}`;
      }
      await updateField(id, 'aciklama', finalNote);
    }

    function toggleSelection(id) {
      if(state.selectedIds.has(id)) state.selectedIds.delete(id); 
      else state.selectedIds.add(id);
      renderList();
    }

    function clearSelection() { 
      state.selectedIds.clear(); 
      renderList(); 
    }

    async function bulkUpdateStatus(st) {
      const ids = Array.from(state.selectedIds);
      await dbClient.from('numuneler').update({ durum: st }).in('id', ids);
      state.samples = state.samples.map(i => ids.includes(i.id) ? { ...i, durum: st } : i);
      state.selectedIds.clear();
      renderList();
      showToast('Toplu güncellendi');
    }

    async function bulkDelete() {
      if(!confirm('Seçili kayıtlar silinsin mi?')) return;
      const ids = Array.from(state.selectedIds);
      await dbClient.from('numuneler').delete().in('id', ids);
      state.samples = state.samples.filter(i => !ids.includes(i.id));
      state.selectedIds.clear();
      renderList();
      showToast('Kayıtlar silindi');
    }

    async function deleteSample(id) {
      if(!confirm('Kayıt silinsin mi?')) return;
      await dbClient.from('numuneler').delete().eq('id', id);
      state.samples = state.samples.filter(i => i.id !== id);
      state.selectedIds.delete(id);
      renderList();
      showToast('Silindi');
    }

    function openPhotoViewer(sampleId, index) {
      state.currentPvPhotos = state.photoCache[sampleId] || [];
      state.currentPvIndex = index;
      if(state.currentPvPhotos.length === 0) return;
      document.getElementById('pvImage').src = state.currentPvPhotos[index].url;
      document.getElementById('pvCounter').innerText = `${index + 1} / ${state.currentPvPhotos.length}`;
      document.getElementById('photoViewer').classList.add('open');
    }

    function closePhotoViewer() { 
      document.getElementById('photoViewer').classList.remove('open'); 
    }

    function pvNav(dir) {
      state.currentPvIndex += dir;
      if(state.currentPvIndex < 0) state.currentPvIndex = 0;
      if(state.currentPvIndex >= state.currentPvPhotos.length) state.currentPvIndex = state.currentPvPhotos.length - 1;
      document.getElementById('pvImage').src = state.currentPvPhotos[state.currentPvIndex].url;
      document.getElementById('pvCounter').innerText = `${state.currentPvIndex + 1} / ${state.currentPvPhotos.length}`;
    }

    async function deleteCurrentPhoto() {
      const p = state.currentPvPhotos[state.currentPvIndex];
      await deletePhoto(p.sampleId, p.path);
      closePhotoViewer();
    }

    function openDrawer() {
      state.editId = null;
      document.getElementById('drawerTitle').innerText = '📦 Yeni Kayıt';
      document.getElementById('firmaSelectGroup').style.display = 'block';
      document.getElementById('formFirma').value = state.firmaBanner || '';
      state.formRows = [{ id: Date.now(), kod: '', fiyat: '', var: '', not: '' }];
      document.getElementById('addRowBtn').style.display = 'block';
      renderFormRows();
      document.getElementById('drawerOverlay').classList.add('open');
      document.getElementById('drawer').classList.add('open');
    }

    function openEditDrawer(id) {
      const item = state.samples.find(i => i.id === id);
      if(!item) return;
      state.editId = id;
      document.getElementById('drawerTitle').innerText = '✏️ Düzenle';
      document.getElementById('firmaSelectGroup').style.display = 'block'; 
      document.getElementById('formFirma').value = item.firma || '';
      
      const v = isV(item.numune);
      const acParts = (item.aciklama||'').split('|');
      const note = acParts.length > 1 ? acParts[1] : item.aciklama;
      
      state.formRows = [{ id: Date.now(), kod: dName(item.numune), fiyat: (item.fiyat||'').replace(/^\$/,''), var: '', not: note||'' }];
      document.getElementById('addRowBtn').style.display = 'none';
      renderFormRows();
      
      document.getElementById('drawerOverlay').classList.add('open');
      document.getElementById('drawer').classList.add('open');
    }

    function closeDrawer() {
      document.getElementById('drawerOverlay').classList.remove('open');
      document.getElementById('drawer').classList.remove('open');
    }

    function addFormRow() {
      state.formRows.push({ id: Date.now(), kod: '', fiyat: '', var: '', not: '' });
      renderFormRows();
    }

    function removeFormRow(id) {
      state.formRows = state.formRows.filter(r => r.id !== id);
      renderFormRows();
    }

    function updateFormRow(id, field, val) {
      state.formRows = state.formRows.map(r => r.id === id ? { ...r, [field]: val } : r);
    }

    function renderFormRows() {
      let html = '';
      state.formRows.forEach((r, i) => {
        html += `
          <div style="background: #F8FAFC; border: 1px solid var(--border); border-radius: 16px; padding: 16px; margin-bottom: 16px; position: relative;">
            ${!state.editId && state.formRows.length > 1 ? `<button onclick="removeFormRow(${r.id})" style="position: absolute; top: 12px; right: 12px; background: none; border: none; color: var(--text-sec); cursor: pointer;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>` : ''}
            
            <label style="display: block; font-size: 11px; font-weight: 700; color: var(--text-sec); margin-bottom: 6px; text-transform: uppercase;">Kod & Fiyat</label>
            <div style="display: flex; gap: 12px; margin-bottom: 16px;">
              <input type="text" value="${r.kod}" oninput="updateFormRow(${r.id}, 'kod', this.value)" placeholder="Örn: X-100" class="input" style="flex: 2; padding: 12px 16px;" />
              <input type="text" value="${r.fiyat}" oninput="updateFormRow(${r.id}, 'fiyat', this.value)" placeholder="Fiyat ($)" class="input" style="flex: 1; padding: 12px 16px; font-family: monospace;" />
            </div>

            ${!state.editId ? `
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 11px; font-weight: 700; color: var(--text-sec); margin-bottom: 6px; text-transform: uppercase;">Varyantlar (Virgülle)</label>
              <input type="text" value="${r.var}" oninput="updateFormRow(${r.id}, 'var', this.value)" placeholder="Siyah, Beyaz..." class="input" style="padding: 12px 16px;" />
            </div>` : ''}

            <div>
              <label style="display: block; font-size: 11px; font-weight: 700; color: var(--text-sec); margin-bottom: 6px; text-transform: uppercase;">Not</label>
              <input type="text" value="${r.not}" oninput="updateFormRow(${r.id}, 'not', this.value)" placeholder="Açıklama girin..." class="input" style="padding: 12px 16px;" />
            </div>
          </div>
        `;
      });
      document.getElementById('formRowsContainer').innerHTML = html;
    }

    function showFirmaDropdown() { document.getElementById('firmaDropdown').style.display = 'block'; }
    
    function filterFirmaDropdown() {
      const q = document.getElementById('formFirma').value.toLowerCase();
      const dd = document.getElementById('firmaDropdown');
      let html = '';
      state.customers.filter(c => c.toLowerCase().includes(q)).slice(0,10).forEach(c => {
        html += `<div onclick="document.getElementById('formFirma').value='${c}'; document.getElementById('firmaDropdown').style.display='none';" style="padding: 12px 16px; border-bottom: 1px solid rgba(0,0,0,0.05); font-size: 14px; font-weight: 600; cursor: pointer;">${c}</div>`;
      });
      dd.innerHTML = html;
      dd.style.display = 'block';
    }

    async function saveData() {
      const f = document.getElementById('formFirma').value.toUpperCase().trim();
      if(!f) { showToast('Firma seçin', 'err'); return; }

      const btn = document.getElementById('saveBtn');
      btn.innerText = 'Kaydediliyor...';
      btn.disabled = true;

      try {
        if(state.editId) {
          const r = state.formRows[0];
          if(!r.kod) throw new Error('Kod zorunlu');
          
          const item = state.samples.find(i => i.id === state.editId);
          const v = isV(item.numune);
          let ac = r.not;
          if(v) { const pc = (item.aciklama||'').split('|')[0]; ac = `${pc}|${r.not}`; }

          const payload = {
            firma: f,
            numune: v ? '↳ ' + r.kod : r.kod,
            fiyat: r.fiyat ? (r.fiyat.startsWith('$') ? r.fiyat : '$'+r.fiyat) : '',
            aciklama: ac
          };
          
          await dbClient.from('numuneler').update(payload).eq('id', state.editId);
        } else {
          const pkg = [];
          state.formRows.forEach(r => {
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
          if(!pkg.length) throw new Error('En az bir kod girin');
          await dbClient.from('numuneler').insert(pkg);
        }
        
        closeDrawer();
        await fetchData(); 
        showToast('Kayıt Başarılı', 'ok');
      } catch (err) {
        showToast(err.message, 'err');
      } finally {
        btn.innerText = 'Kaydet';
        btn.disabled = false;
      }
    }

    async function exportExcel() {
      const wb = new ExcelJS.Workbook();
      const sh = wb.addWorksheet('Numuneler');
      sh.addRow(['İSTEKÇİ FİRMA', 'NUMUNE', 'FİYAT', 'DURUM', 'NOTLAR', 'TARİH']);
      
      let toExport = [...state.samples];
      if (state.filter === 'Arşiv') toExport = toExport.filter(i => i.arsiv === true);
      else {
        toExport = toExport.filter(i => i.arsiv !== true);
        if (state.filter !== 'Hepsi') toExport = toExport.filter(i => i.durum === state.filter);
      }
      if (state.firmaFilter) toExport = toExport.filter(i => (i.firma || '').toUpperCase() === state.firmaFilter.toUpperCase());
      
      toExport.sort((a,b) => (a.firma||'').localeCompare(b.firma||'')).forEach(i => {
        const v = isV(i.numune);
        const pc = (i.aciklama||'').split('|')[0];
        const note = (i.aciklama||'').includes('|') ? (i.aciklama||'').split('|')[1] : i.aciklama;
        const excelAd = v ? (pc ? pc+'-'+dName(i.numune) : dName(i.numune)) : dName(i.numune);
        const dt = i.updated_at ? new Date(i.updated_at).toLocaleDateString('tr-TR') : '';
        sh.addRow([i.firma||'', excelAd, i.fiyat||'-', i.durum||'', note||'-', dt]);
      });
      
      const buf = await wb.xlsx.writeBuffer();
      const blob = new Blob([buf], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
      a.download = `Yanteks_Numune_${new Date().toLocaleDateString('tr-TR')}.xlsx`;
      a.click();
    }

    // ==========================================
    // 4. BAŞLATICI (INIT)
    // ==========================================
    window.onload = function() {
      fetchData();
    };

  </script>
</body>
</html>
