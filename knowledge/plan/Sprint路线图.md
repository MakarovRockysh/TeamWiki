# 建设方案 · Sprint 路线图

## 总目标

把 TeamWiki 从"主壳 demo"演进为**团队真正每天用的知识库 / 规则库 / 资产仓**。优先级排序的依据：**用户感知优先级 > 工程难度**。

## Sprint 1 · 主壳 ✅（2026.05.03 完成）

- 4 层架构 + 13 模块全部建成
- 共享 layout + 真实示例数据 + 关键交互
- 100% 沿用 `idea_share_html` 液态玻璃风格
- 详见 `knowledge/conversation/2026-05-03-Sprint1主壳搭建过程.md`

## Sprint 2 · 真实数据接入（预计 1-2 周）

- **目标**：所有模块从"示例数据"切换到"真实 markdown 数据源"。
- **关键工作**：
  - `data.js` 拆为多个 JSON / markdown frontmatter 索引文件
  - 写一个轻量索引脚本：扫 `knowledge/`、`rules/` 目录生成 `data/index.json`
  - Web 页 fetch 索引文件渲染（保留纯静态部署）
  - 每个原始文件可独立打开（`/knowledge/{stage}/{file}.md` → 渲染为 HTML）

## Sprint 3 · Builder 真正可用（预计 1-2 周）

- **目标**：`/builder/` 产出真实可用的项目基础包。
- **关键工作**：
  - 准备 4 套脚手架仓库（next / astro / vite-react / static）
  - 写真实的 `.cursor/rules/*.mdc` / `AGENTS.md` / `CLAUDE.md` 模板
  - 实现"勾选 → 生成 zip 下载"（前端 JSZip）
  - 实现"勾选 → cursor pull 链接"（带 base64 配置）

## Sprint 4 · 强关系图谱（预计 2-3 周）

- **目标**：`/graph/` 显示真实的 Feature → 各阶段实体的关联。
- **关键工作**：
  - 引入 cytoscape.js 替换 demo 静态布局
  - 数据模型：Feature / Meeting / PRD / Prototype / Code / Test / Issue
  - 关系来源 ①：markdown frontmatter `related: [...]`
  - 关系来源 ②：写一个本地脚本扫描 `knowledge/` 抽取关系（人工补正）

## Sprint 5 · 知识库 Agent（预计 3-4 周）

- **目标**：写 wiki 是工作的副产物，而不是额外工作。
- **关键工作**：
  - Cloudflare Worker cron job：定时拉取仓库 markdown
  - 调用 LLM 抽取实体（Feature / 决策 / 待办）
  - 自动写入 `knowledge/` 对应子目录，更新关系索引
  - 规则库 `rules/` 约束 Agent 的抽取行为

## Sprint 6 · 多人协作（预计 2-3 周）

- **目标**：从单人工具升级为团队工具。
- **关键工作**：
  - Cloudflare Access 做登录（短期方案）
  - `/people/` 真实贡献者数据（git contributor 自动统计）
  - 评论 / 投票 / Issue 机制
  - 个人化首页（每人看到的内容不同）

## 长期愿景（Q3+）

- **可视化数字资产**：Wiki 数据可量化、可导出、可作为团队 / 公司价值的一部分。
- **不绑定工具**：通过统一的 markdown + 多种导出格式，对接任何新出现的 AI Coding 工具。
- **跨项目通用 + 项目命名空间**：`team/*` 共享 + `project/<name>/*` 专属。

## 关键词

> sprint, 路线图, 真实数据, builder, graph, agent, 多人协作, 长期愿景
