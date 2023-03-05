//사용할 변수와 상수 설정

//Math.floor() => 소수점 이하를 버림한다.
//Math.random() => 0.0 ~ 1.0사이의 소수점
//Math.random() * 100 => 0 ~ 99.999999
//Math.floor(Math.random()) * 100 => 0 ~ 99
//(Math.random() * 100) + 1 => 1 ~ 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessValue = document.querySelector('.guessValue')
const guessSubmit = document.querySelector('.guessSubmit')

const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

//첫 추측횟수 = 1
let guessCount = 1;
//초기화버튼
let resetButton;


function checkGuess() { 
  //추측한 현재 값 저장
  //Number로 감싼이유는 확실하게 숫자값으로 만들려고.
  const userGuess = Number(guessValue.value);
  //추측횟수가 처음이면 Previous guessses : 뒤에 추측한 숫자를 나타나게 함.
  if (guessCount === 1) {
    guesses.textContent = '추측한 숫자들 : '
  }//추측숫자에 더하기 다음 추측숫자
  guesses.textContent += userGuess + ' ';

  //추측숫자와 랜덤숫자가 일치할 때
  if (userGuess === randomNumber) {
    lastResult.textContent = "축하합니다! 정답입니다!"
    lastResult.style.backgroundColor = 'green'
    lowOrHi.textContent = '';
    setGameOver();
  }
  //마지막 턴인지 확인 => 게임 끝
  else if (guessCount === 10) {
    lastResult.textContent = "!!!게임오버!!!"
    lowOrHi.textContent = '';
    setGameOver();
  }
  //추측숫자와 랜덤숫자가 다를 때
  else {
    lastResult.textContent = '틀렸습니다';
    lastResult.style.backgroundColor = 'red';
    //추측값이 랜덤숫자보다 작을 때
    if (userGuess < randomNumber) { 
      lowOrHi.textContent = '추측값이 낮습니다!'
    }
    //추측값이 랜덤숫자보다 클 때
    else if (userGuess > randomNumber) {
      lowOrHi.textContent = '추측값이 높습니다!'
    }
  }

  guessCount++;
  guessValue.value = '';
  guessValue.focus();
}

//guessSubmit버튼을 누르면 checkGuess함수 실행
guessSubmit.addEventListener('click', checkGuess);

//게임 기능 마무리
function setGameOver() { 
  //입력칸(=guessValue)의 disabled속성을 true로 설정해 비활성화 시킴
  guessValue.disabled = true; 
  //제출칸(=guessSubmit)의 disabled속성을 true로 설정해 비활성화 시킴
  guessSubmit.disabled = true;
  //resetButton 생성하고 텍스트를 '새게임 시작하기'로 설정
  resetButton = document.createElement('button')
  resetButton.textContent = '새게임 시작하기'
  //resetButton 생성 위치 append=> 선택된 요소의 마지막에 새로운 요소나 콘텐츠를 추가
  document.body.append(resetButton);
  //resetButton 누르면 resetGame함수 실행
  resetButton.addEventListener('click', resetGame);
}

//게임을 초기상태로 되돌려 플레이어가 새로운 게임ㅇ르 즐길 수 있도록 하는 함수
function resetGame() { 
  //guessCount 1로 낮추기
  guessCount = 1;
  
  //클래스 resultParas안의 p태그들을 하나씩 순회하면서 각각의 textContent를 ''(빈문자열)로 설정
  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) { 
    resetPara.textContent = '';
  }
  //parentNode : 현재 다루고있는 노드의 부모 노드를 반환. 
  //removeChild : 부모에서 포함된 자식노드가 존재할 경우 일치하는 클래스,아이디 같은 속성을 통해 자식노드를 제거 
  resetButton.parentNode.removeChild(resetButton);

  //입력칸(=guessValue)의 disabled속성을 true로 설정해 활성화 시킴
  guessValue.disabled = false;
  //제출칸(=guessSubmit)의 disabled속성을 true로 설정해 활성화 시킴
  guessSubmit.disabled = false;
  //입력칸(=guessValue)의 값을 ''(빈문자열)로 설정
  guessValue.value = '';
  //입력칸에 focus가게 하기
  guessValue.focus();

  //lastResult 배경색상 속성을 whit로 바꿈
  lastResult.style.backgroundColor = 'white'
  //이전 게임과 다른 숫자로 무작위 숫자를 새로 선택함.
  randomNumber = Math.floor( Math.random() * 100 ) + 1


}
