/* ==========================================================================
   agenticindonesia.run.place — i18n dictionary
   Bilingual: English (default) + Indonesian
   Loaded once, applied via data-i18n attributes on elements.
   ========================================================================== */
const i18n = {
  en: {
    /* Meta */
    "meta.title": "agenticindonesia.run.place — Automation that ships, not stalls",
    "meta.description": "Custom AI automation, VPS setup, and execution blueprints for Indonesian teams. Free Discord consultation. English & Bahasa Indonesia.",
    "meta.description.id": "Otomatisasi AI custom, setup VPS, dan blueprint eksekusi untuk tim Indonesia. Konsultasi gratis di Discord. Bahasa Inggris & Indonesia.",

    /* Nav */
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.pricing": "Pricing",
    "nav.discord": "Join Discord",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.close": "Close menu",

    /* Theme/lang switcher */
    "switch.theme": "Toggle theme",
    "switch.lang": "Switch language",

    /* Hero */
    "hero.eyebrow": "Custom AI & automation, done for you",
    "hero.title": "Automation that <em>ships</em>, not stalls.",
    "hero.sub": "We design, deploy, and run AI agents and automation pipelines tailored to your business — or hand you a clean blueprint so you can build it yourself.",
    "hero.cta.primary": "Book a free consult",
    "hero.cta.secondary": "See pricing",
    "hero.meta.a": "Free consult on Discord",
    "hero.meta.b": "EN · ID",
    "hero.meta.c": "No lock-in",

    /* Terminal mockup */
    "terminal.title": "agenticindonesia — ~/",
    "terminal.prompt.1": "$ deploy automation/chat-bot.yml",
    "terminal.comment.1": "# provisioning VPS (Singapore, 2 vCPU, 4GB)…",
    "terminal.output.1": "✓ VPS ready · 142s",
    "terminal.prompt.2": "$ link client-whatsapp --tier hybrid",
    "terminal.output.2": "✓ blueprint synced · runbook published",
    "terminal.prompt.3": "$ ship",
    "terminal.output.3": "✓ live · 1,247 conversations handled",

    /* Services */
    "services.eyebrow": "What we do",
    "services.title": "Three ways we work together.",
    "services.sub": "Pick the engagement that fits your team. Mix and match — most clients start with one and grow.",
    "services.s1.title": "Subscription",
    "services.s1.body": "We run your automation end-to-end on managed VPS. You focus on the business; we handle uptime, scaling, and iteration.",
    "services.s2.title": "Blueprint only",
    "services.s2.body": "We design the architecture, write the runbook, and hand it off. Your team executes on your own infrastructure.",
    "services.s3.title": "Hybrid",
    "services.s3.body": "Best of both — we build the foundation and stay on call for the parts you don't want to operate yourself.",
    "services.s4.title": "VPS consult",
    "services.s4.body": "Need help picking the right VPS, region, or stack? Free 30-minute slot on Discord. No upsell.",

    /* Process */
    "process.eyebrow": "How we work",
    "process.title": "From kickoff to ship in 14 days.",
    "process.sub": "A predictable rhythm. Weekly checkpoints, no surprises.",
    "process.p1.title": "Discovery & scoping",
    "process.p1.body": "We dig into your workflow, the data you touch, and the friction you feel. Output: a one-page scope and a clear yes/no on whether automation is the right move.",
    "process.p2.title": "Architecture & blueprint",
    "process.p2.body": "We design the system — VPS specs, integration points, failure modes. You approve before any code is written.",
    "process.p3.title": "Build & test",
    "process.p3.body": "We implement, run end-to-end tests against your real data (anonymized), and tune the agent prompts until the metrics hold.",
    "process.p4.title": "Ship & support",
    "process.p4.body": "Cutover, monitoring, and a 30-day hypercare window. If you picked subscription, we keep it running.",

    /* Pricing */
    "pricing.eyebrow": "Pricing",
    "pricing.title": "Honest pricing. Indonesian-market aware.",
    "pricing.sub": "Three tiers. No hidden fees, no usage surprises. Cancel any time on subscription.",
    "pricing.p1.name": "Starter",
    "pricing.p1.tag": "One-time",
    "pricing.p1.price": "Rp 4.500.000",
    "pricing.p1.note": "one-time setup fee",
    "pricing.p1.f1": "VPS provisioning & hardening",
    "pricing.p1.f2": "1 automation pipeline",
    "pricing.p1.f3": "Documentation & handoff",
    "pricing.p1.f4": "14-day post-launch support",
    "pricing.p1.cta": "Get started",
    "pricing.p2.name": "Pro",
    "pricing.p2.tag": "Monthly",
    "pricing.p2.price": "Rp 1.800.000",
    "pricing.p2.note": "per month, billed monthly",
    "pricing.p2.f1": "Up to 3 automation pipelines",
    "pricing.p2.f2": "Managed VPS (we run it)",
    "pricing.p2.f3": "Weekly iteration calls",
    "pricing.p2.f4": "24h response SLA",
    "pricing.p2.cta": "Start subscription",
    "pricing.p3.name": "Blueprint",
    "pricing.p3.tag": "One-time",
    "pricing.p3.price": "Rp 2.500.000",
    "pricing.p3.note": "DIY, you execute",
    "pricing.p3.f1": "Full architecture design",
    "pricing.p3.f2": "Step-by-step runbook",
    "pricing.p3.f3": "Code templates & configs",
    "pricing.p3.f4": "Two review sessions",
    "pricing.p3.cta": "Request blueprint",
    "pricing.p4.note": "VPS-only consult is free on Discord — no booking needed.",

    /* FAQ */
    "faq.eyebrow": "FAQ",
    "faq.title": "Common questions, answered straight.",
    "faq.q1.q": "Do you only work with Indonesian clients?",
    "faq.q1.a": "No. We work in English and Bahasa Indonesia. Clients across Southeast Asia and abroad use our blueprints. Currency on this page is in IDR for clarity; we invoice in USD or IDR based on your preference.",
    "faq.q2.q": "What if my automation needs grow over time?",
    "faq.q2.a": "That's normal. Subscription tier can scale up pipelines, add integrations, and increase VPS resources as you go. Pricing scales linearly with usage, never surprise-jumps.",
    "faq.q3.q": "What stack do you use?",
    "faq.q3.a": "Pragmatically. We pick tools that fit the job — n8n, Python, OpenRouter, VPS hosts (Hetzner, DigitalOcean, Vultr), Discord, Meta Graph API, WhatsApp Business. We avoid vendor lock-in unless it actively helps.",
    "faq.q4.q": "How is my data handled?",
    "faq.q4.a": "We sign DPAs, never train on your data, and isolate each client's automation on dedicated VPS resources. Off-boarding includes a clean export and credential rotation.",

    /* CTA section */
    "cta.title": "Ready to stop maintaining, start shipping?",
    "cta.sub": "Drop into the Discord — first consult is free. We'll tell you straight if automation isn't the right move.",
    "cta.primary": "Join Discord",
    "cta.secondary": "Email us",

    /* Footer */
    "footer.product": "Product",
    "footer.product.s": "Services",
    "footer.product.p": "Pricing",
    "footer.product.c": "Process",
    "footer.company": "Company",
    "footer.company.d": "Discord community",
    "footer.company.e": "Email",
    "footer.company.b": "Blog (coming soon)",
    "footer.tag": "Custom AI & automation for teams that ship.",
    "footer.legal": "© 2026 agenticindonesia.run.place · Built in Indonesia",
    "footer.region": "Region: Asia/Singapore · Response: 24h"
  },

  id: {
    /* Meta */
    "meta.title": "agenticindonesia.run.place — Otomatisasi yang jalan, bukan stalled",
    "meta.description": "Otomatisasi AI custom, setup VPS, dan blueprint eksekusi untuk tim Indonesia. Konsultasi gratis di Discord. Bahasa Inggris & Indonesia.",

    /* Nav */
    "nav.services": "Layanan",
    "nav.process": "Proses",
    "nav.pricing": "Harga",
    "nav.discord": "Gabung Discord",
    "nav.contact": "Kontak",
    "nav.menu": "Menu",
    "nav.close": "Tutup menu",

    /* Hero */
    "hero.eyebrow": "AI & otomatisasi custom, siap pakai",
    "hero.title": "Otomatisasi yang <em>jalan</em>, bukan stalled.",
    "hero.sub": "Kami desain, deploy, dan jalankan agen AI serta pipeline otomatisasi yang disesuaikan dengan bisnis Anda — atau kami serahkan blueprint rapi biar tim Anda bangun sendiri.",
    "hero.cta.primary": "Konsultasi gratis",
    "hero.cta.secondary": "Lihat harga",
    "hero.meta.a": "Konsultasi gratis di Discord",
    "hero.meta.b": "EN · ID",
    "hero.meta.c": "Tanpa lock-in",

    /* Terminal mockup */
    "terminal.title": "agenticindonesia — ~/",
    "terminal.prompt.1": "$ deploy automation/chat-bot.yml",
    "terminal.comment.1": "# provisioning VPS (Singapore, 2 vCPU, 4GB)…",
    "terminal.output.1": "✓ VPS siap · 142d",
    "terminal.prompt.2": "$ link client-whatsapp --tier hybrid",
    "terminal.output.2": "✓ blueprint tersinkron · runbook terbit",
    "terminal.prompt.3": "$ ship",
    "terminal.output.3": "✓ live · 1.247 percakapan ditangani",

    /* Services */
    "services.eyebrow": "Apa yang kami kerjakan",
    "services.title": "Tiga cara kerja bareng.",
    "services.sub": "Pilih engagement yang pas buat tim Anda. Mix-match juga boleh — kebanyakan klien mulai dari satu, lalu tumbuh.",
    "services.s1.title": "Subscription",
    "services.s1.body": "Kami jalankan otomatisasi Anda end-to-end di VPS terkelola. Anda fokus bisnis; kami urus uptime, scaling, dan iterasi.",
    "services.s2.title": "Blueprint saja",
    "services.s2.body": "Kami desain arsitekturnya, tulis runbook, lalu serahkan. Tim Anda eksekusi di infrastruktur sendiri.",
    "services.s3.title": "Hybrid",
    "services.s3.body": "Gabungan terbaik — kami bangun fondasi dan tetap on-call untuk bagian yang nggak mau Anda operasikan sendiri.",
    "services.s4.title": "Konsultasi VPS",
    "services.s4.body": "Bingung pilih VPS, region, atau stack? Slot 30 menit gratis di Discord. Tanpa upsell.",

    /* Process */
    "process.eyebrow": "Cara kerja",
    "process.title": "Dari kickoff sampai live dalam 14 hari.",
    "process.sub": "Irama yang bisa diprediksi. Checkpoint mingguan, tanpa kejutan.",
    "process.p1.title": "Discovery & scoping",
    "process.p1.body": "Kami gali workflow Anda, data yang disentuh, dan friksi yang terasa. Output: scope satu halaman dan jawaban tegas ya/tidak apakah otomatisasi memang langkah yang tepat.",
    "process.p2.title": "Arsitektur & blueprint",
    "process.p2.body": "Kami desain sistem — spek VPS, integration point, failure mode. Anda approve sebelum kode ditulis.",
    "process.p3.title": "Build & test",
    "process.p3.body": "Kami implementasi, jalankan end-to-end test dengan data nyata (anonim), dan tuning prompt agen sampai metriknya stabil.",
    "process.p4.title": "Ship & support",
    "process.p4.body": "Cutover, monitoring, dan window hypercare 30 hari. Kalau Anda pilih subscription, kami lanjut menjalankan.",

    /* Pricing */
    "pricing.eyebrow": "Harga",
    "pricing.title": "Harga jujur. Pasar-Indonesia aware.",
    "pricing.sub": "Tiga tier. Tanpa biaya tersembunyi, tanpa kejutan usage. Berhenti kapan saja pada subscription.",
    "pricing.p1.name": "Starter",
    "pricing.p1.tag": "Sekali bayar",
    "pricing.p1.price": "Rp 4.500.000",
    "pricing.p1.note": "biaya setup sekali",
    "pricing.p1.f1": "Provisioning & hardening VPS",
    "pricing.p1.f2": "1 pipeline otomatisasi",
    "pricing.p1.f3": "Dokumentasi & serah-terima",
    "pricing.p1.f4": "Support 14 hari pasca-launch",
    "pricing.p1.cta": "Mulai sekarang",
    "pricing.p2.name": "Pro",
    "pricing.p2.tag": "Bulanan",
    "pricing.p2.price": "Rp 1.800.000",
    "pricing.p2.note": "per bulan, tagihan bulanan",
    "pricing.p2.f1": "Hingga 3 pipeline otomatisasi",
    "pricing.p2.f2": "VPS terkelola (kami yang jalanin)",
    "pricing.p2.f3": "Weekly iteration call",
    "pricing.p2.f4": "SLA respon 24 jam",
    "pricing.p2.cta": "Mulai subscription",
    "pricing.p3.name": "Blueprint",
    "pricing.p3.tag": "Sekali bayar",
    "pricing.p3.price": "Rp 2.500.000",
    "pricing.p3.note": "DIY, Anda eksekusi",
    "pricing.p3.f1": "Desain arsitektur lengkap",
    "pricing.p3.f2": "Runbook langkah-demi-langkah",
    "pricing.p3.f3": "Template kode & konfigurasi",
    "pricing.p3.f4": "Dua sesi review",
    "pricing.p3.cta": "Minta blueprint",
    "pricing.p4.note": "Konsultasi VPS-only gratis di Discord — tanpa booking.",

    /* FAQ */
    "faq.eyebrow": "FAQ",
    "faq.title": "Pertanyaan umum, dijawab langsung.",
    "faq.q1.q": "Apakah cuma melayani klien Indonesia?",
    "faq.q1.a": "Tidak. Kami kerja dalam Bahasa Inggris dan Bahasa Indonesia. Klien di seluruh Asia Tenggara dan mancanegara pakai blueprint kami. Mata uang di halaman ini IDR demi kejelasan; invoice bisa USD atau IDR sesuai preferensi Anda.",
    "faq.q2.q": "Bagaimana kalau kebutuhan otomatisasi saya tumbuh seiring waktu?",
    "faq.q2.a": "Itu wajar. Tier subscription bisa naik jumlah pipeline, tambah integrasi, dan tambah resource VPS sesuai kebutuhan. Harga naik linear dengan usage, tidak pernah meloncat tiba-tiba.",
    "faq.q3.q": "Stack apa yang dipakai?",
    "faq.q3.a": "Pragmatis. Kami pilih tools yang sesuai pekerjaan — n8n, Python, OpenRouter, host VPS (Hetzner, DigitalOcean, Vultr), Discord, Meta Graph API, WhatsApp Business. Kami hindari vendor lock-in kecuali memang benar-benar membantu.",
    "faq.q4.q": "Bagaimana data saya ditangani?",
    "faq.q4.a": "Kami tanda tangani DPA, tidak pernah training di data Anda, dan isolated setiap klien di resource VPS dedicated. Off-boarding termasuk export bersih dan rotasi kredensial.",

    /* CTA section */
    "cta.title": "Siap berhenti maintain, mulai shipping?",
    "cta.sub": "Mampir ke Discord — konsultasi pertama gratis. Kami bilang terus terang kalau otomatisasi bukan langkah yang tepat.",
    "cta.primary": "Gabung Discord",
    "cta.secondary": "Email kami",

    /* Footer */
    "footer.product": "Produk",
    "footer.product.s": "Layanan",
    "footer.product.p": "Harga",
    "footer.product.c": "Proses",
    "footer.company": "Perusahaan",
    "footer.company.d": "Komunitas Discord",
    "footer.company.e": "Email",
    "footer.company.b": "Blog (segera)",
    "footer.tag": "AI & otomatisasi custom untuk tim yang terus jalan.",
    "footer.legal": "© 2026 agenticindonesia.run.place · Dibuat di Indonesia",
    "footer.region": "Region: Asia/Singapore · Respon: 24 jam"
  }
};

