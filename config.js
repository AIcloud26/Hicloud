// ============================================
// HiCloud Insight 站点配置
// ============================================
window.SITE_CONFIG = {
  siteName: "HiCloud Insight",
  siteTagline: "Global Digital Growth",
  
  logo: {
    src: "logo.png",
    alt: "HiCloud Insight",
    width: "48px",
    footerWidth: "40px",
  },
  
  colors: {
    primary: "#2563EB",
    secondary: "#3B82F6",
    light: "#60A5FA",
    accent: "#38BDF8",
    dark: "#0F172A",
    darkLight: "#1E293B",
    pageBg: "#F8FAFC",
    cardBg: "#FFFFFF",
    textPrimary: "#111827",
    textSecondary: "#64748B",
    gradientStart: "#2563EB",
    gradientMid: "#3B82F6",
    gradientEnd: "#60A5FA",
  },
};

(function() {
  var c = window.SITE_CONFIG.colors;
  var style = document.createElement("style");
  style.textContent = `
    :root {
      --color-primary: ${c.primary};
      --color-secondary: ${c.secondary};
      --color-light: ${c.light};
      --color-accent: ${c.accent};
      --color-page-bg: ${c.pageBg};
      --color-card-bg: ${c.cardBg};
      --color-text-primary: ${c.textPrimary};
      --color-text-secondary: ${c.textSecondary};
    }
    .bg-gradient-brand {
      background: linear-gradient(135deg, ${c.gradientStart} 0%, ${c.gradientMid} 50%, ${c.gradientEnd} 100%);
    }
    .text-gradient-brand {
      background: linear-gradient(135deg, ${c.gradientStart}, ${c.gradientEnd});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hover\:text-gradient-brand:hover {
      background: linear-gradient(135deg, ${c.gradientStart}, ${c.gradientEnd});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    body {
      color: ${c.textPrimary};
      background-color: ${c.pageBg};
    }
    .text-secondary { color: ${c.textSecondary}; }
  `;
  document.head.appendChild(style);
})();

document.addEventListener("DOMContentLoaded", function() {
  var cfg = window.SITE_CONFIG;
  
  document.querySelectorAll(".site-logo").forEach(function(img) {
    img.src = cfg.logo.src;
    img.alt = cfg.logo.alt;
    if (img.closest("footer")) {
      img.style.height = cfg.logo.footerWidth;
    } else {
      img.style.height = cfg.logo.width;
    }
    img.style.width = "auto";
    img.style.display = "block";
  });
  
  document.querySelectorAll(".site-name").forEach(function(el) {
    el.textContent = cfg.siteName;
  });
  
  document.title = cfg.siteName + " | " + cfg.siteTagline;
});
