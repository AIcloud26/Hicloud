// ============================================
// HiCloud Insight 站点配置
// ============================================
window.SITE_CONFIG = {
  siteName: "HiCloud Insight",
  siteTagline: "Global Digital Growth",
  
  logo: {
    src: "logo.png",
    alt: "HiCloud Insight",
    width: "48px",        // 导航栏LOGO加大
    footerWidth: "40px",  // 页脚LOGO加大
  },
  
  colors: {
    primary: "#4F6BFF",
    secondary: "#6B5BFF",
    accent: "#8B5CF6",
    text: "#1F2937",
    bg: "#F8FAFF",
    cardBg: "#FFFFFF",
    textSecondary: "#6B7280",
    gradientStart: "#4F6BFF",
    gradientMid: "#6B5BFF",
    gradientEnd: "#8B5CF6",
  },
};

(function() {
  var c = window.SITE_CONFIG.colors;
  var style = document.createElement("style");
  style.textContent = `
    :root {
      --color-primary: ${c.primary};
      --color-secondary: ${c.secondary};
      --color-accent: ${c.accent};
      --color-text: ${c.text};
      --color-bg: ${c.bg};
      --color-card-bg: ${c.cardBg};
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
      color: ${c.text};
      background-color: ${c.bg};
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
