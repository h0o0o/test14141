
// ===== 데이터 구조 =====
const BOOKS_DATABASE = [
  { id: 1, title: '데미안', author: '헤르만 헤세', genre: '소설', rating: 4.5, emoji: '📖', description: '자아 발견과 성장에 관한 고전 소설. 싱클레어의 성장 과정을 통해 자아를 찾아가는 여정을 그린다.' },
  { id: 2, title: '1984', author: '조지 오웰', genre: '소설', rating: 4.7, emoji: '📕', description: '전체주의 사회를 그린 디스토피아 소설. 빅 브라더의 감시 사회를 통해 자유와 통제를 다룬다.' },
  { id: 3, title: '어린 왕자', author: '생텍쥐페리', genre: '소설', rating: 4.8, emoji: '👑', description: '사랑과 우정, 책임에 대한 철학적 동화. 어린 왕자의 여행을 통해 인생의 의미를 탐구한다.' },
  { id: 4, title: '총균쇠', author: '재레드 다이아몬드', genre: '역사', rating: 4.6, emoji: '🌍', description: '인류 문명의 발전을 지리적 관점에서 분석한 역사서. 문명의 불평등한 발전을 설명한다.' },
  { id: 5, title: '사피엔스', author: '유발 하라리', genre: '역사', rating: 4.7, emoji: '🧬', description: '인류의 역사를 새로운 시각으로 조명한 베스트셀러. 호모 사피엔스의 진화와 문명을 탐구한다.' },
  { id: 6, title: '코스모스', author: '칼 세이건', genre: '과학', rating: 4.8, emoji: '🌌', description: '우주의 신비를 쉽게 풀어낸 과학서. 천문학의 역사와 우주의 광대함을 다룬다.' },
  { id: 7, title: '이기적 유전자', author: '리처드 도킨스', genre: '과학', rating: 4.5, emoji: '🧪', description: '진화론을 유전자 관점에서 설명한 혁명적인 책. 생명의 본질과 진화의 메커니즘을 탐구한다.' },
  { id: 8, title: '정의란 무엇인가', author: '마이클 샌델', genre: '철학', rating: 4.4, emoji: '⚖️', description: '정의에 대한 다양한 철학적 관점을 소개. 현대 사회의 윤리적 딜레마를 다룬다.' },
  { id: 9, title: '국부론', author: '애덤 스미스', genre: '경제', rating: 4.3, emoji: '💰', description: '근대 경제학의 기초를 세운 고전. 자유 시장 경제의 원리를 설명한다.' },
  { id: 10, title: '아몬드', author: '손원평', genre: '소설', rating: 4.6, emoji: '🥜', description: '감정을 느끼지 못하는 소년의 성장 이야기. 공감과 이해에 대한 감동적인 메시지를 전한다.' },
  { id: 11, title: '죽은 시인의 사회', author: 'N.H. 클라인바움', genre: '소설', rating: 4.5, emoji: '✒️', description: '자유로운 사고와 열정을 추구하는 교사와 학생들의 이야기. 삶의 가치를 재조명한다.' },
  { id: 12, title: '난중일기', author: '이순신', genre: '역사', rating: 4.7, emoji: '⚓', description: '이순신 장군의 임진왜란 기록. 리더십과 희생정신을 엿볼 수 있다.' },
  { id: 13, title: '호모 데우스', author: '유발 하라리', genre: '역사', rating: 4.5, emoji: '🤖', description: '인류의 미래를 예측한 책. 기술 발전이 가져올 변화를 탐구한다.' },
  { id: 14, title: '총, 균, 쇠 다이아몬드', author: '재레드 다이아몬드', genre: '과학', rating: 4.6, emoji: '🔬', description: '문명의 발전을 과학적으로 분석. 환경이 역사에 미친 영향을 설명한다.' },
  { id: 15, title: '나는 나로 살기로 했다', author: '김수현', genre: '자기계발', rating: 4.4, emoji: '🌱', description: '자기 자신을 사랑하는 방법에 대한 에세이. 자존감 회복을 위한 메시지를 담았다.' },
  { id: 16, title: '미움받을 용기', author: '기시미 이치로', genre: '자기계발', rating: 4.6, emoji: '💪', description: '아들러 심리학을 바탕으로 한 자기계발서. 타인의 시선에서 자유로워지는 방법을 제시한다.' },
  { id: 17, title: '달과 6펜스', author: '서머싯 몸', genre: '소설', rating: 4.5, emoji: '🌙', description: '예술가의 열정과 삶에 대한 소설. 세속적 가치와 예술적 추구 사이의 갈등을 그린다.' },
  { id: 18, title: '연금술사', author: '파울로 코엘료', genre: '소설', rating: 4.6, emoji: '⭐', description: '꿈을 이루기 위한 여정을 그린 우화. 자신의 운명을 찾아가는 이야기다.' },
  { id: 19, title: '노인과 바다', author: '어니스트 헤밍웨이', genre: '소설', rating: 4.4, emoji: '🎣', description: '노인과 거대한 물고기의 사투를 그린 소설. 인간의 존엄성과 불굴의 의지를 다룬다.' },
  { id: 20, title: '지킬 박사와 하이드', author: '로버트 루이스 스티븐슨', genre: '소설', rating: 4.3, emoji: '👥', description: '인간의 이중성을 다룬 고전 소설. 선과 악의 공존을 탐구한다.' },
  { id: 21, title: '돈키호테', author: '미겔 데 세르반테스', genre: '소설', rating: 4.5, emoji: '🐴', description: '기사도를 추구하는 돈키호테의 모험담. 이상과 현실의 괴리를 유머러스하게 그린다.' },
  { id: 22, title: '백년의 고독', author: '가브리엘 가르시아 마르케스', genre: '소설', rating: 4.7, emoji: '🏛️', description: '부엔디아 가문의 7대에 걸친 이야기. 마술적 사실주의의 대표작이다.' },
  { id: 23, title: '햄릿', author: '윌리엄 셰익스피어', genre: '소설', rating: 4.6, emoji: '👻', description: '복수와 고뇌를 다룬 셰익스피어의 4대 비극. 인간 존재의 본질을 탐구한다.' },
  { id: 24, title: '변신', author: '프란츠 카프카', genre: '소설', rating: 4.4, emoji: '🪲', description: '벌레로 변한 남자의 이야기. 소외와 부조리를 상징적으로 표현한다.' },
  { id: 25, title: '이방인', author: '알베르 카뮈', genre: '소설', rating: 4.5, emoji: '🏖️', description: '실존주의를 대표하는 소설. 부조리한 세계에서의 인간 존재를 다룬다.' },
];

