// ============================================
// HiCloud Insight 站点配置 
// ============================================
window.SITE_CONFIG = {
  // 站点基础信息
  siteName: "HiCloud Insight",
  siteTagline: "Global Digital Growth",
  
  // LOGO 配置
  logo: {
    src: "logo.png",
    alt: "HiCloud Insight",
    width: "40px",
    footerWidth: "32px",
  },
  
  // 配色系统（品牌蓝色系）
  colors: {
    primary: "#2563EB",        // 主品牌蓝：Logo / 按钮 / Hover / 主要Icon
    secondary: "#3B82F6",      // 次级蓝：渐变中间色
    light: "#60A5FA",          // 浅科技蓝：Hover / 图标 / Dashboard
    accent: "#38BDF8",         // 青蓝Accent：AI数据流 / 动态图表 / 高亮
    dark: "#0F172A",           // 深海军蓝：Header / Footer / 深色背景
    darkLight: "#1E293B",      // 深色悬浮态
    pageBg: "#F8FAFC",         // 页面背景
    cardBg: "#FFFFFF",         // 卡片背景（纯白）
    textPrimary: "#111827",    // 主文字
    textSecondary: "#64748B",  // 次文字
    gradientStart: "#2563EB",
    gradientMid: "#3B82F6",
    gradientEnd: "#60A5FA",
  },
};

// 立即注入 CSS 变量
(function() {
  var c = window.SITE_CONFIG.colors;
  var style = document.createElement("style");
  style.textContent = `
    :root {
      --color-primary: ${c.primary};
      --color-secondary: ${c.secondary};
      --color-light: ${c.light};
      --color-accent: ${c.accent};
      --color-dark: ${c.dark};
      --color-dark-light: ${c.darkLight};
      --color-page-bg: ${c.pageBg};
      --color-card-bg: ${c.cardBg};
      --color-text-primary: ${c.textPrimary};
      --color-text-secondary: ${c.textSecondary};
    }
    .bg-gradient-brand {
      background: linear-gradient(180deg, ${c.gradientStart} 0%, ${c.gradientMid} 50%, ${c.gradientEnd} 100%);
    }
    .text-gradient-brand {
      background: linear-gradient(180deg, ${c.gradientStart}, ${c.gradientEnd});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hover\:text-gradient-brand:hover {
      background: linear-gradient(180deg, ${c.gradientStart}, ${c.gradientEnd});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    /* 全局文字颜色统一 */
    body {
      color: ${c.textPrimary};
      background-color: ${c.pageBg};
    }
    .text-secondary { color: ${c.textSecondary}; }
  `;
  document.head.appendChild(style);
})();

// DOM 加载完成后替换 LOGO 和文字
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
