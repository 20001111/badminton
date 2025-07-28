import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Clock, Check, X, Plus, Edit, Trash2, Search, Filter, User, LogOut, BarChart3, Bell, ChevronLeft, ChevronRight, Settings, Mail } from 'lucide-react';

const BadmintonBookingSystem = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);

  // データ管理（実際にはデータベースと連携）
  const [users, setUsers] = useState([
    { id: 1, name: '田中太郎', email: 'tanaka@example.com', role: 'admin', password: 'admin123' },
    { id: 2, name: '佐藤花子', email: 'sato@example.com', role: 'user', password: 'user123' },
    { id: 3, name: '山田次郎', email: 'yamada@example.com', role: 'user', password: 'user123' }
  ]);

  const [events, setEvents] = useState({
    '2025-07-29': [
      {
        id: 1,
        title: '初心者練習会',
        time: '19:00-21:00',
        location: '体育館A',
        capacity: 16,
        category: 'practice',
        price: 500,
        description: 'バドミントン初心者向けの練習会です。基本動作から丁寧に指導します。',
        participants: [{ userId: 2, name: '佐藤花子', bookedAt: '2025-07-25T10:00:00Z' }],
        waitingList: []
      }
    ],
    '2025-07-30': [
      {
        id: 2,
        title: '上級者ゲーム練習',
        time: '18:30-20:30',
        location: '体育館B',
        capacity: 2,
        category: 'advanced',
        price: 800,
        description: '上級者向けのゲーム中心の練習会です。',
        participants: [
          { userId: 2, name: '佐藤花子', bookedAt: '2025-07-26T15:00:00Z' },
          { userId: 3, name: '山田次郎', bookedAt: '2025-07-26T16:00:00Z' }
        ],
        waitingList: []
      }
    ],
    '2025-08-01': [
      {
        id: 3,
        title: 'ミックスダブルス練習',
        time: '19:00-21:00',
        location: '体育館A',
        capacity: 20,
        category: 'doubles',
        price: 600,
        description: 'ミックスダブルスの戦術練習を行います。',
        participants: [],
        waitingList: []
      }
    ],
    '2025-08-03': [
      {
        id: 4,
        title: '週末トーナメント',
        time: '14:00-18:00',
        location: '体育館C',
        capacity: 32,
        category: 'tournament',
        price: 1200,
        description: '月例トーナメント大会です。参加費別途必要。',
        participants: [],
        waitingList: []
      }
    ],
    '2025-08-05': [
      {
        id: 5,
        title: 'ジュニア練習会',
        time: '17:00-19:00',
        location: '体育館A',
        capacity: 16,
        category: 'junior',
        price: 300,
        description: '中高生向けの練習会です。',
        participants: [],
        waitingList: []
      }
    ]
  });

  const [notifications, setNotifications] = useState([]);

  const categories = {
    all: 'すべて',
    practice: '練習会',
    advanced: '上級者',
    doubles: 'ダブルス',
    tournament: 'トーナメント',
    junior: 'ジュニア'
  };

  // ログイン機能
  const handleLogin = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      setShowLogin(false);
      addNotification(`${user.name}さん、ようこそ！`);
    } else {
      alert('メールアドレスまたはパスワードが間違っています');
    }
  };

  // ユーザー登録
  const handleRegister = (name, email, password) => {
    if (users.find(u => u.email === email)) {
      alert('このメールアドレスは既に登録されています');
      return;
    }
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
      role: 'user'
    };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    setShowRegister(false);
    addNotification('ユーザー登録が完了しました！');
  };

  // 通知機能
  const addNotification = (message) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, timestamp: new Date() }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  // 予約可能時間チェック
  const canBookEvent = (event) => {
    const eventDate = new Date(selectedDate + ' ' + event.time.split('-')[0]);
    const now = new Date();
    const timeDiff = eventDate.getTime() - now.getTime();
    const hoursDiff = timeDiff / (1000 * 60 * 60);
    return hoursDiff > 2;
  };

  // 予約処理
  const handleBooking = (event) => {
    if (!currentUser) {
      setShowLogin(true);
      return;
    }

    if (!canBookEvent(event)) {
      alert('イベント開始2時間前を過ぎているため予約できません');
      return;
    }

    const isAlreadyBooked = event.participants.some(p => p.userId === currentUser.id);
    
    if (isAlreadyBooked) {
      // キャンセル処理
      setPendingAction({ type: 'cancel', event });
      setShowConfirmModal(true);
    } else if (event.participants.length < event.capacity) {
      // 予約処理
      setPendingAction({ type: 'book', event });
      setShowConfirmModal(true);
    } else {
      // キャンセル待ち
      setPendingAction({ type: 'waitlist', event });  
      setShowConfirmModal(true);
    }
  };

  // 予約確定処理
  const confirmAction = () => {
    const { type, event } = pendingAction;
    const eventKey = selectedDate;
    
    setEvents(prev => {
      const newEvents = { ...prev };
      const eventList = newEvents[eventKey];
      const eventIndex = eventList.findIndex(e => e.id === event.id);
      
      if (type === 'book') {
        eventList[eventIndex].participants.push({
          userId: currentUser.id,
          name: currentUser.name,
          bookedAt: new Date().toISOString()
        });
        addNotification(`${event.title}の予約が完了しました`);
        
        // メール通知（モック）
        setTimeout(() => {
          addNotification('予約確認メールを送信しました');
        }, 1000);
        
      } else if (type === 'cancel') {
        eventList[eventIndex].participants = eventList[eventIndex].participants.filter(
          p => p.userId !== currentUser.id
        );
        
        // キャンセル待ちから自動昇格
        if (eventList[eventIndex].waitingList.length > 0) {
          const nextPerson = eventList[eventIndex].waitingList.shift();
          eventList[eventIndex].participants.push(nextPerson);
          addNotification(`キャンセル待ちの${nextPerson.name}さんが自動的に予約されました`);
        }
        
        addNotification(`${event.title}の予約をキャンセルしました`);
        
      } else if (type === 'waitlist') {
        eventList[eventIndex].waitingList.push({
          userId: currentUser.id,
          name: currentUser.name,
          bookedAt: new Date().toISOString()
        });
        addNotification(`${event.title}のキャンセル待ちに登録しました`);
      }
      
      return newEvents;
    });
    
    setShowConfirmModal(false);
    setPendingAction(null);
  };

  // イベント作成・編集
  const handleEventSubmit = (eventData) => {
    const eventKey = eventData.date;
    
    setEvents(prev => {
      const newEvents = { ...prev };
      
      if (eventData.id) {
        // 編集
        const eventList = newEvents[eventKey] || [];
        const eventIndex = eventList.findIndex(e => e.id === eventData.id);
        if (eventIndex !== -1) {
          eventList[eventIndex] = { ...eventList[eventIndex], ...eventData };
        }
      } else {
        // 新規作成
        const newEvent = {
          ...eventData,
          id: Date.now(),
          participants: [],
          waitingList: []
        };
        newEvents[eventKey] = [...(newEvents[eventKey] || []), newEvent];
      }
      
      return newEvents;
    });
    
    setShowEventForm(false);
    addNotification('イベントを保存しました');
  };

  // イベント削除
  const handleDeleteEvent = (eventId, dateKey) => {
    setEvents(prev => {
      const newEvents = { ...prev };
      newEvents[dateKey] = newEvents[dateKey].filter(e => e.id !== eventId);
      if (newEvents[dateKey].length === 0) {
        delete newEvents[dateKey];
      }
      return newEvents;
    });
    addNotification('イベントを削除しました');
  };

  // カレンダー生成
  const generateCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const calendar = [];
    const current = new Date(startDate);
    
    for (let week = 0; week < 6; week++) {
      const weekDays = [];
      for (let day = 0; day < 7; day++) {
        const dateStr = current.toISOString().split('T')[0];
        const isCurrentMonth = current.getMonth() === currentMonth;
        const isToday = current.toDateString() === new Date().toDateString();
        const dayEvents = events[dateStr] || [];
        const filteredEvents = dayEvents.filter(event => 
          filterCategory === 'all' || event.category === filterCategory
        ).filter(event =>
          searchTerm === '' || event.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        weekDays.push({
          date: new Date(current),
          dateStr,
          isCurrentMonth,
          isToday,
          hasEvents: filteredEvents.length > 0,
          eventCount: filteredEvents.length,
          day: current.getDate()
        });
        
        current.setDate(current.getDate() + 1);
      }
      calendar.push(weekDays);
    }
    
    return calendar;
  };

  // 月移動
  const changeMonth = (delta) => {
    const newDate = new Date(currentYear, currentMonth + delta, 1);
    setCurrentMonth(newDate.getMonth());
    setCurrentYear(newDate.getFullYear());
    setSelectedDate(null);
    setSelectedEvent(null);
  };

  // ユーザーの予約履歴取得
  const getUserBookings = () => {
    if (!currentUser) return [];
    
    const bookings = [];
    Object.entries(events).forEach(([date, eventList]) => {
      eventList.forEach(event => {
        const participation = event.participants.find(p => p.userId === currentUser.id);
        const waitlist = event.waitingList.find(p => p.userId === currentUser.id);
        
        if (participation || waitlist) {
          bookings.push({
            ...event,
            date,
            status: participation ? 'confirmed' : 'waiting',
            bookedAt: participation?.bookedAt || waitlist?.bookedAt
          });
        }
      });
    });
    
    return bookings.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const handleDateClick = (dateInfo) => {
    if (dateInfo.hasEvents) {
      setSelectedDate(dateInfo.dateStr);
      setSelectedEvent(null);
    }
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const calendar = generateCalendar();
  const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const dayNames = ['日', '月', '火', '水', '木', '金', '土'];

  // ログインフォーム
  const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">ログイン</h2>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="password"
              placeholder="パスワード"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
            <div className="flex gap-2">
              <button
                onClick={() => handleLogin(email, password)}
                className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                ログイン
              </button>
              <button
                onClick={() => setShowLogin(false)}
                className="flex-1 bg-gray-300 py-2 rounded-lg hover:bg-gray-400"
              >
                キャンセル
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={() => {setShowLogin(false); setShowRegister(true);}}
                className="text-blue-500 hover:underline"
              >
                新規登録はこちら
              </button>
            </div>
            <div className="text-xs text-gray-500">
              <p>テスト用アカウント:</p>
              <p>管理者: tanaka@example.com / admin123</p>
              <p>一般: sato@example.com / user123</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 登録フォーム
  const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">新規登録</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="お名前"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="password"
              placeholder="パスワード"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
            <div className="flex gap-2">
              <button
                onClick={() => handleRegister(name, email, password)}
                className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
              >
                登録
              </button>
              <button
                onClick={() => setShowRegister(false)}
                className="flex-1 bg-gray-300 py-2 rounded-lg hover:bg-gray-400"
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 確認モーダル
  const ConfirmModal = () => {
    if (!pendingAction) return null;
    
    const { type, event } = pendingAction;
    const messages = {
      book: `「${event.title}」を予約しますか？`,
      cancel: `「${event.title}」の予約をキャンセルしますか？`,
      waitlist: `「${event.title}」は満員です。キャンセル待ちに登録しますか？`
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">確認</h2>
          <p className="mb-4">{messages[type]}</p>
          <div className="flex gap-2">
            <button
              onClick={confirmAction}
              className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              はい
            </button>
            <button
              onClick={() => {setShowConfirmModal(false); setPendingAction(null);}}
              className="flex-1 bg-gray-300 py-2 rounded-lg hover:bg-gray-400"
            >
              いいえ
            </button>
          </div>
        </div>
      </div>
    );
  };

  // イベントフォーム
  const EventForm = () => {
    const [formData, setFormData] = useState({
      title: '',
      date: selectedDate || '',
      time: '',
      location: '',
      capacity: '',
      category: 'practice',
      price: '',
      description: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      handleEventSubmit({
        ...formData,
        capacity: parseInt(formData.capacity),
        price: parseInt(formData.price)
      });
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">イベント作成</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="イベント名"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="時間 (例: 19:00-21:00)"  
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="場所"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="number"
              placeholder="定員"
              value={formData.capacity}
              onChange={(e) => setFormData({...formData, capacity: e.target.value})}
              className="w-full p-3 border rounded-lg"
              required
            />
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full p-3 border rounded-lg"
            >
              <option value="practice">練習会</option>
              <option value="advanced">上級者</option>
              <option value="doubles">ダブルス</option>
              <option value="tournament">トーナメント</option>
              <option value="junior">ジュニア</option>
            </select>
            <input
              type="number"
              placeholder="参加費（円）"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              className="w-full p-3 border rounded-lg"
              required
            />
            <textarea
              placeholder="説明"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full p-3 border rounded-lg h-24"
              required
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                保存
              </button>
              <button
                type="button"
                onClick={() => setShowEventForm(false)}
                className="flex-1 bg-gray-300 py-2 rounded-lg hover:bg-gray-400"
              >
                キャンセル
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* 通知 */}
      <div className="fixed top-4 right-4 z-40 space-y-2">
        {notifications.map(notification => (
          <div key={notification.id} className="bg-green-500 text-white p-3 rounded-lg shadow-lg flex items-center gap-2">
            <Bell className="h-4 w-4" />
            {notification.message}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* ヘッダー */}
        <div className="bg-blue-600 text-white p-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                バドミントンコミュニティ予約システム
              </h1>
              <p className="mt-1 opacity-90">練習会やイベントの予約ができます</p>
            </div>
            
            <div className="flex items-center gap-2">
              {currentUser ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm">{currentUser.name}さん</span>
                  <button
                    onClick={() => setShowUserProfile(true)}
                    className="p-2 bg-blue-700 rounded-lg hover:bg-blue-800"
                  >
                    <User className="h-4 w-4" />
                  </button>
                  {currentUser.role === 'admin' && (
                    <button
                      onClick={() => setShowAdminPanel(true)}
                      className="p-2 bg-blue-700 rounded-lg hover:bg-blue-800"
                    >
                      <Settings className="h-4 w-4" />
                    </button>
                  )}
                  <button
                    onClick={() => {setCurrentUser(null); addNotification('ログアウトしました');}}
                    className="p-2 bg-blue-700 rounded-lg hover:bg-blue-800"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowLogin(true)}
                    className="px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
                  >
                    ログイン
                  </button>
                  <button
                    onClick={() => setShowRegister(true)}
                    className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700"
                  >
                    新規登録
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 検索・フィルター */}
        <div className="p-4 bg-gray-100 border-b">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="イベント検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-2 border rounded-lg"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-3 py-2 border rounded-lg"
              >
                {Object.entries(categories).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>

            {currentUser?.role === 'admin' && (
              <button
                onClick={() => setShowEventForm(true)}
                className="ml-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                イベント作成
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* カレンダー */}
          <div className="lg:col-span-2">
            <div className="bg-white border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => changeMonth(-1)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                
                <h2 className="text-xl font-bold">
                  {currentYear}年 {monthNames[currentMonth]}
                </h2>
                
                <button
                  onClick={() => changeMonth(1)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {dayNames.map(day => (
                  <div key={day} className="p-2 text-center font-semibold text-gray-600 bg-gray-100">
                    {day}
                  </div>
                ))}
                
                {calendar.map((week, weekIndex) =>
                  week.map((dateInfo, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`
                        p-2 min-h-[60px] border cursor-pointer transition-colors relative
                        ${!dateInfo.isCurrentMonth ? 'text-gray-300 bg-gray-50' : ''}
                        ${dateInfo.isToday ? 'bg-blue-100 border-blue-300' : 'hover:bg-gray-100'}
                        ${dateInfo.hasEvents ? 'bg-green-50 border-green-200' : ''}
                        ${selectedDate === dateInfo.dateStr ? 'bg-blue-200 border-blue-400' : ''}
                      `}
                      onClick={() => handleDateClick(dateInfo)}
                    >
                      <div className="font-medium">{dateInfo.day}</div>
                      {dateInfo.hasEvents && (
                        <div className="absolute bottom-1 right-1">
                          <div className="w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
                            {dateInfo.eventCount}
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* イベント詳細・予約 */}
          <div className="space-y-4">
            {selectedDate && events[selectedDate] ? (
              <div className="bg-white border rounded-lg p-4">
                <h3 className="text-lg font-bold mb-4">
                  {new Date(selectedDate).toLocaleDateString('ja-JP', { 
                    month: 'long', 
                    day: 'numeric' 
                  })}のイベント
                </h3>
                
                <div className="space-y-3">
                  {events[selectedDate]
                    .filter(event => 
                      filterCategory === 'all' || event.category === filterCategory
                    )
                    .filter(event =>
                      searchTerm === '' || event.title.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map(event => (
                    <div
                      key={event.id}
                      className={`
                        p-3 border rounded-lg cursor-pointer transition-colors
                        ${selectedEvent?.id === event.id ? 'border-blue-300 bg-blue-50' : 'hover:bg-gray-50'}
                      `}
                      onClick={() => handleEventClick(event)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="font-semibold text-blue-600">{event.title}</div>
                          <div className="text-sm text-gray-600 mt-1 space-y-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {event.participants.length}/{event.capacity}名
                              {event.waitingList.length > 0 && (
                                <span className="text-orange-600">
                                  (待ち{event.waitingList.length}名)
                                </span>
                              )}
                            </div>
                            <div className="text-green-600 font-medium">
                              ¥{event.price}
                            </div>
                          </div>
                        </div>
                        
                        {currentUser?.role === 'admin' && (
                          <div className="flex gap-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                // 編集機能は簡略化
                                setShowEventForm(true);
                              }}
                              className="p-1 text-blue-500 hover:bg-blue-100 rounded"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (confirm('このイベントを削除しますか？')) {
                                  handleDeleteEvent(event.id, selectedDate);
                                }
                              }}
                              className="p-1 text-red-500 hover:bg-red-100 rounded"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </div>
                      
                      {event.participants.length >= event.capacity && (
                        <div className="mt-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                          満員
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white border rounded-lg p-4 text-center text-gray-500">
                イベントがある日付をクリックしてください
              </div>
            )}

            {/* 選択されたイベントの詳細 */}
            {selectedEvent && (
              <div className="bg-white border rounded-lg p-4">
                <h3 className="text-lg font-bold mb-3">{selectedEvent.title}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="h-4 w-4" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="h-4 w-4" />
                    <span>{selectedEvent.participants.length}/{selectedEvent.capacity}名</span>
                  </div>
                  <div className="text-green-600 font-medium text-lg">
                    参加費: ¥{selectedEvent.price}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{selectedEvent.description}</p>
                
                {/* 参加者リスト */}
                {selectedEvent.participants.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">参加者</h4>
                    <div className="text-sm space-y-1">
                      {selectedEvent.participants.map((participant, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <User className="h-3 w-3" />
                          <span>{participant.name}</span>
                          <span className="text-gray-500 text-xs">
                            ({new Date(participant.bookedAt).toLocaleDateString('ja-JP')})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* キャンセル待ちリスト */}
                {selectedEvent.waitingList.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-orange-600">キャンセル待ち</h4>
                    <div className="text-sm space-y-1">
                      {selectedEvent.waitingList.map((person, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <User className="h-3 w-3" />
                          <span>{person.name}</span>
                          <span className="text-gray-500 text-xs">
                            ({index + 1}番目)
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="space-y-2">
                  {currentUser ? (
                    <>
                      {!canBookEvent(selectedEvent) ? (
                        <div className="bg-gray-100 text-gray-600 py-2 px-4 rounded-lg text-center">
                          予約締切（開始2時間前）を過ぎています
                        </div>
                      ) : (
                        <>
                          {selectedEvent.participants.some(p => p.userId === currentUser.id) ? (
                            <button
                              onClick={() => handleBooking(selectedEvent)}
                              className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                            >
                              <X className="h-4 w-4" />
                              予約をキャンセル
                            </button>
                          ) : selectedEvent.participants.length >= selectedEvent.capacity ? (
                            <button
                              onClick={() => handleBooking(selectedEvent)}
                              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                            >
                              <Users className="h-4 w-4" />
                              キャンセル待ちに登録
                            </button>
                          ) : (
                            <button
                              onClick={() => handleBooking(selectedEvent)}
                              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                            >
                              <Check className="h-4 w-4" />
                              予約確定
                            </button>
                          )}
                        </>
                      )}
                      
                      {selectedEvent.participants.some(p => p.userId === currentUser.id) && (
                        <div className="bg-green-100 text-green-700 p-2 rounded text-sm text-center">
                          予約済み
                        </div>
                      )}
                      
                      {selectedEvent.waitingList.some(p => p.userId === currentUser.id) && (
                        <div className="bg-orange-100 text-orange-700 p-2 rounded text-sm text-center">
                          キャンセル待ち登録済み
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => setShowLogin(true)}
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      ログインして予約
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ユーザープロフィール */}
      {showUserProfile && currentUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">マイページ</h2>
              <button
                onClick={() => setShowUserProfile(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">プロフィール</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>名前:</strong> {currentUser.name}</p>
                  <p><strong>メール:</strong> {currentUser.email}</p>
                  <p><strong>役割:</strong> {currentUser.role === 'admin' ? '管理者' : '一般ユーザー'}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">予約履歴</h3>
                <div className="space-y-2">
                  {getUserBookings().map((booking, index) => (
                    <div key={index} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">{booking.title}</div>
                          <div className="text-sm text-gray-600">
                            {new Date(booking.date).toLocaleDateString('ja-JP')} {booking.time}
                          </div>
                          <div className="text-sm text-gray-600">{booking.location}</div>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs ${
                          booking.status === 'confirmed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {booking.status === 'confirmed' ? '予約済み' : 'キャンセル待ち'}
                        </div>
                      </div>
                    </div>
                  ))}
                  {getUserBookings().length === 0 && (
                    <p className="text-gray-500 text-center py-4">予約履歴がありません</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 管理者パネル */}
      {showAdminPanel && currentUser?.role === 'admin' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                管理者パネル
              </h2>
              <button
                onClick={() => setShowAdminPanel(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-6">
              {/* 統計情報 */}
              <div>
                <h3 className="font-semibold mb-3">統計情報</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {Object.values(events).flat().length}
                    </div>
                    <div className="text-sm text-gray-600">総イベント数</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {Object.values(events).flat().reduce((sum, event) => sum + event.participants.length, 0)}
                    </div>
                    <div className="text-sm text-gray-600">総予約数</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {users.filter(u => u.role === 'user').length}
                    </div>
                    <div className="text-sm text-gray-600">登録ユーザー数</div>
                  </div>
                </div>
              </div>

              {/* イベント管理 */}
              <div>
                <h3 className="font-semibold mb-3">イベント管理</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {Object.entries(events).map(([date, eventList]) =>
                    eventList.map(event => (
                      <div key={event.id} className="border rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium">{event.title}</div>
                            <div className="text-sm text-gray-600">
                              {new Date(date).toLocaleDateString('ja-JP')} {event.time}
                            </div>
                            <div className="text-sm text-gray-600">
                              参加者: {event.participants.length}/{event.capacity}名
                              {event.waitingList.length > 0 && ` (待ち${event.waitingList.length}名)`}
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={() => {
                                setSelectedDate(date);
                                setShowEventForm(true);
                              }}
                              className="p-1 text-blue-500 hover:bg-blue-100 rounded"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm('このイベントを削除しますか？')) {
                                  handleDeleteEvent(event.id, date);
                                }
                              }}
                              className="p-1 text-red-500 hover:bg-red-100 rounded"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        
                        {/* 参加者詳細 */}
                        {event.participants.length > 0 && (
                          <div className="mt-2 text-sm">
                            <details>
                              <summary className="cursor-pointer text-blue-600">参加者一覧</summary>
                              <div className="mt-2 pl-4 space-y-1">
                                {event.participants.map((p, i) => (
                                  <div key={i} className="flex items-center gap-2">
                                    <User className="h-3 w-3" />
                                    <span>{p.name}</span>
                                    <span className="text-gray-500 text-xs">
                                      ({new Date(p.bookedAt).toLocaleDateString('ja-JP')})
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </details>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* ユーザー管理 */}
              <div>
                <h3 className="font-semibold mb-3">ユーザー管理</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {users.map(user => (
                    <div key={user.id} className="border rounded-lg p-3 flex justify-between items-center">
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-600">{user.email}</div>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs ${
                        user.role === 'admin' 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {user.role === 'admin' ? '管理者' : '一般'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* モーダル表示 */}
      {showLogin && <LoginForm />}
      {showRegister && <RegisterForm />}
      {showConfirmModal && <ConfirmModal />}
      {showEventForm && <EventForm />}
    </div>
  );
};

export default BadmintonBookingSystem;