// 로컬스토리지 키
const STORAGE_KEYS = {
  USER_DATA: 'bookapp_user_data',
  BORROW_HISTORY: 'bookapp_borrow_history',
  PREFERRED_GENRES: 'bookapp_preferred_genres',
  POPULAR_BOOKS: 'bookapp_popular_books',
  USER_RANKINGS: 'bookapp_user_rankings'
};

// ===== 초기화 =====
let userData = {
  name: '독서왕',
  points: 0,
  totalBorrowed: 0,
  currentBorrowed: 0
};

let borrowHistory = [];
let preferredGenres = [];
let currentBorrowedBooks = [];

// ===== 유틸리티 함수 =====
function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadFromLocalStorage(key, defaultValue = null) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
}

function showNotification(message, type = 'success') {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.className = `notification ${type}`;
  notification.classList.remove('hidden');
  
  setTimeout(() => {
    notification.classList.add('hidden');
  }, 3000);
}

function formatDate(date) {
  const d = new Date(date);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

// ===== AI 추천 알고리즘 =====
function getRecommendedBooks() {
  let books = [...BOOKS_DATABASE];
  
  // 선호 장르가 있으면 가중치 부여
  if (preferredGenres.length > 0) {
    books = books.map(book => {
      const score = preferredGenres.includes(book.genre) ? book.rating + 1 : book.rating;
      return { ...book, score };
    });
    books.sort((a, b) => b.score - a.score);
  } else {
    // 선호 장르가 없으면 평점 순
    books.sort((a, b) => b.rating - a.rating);
  }
  
  // 이미 대출한 책 제외
  const borrowedIds = borrowHistory.map(h => h.bookId);
  books = books.filter(book => !borrowedIds.includes(book.id));
  
  return books.slice(0, 12);
}

// ===== 인기 도서 알고리즘 =====
function updatePopularBooks() {
  // 실제로는 서버에서 가져와야 하지만, 여기서는 시뮬레이션
  let books = [...BOOKS_DATABASE];
  
  // 랜덤하게 대출 횟수 추가
  books = books.map(book => ({
    ...book,
    borrowCount: Math.floor(Math.random() * 100) + book.rating * 10
  }));
  
  books.sort((a, b) => b.borrowCount - a.borrowCount);
  
  const popularBooks = books.slice(0, 10);
  saveToLocalStorage(STORAGE_KEYS.POPULAR_BOOKS, popularBooks);
  
  return popularBooks;
}

// ===== 렌더링 함수 =====
function renderBookCard(book, isPopular = false) {
  const isBorrowed = currentBorrowedBooks.includes(book.id);
  
  return `
    <div class="book-card ${isPopular ? 'popular-badge' : ''}" data-book-id="${book.id}">
      <div class="book-cover">${book.emoji}</div>
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">${book.author}</p>
      <span class="book-genre">${book.genre}</span>
      <div class="book-rating">⭐ ${book.rating} / 5.0</div>
      ${book.borrowCount ? `<p class="book-borrowers">📚 ${book.borrowCount}명이 대출</p>` : ''}
      <button class="btn-borrow ${isBorrowed ? 'borrowed' : ''}" onclick="borrowBook(${book.id})">
        ${isBorrowed ? '대출 중' : '대출하기 (+10P)'}
      </button>
    </div>
  `;
}

function renderRecommendedBooks() {
  const container = document.getElementById('recommendedBooks');
  const books = getRecommendedBooks();
  
  if (books.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 40px;">추천할 도서가 없습니다. 선호 장르를 선택해보세요!</p>';
    return;
  }
  
  container.innerHTML = books.map(book => renderBookCard(book)).join('');
  
  // 카드 클릭 이벤트
  container.querySelectorAll('.book-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('btn-borrow')) {
        const bookId = parseInt(card.dataset.bookId);
        showBookDetail(bookId);
      }
    });
  });
}

