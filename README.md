# TeamWiki · 团队第二大脑（Demo 骨架）

一份按 **4 层架构 + 13 模块** 落地的团队 wiki demo，沿用 `idea_share_html` 的液态玻璃风格。**纯静态、零依赖**，部署到 Cloudflare Pages 即可。

> 当前版本是 **Sprint 1 · 主壳**：所有模块占位 + 真实示例数据 + 关键交互（复制 / 勾选 / 搜索）已可用。后续按 Sprint 推进。

---

## 4 层架构

| 层 | 模块 |
|---|---|
| 资产层 ASSETS | 工具仓 · 规则仓 · 组件仓 · Prompt 仓 · 代码片段 · 项目基础包构建器 |
| 沉淀层 SEDIMENT | 实战案例 · 知识库（会议 / PRD / 原型 / 对话 / 踩坑） |
| 实践层 PRACTICE | 使用说明 · Agent 控制台 |
| 元层 META | 全局搜索 · 关系图谱 · 贡献者 |

## 怎么启动

**最快**：起一个本地静态 server。

```bash
cd teamwiki
python3 -m http.server 8080
# 或：npx serve . -l 8080
```

然后打开 http://localhost:8080

> ⚠️ **不要直接双击 `index.html`**，因为页面里有 `/styles/` 和 `/scripts/` 这种绝对路径引用，必须通过 HTTP 协议访问。

## 文件结构

```
teamwiki/
├── index.html              首页：4 层架构 + 关键统计 + 快捷入口
│
├── tools/ rules/ components/ prompts/ snippets/ builder/    ASSETS
├── cases/ knowledge/                                        SEDIMENT
├── usage/ agents/                                           PRACTICE
├── search/ graph/ people/                                   META
│
├── styles/
│   ├── base.css            color tokens + 液态光斑 + 玻璃材质
│   └── wiki.css            layout / nav / sidebar / cards / list / builder
├── scripts/
│   ├── data.js             所有模块示例数据（window.WIKI）
│   └── layout.js           顶部 nav + 侧边 sidebar + footer 自动注入
│
├── knowledge/              团队第二大脑 · 项目自身的沉淀（详见下方）
│   ├── README.md
│   ├── prd/                产品需求规格（4 层架构、Builder PRD）
│   ├── plan/               建设方案 / Sprint 路线图
│   ├── tech/               架构 / 共享骨架 / 不绑定工具的导出标准
│   ├── business-flow/      功能视角全链路 / 五阶段闭环
│   ├── conversation/       对话归档（YYYY-MM-DD-主题.md）
│   ├── release/            版本发布说明
│   └── others/             临时素材（每月梳理）
│
├── rules/                  团队协作与输出规范（详见下方）
│   ├── general.md          总则（导航到各专项）
│   ├── ui-design.md        液态玻璃 UI 规范
│   ├── output-format.md    markdown / 命名 / 回复结构
│   ├── knowledge-writing.md wiki 写作规范
│   ├── rules-writing.md    规则编写元规范
│   └── ai-coding-behavior.md AI 协作行为
│
├── .cursor/rules/          Cursor 自动加载规则（.mdc）
│   ├── karpathy-guidelines.mdc  通用 LLM 编码行为
│   ├── project-ui-spec.mdc      UI 高频违规点
│   ├── auto-archive.mdc         对话归档触发与位置
│   └── knowledge-source.mdc     需求 / 汇报必读 knowledge 优先
│
└── README.md
```

> ⚠️ Web 视图模块（`tools/`、`rules/`、`components/`、`knowledge/`、…）与项目自身的沉淀目录（`knowledge/prd/`、`rules/general.md`）**同名**，但前者是页面（`index.html`），后者是 markdown 真源；`scripts/layout.js` 通过 sidebar 的硬编码路径区分。Sprint 2 接入真实数据时，会把 `knowledge/`、`rules/`、`prompts/` 等模块页变成对底层 `knowledge/`、`rules/` 的渲染视图。

## 已实现的关键交互

