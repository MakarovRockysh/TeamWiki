# PRD · 项目基础包构建器（Builder）

## 一、背景与目标

新项目的痛点：每次都要手动同步 `.cursor/rules/`、`AGENTS.md`、设计规范、组件库这些"前置配置"，半小时起步、容易漏。**Builder** 把这一步做成可视化的"勾选 → 一键生成"。

- 主用户：团队研发 / 产品 / 设计
- 高频度：新建项目时使用
- 价值：单项目首次配置时间从 30 分钟压到 1 分钟

## 二、核心能力

| 维度 | 字段 | 说明 |
|------|------|------|
| 技术栈 | Next.js / Astro / Vite + React / Static HTML | 决定脚手架模板 |
| 设计风格 | Liquid Glass / Neutral / 公司品牌色 | 决定 design tokens |
| 规则集 | 设计 / PRD / 输出 / 编码 | 决定 `.cursor/rules/*.mdc` 与 `AGENTS.md` 的内容 |
| 导出目标 | `.cursor/rules/*.mdc` / `AGENTS.md` / `CLAUDE.md` / 通用 prompt | 不绑定单一工具 |

## 三、输出物（3 种使用方式）

### 1. Cursor 拉取
```
cursor pull teamwiki://builder?p=<base64-encoded-config>
```

### 2. Git clone（如果选择某个脚手架仓库为基底）
```
git clone teamwiki/scaffold-<stack>.git my-app
```

### 3. 通用 prompt（适用任何 LLM）
```
请用以下配置生成项目脚手架：[stack=next, style=glass, rules=design+code, ...]
```

## 四、UI / 交互

- 左侧：4 个 section，每个 section 多选；选中后高亮 + 打勾。
- 右侧 sticky：`📦 当前选择` 实时同步；下方 `3 种使用方式` 实时刷新代码块。
- `生成基础包` 按钮：未选中时 toast 提示；选中后 toast 显示生成结果。

## 五、字段说明

- `state.stack` / `state.style` / `state.rules` / `state.targets` 分别存数组。
- 编码方式：JSON.stringify → encodeURIComponent → 嵌入 URL `?p=`。

## 六、非目标

- 不实现脚手架模板的实际内容（占位用 `teamwiki/scaffold-<stack>.git` URL，后续 Sprint 补真实仓库）。
- 不做用户态 / 收藏 / 历史（属于 Sprint 6+ 范畴）。

## 七、变更记录

- 2026.05.03 v0.1 — 主壳完成，4 维勾选 + 3 种输出预览
- _待补：v0.2 接入真实 markdown 数据源_

## 关键词

> builder, 项目基础包, 勾选, 脚手架, cursor pull, .cursor/rules, AGENTS.md, CLAUDE.md, 不绑定工具
