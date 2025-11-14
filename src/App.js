import React, { useState } from 'react';
import { scheduleData, sportCategories, statusColors } from './data/scheduleData';
import './App.css';
function App() {
  const [selectedSport, setSelectedSport] = useState('All');

  const getFilteredEvents = () => {
    if (selectedSport === 'All') {
      return scheduleData;
    }
    
    return scheduleData.map(dayData => ({
      ...dayData,
      events: dayData.events.filter(event => event.sport === selectedSport)
    })).filter(dayData => dayData.events.length > 0);
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  };

  const filteredData = getFilteredEvents();

  const getDayNameCN = (day) => {
    const dayNames = {
      'Sunday': '星期日',
      'Monday': '星期一',
      'Tuesday': '星期二',
      'Wednesday': '星期三',
      'Thursday': '星期四',
      'Friday': '星期五',
      'Saturday': '星期六'
    };
    return dayNames[day] || day;
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>🏅 2025全运会</h1>
          <p>金牌赛赛程</p>
        </div>
      </header>

      <nav className="sport-filter">
        <div className="filter-title">选择运动项目</div>
        <div className="filter-buttons">
          {sportCategories.map(sport => (
            <button
              key={sport}
              className={`filter-btn ${selectedSport === sport ? 'active' : ''}`}
              onClick={() => setSelectedSport(sport)}
            >
              {sport === 'All' ? '全部' : sport}
            </button>
          ))}
        </div>
      </nav>

      <main className="schedule-container">
        {filteredData.length === 0 ? (
          <div className="empty-state">
            <p>暂无赛程</p>
          </div>
        ) : (
          filteredData.map(dayData => (
            <section key={dayData.date} className="day-section">
              <div className="day-header">
                <div className="date-info">
                  <span className="date">{formatDate(dayData.date)}</span>
                  <span className="day">{getDayNameCN(dayData.day)}</span>
                </div>
              </div>

              <div className="events-list">
                {dayData.events.map(event => (
                  <div key={event.id} className="event-card">
                    <div className="event-header">
                      <div className="event-info">
                        <h3 className="event-title">{event.event}</h3>
                        <p className="event-sport">{event.sport}</p>
                      </div>
                      <div className="event-status">
                        <span
                          className="status-badge"
                          style={{ backgroundColor: statusColors[event.status] }}
                        >
                          {event.status === 'Completed' ? '已完成' :
                           event.status === 'Scheduled' ? '待进行' :
                           event.status === 'Ongoing' ? '进行中' : '已取消'}
                        </span>
                      </div>
                    </div>

                    <div className="event-details">
                      <div className="detail-item">
                        <span className="label">⏰ 时间</span>
                        <span className="value">{event.time}</span>
                      </div>
                      <div className="detail-item">
                        <span className="label">📍 场馆</span>
                        <span className="value">{event.venue}</span>
                      </div>
                      {event.status === 'Completed' && (
                        <>
                          <div className="detail-item">
                            <span className="label">🥇 金牌</span>
                            <span className="value">{event.goldMedal}</span>
                          </div>
                          <div className="detail-item">
                            <span className="label">⚡ 成绩</span>
                            <span className="value record">{event.record}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </main>

      <footer className="app-footer">
        <p>© 2025 中国全运会 | 金牌赛赛程</p>
      </footer>
    </div>
  );
}

export default App;
