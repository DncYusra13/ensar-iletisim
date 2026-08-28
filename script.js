// 1. SERVİS TAKİP (SORGULAMA) FONKSİYONU
function sorgula() {
    const inputVerisi = document.getElementById('tcInput').value.trim();
    const sonucKutusu = document.getElementById('sonucKutusu');

    if (inputVerisi === "") {
        alert("Lütfen bir telefon numarası giriniz!");
        return;
    }

    // Örnek Servis Veritabanı
    const servisKayitlari = {
        "5551234567": { cihaz: "iPhone 13 Pro", durum: "🛠️ Onarım Aşamasında (Ekran Değişiyor)", tarih: "28.08.2026", ucret: "3.500 TL" },
        "5429876543": { cihaz: "Samsung S22", durum: "✅ Tamamlandı - Teslime Hazır", tarih: "27.08.2026", ucret: "1.200 TL" },
        "5325554433": { cihaz: "MacBook Air M1", durum: "🔍 Parça Bekleniyor (Batarya)", tarih: "25.08.2026", ucret: "2.800 TL" }
    };

    sonucKutusu.style.display = "block";

    if (servisKayitlari[inputVerisi]) {
        let kayit = servisKayitlari[inputVerisi];
        sonucKutusu.innerHTML = `
            <h3 style="color: #d4af37; margin-bottom: 10px;">📋 Cihaz Durum Bilgisi</h3>
            <p><strong>Cihaz:</strong> ${kayit.cihaz}</p>
            <p><strong>Durum:</strong> <span style="color: #4cd137; font-weight: bold;">${kayit.durum}</span></p>
            <p><strong>Kayıt Tarihi:</strong> ${kayit.tarih}</p>
            <p><strong>Tahmini Tutar:</strong> ${kayit.ucret}</p>
        `;
    } else {
        sonucKutusu.innerHTML = `
            <p style="color: #ff4757; text-align: center;">❌ Bu numaraya ait aktif bir servis kaydı bulunamadı.</p>
            <p style="font-size: 13px; color: #888; text-align: center; margin-top: 5px;">Test numaraları: <strong>5551234567</strong></p>
        `;
    }
}

// 2. FİYAT HESAPLAMA FONKSİYONU
function fiyatHesapla() {
    const cihaz = document.getElementById('cihazTuru').value;
    const ariza = document.getElementById('arizaTuru').value;
    const sonucDiv = document.getElementById('fiyatSonuc');

    let fiyatTablosu = {
        "iphone": { "ekran": "2.500 TL - 4.500 TL", "batarya": "1.000 TL - 2.000 TL", "soket": "800 TL - 1.500 TL", "kamera": "1.200 TL - 2.500 TL" },
        "samsung": { "ekran": "2.000 TL - 4.000 TL", "batarya": "900 TL - 1.800 TL", "soket": "700 TL - 1.300 TL", "kamera": "1.000 TL - 2.200 TL" },
        "xiaomi": { "ekran": "1.500 TL - 3.000 TL", "batarya": "800 TL - 1.500 TL", "soket": "600 TL - 1.200 TL", "kamera": "900 TL - 1.800 TL" }
    };

    let tahminiFiyat = fiyatTablosu[cihaz][ariza];

    sonucDiv.style.display = "block";
    sonucDiv.innerHTML = `💡 Tahmini Onarım Ücreti: <strong style="color: #d4af37; font-size: 18px;">${tahminiFiyat}</strong> <br><span style="font-size: 12px; color: #aaa;">* Net fiyat cihaz incelemesi sonrasında belirlenir.</span>`;
}
// 3. GECE / GÜNDÜZ MODU (THEME TOGGLE) FONKSİYONU
function temaDegistir() {
    const body = document.body;
    const btn = document.getElementById('themeToggleBtn');

    // 'light-theme' class'ı var mı kontrol ediyoruz
    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        btn.innerHTML = "🌙"; // Aydınlık moddayken gece simgesi göster
        localStorage.setItem('theme', 'light');
    } else {
        btn.innerHTML = "☀️"; // Karanlık moddayken güneş simgesi göster
        localStorage.setItem('theme', 'dark');
    }
}

// Sayfa yenilendiğinde kullanıcının seçtiği temayı hatırlama
window.onload = function() {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        const btn = document.getElementById('themeToggleBtn');
        if(btn) btn.innerHTML = "🌙";
    }
}