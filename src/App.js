import React, { useState } from 'react';
import './App.css';

function App() {
  // 日期配置 (文件名 => 显示信息)
  const dates = [
    { id: '1114', label: '11月14日', fullLabel: '11月14日 星期五' },
    { id: '1115', label: '11月15日', fullLabel: '11月15日 星期六' },
    { id: '1116', label: '11月16日', fullLabel: '11月16日 星期日' },
    { id: '1117', label: '11月17日', fullLabel: '11月17日 星期一' },
    { id: '1118', label: '11月18日', fullLabel: '11月18日 星期二' },
    { id: '1119', label: '11月19日', fullLabel: '11月19日 星期三' },
    { id: '1120', label: '11月20日', fullLabel: '11月20日 星期四' }
  ];

  // 根据当前日期自动选择对应的tab
  const getInitialDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1; // 月份 (1-12)
    const day = today.getDate(); // 日期 (1-31)
    
    // 检查是否在11月14-20日范围内
    if (month === 11 && day >= 14 && day <= 20) {
      return `11${day}`; // 返回格式如 1114, 1115, ...
    }
    
    // 如果不在范围内，默认返回11月14日
    return '1114';
  };

  const [selectedDate, setSelectedDate] = useState(getInitialDate);

  // 获取当前选中日期的信息
  const currentDateInfo = dates.find(d => d.id === selectedDate);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>🏅 2025全运会</h1>
          <p>金牌赛赛程</p>
        </div>
      </header>

      {/* 日期tab切换 */}
      <nav className="date-tabs">
        <div className="tabs-container">
          {dates.map(date => (
            <button
              key={date.id}
              className={`date-tab ${selectedDate === date.id ? 'active' : ''}`}
              onClick={() => setSelectedDate(date.id)}
            >
              {date.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="schedule-container">
        <div className="date-header">
          <h2>{currentDateInfo?.fullLabel}</h2>
        </div>
        
        {/* 显示赛程图片 */}
        <div className="schedule-image-wrapper">
          <img 
            src={`/${selectedDate}.jpg`} 
            alt={`${selectedDate}赛程`}
            className="schedule-image"
          />
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2025 中国全运会 | 金牌赛赛程</p>
      </footer>
    </div>
  );
}

export default App;
