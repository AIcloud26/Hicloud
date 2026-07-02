// ============================================
//  HiCloud Insight 站点配置
//  修改此文件即可更新 LOGO、站名、配色
//  无需修改 index.html
// ============================================

window.SITE_CONFIG = {
  // 站点名称
  siteName: 'HiCloud Insight',
  
  // LOGO 图片路径（替换 logo.png 即可换 LOGO，不用改代码）
  logo: 'logo.png',
  
  // LOGO 高度（像素），调整 LOGO 大小改这里
  logoHeight: 40,
  
  // 页面标题
  title: 'HiCloud Insight | Global Digital Growth',
  
  // Meta 描述
  description: 'HiCloud Insight - Powering digital growth through innovative ad exchange, affiliate network, and premium content services worldwide.',
  
  // 版权文字
  copyright: '© 2026 HiCloud Insight. All rights reserved.',
  
  // ====== 配色系统（根据 LOGO 蓝紫色系统一） ======
  colors: {
    // 主色：深紫蓝
    primary: '#6366F1',
    // 次色：紫色
    secondary: '#8B5CF6',
    // 强调色：浅紫
    accent: '#A855F7',
    // 深色（导航文字、标题）
    dark: '#1E1B4B',
    // 深色浅色变体
    darkLight: '#312E81',
  },
  
  // 渐变方向
  gradient: {
    primary: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
    hero: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #7C3AED 100%)',
    text: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A855F7 100%)',
  }
};

// 动态注入配色
(function() {
  var c = window.SITE_CONFIG;
  
  // 1. 更新页面标题
  document.title = c.title;
  
  // 2. 更新 meta description
  var meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', c.description);
  
  // 3. 注入 CSS 变量和工具类
  var style = document.createElement('style');
  style.textContent = `
    :root {
      --color-primary: ${c.colors.primary};
      --color-secondary: ${c.colors.secondary};
      --color-accent: ${c.colors.accent};
      --color-dark: ${c.colors.dark};
      --color-dark-light: ${c.colors.darkLight};
      --gradient-primary: ${c.gradient.primary};
      --gradient-hero: ${c.gradient.hero};
      --gradient-text: ${c.gradient.text};
    }
    .text-gradient {
      background: ${c.gradient.text};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .bg-gradient-primary {
      background: ${c.gradient.primary};
    }
    .bg-gradient-hero {
      background: ${c.gradient.hero};
    }
    .text-primary { color: ${c.colors.primary} !important; }
    .text-secondary { color: ${c.colors.secondary} !important; }
    .text-accent { color: ${c.colors.accent} !important; }
    .text-dark { color: ${c.colors.dark} !important; }
    .bg-primary { background-color: ${c.colors.primary} !important; }
    .bg-secondary { background-color: ${c.colors.secondary} !important; }
    .bg-accent { background-color: ${c.colors.accent} !important; }
    .bg-dark { background-color: ${c.colors.dark} !important; }
    .border-primary { border-color: ${c.colors.primary} !important; }
    .from-primary { --tw-gradient-from: ${c.colors.primary}; }
    .to-secondary { --tw-gradient-to: ${c.colors.secondary}; }
    .to-accent { --tw-gradient-to: ${c.colors.accent}; }
    .ring-primary\\/20 { --tw-ring-color: rgba(99, 102, 241, 0.2); }
    .shadow-primary\\/25 { --tw-shadow-color: rgba(99, 102, 241, 0.25); }
    .hover\\:text-primary:hover { color: ${c.colors.primary} !important; }
    .focus\\:border-primary:focus { border-color: ${c.colors.primary} !important; }
    .focus\\:ring-primary\\/20:focus { --tw-ring-color: rgba(99, 102, 241, 0.2); }
    .bg-primary\\/10 { background-color: rgba(99, 102, 241, 0.1); }
    .bg-secondary\\/10 { background-color: rgba(139, 92, 246, 0.1); }
    .bg-accent\\/20 { background-color: rgba(168, 85, 247, 0.2); }
    .text-accent { color: ${c.colors.accent} !important; }
  `;
  document.head.appendChild(style);
  
  // 4. 等 DOM 就绪后替换所有 LOGO 和站名
  function applyBranding() {
    // 替换所有 LOGO 图片
    var logoImgs = document.querySelectorAll('.site-logo');
    logoImgs.forEach(function(img) {
      img.src = c.logo;
      img.alt = c.siteName;
      img.style.height = c.logoHeight + 'px';
    });
    
    // 替换版权文字
    var copyrightEl = document.querySelector('.site-copyright');
    if (copyrightEl) copyrightEl.textContent = c.copyright;
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyBranding);
  } else {
    applyBranding();
  }
})();
