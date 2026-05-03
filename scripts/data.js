/* ============================================
   TeamWiki · 全局数据（示例）
   各模块从 window.WIKI 取数
   ============================================ */
window.WIKI = {
  brand: { name: 'TeamWiki', sub: 'TEAM · 2026', tagline: '团队第二大脑' },

  // 4 层 + 模块清单
  layers: [
    {
      id: 'asset', name: '资产层', en: 'ASSETS',
      color: 'var(--layer-asset)',
      desc: '拿了就能用的现成东西。复制 / 下载 / 应用。',
      mods: ['tools', 'rules', 'components', 'prompts', 'snippets', 'builder'],
    },
    {
      id: 'sediment', name: '沉淀层', en: 'SEDIMENT',
      color: 'var(--layer-sediment)',
      desc: '项目过程中真实留下来的脚印。翻阅 / 引用 / 学习。',
      mods: ['cases', 'knowledge'],
    },
    {
      id: 'practice', name: '实践层', en: 'PRACTICE',
      color: 'var(--layer-practice)',
      desc: '接进工作流的入口。触发 / 配置 / 监控。',
      mods: ['usage', 'agents'],
    },
    {
      id: 'meta', name: '元层', en: 'META',
      color: 'var(--layer-meta)',
      desc: '让 wiki 活下去的机制。探索 / 治理 / 关系。',
      mods: ['search', 'graph', 'people'],
    },
  ],

  // 所有模块
  modules: {
    tools:      { name: '工具仓',     en: 'Tools',      icon: 'TL', color: 'var(--c-tools)',   path: '/tools/',      count: 9 },
    rules:      { name: '规则仓',     en: 'Rules',      icon: 'RL', color: 'var(--c-rules)',   path: '/rules/',      count: 4 },
    components: { name: '组件仓',     en: 'Components', icon: 'CP', color: 'var(--c-comp)',    path: '/components/', count: 12 },
    prompts:    { name: 'Prompt 仓',  en: 'Prompts',    icon: 'PR', color: 'var(--c-prompt)',  path: '/prompts/',    count: 18 },
    snippets:   { name: '代码片段',   en: 'Snippets',   icon: 'SN', color: 'var(--c-snippet)', path: '/snippets/',   count: 24 },
    builder:    { name: '基础包构建', en: 'Builder',    icon: 'BD', color: 'var(--c-build)',   path: '/builder/',    count: '✦' },
    cases:      { name: '实战案例',   en: 'Cases',      icon: 'CS', color: 'var(--c-case)',    path: '/cases/',      count: 6 },
    knowledge:  { name: '知识库',     en: 'Knowledge',  icon: 'KN', color: 'var(--c-know)',    path: '/knowledge/',  count: 32 },
    usage:      { name: '使用说明',   en: 'Usage',      icon: 'US', color: 'var(--c-usage)',   path: '/usage/',      count: 8 },
    agents:     { name: 'Agent',      en: 'Agents',     icon: 'AG', color: 'var(--c-agent)',   path: '/agents/',     count: 3 },
    search:     { name: '全局搜索',   en: 'Search',     icon: 'SR', color: 'var(--c-search)',  path: '/search/',     count: '⌕' },
    graph:      { name: '关系图谱',   en: 'Graph',      icon: 'GR', color: 'var(--c-graph)',   path: '/graph/',      count: '◉' },
    people:     { name: '贡献者',     en: 'People',     icon: 'PE', color: 'var(--c-people)',  path: '/people/',     count: 4 },
  },

  // ===== 各模块示例数据 =====
  tools: [
    { num: '01', name: 'Cursor CLI',         tag: '终端编程',   desc: '在终端里和 AI 结对编程，批量改动 / 重构 / 重命名。',                 owner: 'mzli',  used: 'High' },
    { num: '02', name: 'step1.dev',          tag: '页面生成',   desc: '一句话描述，页面就出来。从草稿到成稿快速迭代。',                  owner: 'mzli',  used: 'Med'  },
    { num: '03', name: 'Cloudflare',         tag: '边缘部署',   desc: '全球 CDN + Pages 静态托管 + R2 + 零信任安全，一站式。',          owner: 'team',  used: 'High' },
    { num: '04', name: 'next-ai-drawio',     tag: '架构图',     desc: '基于 Next.js + draw.io，AI 辅助生成 / 编辑流程图与架构图。',       owner: 'team',  used: 'Med'  },
    { num: '05', name: 'awesome-design-md',  tag: '设计资产',   desc: '一份给 AI 看的设计说明书。统一 AI 输出 UI 的设计语言。',          owner: 'team',  used: 'Med'  },
    { num: '06', name: 'andrej-karpathy-skills', tag: '方法论', desc: '把方法论变成可复用的技能，让 AI 输出更稳定、可控。',              owner: 'mzli',  used: 'Low'  },
    { num: '07', name: 'ai-website-cloner',  tag: '项目脚手架', desc: '网站克隆 / 复刻方向的模板工程，对齐技术栈。',                       owner: 'team',  used: 'Med'  },
    { num: '08', name: 'gamma.app',          tag: '演示生成',   desc: 'AI 生成演示文稿与文档，自动排版与结构化表达。',                    owner: 'mzli',  used: 'High' },
    { num: '09', name: 'page-agent',         tag: '页面自动化', desc: '让 AI 在浏览器里自动操作页面，做演示或自动化任务。',               owner: 'team',  used: 'Low'  },
  ],

  rules: [
    { num: 'R01', name: '设计规范',  scope: 'design', desc: '颜色 / 间距 / 圆角 / 阴影 / 状态变化的统一规范。',                       updated: '2026.04.18', tags: ['UI','tokens']  },
    { num: 'R02', name: 'PRD 规范',  scope: 'prd',    desc: 'PRD 文档结构、字段、版本、可追溯性的强制约束。',                          updated: '2026.04.20', tags: ['流程']         },
    { num: 'R03', name: '输出规范',  scope: 'output', desc: 'AI 输出代码的命名、格式、注释、错误处理标准。',                            updated: '2026.04.22', tags: ['AI','代码']    },
    { num: 'R04', name: '编码规范',  scope: 'code',   desc: '目录结构、import 顺序、组件拆分、可读性约定。',                            updated: '2026.04.25', tags: ['代码']         },
  ],

  components: [
    { name: 'GlassCard',   tag: 'UI',      desc: '液态玻璃材质卡片，带 hover 光斑',           uses: 14 },
    { name: 'PillButton',  tag: 'UI',      desc: '胶囊按钮，支持 primary / ghost / icon',     uses: 22 },
    { name: 'PageHead',    tag: 'UI',      desc: '页面头部 + 面包屑 + 工具栏',                 uses: 9  },
    { name: 'CardGrid',    tag: 'UI',      desc: '响应式网格，3-col 自动 fallback',            uses: 11 },
    { name: 'StatBar',     tag: 'UI',      desc: '4 列指标条，移动端 2 列',                    uses: 6  },
    { name: 'Toast',       tag: 'UI',      desc: '底部居中浮动 toast，带 in/out 动画',         uses: 7  },
    { name: 'useCopy()',   tag: 'Hook',    desc: '一键复制到剪贴板 + Toast 提示',              uses: 18 },
    { name: 'useTheme()',  tag: 'Hook',    desc: '深 / 浅色主题 + 系统跟随',                   uses: 5  },
    { name: 'useDebounce()',tag: 'Hook',   desc: '常用 debounce hook，默认 300ms',             uses: 12 },
    { name: 'fetchWithRetry', tag: 'Util', desc: '带指数退避的 fetch 包装',                    uses: 8  },
    { name: 'parseFrontmatter', tag: 'Util', desc: '解析 markdown frontmatter (yaml)',          uses: 3  },
    { name: 'formatRelative',tag: 'Util',  desc: '相对时间格式化（"3 天前"）',                  uses: 16 },
  ],

  prompts: [
    { name: '需求拆解',     scene: 'PRD',    desc: '把一段口语需求拆成结构化的功能 / 异常 / 验收标准。', model: 'any', uses: 24 },
    { name: '原型生成',     scene: '设计',   desc: '从需求生成可点击高保真原型的步骤化提示。',           model: 'any', uses: 18 },
    { name: '代码 review',  scene: '编码',   desc: '审视代码的命名 / 健壮性 / 边界 / 可读性。',          model: 'any', uses: 30 },
    { name: '错误诊断',     scene: '编码',   desc: '从堆栈和上下文中定位根因，给出最小修复。',           model: 'any', uses: 22 },
    { name: '测试用例生成', scene: '测试',   desc: '基于 PRD 和接口契约批量产出用例。',                  model: 'any', uses: 11 },
    { name: '会议纪要',     scene: '协作',   desc: '把会议录音文本归纳为决策 / TODO / 风险。',           model: 'any', uses: 9  },
    { name: '日志分析',     scene: '运维',   desc: '从一堆日志里抓出异常模式和高频错误。',               model: 'any', uses: 7  },
    { name: '文档撰写',     scene: '文档',   desc: '把代码 / 设计转化为面向不同读者的文档。',            model: 'any', uses: 13 },
  ],

  snippets: [
    { name: 'CSS · 液态玻璃材质', lang: 'css',  desc: '可复用的 backdrop-filter + radial-gradient 玻璃材质' },
    { name: 'CSS · 浮动光斑背景', lang: 'css',  desc: '4 个高斯模糊圆斑 + 网格 mask' },
    { name: 'TS · 防抖 hook',     lang: 'ts',   desc: 'useDebounce<T>() 通用版本' },
    { name: 'TS · 一键复制',      lang: 'ts',   desc: 'navigator.clipboard 兼容 fallback' },
    { name: 'JS · localStorage namespace', lang: 'js', desc: '按 key 前缀隔离的存储 wrapper' },
    { name: 'Shell · 批量重命名', lang: 'sh',   desc: 'mmv 风格的批量 rename，支持 dry-run' },
    { name: 'Python · markdown 索引', lang: 'py', desc: '扫描目录生成 markdown 文件索引 JSON' },
    { name: 'SQL · 慢查询定位',   lang: 'sql',  desc: 'PostgreSQL 慢查询 top 20 + 解释' },
  ],

  builderOptions: {
    stack:   [ { id: 'next',   label: 'Next.js' },
               { id: 'astro',  label: 'Astro' },
               { id: 'vite',   label: 'Vite + React' },
               { id: 'static', label: 'Static HTML' } ],
    style:   [ { id: 'glass',   label: 'Liquid Glass' },
               { id: 'neutral', label: 'Neutral / Minimal' },
               { id: 'brand',   label: '公司品牌色' } ],
    rules:   [ { id: 'design',   label: '设计规范' },
               { id: 'prd',      label: 'PRD 规范' },
               { id: 'output',   label: '输出规范' },
               { id: 'code',     label: '编码规范' } ],
    targets: [ { id: 'cursor',   label: '.cursor/rules/*.mdc' },
               { id: 'agents',   label: 'AGENTS.md (Codex)' },
               { id: 'claude',   label: 'CLAUDE.md (Claude Code)' },
               { id: 'plain',    label: '通用 prompt.txt' } ],
  },

  cases: [
    { name: 'AI 开发转型 6 周复盘',         scope: '团队级',  result: '效率 ≈ 70%', date: '2026.04.30', owner: 'mzli' },
    { name: '基础设施模块化重构',           scope: '工程',    result: '部署时间 -55%', date: '2026.04.10', owner: 'team' },
    { name: '原型先行：从描述到点击',       scope: '产研',    result: '需求确认 1 轮', date: '2026.04.05', owner: 'pm'   },
    { name: 'Cursor + DeepSeek 接入实践',   scope: '工具',    result: 'Token 成本 -80%', date: '2026.03.28', owner: 'mzli' },
    { name: 'AI 视频后期：HDR → SDR 流水线', scope: '内容',    result: '出片 4× 提速', date: '2026.03.20', owner: 'mzli' },
    { name: '组件库统一：4 项目 → 1 包',    scope: '工程',    result: '维护成本 -60%', date: '2026.03.12', owner: 'team' },
  ],

  knowledge: [
    { stage: 'meeting',   name: '2026.04.28 周会·AI 工作流统一',  tags: ['决策','流程'], updated: '4 天前' },
    { stage: 'meeting',   name: '2026.04.21 立项·知识库系统化',   tags: ['立项'],        updated: '11 天前' },
    { stage: 'prd',       name: 'PRD · 项目基础包构建器 v1',       tags: ['新需求'],      updated: '1 天前' },
    { stage: 'prd',       name: 'PRD · 知识库 Wiki 视图 v0.3',      tags: ['迭代'],        updated: '3 天前' },
    { stage: 'prototype', name: '原型 · TeamWiki 首页 v2',          tags: ['UI'],          updated: '1 天前' },
    { stage: 'prototype', name: '流程 · 项目新建基础包',            tags: ['流程'],        updated: '2 天前' },
    { stage: 'dialogue',  name: 'AI 对话 · 第三页改造的脑暴过程',   tags: ['原始素材'],    updated: '3 小时前' },
    { stage: 'pitfall',   name: '踩坑 · DeepSeek 不支持 image_url', tags: ['工具兼容'],    updated: '6 天前' },
  ],

  usage: [
    { name: 'Cursor + DeepSeek 接入',      time: '5 min', desc: '从 0 到 1 配置 DeepSeek 走 OpenAI-compat 接口' },
    { name: 'Claude Code + DeepSeek',      time: '4 min', desc: 'ANTHROPIC_BASE_URL 写法与冲突排查' },
    { name: '项目基础包：拉下来 → 跑起来', time: '3 min', desc: '从勾选页 / git clone / cursor 拉取的三种姿势' },
    { name: '规则库怎么写一条新规则',      time: '6 min', desc: 'frontmatter / 文件命名 / 适用范围 / 优先级' },
    { name: '会议纪要自动归档（Bot）',     time: '8 min', desc: '飞书 / 微信机器人对接知识库自动写入' },
    { name: 'Cursor CLI 进驻服务器',       time: '10 min',desc: '把 CLI 部署到生产服务器做日志监控' },
    { name: '一键导出多工具配置',          time: '2 min', desc: '同一份知识库 → Cursor / Codex / Claude 三套' },
    { name: '快捷键全集',                  time: '1 min', desc: 'TeamWiki 内置的所有快捷键速查' },
  ],

  agents: [
    { name: '知识库 Agent',  status: '设计中', desc: '定时扫描原始 markdown 文件，建立实体与关系索引，更新到 Wiki 视图。' },
    { name: '测试 Agent',    status: '试点中', desc: '聚合 PRD / 详设 / 接口契约，按测试范围批量生成用例与脚本。' },
    { name: '运营 Agent',    status: '设计中', desc: 'Cursor CLI 进驻服务器，监控运行状态，异常日志自动告警。' },
  ],

  people: [
    { name: 'mzli',  role: '主创 / 知识库 / 规则库',     contrib: 124 },
    { name: 'team',  role: '团队公共账号（多人协作）',    contrib: 87  },
    { name: 'pm',    role: '产品 / PRD / 原型',          contrib: 35  },
    { name: 'qa',    role: '测试 / 测试 Agent 接入',      contrib: 12  },
  ],
};
