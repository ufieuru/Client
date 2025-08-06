// 로그인 여부 설정 (실제로는 서버에서 받아오거나 쿠키 등으로 처리)
const isLoggedIn = false;

// 모달 요소
const guestModal = document.getElementById('guest-modal');
const guestModalCloseBtn = document.getElementById('guest-modal-close-btn');

// 제한된 기능 버튼들
const restrictedButtons = document.querySelectorAll('.restricted-action');

// 각 버튼에 클릭 이벤트 추가
restrictedButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (!isLoggedIn) {
      e.preventDefault(); // 기본 동작 차단 (링크나 submit 등)
      guestModal.classList.remove('hidden');
    }
  });
});

// 모달 닫기 버튼 동작
guestModalCloseBtn.addEventListener('click', () => {
  guestModal.classList.add('hidden');
});


//**비회원 접근 제한하고 싶은 버튼에 예시: <button class="loan-btn available restricted-action">대출신청</button> 처럼 작성하면 됨*/