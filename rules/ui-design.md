# UI 设计规范（TeamWiki · Liquid Glass）

本规范用于约束 TeamWiki 所有页面的视觉与交互一致性，沿用 `idea_share_html` 的 Apple / visionOS 液态玻璃风格。

## 1. 色板（来自 `styles/base.css :root`）

### 基础色
- `--bg: #050507` 主背景
- `--ink: #f5f5f7` 主文字
- `--ink-2: rgba(245,245,247,0.72)` 次文字
- `--ink-3: rgba(245,245,247,0.48)` 弱文字
- `--line: rgba(255,255,255,0.08)` 弱描边
- `--line-2: rgba(255,255,255,0.14)` 普通描边
- `--blue: #0a84ff` / `--blue-2: #2997ff` Apple Blue 主品牌色

### 4 层架构色
- `--layer-asset: #5e9bff`     资产层（蓝）
- `--layer-sediment: #ff7ab6`  沉淀层（粉）
- `--layer-practice: #6ad4a3`  实践层（绿）
- `--layer-meta: #ffd166`      元层（金）

### 模块强调色（13 个，每个模块一个）
见 `:root` 中 `--c-tools / --c-rules / --c-comp ...`

**禁止**新增不在上述色板中的色值；如必须新增，先讨论再写入 `:root`。

## 2. 字体

- 主字体：`Inter`（Google Fonts），中文 fallback `PingFang SC`
- Mono：`JetBrains Mono`，用于编号 / icon / 数据 / 代码
- 全局基础 `font-size: 15px`，`line-height: 1.55`，`letter-spacing: -0.01em`

## 3. 圆角与阴影

- `--radius: 22px`（卡片、玻璃面板）
- `--radius-sm: 14px`（次级卡片、列表块）
- `--radius-xs: 10px`（小按钮、option）
- 阴影**仅**用 `.glass` 内置的三层阴影组合，**禁止** `shadow-lg` 之类自由发挥
- 卡片悬浮时 `transform: translateY(-3px)` + `border-color` 微亮，禁止旋转 / 缩放

## 4. 液态玻璃材质（核心样式）

```css
.glass {
  background: rgba(20, 22, 30, 0.45);
  backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.10);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.18),
    inset 0 -1px 0 rgba(0,0,0,0.25),
    0 20px 50px rgba(0,0,0,0.45);
}
```

新增半透明面板**必须**复用 `.glass` 或 `.glass-light`；禁止自写 backdrop-filter。

## 5. 布局

- 内容区最大宽度 1280px
- Sidebar 宽 220px，固定在视窗左侧（响应式 < 1100px 时隐藏）
- 顶部 nav 浮动胶囊，居中，最小宽 720px
- 移动端 (`< 1100px`) 自动单列，sidebar 隐藏，main 满宽

## 6. 组件分级

### 按钮
- `.btn` 普通胶囊按钮
- `.btn-primary` 主操作（渐变蓝 + 投影）
- `.btn-ghost` 次要操作（透明 + 弱描边）
- `.btn-icon` 圆形小按钮

**每个 section 至多 1 个 `.btn-primary`**，避免视觉竞争。

### 卡片
- `.card` 通用模块卡（hover 轻微上移）
- 卡片头部：`.mono`（彩色 icon）+ `.card-title` + `.card-tag`
- 卡片底部：`.card-foot`（.meta + .actions），上方虚线分隔

### 列表
- `.list` 容器 + `.list-row` 行
- 三列网格：主信息 / 元数据 / 操作
- 行间用 `var(--line)` 分隔，hover 仅背景微亮

### 4 层入口（首页）
- `.layer` 玻璃面板，顶部 3px 彩条用 `--layer-color`
- 内含若干 `.layer-mod`，每个模块一个胶囊

## 7. Toast

唯一的全局反馈方式：`window.toast(msg)`

- 出现位置：`bottom: 32px`，居中
- 持续 1.8 秒后自动消失
- **禁止**使用 `alert()` / `confirm()`

## 8. 状态变化

- 所有 hover / active / focus 过渡时长 `0.18s ~ 0.3s`，缓动 `cubic-bezier(0.2,0.8,0.2,1)`
- **禁止**使用线性缓动 `linear`
- 禁用 `pointer-events: auto/none` 之外的鼠标样式黑魔法

## 9. 禁止事项

- ❌ 新增未在 `:root` 定义的颜色
- ❌ 自写 `backdrop-filter`，必须复用 `.glass*`
- ❌ 使用 `alert()` / `confirm()` / `prompt()`
- ❌ 卡片旋转 / 大幅缩放等夸张动效
- ❌ 任何 `!important`（除调试以外）
- ❌ 内联颜色 / 字号（应通过 class）

## 10. 例外

需要例外时，在 PR 描述里写明原因。例外不应成为新规则，每月评审一次清理。

## 关键词

> ui, 液态玻璃, liquid glass, color tokens, 字体, 圆角, btn, card, list, layer, toast
