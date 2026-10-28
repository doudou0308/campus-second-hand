# XX大学校园二手交易平台

校园二手交易平台的静态前端演示，使用 HTML、CSS 和原生 JavaScript 展示页面及表单校验。

> 当前项目没有后端和数据库。商品与“我的发布”是示例内容，表单不会保存或发送数据，编辑和下架按钮仅作界面展示。

## 本地预览

克隆或下载仓库后，在项目根目录运行 `python -m http.server 8000`，然后在浏览器打开 `http://localhost:8000/`。也可以直接打开 `index.html`。

## 项目结构

```C
├── css/
│   └── style.css          # 样式表
├── js/
│   └── script.js          # 表单验证脚本
├── img/
│   ├── DSC00355.jpg       # 首页横幅图
│   ├── DSC00371_1.jpg     # 备用图片
│   └── DSC00454.jpg       # 备用图片
├── index.html             # 首页
├── fabu.html              # 发布闲置
├── fenlei.html            # 分类浏览
├── xuzhi.html             # 交易须知
├── wenti.html             # 常见问题
├── wode.html              # 我的发布
├── lianxi.html            # 联系我们
├── guanyu.html            # 关于我们
└── README.md
```

## 页面说明

| 页面   | 文件          | 说明                      |
| ---- | ----------- | ----------------------- |
| 首页   | index.html  | 平台入口，横幅大图、热门分类、热门商品、侧边栏 |
| 发布闲置 | fabu.html   | 发布二手物品，含表单验证            |
| 分类浏览 | fenlei.html | 按类别浏览商品，共五大类30件         |
| 交易须知 | xuzhi.html  | 交易流程、安全指南、违规物品清单        |
| 常见问题 | wenti.html  | FAQ问答列表                 |
| 我的发布 | wode.html   | 展示已发布物品示例              |
| 联系我们 | lianxi.html | 演示留言表单与邮箱格式检查          |
| 关于我们 | guanyu.html | 平台介绍与特色说明               |

## 技术栈

- HTML5
- CSS3（Flex 弹性布局）
- JavaScript（原生表单验证）

## 设计说明

- 主色调：#052659（深蓝）、#5483B3（蓝灰）、#C1E8FF（浅蓝）
- 页面宽度：1200px 定宽居中
- 布局方式：Flex 弹性布局
- 导航栏和页脚在所有页面中保持一致

## 作者

doudou0308
