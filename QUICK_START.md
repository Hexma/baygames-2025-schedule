# 🚀 快速启动指南

## 启动应用

### 方式1：开发模式（推荐用于测试）

```bash
cd /Users/shenguozu/workspace/ac-playground/games-schedule
npm start
```

- 自动打开浏览器
- 支持热重载
- 默认端口: http://localhost:3000

### 方式2：生产模式

```bash
cd /Users/shenguozu/workspace/ac-playground/games-schedule
npm run build
npm install -g serve
serve -s build
```

## 手机测试

### 在本地手机上查看

1. 获取您的电脑IP地址（macOS）:
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

2. 在手机浏览器中访问: `http://<您的IP>:3000`

### 使用Chrome浏览器开发者工具模拟手机

1. 按 `F12` 打开开发者工具
2. 点击"切换设备工具栏"（快捷键：`Ctrl+Shift+M` 或 `Cmd+Shift+M`）
3. 选择手机设备进行测试

## 项目功能演示

### 主要功能

✅ **查看赛程**
- 按日期组织的赛事列表
- 包含6天的示例赛程

✅ **过滤运动项目**
- 点击顶部的运动项目按钮进行过滤
- 支持"全部"选项显示所有赛事

✅ **查看赛事详情**
- 赛事名称和类别
- 开始时间和场馆
- 完成赛事显示金牌得主和成绩

### 赛事状态说明

| 状态 | 颜色 | 含义 |
|-----|------|------|
| 已完成 | 🟢 绿 | 赛事已结束，有成绩 |
| 待进行 | 🔵 蓝 | 即将进行的赛事 |
| 进行中 | 🟠 橙 | 正在进行的赛事 |
| 已取消 | ⚫ 灰 | 已取消的赛事 |

## 数据修改

### 更新赛程数据

编辑文件: `src/data/scheduleData.js`

```javascript
export const scheduleData = [
  {
    date: '2025-06-15',
    day: 'Sunday',
    events: [
      {
        id: 1,
        sport: '田径',
        event: "男子100米",
        time: '10:00',
        venue: '主体育场',
        status: 'Completed',
        goldMedal: '中国',
        record: '9.99秒'
      },
      // ... 更多赛事
    ]
  },
  // ... 更多日期
];
```

### 添加新的运动项目

在 `src/data/scheduleData.js` 中修改 `sportCategories` 数组:

```javascript
export const sportCategories = [
  'All',
  '田径',
  '游泳',
  // ... 添加新项目
  '您的新项目'
];
```

## 文件结构说明

```
games-schedule/
├── public/
│   └── index.html          # HTML入口文件
├── src/
│   ├── data/
│   │   └── scheduleData.js # 赛程数据
│   ├── App.js              # 主应用组件
│   ├── App.css             # 应用样式
│   └── index.js            # React入口
├── build/                  # 生产构建输出
├── package.json            # 项目配置
└── README.md               # 完整文档
```

## 常见问题

**Q: 如何在手机上测试？**
A: 在开发模式下，获取电脑IP地址，在手机浏览器中输入 `http://<IP>:3000`

**Q: 如何修改赛程数据？**
A: 编辑 `src/data/scheduleData.js` 文件中的数据

**Q: 如何添加新的运动项目？**
A: 在 `scheduleData.js` 中的 `sportCategories` 数组中添加新项目

**Q: 应用支持哪些浏览器？**
A: Chrome, Firefox, Safari, Edge（所有现代浏览器）

## 性能优化建议

- 减少赛事数据条数（当前示例有18条）
- 使用虚拟列表处理大量数据
- 启用生产构建进行部署
- 使用CDN加快资源加载

## 数据格式说明

### 赛事状态

- `Completed` - 已完成
- `Scheduled` - 待进行
- `Ongoing` - 进行中
- `Cancelled` - 已取消

### 日期格式

- 使用 `YYYY-MM-DD` 格式（例如：2025-06-15）

### 时间格式

- 使用 `HH:MM` 24小时格式（例如：14:30）

## 联系方式

如有问题，请查看 README.md 获取更多信息。