let currentLang = "en";
let currentTheme = "light";

function t(key) {
  return (i18n[currentLang] && i18n[currentLang][key]) || i18n.en[key] || key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t(key);
    // Allow innerHTML for keys that contain safe markup like <em>
    if (key.endsWith(".title") || key === "cta.title") {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
  document.documentElement.lang = currentLang === "id" ? "id" : "en";
  document.title = t("meta.title");
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t("meta.description"));
  // Update lang switcher label
  const langLabel = document.querySelector("[data-lang-label]");
  if (langLabel) langLabel.textContent = currentLang === "id" ? "ID" : "EN";
}

function setLang(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem("ai.lang", lang);
  applyTranslations();
}

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("ai.theme", theme);
}

/* Init: pull from localStorage or system preference */
function init() {
  const storedLang = localStorage.getItem("ai.lang");
  const storedTheme = localStorage.getItem("ai.theme");

  // Language: explicit > browser > en
  if (storedLang && i18n[storedLang]) {
    currentLang = storedLang;
  } else {
    const browserLang = (navigator.language || "en").toLowerCase();
    currentLang = browserLang.startsWith("id") ? "id" : "en";
  }

  // Theme: explicit > system > light
  if (storedTheme === "dark" || storedTheme === "light") {
    currentTheme = storedTheme;
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    currentTheme = "dark";
  } else {
    currentTheme = "light";
  }

  applyTranslations();
  setTheme(currentTheme);
}