function renderPopularBooks() {
  const container = document.getElementById('popularBooks');
  const books = loadFromLocalStorage(STORAGE_KEYS.POPULAR_BOOKS, []);
  
  if (books.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 40px;">인기 도서를 불러오는 중...</p>';
    return;
  }
  
  container.innerHTML = books.map(book => renderBookCard(book, true)).join('');
  
  // 카드 클릭 이벤트
  container.querySelectorAll('.book-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('btn-borrow')) {
        const bookId = parseInt(card.dataset.bookId);
        showBookDetail(bookId);
      }
    });
  });
  
  // 마지막 업데이트 시간 표시
  document.getElementById('lastUpdate').textContent = `마지막 업데이트: ${new Date().toLocaleTimeString()}`;
}

function renderBorrowHistory() {
  const container = document.getElementById('borrowHistory');
  
  if (borrowHistory.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 40px;">아직 대출한 책이 없습니다.</p>';
    return;
  }
  
  const sorted = [...borrowHistory].reverse();
  container.innerHTML = sorted.map(record => {
    const book = BOOKS_DATABASE.find(b => b.id === record.bookId);
    if (!book) return '';
    
    return `
      <div class="history-item">
        <div class="history-book-info">
          <h4>${book.emoji} ${book.title}</h4>
          <p>${book.author} · ${book.genre} · ${formatDate(record.date)}</p>
        </div>
        <div class="history-points">+${record.points}P</div>
      </div>
    `;
  }).join('');
}

