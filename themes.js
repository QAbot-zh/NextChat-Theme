// 主题数据
// 定义所有主题：图片路径 (img)、一句话描述 (desc)、Light/Dark CSS 变量
const themes = {
  "Modern Minimal": {
    img: "images/modern-minimal.png",
    desc: "以纯净白与深灰为主调，辅以鲜明的宝蓝色点缀，清爽视觉体验。",
    light: {
        "--white":"#FFFFFF","--black":"#303030","--gray":"#FAFAFA",
        "--primary":"#4A72F8","--second":"#F3F3F6","--hover-color":"#f3f3f3",
        "--bar-color":"rgba(52,152,219,0.1)","--theme-color":"var(--second)",
        "--highlight":"#3498DB","--button":"#85C1FF"
    },
    dark: {
        "--white":"#1E1E1E","--black":"#BBBBBB","--gray":"#151515",
        "--primary":"#4A72F8","--second":"#26262C","--hover-color":"#323232",
        "--bar-color":"rgba(93,173,226,0.12)","--theme-color":"var(--gray)",
        "--highlight":"#5DADE2","--button":"#1F618D"
    }
  },
  "Ocean Heart": {
    img: "images/ocean-heart.png",
    desc: "来自海洋的静谧气氛，展现清新而沉稳的海蓝韵律。",
    light: {
      "--white":"#FFFFFF","--black":"#1E2B45","--gray":"#EAF3F8",
      "--primary":"#007B8A","--second":"#BEE9F9","--hover-color":"#D5EDF7",
      "--bar-color":"rgba(0,123,138,0.1)","--theme-color":"var(--second)",
      "--highlight":"#007B8A","--button":"#8CD0DF"
    },
    dark: {
      "--white":"#081720","--black":"#CADBE3","--gray":"#0D1F2B",
      "--primary":"#26C5D4","--second":"#003F50","--hover-color":"#12434B",
      "--bar-color":"rgba(38,197,212,0.12)","--theme-color":"var(--gray)",
      "--highlight":"#26C5D4","--button":"#13626D"
    }
  },
  "Forest Whisper": {
    img: "images/forest-whisper.png",
    desc: "仿佛步入晨露森林，唤醒生机盎然的翠绿清香。",
    light: {
      "--white":"#FFFFFF","--black":"#2D3B2D","--gray":"#EBF2EB",
      "--primary":"#2C7A25","--second":"#D6EBD6","--hover-color":"#C9E4C9",
      "--bar-color":"rgba(44,122,37,0.1)","--theme-color":"var(--second)",
      "--highlight":"#2E8B2E","--button":"#A8D49D"
    },
    dark: {
      "--white":"#112214","--black":"#C1DAC0","--gray":"#152216",
      "--primary":"#5FBA57","--second":"#1E3B20","--hover-color":"#24452B",
      "--bar-color":"rgba(95,186,87,0.1)","--theme-color":"var(--gray)",
      "--highlight":"#7DCC72","--button":"#356726"
    }
  },
  "Sunrise Glow": {
    img: "images/sunrise-glow.png",
    desc: "捕捉初升朝阳的柔光，温暖且充满希望的晨曦色彩。",
    light: {
      "--white":"#FFFFFF","--black":"#4D2F2A","--gray":"#FFF4F0",
      "--primary":"#FF7965","--second":"#FFCCC3","--hover-color":"#FFE1D9",
      "--bar-color":"rgba(255,121,101,0.1)","--theme-color":"var(--second)",
      "--highlight":"#FF7965","--button":"#FFA698"
    },
    dark: {
      "--white":"#3A2220","--black":"#F0C8BD","--gray":"#2B1817",
      "--primary":"#FF9D87","--second":"#4A2E2B","--hover-color":"#4C2F2C",
      "--bar-color":"rgba(255,157,135,0.1)","--theme-color":"var(--gray)",
      "--highlight":"#FF9D87","--button":"#A04E48"
    }
  },
  "Dusk Veil": {
    img: "images/dusk-veil.png",
    desc: "黄昏轻纱般的紫调，柔和优雅，带来宁静与神秘。",
    light: {
      "--white":"#FFFFFF","--black":"#3E2F4E","--gray":"#F7F5F9",
      "--primary":"#77477D","--second":"#F3EBF5","--hover-color":"#EDE6F0",
      "--bar-color":"rgba(119,71,125,0.1)","--theme-color":"var(--second)",
      "--highlight":"#9066A0","--button":"#C6A9D1"
    },
    dark: {
      "--white":"#2A1D34","--black":"#E6DCEE","--gray":"#1D1428",
      "--primary":"#BA95C4","--second":"#3A2742","--hover-color":"#3C2945",
      "--bar-color":"rgba(186,149,196,0.1)","--theme-color":"var(--gray)",
      "--highlight":"#C5AACD","--button":"#8D679B"
    }
  },
  "Neon Pulse": {
    img: "images/neon-pulse.png",
    desc: "霓虹律动的光芒，炫彩夺目，充满未来科技感。",
    light: {
      "--white":"#FFFFFF","--black":"#1A1818","--gray":"#F9F9F9",
      "--primary":"#E600FF","--second":"#FFD6FF","--hover-color":"#F0BBFF",
      "--bar-color":"rgba(230,0,255,0.12)","--theme-color":"var(--second)",
      "--highlight":"#E600FF","--button":"#FF8CFF"
    },
    dark: {
      "--white":"#0B0A0B","--black":"#E8E8E8","--gray":"#0A0A0A",
      "--primary":"#00FFD6","--second":"#1D0026","--hover-color":"#1B0030",
      "--bar-color":"rgba(0,255,214,0.12)","--theme-color":"var(--gray)",
      "--highlight":"#00FFD6","--button":"#008066"
    }
  },
  "Retro Brown": {
    img: "images/retro-brown.png",
    desc: "温暖沉稳的棕褐，带有怀旧和手工质感的韵味。",
    light: {
      "--white":"#FFFFFF","--black":"#392E2B","--gray":"#FAF7F4",
      "--primary":"#9B5232","--second":"#FFF2E5","--hover-color":"#F6E7D9",
      "--bar-color":"rgba(155,82,50,0.1)","--theme-color":"var(--second)",
      "--highlight":"#9B5232","--button":"#CBB08A"
    },
    dark: {
      "--white":"#2E2722","--black":"#E8DDD1","--gray":"#1F1A17",
      "--primary":"#C4783B","--second":"#3D2713","--hover-color":"#3F2B17",
      "--bar-color":"rgba(196,120,59,0.1)","--theme-color":"var(--gray)",
      "--highlight":"#C4783B","--button":"#9B6B3C"
    }
  },
  "Lavender Mist": {
    img: "images/lavender-mist.png",
    desc: "柔和薰衣草紫，弥漫浪漫与梦幻的气息。",
    light: {
      "--white":"#FFFFFF","--black":"#3A3552","--gray":"#F8F6FB",
      "--primary":"#A67EB8","--second":"#F5F0F8","--hover-color":"#EFEAF6",
      "--bar-color":"rgba(166,126,184,0.1)","--theme-color":"var(--second)",
      "--highlight":"#A67EB8","--button":"#D0B9DC"
    },
    dark: {
      "--white":"#2E2B42","--black":"#E1D9EB","--gray":"#1D1B2D",
      "--primary":"#CCAAE3","--second":"#31284A","--hover-color":"#372F54",
      "--bar-color":"rgba(204,170,227,0.1)","--theme-color":"var(--gray)",
      "--highlight":"#CCAAE3","--button":"#655192"
    }
  },
  "Beach Sunset": {
    img: "images/beach-sunset.png",
    desc: "夕阳余晖，暖橙与柔黄交织出惬意的海岸情怀。",
    light: {
      "--white":"#FFFFFF","--black":"#4A3E37","--gray":"#FFF8F3",
      "--primary":"#FFAA47","--second":"#FFF4D9","--hover-color":"#FFF1CC",
      "--bar-color":"rgba(255,170,71,0.1)","--theme-color":"var(--second)",
      "--highlight":"#FFAA47","--button":"#FFD89F"
    },
    dark: {
      "--white":"#3B2E25","--black":"#EAD8C7","--gray":"#2E241E",
      "--primary":"#FFD580","--second":"#3A2B1D","--hover-color":"#3D2E21",
      "--bar-color":"rgba(255,213,128,0.1)","--theme-color":"var(--gray)",
      "--highlight":"#FFD580","--button":"#B0843B"
    }
  },
  "Cyberpunk": {
    img: "images/cyberpunk.png",
    desc: "电光霓虹冲击感，交织未来都市的脉动活力。",
    light: {
      "--white":"#FFFFFF","--black":"#1B1B1B","--gray":"#F3F3F3",
      "--primary":"#FF1A72","--second":"#FFD7E7","--hover-color":"#FFC0D6",
      "--bar-color":"rgba(255,26,114,0.12)","--theme-color":"var(--second)",
      "--highlight":"#FF1A72","--button":"#FF7CA6"
    },
    dark: {
      "--white":"#0A0B11","--black":"#E3E3E8","--gray":"#0C0C12",
      "--primary":"#00DFFF","--second":"#0E2631","--hover-color":"#08121E",
      "--bar-color":"rgba(0,223,255,0.1)","--theme-color":"var(--gray)",
      "--highlight":"#00DFFF","--button":"#006D89"
    }
  },
  "Nordic Minimal": {
    img: "images/nordic-minimal.png",
    desc: "北欧简洁纯净，传递安静、理性与现代感。",
    light: {
      "--white":"#FFFFFF","--black":"#313131","--gray":"#F6F6F6",
      "--primary":"#1A7AE5","--second":"#E6EEFC","--hover-color":"#DCE7FA",
      "--bar-color":"rgba(26,122,229,0.1)","--theme-color":"var(--gray)",
      "--highlight":"#1A7AE5","--button":"#A3C4FC"
    },
    dark: {
      "--white":"#181B1C","--black":"#E6E9EC","--gray":"#111214",
      "--primary":"#7CA9F8","--second":"#1F2225","--hover-color":"#2B2E31",
      "--bar-color":"rgba(124,169,248,0.1)","--theme-color":"var(--gray)",
      "--highlight":"#7CA9F8","--button":"#5B6065"
    }
  },
};