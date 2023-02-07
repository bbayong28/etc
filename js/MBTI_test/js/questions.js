import { questions } from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0;
let mbti = ''

function renderQuestion() { 
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 10 + "%"
}


function nextQuestion(choiceNumber) { 
  //if (currentNumber === 9) { 
  if (currentNumber === questions.length - 1) { 
    showResultPage()
    /* return으로 함수를 종료한다. */
    return
  }
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value
  //mbti = '' + 'E' or 'I'  => mbti = 'i' + 'n' => mbti = 'i' + 'n' + .........
  currentNumber = currentNumber + 1
  renderQuestion()
}

function showResultPage() { 
  //쿼리스트링방식 =>  주소에 정보를 담아서 페이지 이동 하는 방식
  //?로 시작해서 내가 전달하고싶은 데이터(mbti결과)를 제일 뒤에 써주고 앞에 = 쓰고 그 데이터의 이름(mbti)을 그앞에 써줌
  location.href='./results.html?mbti=' + mbti
}

choice1El.addEventListener('click', function () { 
  nextQuestion(0)
})
choice2El.addEventListener('click', function () { 
  nextQuestion(0)
})



renderQuestion();