function renderUserRanking() {
  const container = document.getElementById('userRanking');
  let rankings = loadFromLocalStorage(STORAGE_KEYS.USER_RANKINGS, []);
  
  // 현재 사용자 추가
  const currentUserExists = rankings.find(r => r.name === userData.name);
  if (!currentUserExists) {
    rankings.push({
      name: userData.name,
      points: userData.points,
      booksRead: userData.totalBorrowed
    });
  } else {
    const index = rankings.findIndex(r => r.name === userData.name);
    rankings[index] = {
      name: userData.name,
      points: userData.points,
      booksRead: userData.totalBorrowed
    };
  }
  
  // 포인트 순 정렬
  rankings.sort((a, b) => b.points - a.points);
  
  // 상위 20명만 표시
  rankings = rankings.slice(0, 20);
  
  saveToLocalStorage(STORAGE_KEYS.USER_RANKINGS, rankings);
  
  container.innerHTML = rankings.map((user, index) => {
    const position = index + 1;
    const isCurrentUser = user.name === userData.name;
    
    return `
      <div class="ranking-item ${isCurrentUser ? 'style="background: #f0f9ff;"' : ''}">
        <div class="ranking-position ${position <= 3 ? 'top3' : ''}">
          ${position <= 3 ? ['🥇', '🥈', '🥉'][position - 1] : position}
        </div>
        <div class="ranking-user-info">
          <h4>${user.name} ${isCurrentUser ? '(나)' : ''}</h4>
          <p>읽은 책: ${user.booksRead}권</p>
        </div>
        <div class="ranking-points">${user.points}P</div>
      </div>
    `;
  }).join('');
  
  // 현재 사용자 랭킹 업데이트
  const userRank = rankings.findIndex(r => r.name === userData.name) + 1;
  document.getElementById('userRank').textContent = userRank;
}

function updateUserStats() {
  document.getElementById('userName').textContent = userData.name;
  document.getElementById('userPoints').textContent = userData.points;
  document.getElementById('totalBorrowed').textContent = userData.totalBorrowed;
  document.getElementById('totalPoints').textContent = userData.points;
  document.getElementById('currentBorrowed').textContent = userData.currentBorrowed;
}

// ===== 도서 대출 =====
function borrowBook(bookId) {
  const book = BOOKS_DATABASE.find(b => b.id === bookId);
  if (!book) return;
  
  if (currentBorrowedBooks.includes(bookId)) {
    showNotification('이미 대출 중인 책입니다.', 'warning');
    return;
  }
  
  const points = 10;
  const record = {
    bookId: bookId,
    date: new Date().toISOString(),
    points: points
  };
  
  borrowHistory.push(record);
  currentBorrowedBooks.push(bookId);
  
  userData.points += points;
  userData.totalBorrowed += 1;
  userData.currentBorrowed += 1;
  
  saveData();
  updateUserStats();
  renderBorrowHistory();
  renderRecommendedBooks();
  renderPopularBooks();
  renderUserRanking();
  
  showNotification(`📚 "${book.title}"을(를) 대출했습니다! +${points}P`, 'success');
}

// ===== 도서 상세 모달 =====
function showBookDetail(bookId) {
  const book = BOOKS_DATABASE.find(b => b.id === bookId);
  if (!book) return;
  
  const modal = document.getElementById('bookModal');
  const detailBody = document.getElementById('bookDetail');
  
  const isBorrowed = currentBorrowedBooks.includes(bookId);
  
  detailBody.innerHTML = `
    <div class="book-detail-cover">${book.emoji}</div>
    <h2 class="book-detail-title">${book.title}</h2>
    <p class="book-detail-author">저자: ${book.author}</p>
    <div class="book-detail-info">
      <p><strong>장르:</strong> ${book.genre}</p>
      <p><strong>평점:</strong> ⭐ ${book.rating} / 5.0</p>
      ${book.borrowCount ? `<p><strong>대출 횟수:</strong> ${book.borrowCount}회</p>` : ''}
    </div>
    <div class="book-detail-description">
      <h3>책 소개</h3>
      <p>${book.description}</p>
    </div>
    <button class="btn-borrow ${isBorrowed ? 'borrowed' : ''}" onclick="borrowBook(${book.id}); closeModal();">
      ${isBorrowed ? '대출 중' : '대출하기 (+10P)'}
    </button>
  `;
  
  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('bookModal').classList.add('hidden');
}

