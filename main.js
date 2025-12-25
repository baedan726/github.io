/* ====================
   학습 노트 JavaScript
   ==================== */

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
  displayCurrentDate();
  calculateProgress();
  displayRandomQuote();
});

// 현재 날짜 표시
function displayCurrentDate() {
  const dateElement = document.getElementById('currentDate');
  const today = new Date();
  
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    weekday: 'long' 
  };
  
  const formattedDate = today.toLocaleDateString('ko-KR', options);
  dateElement.textContent = '📅 ' + formattedDate;
}

// 학습 진행률 계산
function calculateProgress() {
  const rows = document.querySelectorAll('.study-table tbody tr');
  const total = rows.length;
  let completed = 0;
  
  rows.forEach(function(row) {
    const status = row.querySelector('.status');
    if (status && status.classList.contains('completed')) {
      completed++;
    }
  });
  
  const percentage = Math.round((completed / total) * 100);
  
  // 진행률 바 애니메이션
  setTimeout(function() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    progressFill.style.width = percentage + '%';
    progressText.textContent = percentage + '% 완료 (' + completed + '/' + total + ' 항목)';
  }, 500);
}

// 오늘의 명언 랜덤 표시
function displayRandomQuote() {
  const quotes = [
    "천 리 길도 한 걸음부터",
    "오늘 할 수 있는 일을 내일로 미루지 마라",
    "배움에는 왕도가 없다",
    "꾸준함이 천재를 이긴다",
    "실패는 성공의 어머니다",
    "작은 물방울이 바위를 뚫는다",
    "오늘의 노력이 내일의 실력이 된다",
    "포기하지 않으면 실패는 없다",
    "매일 1%씩 성장하면 1년 후 37배가 된다",
    "시작이 반이다"
  ];
  
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById('dailyQuote');
  
  quoteElement.textContent = '"' + quotes[randomIndex] + '"';
}

// 콘솔에 환영 메시지
console.log('%c📚 나의 학습 노트', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%c오늘도 열심히 공부하세요! 화이팅!', 'font-size: 14px; color: #10b981;');