| 在哪里 | 做了什么 |
|---|---|
| 全局 | `⌘K` / `Ctrl K` 跳转搜索页 |
| 全局 | 底部 Toast 提示（`window.toast()`） |
| 全局 | 自动注入顶部 nav + 侧边 sidebar + 底部 footer |
| 工具 / 组件 / 代码片段 | 标签筛选、一键复制 |
| 规则仓 | 单条复制 / 全部导出（含格式预览） |
| Prompt 仓 | 一键复制 prompt 模板 |
| Builder | 多维勾选（栈 / 风格 / 规则 / 导出目标） + 实时预览 3 种使用方式 |
| 知识库 | 5 类阶段筛选（会议 / PRD / 原型 / 对话 / 踩坑） |
| 搜索 | 跨模块全文打平索引，实时输入过滤 |
| 关系图谱 | demo 静态布局（中心 + 6 节点 + 连线） |

## 下一步建议（按顺序）

1. **Sprint 2**：把示例数据替换为真实 markdown 数据源（GitHub raw / 本地 fetch）。
2. **Sprint 3**：Builder 真实生成 zip + 输出标准 `.cursor/rules/*.mdc` / `AGENTS.md` / `CLAUDE.md`。
3. **Sprint 4**：实体 + 关系数据模型 + Cytoscape.js 渲染真实图谱。
4. **Sprint 5**：知识库 Agent（Cloudflare Worker cron job）自动抽取实体维护索引。
5. **Sprint 6**：登录 / 权限（Cloudflare Access），多人协作。

---

## 设计原则（来自和 Sam 哥的对话）

- **基础设施 ≠ 流水线**：把"团队的脑子"沉淀下来，价值随时间复利增长。
- **不绑定单一工具**：同一份知识 / 规则可输出多种格式，Cursor / Claude / Codex 都能用。
- **markdown 是真源**：原始文件留在 git，wiki 只是视图层；个人迁移、团队分叉都成立。
- **写 wiki 是工作的副产物**：靠 Agent 自动归档，不靠"组织号召大家写"。
- **每条都能用**：纯展示无操作的内容会被忽略，每个条目都内置"复制 / 引用 / 一键应用"出口。

---

## knowledge / rules · 项目自身的沉淀

参考 `Hengdianweb_rebuild_1.0/` 的范式，TeamWiki 拥有自己的 **三件套**：

### `knowledge/` — 团队第二大脑（项目沉淀）

| 子目录 | 用途 | 已收录 |
|-------|------|--------|
| `prd/` | 产品需求规格 | 4 层架构 PRD、Builder PRD |
| `plan/` | 建设方案 / 路线图 | Sprint 路线图（6 个 Sprint + 长期愿景） |
| `tech/` | 技术决策 / 架构 | 4 层架构与共享骨架、不绑定工具的导出标准 |
| `business-flow/` | 业务流程 | 功能视角全链路（五阶段闭环） |
| `conversation/` | 对话归档 | 与 Sam 哥讨论·团队第二大脑、Sprint 1 主壳搭建过程 |
| `release/` | 发布说明 | RELEASE_2026-05-03_Sprint1 主壳 |
| `others/` | 临时素材 | （空，每月梳理） |

> 写作规范见 `rules/knowledge-writing.md`，对话归档触发与位置见 `.cursor/rules/auto-archive.mdc`。

### `rules/` — 团队协作与输出规范

| 文件 | 内容 |
|------|------|
| `general.md` | 总则；导航到各专项规范 |
| `ui-design.md` | 液态玻璃 UI 规范（色板 / 字体 / 圆角 / 玻璃材质 / 按钮 / 禁用项） |
| `output-format.md` | markdown frontmatter / 文件命名 / 回复结构 / 工具特定输出 |
| `knowledge-writing.md` | knowledge/ 写作规范（目录归属 / 命名 / 关键词行 / 不要做的事） |
| `rules-writing.md` | meta：规则编写规范（最小结构 / 措辞 / 退潮机制） |
| `ai-coding-behavior.md` | AI 协作行为（先澄清、简洁、精准、目标驱动） |

### `.cursor/rules/` — Cursor 自动加载规则（.mdc）

| 文件 | 触发 | 作用 |
|------|------|------|
| `karpathy-guidelines.mdc` | `alwaysApply` | 通用 LLM 编码行为 |
| `project-ui-spec.mdc` | `globs: **/*.{html,css,js}` | UI 高频违规点 |
| `auto-archive.mdc` | `alwaysApply` | 对话归档触发与位置约定 |
| `knowledge-source.mdc` | `alwaysApply` | 需求 / 汇报 / 复盘必读 `knowledge/` 优先，勿凭记忆 |

> 任何对接 TeamWiki 的 Cursor 会话会自动加载 `.cursor/rules/*.mdc`，无需手动引入。
