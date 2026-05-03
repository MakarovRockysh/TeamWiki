# 输出格式约定

## 1. Markdown 文件

### 1.1 frontmatter（建议但非强制）

`knowledge/` 下的内容文件可在头部加 yaml frontmatter，便于未来 Wiki Web 自动索引：

```markdown
---
owner: mzli
tags: [架构, 数据模型]
related:
  - knowledge/prd/4层架构与模块清单-PRD.md
  - knowledge/conversation/2026-05-03-Sprint1主壳搭建过程.md
updated: 2026-05-03
---

# 标题
...
```

字段说明：
- `owner` 必填（个人 git 用户名 / 团队角色）
- `tags` 可选，用数组
- `related` 可选，写明与之有强关联的其他文件路径（用于关系图谱）
- `updated` 可选；最佳由 git 自动维护

### 1.2 文件命名

| 类型 | 格式 |
|------|------|
| 对话归档 | `YYYY-MM-DD-中文短主题.md` |
| PRD | `<模块名>-PRD.md` 或 `<模块名>-<子主题>.md` |
| 计划 | `<主题>.md`（如 `Sprint路线图.md`） |
| 技术方案 | `<主题>.md`（按内容命名） |
| 发布说明 | `RELEASE_YYYY-MM-DD_<标题>.md` |

避免空格 / 特殊字符；中英文均可，但跨工具兼容性建议英文 slug。

### 1.3 结尾关键词行

每个 `.md` 结尾**强烈建议**有一行：

```
> 关键词: word1, word2, 中文词1, 中文词2, ...
```

便于 grep 搜索与 LLM 识别。

## 2. 代码

- 引用已有代码时使用项目约定的代码引用格式（带行号与路径）
- 提交前保证 `python3 -m http.server 8088` 能起，13 个路由 200
- 不在无关文件中"顺手整理"

## 3. 对话归档

详见 `knowledge/conversation/README.md`。重点：

- 触发：用户口头说「对话归档」「记一下」
- 位置：**仅** `knowledge/conversation/`
- 结构：标题 / 结论 / 涉及文件 / 检索关键词
- 不覆盖已有归档（除非明确要求）

## 4. 回复结构（AI 给用户的）

- **复杂任务**：先结论 → 再列步骤 → 最后给命令
- **简单任务**：一句话即可，避免铺垫
- 涉及文件路径时使用反引号包裹便于点击
- 复制粘贴的命令必须可直接执行（不要带 `$` 前缀）

## 5. 工具特定输出

- **Cursor 规则** → `.cursor/rules/*.mdc`
- **Codex** → `AGENTS.md`
- **Claude Code** → `CLAUDE.md`
- **通用 prompt** → 纯文本，去除 markdown 语法

详细映射见 `knowledge/tech/不绑定工具的导出标准.md`。

## 关键词

> 输出格式, frontmatter, 文件命名, 关键词行, 对话归档, 回复结构
