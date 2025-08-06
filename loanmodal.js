// loanmodal.js
document.addEventListener('DOMContentLoaded', function () {
  const loanButtons = document.querySelectorAll('.loan-btn.available');
  const modal = document.getElementById('loan-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // 대출 버튼 클릭 시 모달 보이기
  loanButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      modal.classList.remove('hidden');
    });
  });

  // 확인 버튼 클릭 시 모달 닫기
  modalCloseBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
  });
});
