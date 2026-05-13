// 构建脚本：把 themes.js 编译为 /api 静态资源
// 产物：
//   api/themes.json                  - 主题清单（含元信息和资源链接）
//   api/themes/{slug}.css            - 单主题完整 CSS
//   api/themes/{slug}.json           - 单主题结构化数据

const fs = require("fs");
const path = require("path");
const themes = require("./themes.js");

const ROOT = __dirname;
const API_DIR = path.join(ROOT, "api");
const THEMES_DIR = path.join(API_DIR, "themes");

function toSlug(name) {
  return name.trim().toLowerCase().replace(/\s+/g, "-");
}

function buildCss(name, info) {
  let css = `/* ${name} */\n`;
  ["light", "dark"].forEach((mode) => {
    css += `body.${mode} {\n`;
    Object.entries(info[mode]).forEach(([k, v]) => {
      css += `  ${k}: ${v};\n`;
    });
    css += `}\n\n`;
  });
  return css;
}

function rimraf(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function main() {
  rimraf(API_DIR);
  fs.mkdirSync(THEMES_DIR, { recursive: true });

  const slugSeen = new Map();
  const manifest = [];

  Object.entries(themes).forEach(([name, info]) => {
    const slug = toSlug(name);
    if (slugSeen.has(slug)) {
      throw new Error(
        `slug 冲突: "${name}" 和 "${slugSeen.get(slug)}" 都映射到 "${slug}"`
      );
    }
    slugSeen.set(slug, name);

    const css = buildCss(name, info);
    fs.writeFileSync(path.join(THEMES_DIR, `${slug}.css`), css, "utf8");

    const detail = {
      name,
      slug,
      desc: info.desc,
      img: info.img,
      light: info.light,
      dark: info.dark,
    };
    fs.writeFileSync(
      path.join(THEMES_DIR, `${slug}.json`),
      JSON.stringify(detail, null, 2),
      "utf8"
    );

    manifest.push({
      name,
      slug,
      desc: info.desc,
      img: info.img,
      css: `/api/themes/${slug}.css`,
      json: `/api/themes/${slug}.json`,
    });
  });

  fs.writeFileSync(
    path.join(API_DIR, "themes.json"),
    JSON.stringify(manifest, null, 2),
    "utf8"
  );

  console.log(`已生成 ${manifest.length} 个主题:`);
  manifest.forEach((t) => console.log(`  - ${t.name}  ->  ${t.slug}`));
  console.log(`产物目录: ${API_DIR}`);
}

main();
