const input = document.getElementById('registerNumber');
const PREFIX = 'MJ';

// 처음에는 항상 MJ로 시작
input.value = PREFIX;

input.addEventListener('input', () => {
  if (!input.value.startsWith(PREFIX)) {
    input.value = PREFIX;
  }
  // MJ 이후 문자열만 추출
  let suffix = input.value.slice(PREFIX.length);
  // 숫자만 허용 (문자 제거)
  suffix = suffix.replace(/\D/g, '');
  // 6자리까지만 유지
  if (suffix.length > 6) {
    suffix = suffix.slice(0, 6);
  }
  input.value = PREFIX + suffix;
});

input.addEventListener('keydown', function (e) {
  // 백스페이스로 MJ 지우지 못하게 막음
  if (
    (input.selectionStart <= PREFIX.length && e.key === 'Backspace') ||
    (input.selectionStart < PREFIX.length && e.key.length === 1)
  ) {
    e.preventDefault();
  }
});

document.getElementById('loan-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const full = input.value.trim();
  const suffix = full.slice(PREFIX.length);

   if (/^\d{6}$/.test(suffix)) {
      const popup = document.getElementById('loan-success-popup');
      popup.classList.add('visible');
      
      document.getElementById('popup-close-btn').onclick = function() {
        popup.classList.remove('visible');
        window.location.href = '../MainPage.html';
      };
    } else {
      alert('숫자 6자리를 정확히 입력해주세요.');
    }
});