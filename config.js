// ============================================
// HiCloud Insight 站点配置
// 以后换LOGO、改站名、调配色，只改这个文件
// ============================================
window.SITE_CONFIG = {
  // 站点基础信息
  siteName: "HiCloud Insight",
  siteTagline: "Global Digital Growth",
  
  // LOGO 配置
  logo: {
    src: "logo.png",
    alt: "HiCloud Insight",
    width: "32px",
    footerWidth: "28px",
  },
  
  // 配色系统（蓝紫渐变，与LOGO一致：H图标蓝色 → 文字紫色）
  colors: {
    primary: "#0A84FF",      // 主色：亮蓝（匹配LOGO的H图标）
    secondary: "#5E5CE6",    // 次色：靛蓝紫（过渡色）
    accent: "#8B5CF6",       // 强调色：紫罗兰（匹配LOGO文字）
    dark: "#0F172A",         // 深色背景（深蓝灰，呼应蓝色主调）
    darkLight: "#1E293B",    // 深色悬浮
    gradientStart: "#0A84FF",
    gradientMid: "#5E5CE6",
    gradientEnd: "#8B5CF6",
  },
};

// 立即注入 CSS 变量（确保样式优先加载，避免闪烁）
(function() {
  var c = window.SITE_CONFIG.colors;
  var style = document.createElement("style");
  style.textContent = `
    :root {
      --color-primary: ${c.primary};
      --color-secondary: ${c.secondary};
      --color-accent: ${c.accent};
      --color-dark: ${c.dark};
      --color-dark-light: ${c.darkLight};
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
  `;
  document.head.appendChild(style);
})();

// DOM 加载完成后替换 LOGO 和文字
document.addEventListener("DOMContentLoaded", function() {
  var cfg = window.SITE_CONFIG;
  
  // 替换所有 .site-logo 图片
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
  
  // 替换站点名称
  document.querySelectorAll(".site-name").forEach(function(el) {
    el.textContent = cfg.siteName;
  });
  
  // 更新页面标题
  document.title = cfg.siteName + " | " + cfg.siteTagline;
});
