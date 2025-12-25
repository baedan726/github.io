/* ====================
   02_intro 인트로 페이지 JavaScript
   ==================== */

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
  updateVisitCount();
  addSkillTagAnimation();
  addGoalItemAnimation();
});

// 방문자 수 카운트 (localStorage 사용)
function updateVisitCount() {
  var visitCountElement = document.getElementById('visitCount');
  
  if (visitCountElement) {
    var count = localStorage.getItem('introVisitCount');
    
    if (count === null) {
      count = 1;
    } else {
      count = parseInt(count) + 1;
    }
    
    localStorage.setItem('introVisitCount', count);
    visitCountElement.textContent = count;
  }
}

// 스킬 태그 순차 애니메이션
function addSkillTagAnimation() {
  var skillTags = document.querySelectorAll('.skill-tag');
  
  skillTags.forEach(function(tag, index) {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(20px)';
    
    setTimeout(function() {
      tag.style.transition = 'all 0.4s ease';
      tag.style.opacity = '1';
      tag.style.transform = 'translateY(0)';
    }, 800 + (index * 100));
  });
}

// 목표 아이템 순차 애니메이션
function addGoalItemAnimation() {
  var goalItems = document.querySelectorAll('.goal-item');
  
  goalItems.forEach(function(item, index) {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    
    setTimeout(function() {
      item.style.transition = 'all 0.5s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, 1200 + (index * 150));
  });
}

// 콘솔 메시지
console.log('%c👋 안녕하세요!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%c이 페이지는 저의 자기소개 페이지입니다.', 'font-size: 14px; color: #94a3b8;');

