// Math.random()
// 많은 눈송이를 동적으로생성하고 시작점을 랜덤화 하려고
// 0과 1사이의 임의 숫자를 제공. 
// 0에서 10 사이의 숫자를 바란다면 * 10 해주면 됨 => Math.random() * 10 

//문서의 'body'를 얻자
const body = document.querySelector("body");

//애니메이션을 원하는 최소 지속시간인 10초의 상수를 만들자
const MIN_DURATION = 10;


function makeSnomwflake() { 
  //div 요소 만들기
  const snowflake = document.createElement("div");

  //랜덤으로 딜레이 시킬 초
  const delay = Math.random() * 10;
  //깊이감을 얻기 위해 불투명도를 무작위화 
  const initialOpacity = Math.random();

  //그리고 애니메이션의 지속시간이 될 "0"과 "20"사이의 다른 임의의 값에 그 상수를 더해보자
  const duration = Math.random() * 20 + MIN_DURATION;


  //만들어놓은 css, animation 쓰기 위해 snowflake클래스 주기
  snowflake.classList.add("snowflake");

  //그 후, 'Math.random()'을 호출하고, 화면의 너비를 곱하기 
  //snowflake.style = `${Math.random() * window.screen.width}px`

  //이값('Math.random()'을 호출하고, 화면의 너비를 곱하기)을 눈송이를 왼쪽으로 이동시키기 위해 사용할 거다.
  snowflake.style.left = `${Math.random() * window.screen.width}px`

  //애니메이션 지연시키기 위해
  snowflake.style.animationDelay = `${delay}s`;

  //깊이감을 얻기 위해 불투명도를 무작위화 
  snowflake.style.opacity = initialOpacity;

  //동적으로 '.snowflake'애니메이션을 설정하는것만 하면 됨!
  snowflake.style.animation = `fall ${duration}s linear`


  body.appendChild(snowflake);

  //애니메이션이 끝난 후 페이지에서 눈송이를 제거하는 코드
  //애니메이션이 언제 끝났는지 알기 위해서 애니메이션의 '기간'에 '지연'을 더한 값을 밀리초로 환산한 후 1000으로 곱하자
  //이 코드를 사용한면 눈송이가 떨어지고난 후 유저가 볼수 없을 때 눈송이는 페이지에서 제거 될것이다
  // 눈송이를 무한히 만들기 위해 페이지에서 눈송이를 제거한 후, makeSnomwflake()함수를 호출할 것이다.
  //이걸로 눈송이가 죽고 살아나고를 반복함으로 무한한 눈송이를 경험할 수 있다.
  setTimeout(() => { 
    body.removeChild(snowflake);
    makeSnomwflake()
  }, (duration + delay) * 1000)
}

//이제 함수를 호출하자
//50번 실행해야하는 'for loop' 내부에서 호출하면 됨
//대신 50개가 모두 동시에 떨어져서 좀 이상해보이긴 함.
//더 자연스러운 눈의 느낌을 주기 위해서 'makeSnowflake' 함수를 호출하는 'for loop'에서
//for (let i = 0; i < 50; i++) { 
//  makeSnomwflake()
//}
for (let i = 0; i < 50; i++) { 
  setTimeout(makeSnomwflake, 500 * i)
}



