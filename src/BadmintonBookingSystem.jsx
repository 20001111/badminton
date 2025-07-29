<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>バドミントンコミュニティ予約システム</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #f9fafb;
            color: #374151;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            min-height: 100vh;
        }

        .card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .header {
            background: #2563eb;
            color: white;
            padding: 24px;
        }

        .header h1 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 8px;
        }

        .header p {
            opacity: 0.9;
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-top: 16px;
        }

        .btn {
            padding: 8px 16px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.2s;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .btn-primary {
            background: #3b82f6;
            color: white;
        }

        .btn-primary:hover {
            background: #2563eb;
        }

        .btn-success {
            background: #10b981;
            color: white;
        }

        .btn-success:hover {
            background: #059669;
        }

        .btn-danger {
            background: #ef4444;
            color: white;
        }

        .btn-danger:hover {
            background: #dc2626;
        }

        .btn-secondary {
            background: #6b7280;
            color: white;
        }

        .btn-secondary:hover {
            background: #4b5563;
        }

        .search-filter {
            background: #f3f4f6;
            padding: 16px;
            border-bottom: 1px solid #e5e7eb;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            align-items: center;
        }

        .search-input, .filter-select {
            padding: 8px 12px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            background: white;
        }

        .main-content {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 24px;
            padding: 24px;
        }

        @media (max-width: 768px) {
            .main-content {
                grid-template-columns: 1fr;
            }
        }

        .calendar-container {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            padding: 20px;
        }

        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .calendar-nav {
            background: none;
            border: none;
            padding: 8px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 18px;
        }

        .calendar-nav:hover {
            background: #f3f4f6;
        }

        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 1px;
        }

        .calendar-day-header {
            padding: 12px;
            text-align: center;
            font-weight: 600;
            background: #f3f4f6;
            color: #6b7280;
        }

        .calendar-day {
            min-height: 80px;
            padding: 8px;
            border: 1px solid #e5e7eb;
            cursor: pointer;
            position: relative;
            transition: background-color 0.2s;
        }

        .calendar-day:hover {
            background: #f3f4f6;
        }

        .calendar-day.other-month {
            color: #d1d5db;
            background: #f9fafb;
        }

        .calendar-day.today {
            background: #dbeafe;
            border-color: #3b82f6;
        }

        .calendar-day.has-events {
            background: #dcfce7;
            border-color: #16a34a;
        }

        .calendar-day.selected {
            background: #bfdbfe;
            border-color: #2563eb;
        }

        .event-indicator {
            position: absolute;
            bottom: 4px;
            right: 4px;
            width: 20px;
            height: 20px;
            background: #16a34a;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
        }

        .sidebar {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .event-list {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            padding: 20px;
        }

        .event-item {
            padding: 16px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            margin-bottom: 12px;
        }

        .event-item:hover {
            background: #f9fafb;
        }

        .event-item.selected {
            border-color: #3b82f6;
            background: #eff6ff;
        }

        .event-title {
            font-weight: 600;
            color: #2563eb;
            margin-bottom: 8px;
        }

        .event-info {
            font-size: 14px;
            color: #6b7280;
            margin-bottom: 4px;
        }

        .event-price {
            color: #16a34a;
            font-weight: 600;
        }

        .status-badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 500;
        }

        .status-full {
            background: #fee2e2;
            color: #dc2626;
        }

        .status-available {
            background: #dcfce7;
            color: #16a34a;
        }

        .status-waiting {
            background: #fef3c7;
            color: #d97706;
        }

        .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 20px;
        }

        .modal-content {
            background: white;
            border-radius: 12px;
            padding: 24px;
            width: 100%;
            max-width: 500px;
            max-height: 90vh;
            overflow-y: auto;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .modal-close {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            padding: 4px;
        }

        .form-group {
            margin-bottom: 16px;
        }

        .form-label {
            display: block;
            margin-bottom: 4px;
            font-weight: 500;
        }

        .form-input, .form-textarea, .form-select {
            width: 100%;
            padding: 12px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 14px;
        }

        .form-textarea {
            min-height: 80px;
            resize: vertical;
        }

        .form-actions {
            display: flex;
            gap: 12px;
            margin-top: 20px;
        }

        .form-actions .btn {
            flex: 1;
        }

        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 16px;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            z-index: 1001;
            display: flex;
            align-items: center;
            gap: 8px;
            max-width: 300px;
        }

        .hidden {
            display: none;
        }

        .user-info {
            display: flex;
            align-items: center;
            gap: 12px;
            color: white;
        }

        .event-details {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            padding: 20px;
        }

        .participants-list {
            margin-top: 16px;
        }

        .participant-item {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 0;
            border-bottom: 1px solid #f3f4f6;
        }

        .loading {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            color: #6b7280;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <!-- ヘッダー -->
            <div class="header">
                <h1>🏸 バドミントンコミュニティ予約システム</h1>
                <p>練習会やイベントの予約ができます</p>
                
                <div class="header-actions">
                    <div id="userInfo" class="user-info hidden">
                        <span id="userName"></span>
                        <button id="profileBtn" class="btn btn-secondary">マイページ</button>
                        <button id="logoutBtn" class="btn btn-secondary">ログアウト</button>
                    </div>
                    
                    <div id="authButtons">
                        <button id="loginBtn" class="btn btn-primary">ログイン</button>
                        <button id="registerBtn" class="btn btn-success">新規登録</button>
                    </div>
                </div>
            </div>

            <!-- 検索・フィルター -->
            <div class="search-filter">
                <input type="text" id="searchInput" class="search-input" placeholder="イベント検索...">
                <select id="categoryFilter" class="filter-select">
                    <option value="all">すべて</option>
                    <option value="practice">練習会</option>
                    <option value="advanced">上級者</option>
                    <option value="doubles">ダブルス</option>
                    <option value="tournament">トーナメント</option>
                    <option value="junior">ジュニア</option>
                </select>
                <button id="createEventBtn" class="btn btn-success hidden">+ イベント作成</button>
            </div>

            <!-- メインコンテンツ -->
            <div class="main-content">
                <!-- カレンダー -->
                <div class="calendar-container">
                    <div class="calendar-header">
                        <button id="prevMonth" class="calendar-nav">‹</button>
                        <h2 id="currentMonth"></h2>
                        <button id="nextMonth" class="calendar-nav">›</button>
                    </div>
                    <div class="calendar-grid" id="calendar"></div>
                </div>

                <!-- サイドバー -->
                <div class="sidebar">
                    <!-- イベント一覧 -->
                    <div class="event-list">
                        <h3>イベント一覧</h3>
                        <div id="eventList">
                            <p class="loading">日付を選択してください</p>
                        </div>
                    </div>

                    <!-- イベント詳細 -->
                    <div id="eventDetails" class="event-details hidden">
                        <h3 id="eventTitle"></h3>
                        <div id="eventInfo"></div>
                        <div id="eventDescription"></div>
                        <div id="participantsList" class="participants-list"></div>
                        <div id="bookingActions"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 通知 -->
    <div id="notifications"></div>

    <!-- ログインモーダル -->
    <div id="loginModal" class="modal hidden">
        <div class="modal-content">
            <div class="modal-header">
                <h2>ログイン</h2>
                <button class="modal-close" onclick="closeModal('loginModal')">&times;</button>
            </div>
            <form id="loginForm">
                <div class="form-group">
                    <label class="form-label">メールアドレス</label>
                    <input type="email" id="loginEmail" class="form-input" required>
                </div>
                <div class="form-group">
                    <label class="form-label">パスワード</label>
                    <input type="password" id="loginPassword" class="form-input" required>
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">ログイン</button>
                    <button type="button" class="btn btn-secondary" onclick="closeModal('loginModal')">キャンセル</button>
                </div>
                <p style="margin-top: 16px; text-align: center; font-size: 12px; color: #6b7280;">
                    テスト用: admin@test.com / admin123<br>
                    または user@test.com / user123
                </p>
            </form>
        </div>
    </div>

    <!-- 登録モーダル -->
    <div id="registerModal" class="modal hidden">
        <div class="modal-content">
            <div class="modal-header">
                <h2>新規登録</h2>
                <button class="modal-close" onclick="closeModal('registerModal')">&times;</button>
            </div>
            <form id="registerForm">
                <div class="form-group">
                    <label class="form-label">お名前</label>
                    <input type="text" id="registerName" class="form-input" required>
                </div>
                <div class="form-group">
                    <label class="form-label">メールアドレス</label>
                    <input type="email" id="registerEmail" class="form-input" required>
                </div>
                <div class="form-group">
                    <label class="form-label">パスワード</label>
                    <input type="password" id="registerPassword" class="form-input" required>
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-success">登録</button>
                    <button type="button" class="btn btn-secondary" onclick="closeModal('registerModal')">キャンセル</button>
                </div>
            </form>
        </div>
    </div>

    <!-- 確認モーダル -->
    <div id="confirmModal" class="modal hidden">
        <div class="modal-content">
            <div class="modal-header">
                <h2>確認</h2>
                <button class="modal-close" onclick="closeModal('confirmModal')">&times;</button>
            </div>
            <p id="confirmMessage"></p>
            <div class="form-actions">
                <button id="confirmYes" class="btn btn-primary">はい</button>
                <button class="btn btn-secondary" onclick="closeModal('confirmModal')">いいえ</button>  
            </div>
        </div>
    </div>

    <script>
        // グローバル変数
        let currentUser = null;
        let selectedDate = null;
        let selectedEvent = null;
        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();
        let searchTerm = '';
        let filterCategory = 'all';

        // データ
        const users = [
            { id: 1, name: '管理者', email: 'admin@test.com', password: 'admin123', role: 'admin' },
            { id: 2, name: '田中太郎', email: 'user@test.com', password: 'user123', role: 'user' },
            { id: 3, name: '佐藤花子', email: 'sato@test.com', password: 'user123', role: 'user' }
        ];

        const events = {
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
                    participants: [
                        { userId: 2, name: '田中太郎', bookedAt: '2025-07-25T10:00:00Z' }
                    ],
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
                        { userId: 2, name: '田中太郎', bookedAt: '2025-07-26T15:00:00Z' },
                        { userId: 3, name: '佐藤花子', bookedAt: '2025-07-26T16:00:00Z' }
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
                    description: '月例トーナメント大会です。',
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
        };

        // 初期化
        document.addEventListener('DOMContentLoaded', function() {
            initializeEventListeners();
            updateCalendar();
            updateUI();
        });

        function initializeEventListeners() {
            // 認証関連
            document.getElementById('loginBtn').addEventListener('click', () => showModal('loginModal'));
            document.getElementById('registerBtn').addEventListener('click', () => showModal('registerModal'));
            document.getElementById('logoutBtn').addEventListener('click', logout);
            
            // フォーム送信
            document.getElementById('loginForm').addEventListener('submit', handleLogin);
            document.getElementById('registerForm').addEventListener('submit', handleRegister);
            
            // カレンダーナビゲーション
            document.getElementById('prevMonth').addEventListener('click', () => changeMonth(-1));
            document.getElementById('nextMonth').addEventListener('click', () => changeMonth(1));
            
            // 検索・フィルター
            document.getElementById('searchInput').addEventListener('input', (e) => {
                searchTerm = e.target.value.toLowerCase();
                updateEventList();
            });
            
            document.getElementById('categoryFilter').addEventListener('change', (e) => {
                filterCategory = e.target.value;
                updateEventList();
                updateCalendar();
            });
        }

        function showModal(modalId) {
            document.getElementById(modalId).classList.remove('hidden');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.add('hidden');
        }

        function showNotification(message) {
            const notificationsContainer = document.getElementById('notifications');
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `🔔 ${message}`;
            
            notificationsContainer.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 5000);
        }

        function handleLogin(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                currentUser = user;
                closeModal('loginModal');
                updateUI();
                showNotification(`${user.name}さん、ようこそ！`);
            } else {
                alert('メールアドレスまたはパスワードが間違っています');
            }
        }

        function handleRegister(e) {
            e.preventDefault();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            
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
            
            users.push(newUser);
            currentUser = newUser;
            closeModal('registerModal');
            updateUI();
            showNotification('ユーザー登録が完了しました！');
        }

        function logout() {
            currentUser = null;
            updateUI();
            showNotification('ログアウトしました');
        }

        function updateUI() {
            const userInfo = document.getElementById('userInfo');
            const authButtons = document.getElementById('authButtons');
            const createEventBtn = document.getElementById('createEventBtn');
            
            if (currentUser) {
                document.getElementById('userName').textContent = currentUser.name + 'さん';
                userInfo.classList.remove('hidden');
                authButtons.classList.add('hidden');
                
                if (currentUser.role === 'admin') {
                    createEventBtn.classList.remove('hidden');
                }
            } else {
                userInfo.classList.add('hidden');
                authButtons.classList.remove('hidden');
                createEventBtn.classList.add('hidden');
            }
        }

        function changeMonth(delta) {
            const newDate = new Date(currentYear, currentMonth + delta, 1);
            currentMonth = newDate.getMonth();
            currentYear = newDate.getFullYear();
            selectedDate = null;
            selectedEvent = null;
            updateCalendar();
            updateEventList();
        }

        function updateCalendar() {
            const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
            const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
            
            document.getElementById('currentMonth').textContent = `${currentYear}年 ${monthNames[currentMonth]}`;
            
            const calendar = document.getElementById('calendar');
            calendar.innerHTML = '';
            
            // 曜日ヘッダー
            dayNames.forEach(day => {
                const dayHeader = document.createElement('div');
                dayHeader.className = 'calendar-day-header';
                dayHeader.textContent = day;
                calendar.appendChild(dayHeader);
            });
            
            // カレンダー日付
            const firstDay = new Date(currentYear, currentMonth, 1);
            const lastDay = new Date(currentYear, currentMonth + 1, 0);
            const startDate = new Date(firstDay);
            startDate.setDate(startDate.getDate() - firstDay.getDay());
            
            const current = new Date(startDate);
            
            for (let week = 0; week < 6; week++) {
                for (let day = 0; day < 7; day++) {
                    const dateStr = current.toISOString().split('T')[0];
                    const isCurrentMonth = current.getMonth() === currentMonth;
                    const isToday = current.toDateString() === new Date().toDateString();
                    const dayEvents = events[dateStr] || [];
                    
                    const filteredEvents = dayEvents.filter(event => 
                        (filterCategory === 'all' || event.category === filterCategory) &&
                        (searchTerm === '' || event.title.toLowerCase().includes(searchTerm))
                    );
                    
                    const dayElement = document.createElement('div');
                    dayElement.className = 'calendar-day';
                    
                    if (!isCurrentMonth) dayElement.classList.add('other-month');
                    if (isToday) dayElement.classList.add('today');
                    if (filteredEvents.length > 0) dayElement.classList.add('has-events');
                    if (selectedDate === dateStr) dayElement.classList.add('selected');
                    
                    dayElement.innerHTML = `
                        <div>${current.getDate()}</div>
                        ${filteredEvents.length > 0 ? `<div class="event-indicator">${filteredEvents.length}</div>` : ''}
                    `;
                    
                    dayElement.addEventListener('click', () => {
                        if (filteredEvents.length > 0) {
                            selectDate(dateStr);
                        }
                    });
                    
                    calendar.appendChild(dayElement);
                    current.setDate(current.getDate() + 1);
                }
            }
        }

        function selectDate(dateStr) {
            selectedDate = dateStr;
            selectedEvent = null;
            
            // カレンダー更新
            document.querySelectorAll('.calendar-day').forEach(day => {
                day.classList.remove('selected');
            });
            
            updateCalendar();
            updateEventList();
            hideEventDetails();
        }

        function updateEventList() {
            const eventList = document.getElementById('eventList');
            
            if (!selectedDate || !events[selectedDate]) {
                eventList.innerHTML = '<p class="loading">日付を選択してください</p>';
                return;
            }
            
            const dayEvents = events[selectedDate].filter(event => 
                (filterCategory === 'all' || event.category === filterCategory) &&
                (searchTerm === '' || event.title.toLowerCase().includes(searchTerm))
            );
            
            if (dayEvents.length === 0) {
                eventList.innerHTML = '<p class="loading">該当するイベントがありません</p>';
                return;
            }
            
            eventList.innerHTML = dayEvents.map(event => `
                <div class="event-item ${selectedEvent?.id === event.id ? 'selected' : ''}" 
                     onclick="selectEvent(${event.id})">
                    <div class="event-title">${event.title}</div>
                    <div class="event-info">🕒 ${event.time}</div>
                    <div class="event-info">📍 ${event.location}</div>
                    <div class="event-info">👥 ${event.participants.length}/${event.capacity}名</div>
                    <div class="event-price">¥${event.price}</div>
                    ${event.participants.length >= event.capacity ? 
                        '<span class="status-badge status-full">満員</span>' : 
                        '<span class="status-badge status-available">予約可能</span>'
                    }
                    ${event.waitingList.length > 0 ? 
                        `<span class="status-badge status-waiting">待ち${event.waitingList.length}名</span>` : ''
                    }
                </div>
            `).join('');
        }

        function selectEvent(eventId) {
            const dayEvents = events[selectedDate];
            selectedEvent = dayEvents.find(event => event.id === eventId);
            updateEventList();
            showEventDetails();
        }

        function showEventDetails() {
            if (!selectedEvent) return;
            
            const eventDetails = document.getElementById('eventDetails');
            const eventTitle = document.getElementById('eventTitle');
            const eventInfo = document.getElementById('eventInfo');
            const eventDescription = document.getElementById('eventDescription');
            const participantsList = document.getElementById('participantsList');
            const bookingActions = document.getElementById('bookingActions');
            
            eventTitle.textContent = selectedEvent.title;
            
            eventInfo.innerHTML = `
                <div class="event-info">🕒 ${selectedEvent.time}</div>
                <div class="event-info">📍 ${selectedEvent.location}</div>
                <div class="event-info">👥 ${selectedEvent.participants.length}/${selectedEvent.capacity}名</div>
                <div class="event-price" style="margin-top: 8px;">参加費: ¥${selectedEvent.price}</div>
            `;
            
            eventDescription.innerHTML = `<p style="margin-top: 16px; color: #6b7280;">${selectedEvent.description}</p>`;
            
            // 参加者リスト
            let participantsHtml = '';
            if (selectedEvent.participants.length > 0) {
                participantsHtml += '<h4 style="margin-top: 16px; margin-bottom: 8px; font-weight: 600;">参加者</h4>';
                participantsHtml += selectedEvent.participants.map(p => `
                    <div class="participant-item">
                        <span>👤 ${p.name}</span>
                        <span style="font-size: 12px; color: #6b7280;">
                            (${new Date(p.bookedAt).toLocaleDateString('ja-JP')})
                        </span>
                    </div>
                `).join('');
            }
            
            if (selectedEvent.waitingList.length > 0) {
                participantsHtml += '<h4 style="margin-top: 16px; margin-bottom: 8px; font-weight: 600; color: #d97706;">キャンセル待ち</h4>';
                participantsHtml += selectedEvent.waitingList.map((p, index) => `
                    <div class="participant-item">
                        <span>👤 ${p.name}</span>
                        <span style="font-size: 12px; color: #6b7280;">
                            (${index + 1}番目)
                        </span>
                    </div>  
                `).join('');
            }
            
            participantsList.innerHTML = participantsHtml;
            
            // 予約ボタン
            if (!currentUser) {
                bookingActions.innerHTML = `
                    <button class="btn btn-primary" style="width: 100%; margin-top: 16px;" 
                            onclick="showModal('loginModal')">
                        ログインして予約
                    </button>
                `;
            } else if (!canBookEvent(selectedEvent)) {
                bookingActions.innerHTML = `
                    <div style="background: #f3f4f6; color: #6b7280; padding: 12px; border-radius: 8px; text-align: center; margin-top: 16px;">
                        予約締切（開始2時間前）を過ぎています
                    </div>
                `;
            } else {
                const isBooked = selectedEvent.participants.some(p => p.userId === currentUser.id);
                const isWaiting = selectedEvent.waitingList.some(p => p.userId === currentUser.id);
                const isFull = selectedEvent.participants.length >= selectedEvent.capacity;
                
                let buttonHtml = '';
                
                if (isBooked) {
                    buttonHtml = `
                        <button class="btn btn-danger" style="width: 100%; margin-top: 16px;" 
                                onclick="confirmBooking('cancel')">
                            ❌ 予約をキャンセル
                        </button>
                        <div style="background: #dcfce7; color: #16a34a; padding: 8px; border-radius: 6px; text-align: center; margin-top: 8px; font-size: 14px;">
                            予約済み
                        </div>
                    `;
                } else if (isWaiting) {
                    buttonHtml = `
                        <button class="btn btn-danger" style="width: 100%; margin-top: 16px;" 
                                onclick="confirmBooking('cancelWait')">
                            ❌ キャンセル待ちを取り消し
                        </button>
                        <div style="background: #fef3c7; color: #d97706; padding: 8px; border-radius: 6px; text-align: center; margin-top: 8px; font-size: 14px;">
                            キャンセル待ち登録済み
                        </div>
                    `;
                } else if (isFull) {
                    buttonHtml = `
                        <button class="btn" style="width: 100%; margin-top: 16px; background: #f59e0b; color: white;" 
                                onclick="confirmBooking('waitlist')">
                            👥 キャンセル待ちに登録
                        </button>
                    `;
                } else {
                    buttonHtml = `
                        <button class="btn btn-success" style="width: 100%; margin-top: 16px;" 
                                onclick="confirmBooking('book')">
                            ✅ 予約確定
                        </button>
                    `;
                }
                
                bookingActions.innerHTML = buttonHtml;
            }
            
            eventDetails.classList.remove('hidden');
        }

        function hideEventDetails() {
            document.getElementById('eventDetails').classList.add('hidden');
        }

        function canBookEvent(event) {
            const eventDate = new Date(selectedDate + ' ' + event.time.split('-')[0]);
            const now = new Date();
            const timeDiff = eventDate.getTime() - now.getTime();
            const hoursDiff = timeDiff / (1000 * 60 * 60);
            return hoursDiff > 2;
        }

        function confirmBooking(action) {
            const messages = {
                book: `「${selectedEvent.title}」を予約しますか？`,
                cancel: `「${selectedEvent.title}」の予約をキャンセルしますか？`,
                waitlist: `「${selectedEvent.title}」は満員です。キャンセル待ちに登録しますか？`,
                cancelWait: `「${selectedEvent.title}」のキャンセル待ちを取り消しますか？`
            };
            
            document.getElementById('confirmMessage').textContent = messages[action];
            document.getElementById('confirmYes').onclick = () => executeBooking(action);
            showModal('confirmModal');
        }

        function executeBooking(action) {
            closeModal('confirmModal');
            
            const eventList = events[selectedDate];
            const eventIndex = eventList.findIndex(e => e.id === selectedEvent.id);
            const event = eventList[eventIndex];
            
            switch (action) {
                case 'book':
                    event.participants.push({
                        userId: currentUser.id,
                        name: currentUser.name,
                        bookedAt: new Date().toISOString()
                    });
                    showNotification(`${event.title}の予約が完了しました`);
                    setTimeout(() => showNotification('予約確認メールを送信しました'), 1000);
                    break;
                    
                case 'cancel':
                    event.participants = event.participants.filter(p => p.userId !== currentUser.id);
                    
                    // キャンセル待ちから自動昇格
                    if (event.waitingList.length > 0) {
                        const nextPerson = event.waitingList.shift();
                        event.participants.push(nextPerson);
                        showNotification(`キャンセル待ちの${nextPerson.name}さんが自動的に予約されました`);
                    }
                    
                    showNotification(`${event.title}の予約をキャンセルしました`);
                    break;
                    
                case 'waitlist':
                    event.waitingList.push({
                        userId: currentUser.id,
                        name: currentUser.name,
                        bookedAt: new Date().toISOString()
                    });
                    showNotification(`${event.title}のキャンセル待ちに登録しました`);
                    break;
                    
                case 'cancelWait':
                    event.waitingList = event.waitingList.filter(p => p.userId !== currentUser.id);
                    showNotification(`${event.title}のキャンセル待ちを取り消しました`);
                    break;
            }
            
            // 更新
            selectedEvent = event;
            updateCalendar();
            updateEventList();
            showEventDetails();
        }
    </script>
</body>
</html>
