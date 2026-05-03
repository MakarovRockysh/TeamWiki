# Release · Sprint 1 主壳（2026.05.03）

## 核心交付

- ✅ 4 层架构 + 13 模块全部建成（资产 6 / 沉淀 2 / 实践 2 / 元 3）
- ✅ 100% 沿用 `idea_share_html` 液态玻璃风格（base.css 移植）
- ✅ 共享骨架 `scripts/layout.js` 自动注入 nav + sidebar + footer
- ✅ 全局 `⌘K` / `Ctrl K` 唤起搜索
- ✅ 底部 Toast 通用反馈
- ✅ 13 个模块均带真实示例数据 + 至少 1 个交互
- ✅ 本地启动：`python3 -m http.server 8088` → http://127.0.0.1:8088/

## 模块亮点

- **`/builder/`** — 4 维勾选（栈 / 风格 / 规则 / 导出目标）+ 实时预览 3 种使用方式
- **`/search/`** — 跨 8 模块全文打平索引 + 实时输入过滤
- **`/graph/`** — demo 静态图谱（中心 + 6 节点 + 自适应连线）
- **`/knowledge/`** — 5 类阶段筛选（会议 / PRD / 原型 / 对话 / 踩坑）

## 已知限制 / 下个 Sprint 处理

- 数据全部来自 `scripts/data.js`，未接入真实 markdown。
- Builder 仅预览输出，未真实生成 zip / 文件。
- Graph 是静态布局，未引入 cytoscape。
- 无登录 / 权限。
- 无评论 / 协作功能。

## 文件清单

```
teamwiki/
├── index.html                                      # 首页
├── tools/, rules/, components/, prompts/,          # 资产层 6 模块
│   snippets/, builder/                              ↳
├── cases/, knowledge/                              # 沉淀层 2 模块
├── usage/, agents/                                 # 实践层 2 模块
├── search/, graph/, people/                        # 元层 3 模块
├── styles/{base.css, wiki.css}                     # 共享样式
├── scripts/{data.js, layout.js}                    # 数据 + 共享骨架
├── knowledge/                                      # 项目自身沉淀（含本文件）
├── rules/                                          # 团队规范
├── .cursor/rules/                                  # Cursor 自动加载规则
└── README.md
```

## 关键词

> release, sprint1, 主壳, 4 层架构, liquid glass, layout 注入
