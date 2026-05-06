# 迭代日志 (CHANGELOG)

## v1.2 — 导航栏与页脚统一 (2026-05-05)

### 🔧 修复
- **统一所有页面导航栏**：7个二级页面的 header 导航栏之前各有缺失（有的缺"关于我们"、有的缺"我的发布"），现已全部统一为与首页相同的完整导航栏：
  - 8个导航链接：首页 / 发布闲置 / 分类浏览（含子菜单） / 交易须知（含子菜单） / 我的发布 / 联系我们 / 关于我们
  - 搜索框现已出现在所有页面
- **统一所有页面页脚**：页脚之前各页面链接数量不一、有的写"返回首页"有的写"联系方式"，现已统一为：
  - 关于我们列（含完整简介）
  - 快速链接列（发布闲置 / 分类浏览 / 交易须知 / 常见问题 / 联系我们）
  - 联系我们列（地址 / 邮编 / 邮箱）

### 📁 涉及文件
- `publish.html` — header + footer
- `category.html` — header + footer
- `notice.html` — header + footer
- `contact.html` — header + footer
- `about.html` — header + footer
- `faq.html` — header + footer
- `my-posts.html` — header + footer

---

## v1.1 — 交互功能增强 (2026-05-05)

### ✨ 新增
- **首页轮播图点击切换**：底部3个圆点可点击，切换到对应的3张图片
- **搜索框回车键支持**：在搜索框按 Enter 键即可触发搜索，无需鼠标点击按钮
- **回到顶部按钮**：页面滚动超过 400px 时右下角出现蓝色圆形按钮，点击平滑滚回顶部

### 🔧 优化
- **分类浏览页**：分类筛选按钮从静态链接改为可点击的交互按钮，点击即筛选对应商品
- **分类浏览页**：商品从 6 件扩充至 21 件，覆盖全部 5 个分类
- **分类筛选**：筛选无结果时显示"该分类暂无商品"提示

### 📁 涉及文件
- `index.html` — 轮播图加 id、圆点加 data-index 属性
- `category.html` — 分类按钮改为 button + data-category，商品从 6 增至 21 件
- `css/style.css` — 新增 `.filter-btn`、`.filter-btn.active`、`.back-to-top` 样式
- `js/script.js` — 新增轮播图切换、回车搜索、回到顶部、分类筛选逻辑

---

## v1.0 — 项目初始化 (2026-05-04)

### ✨ 初始版本
- 8 个 HTML 页面：首页、发布闲置、分类浏览、交易须知、联系我们、关于我们、常见问题、我的发布
- 外部 CSS：`css/style.css`（Flexbox + Grid 响应式布局）
- 外部 JS：`js/script.js`（表单验证、搜索交互、商品点击反馈）
- 3 张首页轮播图片
- 响应式设计：`@media` 适配手机 / 平板 / 电脑
- Git 配置与 GitHub 仓库托管

### 📁 初始文件
- `index.html`、`publish.html`、`category.html`、`notice.html`、`contact.html`、`about.html`、`faq.html`、`my-posts.html`
- `css/style.css`、`js/script.js`
- `img/` 下 3 张图片
- `README.md`、`.gitignore`
