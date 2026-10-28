# 张凌霄的个人主页

中英文学术个人主页，包含个人简介、论文成果、工作经历与教育背景。

- 默认英文首页：https://owenmasculinity.github.io/
- 英文版：https://owenmasculinity.github.io/en/
- 中文版：https://owenmasculinity.github.io/zh/

## 修改内容

主页为纯静态 HTML/CSS，无需安装依赖。

| 文件 | 用途 |
| --- | --- |
| `scripts/build-home.mjs` | 中英文简介、论文、经历与教育信息；生成三个首页入口 |
| `academic.css` | 页面布局、字体与移动端样式 |
| `index.html` | 默认英文首页，自动生成 |
| `en/index.html` | 英文首页，自动生成 |
| `zh/index.html` | 中文首页，自动生成 |
| `.nojekyll` | 告知 GitHub Pages 直接发布静态文件，跳过 Jekyll |

修改生成脚本或 CSS 后，在仓库根目录运行（Node.js 18+）：

```powershell
node scripts/build-home.mjs
```

请同时提交脚本、CSS 和生成后的 HTML。生成器会根据 CSS 内容自动更新样式链接的版本参数，并根据主页内容为语言切换和首页链接添加版本参数，减少旧 HTML 和样式缓存的影响。无需手工修改生成后的 HTML。

## 本地预览

```powershell
node scripts/preview.mjs
```

打开 http://127.0.0.1:4174/ 。预览仅绑定本机回环地址，按 Ctrl+C 停止。中文路径为 `/zh/`，英文路径为 `/en/`。

## 发布到 GitHub Pages

GitHub 仓库的 **Settings → Pages** 配置：

- Source：Deploy from a branch
- Branch：`master`
- Folder：`/ (root)`

提交并推送到 `master` 后，GitHub 会运行 `pages build and deployment`。等该任务成功，才表示 Pages 部署完成；仅 Git 推送成功并不能证明线上已更新。

发布后应检查默认首页、`/en/` 和 `/zh/`，确认简介、过往经历及页面样式均为新版本。若仍看到旧页面，可先强制刷新，或用 `?v=<提交短哈希>` 重新访问，以区分浏览器/CDN 缓存与部署问题。GitHub Pages 的 HTML 缓存刷新可能不会与 Git 推送同时完成。

如已安装并登录 GitHub CLI，可查看部署状态：

```powershell
gh run list --repo OwenMasculinity/OwenMasculinity.github.io --limit 5
gh api repos/OwenMasculinity/OwenMasculinity.github.io/pages/builds/latest
```

## 历史内容

`en/`、`zh/` 中的旧文章、项目和论文详情页作为历史归档保留，因此归档页可能仍使用原 Academic 主题。主页中的归档链接可以继续访问。

`config.toml`、`netlify.toml` 和 `update_academic.sh` 为早期 Hugo/Academic 配置，不参与当前 GitHub Pages 首页的生成与发布。不要用旧 Hugo 更新脚本覆盖当前首页。

## 许可

原 Academic 主题相关内容遵循仓库中的 MIT 许可，见 [LICENSE.md](LICENSE.md)。
