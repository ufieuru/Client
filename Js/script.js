const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

loginTab.addEventListener('click', () => {
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
});

signupTab.addEventListener('click', () => {
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
});

function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  if (email && password) {
    alert(`濡쒓렇�� �깃났: ${email}`);
  } else {
    alert('�대찓�쇨낵 鍮꾨�踰덊샇瑜� �낅젰�댁＜�몄슂.');
  }
}

function signup() {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  if (name && email && password) {
    alert(`�뚯썝媛��� �꾨즺: ${name}`);
  } else {
    alert('紐⑤뱺 ��ぉ�� �낅젰�댁＜�몄슂.');
  }
}