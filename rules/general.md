# Cursor / AI 协作总则（TeamWiki）

本仓库的所有 AI / 人工协作必须遵循以下规则。任何与本规则冲突的临时改动需在提交说明中标注例外。

## 1. UI 设计规范（必读）

实现或修改 **首页、模块页、卡片、列表、Builder 表单、搜索框、Toast、Sidebar** 等界面时，**样式须遵循**：

**[ui-design.md](./ui-design.md)**

色板、间距、圆角、玻璃材质、字体与该文档不一致时，应在 PR / 提交说明里写明例外原因。

---

## 2. 知识库写作规范（必读）

向 `knowledge/` 任意子目录新增内容时，遵循：

**[knowledge-writing.md](./knowledge-writing.md)**

要点：
- **目录归属**：先确认是 `prd/` `plan/` `tech/` `conversation/` `business-flow/` `release/` `others/` 中哪一个；不能归属时进入 `others/`，但每月梳理。
- **文件命名**：`YYYY-MM-DD-中文短主题.md` 或 `<模块名>-<类型>.md`。
- **结尾必填关键词行**：用 `> 关键词:` 一行写明检索词。

---

## 3. 规则编写规范

新增 / 修改 `rules/*.md` 或 `.cursor/rules/*.mdc` 时，遵循：

**[rules-writing.md](./rules-writing.md)**

要点：每条规则必须有"为什么这条规则存在"，避免无依据的禁令。

---

## 4. AI 辅助编码行为规范

使用 Cursor / AI Agent 进行编码、评审或重构时，遵循：

**[ai-coding-behavior.md](./ai-coding-behavior.md)**

要点：编码前先澄清、简洁优先、精准修改、目标驱动执行。自动生效版本同步维护在 `.cursor/rules/karpathy-guidelines.mdc`。

---

## 5. 输出格式约定

代码、文档、对话归档的格式约定见：

**[output-format.md](./output-format.md)**

要点：
- markdown 文件统一使用 frontmatter（owner / tags / related）
- 文件命名带日期前缀
- 复杂任务先结论再步骤

---

## 6. 不绑定单一工具

任何资产（规则、Prompt、Snippet、组件）都应能输出 ≥ 2 种工具的原生格式：

- `.cursor/rules/*.mdc`（Cursor）
- `AGENTS.md`（Codex）
- `CLAUDE.md`（Claude Code）
- 通用 `prompt.txt`（任意 LLM）

详见 `knowledge/tech/不绑定工具的导出标准.md`。

---

## 7. markdown 是真源

- TeamWiki Web（`teamwiki/<module>/index.html`）只是**视图层**，不存储数据。
- 所有内容以 `.md` 留在 git，可被任意工具读取、迁移、版本化。
- 禁止把数据写在数据库 / KV 而绕过 git；少数索引可以缓存，但源必须可重建。
