# knowledge · 项目沉淀

| 目录 | 用途 |
|------|------|
| `prd/`           | TeamWiki 自身的 PRD（产品需求、字段说明、迭代清单） |
| `plan/`          | 建设方案 / Sprint 路线图 / 跨阶段执行计划 |
| `tech/`          | 技术决策、架构、数据模型、跨工具导出标准 |
| `business-flow/` | 业务流程（功能视角全链路、Wiki 自身的工作流） |
| `conversation/`  | 关键讨论与背景的对话归档（详见目录内 README） |
| `release/`       | 版本发布说明 / Sprint 收尾 |
| `others/`        | 临时素材、外部参考资料、暂未归类的内容 |

项目根目录 **`rules/`** 为协作与输出规范（`general.md`、`ui-design.md`、`output-format.md`、`knowledge-writing.md`、`rules-writing.md`、`ai-coding-behavior.md`）。Cursor 自动规则见 **`.cursor/rules/`**。

## 设计原则

- **Markdown 是真源**：所有沉淀都以 `.md` 文件存在 git，TeamWiki Web 只是视图层。换工具、个人迁移、团队分叉都成立。
- **每条都能被搜到**：写入新文件时尽量在结尾加一行 `> 关键词:` 帮助 grep 与全文搜索。
- **文件名带日期前缀** `YYYY-MM-DD-` 便于排序与索引（除非是常驻文档，如 `prd/项目基础包构建器-PRD.md`）。
- **frontmatter 可选**：用于 Wiki Web 的元信息（owner / tags / related），不强制。详见 `rules/output-format.md`。
