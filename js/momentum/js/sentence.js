const quotes = [
    {
        quote: "내 삶에 책임을 지고 내가 가고 싶은 곳으로 데려다 줄 사람은 바로 나 자신이라는 사실을 깨달으세요.",
        author: "레스 브라운"
    },
    {
        quote: "피할수 없으면 즐겨라",
        author: "로버트 엘리엇"
    },
    {
        quote: "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
        author: "톨스토이"
    },
    {
        quote: "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다.",
        author: "베토벤"
    },
    {
        quote: "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자. ",
        author: "헨리포드"
    },
    {
        quote: "실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안 된다.",
        author: "하버트 개서"
    },
    {
        quote: "너 자신이 돼라. 다른 사람은 이미 있으니까 ",
        author: "오스카와일드"
    },
    {
        quote: "한번 포기하면 습관이 된다. 절대 포기하지 말아라",
        author: "마이클 조던"
    },
    {
        quote: "산다는 것은 호흡하는 것이 아니라 행동하는 것이다. ",
        author: "장 자크 루소"
    },
    {
        quote: "우리 인생의 가장 큰 영광은 결코 넘어지지 않는 데 있는 것이 아니라 넘어질 때마다 일어서는 데 있다.",
        author: "넬슨 만델라"
    },
    {
        quote: "잊지마라 벽을 눕히면 다리가 된다.",
        author: "안젤라 데이비스"
    },
    

];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

//console.log(quotes[0~10 이 필요함]);
const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)]
// Math.round() -> 정수자리까지 반올림
// Math.ceil() -> 정수자리까지 올림
// Math.floor() -> 정수자리까지 내림

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;