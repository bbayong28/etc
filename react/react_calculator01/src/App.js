import './App.css';
import React, { useState } from 'react'

function App() {
  //표시 될 숫자에 대한 상태 선언
  const [number, setNumber] = useState(0);
  //계산할 때 표시된 숫자를 들고있는 상태 숫자와 더하기 빼기 등 명령어를 담을 변수 선언
  const [holdNumber, setHoldNumber] = useState(0);
  const [operation, setOperation] = useState("");

    // number state(변수)를 변경하는 함수입니다.
  const handleChangeNumber = (enteredNumber) => {
    // 계산기는 숫자를 계속 붙여주기 때문에 number 변수를 string으로 입력받은다음
    // enteredNumber로 입력받은 숫자를 더해주고 마지막에 parseFloat로 숫자로 바꿔준다.
    setNumber(parseFloat(String(number) + enteredNumber))
  }

  // <- 버튼을 눌렀을때 숫자를 지워주는 함수입니다.
  const handleRemoveNumber = () => {
    // numberString으로 선언한 변수에 number을 string 자료형으로 바꾼 값을 넣어준다.
    const numberString = String(number)

    // 조건문을 선언할 건데, 조건문은 if (조건식) 으로 선언한다.
    // number에 값을 세팅할때 numberString의 길이가 1이면, 0으로 값을세팅한다
    // string 자료형에서 .length 라는 키워드를 사용하면 문자열의 길이를 알 수 있다
    // === 은 같을때를 의미한다.
    if (numberString.length === 1) {
      setNumber(0)
      // else문은 위의 조건식에 맞지 않는 경우 처리할 때 사용한다.
    } else {
      // numberString.slice 는 문자열을 자르는 함수로 abc라는 문자가 있을때 'abc'.slice(0,1) 을 하면 'a'만 나오게된다
      setNumber(parseFloat(numberString.slice(0, numberString.length - 1)))
    }
  }

  /* 
   * 4가지 기능 구현
   * 1. 기능은 계산기의 표시되는 숫자를 바꾸는 함수
   * 2. 표시되는 숫자를 한개씩 삭제하는 함수
   * 3. 더하기, 빼기, 나누기등의 명령어를 눌렀을 때 처리하는 함수
   * 4. = 을 눌렀을 때 계산 결과가 나오게하는 함수
  */
  
  /*
   * 1. 숫자를 변경하는 함수
   * 함수의 선언 -> 함수에서 받을 값 설정
   * 1,2,3,4... 를 눌렀을 때 그 숫자를 받아줘야하는데 그것을 () 괄호안에 변수명을 정해줘서 받으면 됨.
  */
  
  // 더하기, 빼기, 나누기, 나머지 등의 버튼을 눌렀을때 처리하는 함수
  const handleClickOperation = (enteredOperation) => {
    // 표시된 숫자가 0이 아닌경우에만 처리한다.
    // 아닌 경우를 비교할땐 !== 를 사용한다.
    if (number !== 0) {
      // 더하기 빼기 등의 입력받은 값을 세팅한다.
      setOperation(enteredOperation)

      // 기존에 입력된 값을 세팅한다.
      setHoldNumber(number);

      // 화면에 표시된값을 0으로 초기화한다.
      setNumber(0);
    }
  }
  const handleCalculation = () => {
    
    // switch case 문이라고하며, 변수에 들어오는 값이 정해져있을때 사용합니다.
    // switch () 괄호 안에는 값을 비교할 변수를 넣어줍니다. 
    // 여기에서는 더하기 빼기 등을 구분할 operation 변수를 넣어줍니다.
    switch (operation) {
      // case문에는 더하기, 빼기 등의 기호에 맞는 값을 넣어줍니다.
      case '+':
        // + 기호는 더하기이기 때문에 holdNumber(메인 숫자) + number화면에 표시된값을 더해줍니다.
        setNumber(holdNumber + number)
        // 처리 이후에는 항상 break;를 넣어줍니다. 이를 안넣으면 아래 case 구문이 또 실행됩니다.
        break;
      case '-':
        setNumber(holdNumber - number)
        break;
      case '*':
        setNumber(holdNumber * number)
        break;
      case '/':
        setNumber(holdNumber / number)
        break;
      case '%':
        setNumber(holdNumber % number)
        break;
      default:
        setNumber(holdNumber + number)
        break
    }
    setHoldNumber(0)
  }

  return (
    <div className="App">
      <main className='main'>
        <div className='container'>
          <div className='calculated'>
            {number}
          </div>
          <div>
            <button className='btn' onClick={() => setNumber(0)}>AC</button>
            <button className='btn' onClick={handleRemoveNumber}>C</button>
            <button className='btn' onClick={() => handleClickOperation('%')}>%</button>
            <button className='btn none' onClick={() => handleClickOperation('+')}>+</button>
          </div>
          <div>
            {/* 함수에 값을 전달해야해서 () => 함수명(값) 이런식으로 할당함.
            함수에 값을 전달할 것이 없다면 onClick={handleChangeNumber} 이런식으로 선언해주면 됨 */}

            <button className='btn' onClick={()=> handleChangeNumber(7)}>7</button>
            <button className='btn' onClick={()=> handleChangeNumber(8)}>8</button>
            <button className='btn' onClick={()=> handleChangeNumber(9)}>9</button>
            <button className='btn none' onClick={() => handleClickOperation('-')}>-</button>
          </div>
          <div>
            <button className='btn' onClick={()=> handleChangeNumber(4)}>4</button>
            <button className='btn' onClick={()=> handleChangeNumber(5)}>5</button>
            <button className='btn' onClick={()=> handleChangeNumber(6)}>6</button>
            <button className='btn none' onClick={() => handleClickOperation('*')}>*</button>
          </div>
          <div>
            <button className='btn' onClick={() => handleChangeNumber(1)}>1</button>
            <button className='btn' onClick={() => handleChangeNumber(2)}>2</button>
            <button className='btn' onClick={() => handleChangeNumber(3)}>3</button>
            <button className='btn none' onClick={() => handleClickOperation('/')}>/</button>
          </div>
          <div>
            <button className='btn' onClick={()=> handleChangeNumber(0)}>0</button>
            <button className='btn'>_</button>
            <button className='btn' onClick={() => handleChangeNumber('.')}>.</button>
            <button className='btn none' onClick={handleCalculation}>=</button>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default App;