// ===== 장르 선택 =====
function setupGenreSelector() {
  const genreTags = document.querySelectorAll('.genre-tag');
  
  genreTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const genre = tag.dataset.genre;
      
      if (preferredGenres.includes(genre)) {
        preferredGenres = preferredGenres.filter(g => g !== genre);
        tag.classList.remove('selected');
      } else {
        preferredGenres.push(genre);
        tag.classList.add('selected');
      }
      
      saveToLocalStorage(STORAGE_KEYS.PREFERRED_GENRES, preferredGenres);
      renderRecommendedBooks();
      showNotification(`선호 장르가 업데이트되었습니다.`, 'success');
    });
  });
  
  // 저장된 선호 장르 로드
  preferredGenres.forEach(genre => {
    const tag = Array.from(genreTags).find(t => t.dataset.genre === genre);
    if (tag) tag.classList.add('selected');
  });
}

// ===== 탭 전환 =====
function setupTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.dataset.tab;
      
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(tabName).classList.add('active');
    });
  });
}

// ===== 데이터 저장/로드 =====
function saveData() {
  saveToLocalStorage(STORAGE_KEYS.USER_DATA, userData);
  saveToLocalStorage(STORAGE_KEYS.BORROW_HISTORY, borrowHistory);
  saveToLocalStorage(STORAGE_KEYS.PREFERRED_GENRES, preferredGenres);
}

function loadData() {
  userData = loadFromLocalStorage(STORAGE_KEYS.USER_DATA, userData);
  borrowHistory = loadFromLocalStorage(STORAGE_KEYS.BORROW_HISTORY, []);
  preferredGenres = loadFromLocalStorage(STORAGE_KEYS.PREFERRED_GENRES, []);
  
  // 현재 대출 중인 책 계산
  currentBorrowedBooks = borrowHistory.map(h => h.bookId);
  userData.currentBorrowed = currentBorrowedBooks.length;
}

// ===== 인기 도서 자동 갱신 =====
function startAutoRefresh() {
  // 5분마다 인기 도서 갱신
  setInterval(() => {
    updatePopularBooks();
    if (document.getElementById('popular').classList.contains('active')) {
      renderPopularBooks();
      showNotification('인기 도서가 업데이트되었습니다.', 'success');
    }
  }, 5 * 60 * 1000);
}

// ===== 샘플 랭킹 데이터 생성 =====
function initializeSampleRankings() {
  const existingRankings = loadFromLocalStorage(STORAGE_KEYS.USER_RANKINGS, []);
  
  if (existingRankings.length === 0) {
    const sampleUsers = [
      { name: '독서광', points: 250, booksRead: 25 },
      { name: '책벌레', points: 230, booksRead: 23 },
      { name: '문학소녀', points: 210, booksRead: 21 },
      { name: '지식탐험가', points: 190, booksRead: 19 },
      { name: '북러버', points: 180, booksRead: 18 },
    ];
    
    saveToLocalStorage(STORAGE_KEYS.USER_RANKINGS, sampleUsers);
  }
}

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  initializeSampleRankings();
  
  // 인기 도서 초기 로드
  if (!loadFromLocalStorage(STORAGE_KEYS.POPULAR_BOOKS)) {
    updatePopularBooks();
  }
  
  updateUserStats();
  setupTabs();
  setupGenreSelector();
  renderRecommendedBooks();
  renderPopularBooks();
  renderBorrowHistory();
  renderUserRanking();
  
  // 이벤트 리스너
  document.getElementById('refreshRecommend').addEventListener('click', () => {
    renderRecommendedBooks();
    showNotification('추천 도서를 새로고침했습니다.', 'success');
  });
  
  document.getElementById('manualRefresh').addEventListener('click', () => {
    updatePopularBooks();
    renderPopularBooks();
    showNotification('인기 도서를 업데이트했습니다.', 'success');
  });
  
  document.getElementById('closeModal').addEventListener('click', closeModal);
  
  document.getElementById('bookModal').addEventListener('click', (e) => {
    if (e.target.id === 'bookModal') {
      closeModal();
    }
  });
  
  // 자동 갱신 시작
  startAutoRefresh();
});