/* Wire up toggles */
function wireToggles() {
  // Theme toggle
  document.querySelectorAll("[data-theme-toggle]").forEach((el) => {
    el.addEventListener("click", () => {
      setTheme(currentTheme === "light" ? "dark" : "light");
    });
  });
  // Lang toggle
  document.querySelectorAll("[data-lang-toggle]").forEach((el) => {
    el.addEventListener("click", () => {
      setLang(currentLang === "en" ? "id" : "en");
    });
  });
  // Mobile nav toggle
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const open = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }
  // Sticky nav shadow on scroll
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  init();
  wireToggles();
});


/* ==========================================================================
   v2: Scroll Reveal Observer for Element Animation
   ========================================================================== */
function initScrollReveal() {
  // Target items that need staggered or single entrance animation
  const sections = document.querySelectorAll('.section, .hero, .terminal-window');
  const cards = document.querySelectorAll('.card');
  const faqs = document.querySelectorAll('.faq details');
  
  // Inject classes programmatically so HTML doesn't look messy
  document.querySelectorAll('.hero__inner > div').forEach(el => el.classList.add('reveal'));
  
  sections.forEach((el, index) => {
    el.classList.add('reveal');
  });
  
  cards.forEach((el, index) => {
    el.classList.add('reveal');
    let delay = (index % 3) + 1;
    el.classList.add(`reveal-delay-${delay}`);
  });

  faqs.forEach((el, index) => {
    el.classList.add('reveal');
    let delay = (index % 4) + 1;
    el.classList.add(`reveal-delay-${delay}`);
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Unobserve after showing the first time for better performance
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -50px 0px', // Trigger slightly before it hits bottom of viewport
    threshold: 0.05
  });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize scroll effects
  setTimeout(initScrollReveal, 150);
});
