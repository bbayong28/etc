//02
//json 파일로 부터 items을 동적으로 받아 올 것임 => 간단하게 fetch()를 써봄
//Fetch the items from the JSON file
function loadItems() { 
  return fetch('./data/data.json')
    //fetch는 데이터를 성공적으로 받아오면 response라는 object를 전달해 줌.
    //뭔지 잘 모르겠으니까 console창에 출력 해봄
    //.then(response => console.log(response));
    //이렇게 출력 됨 -> Response {type: 'basic', url: 'http://127.0.0.1:5501/data/data.json', redirected: false, status: 200, ok: true, …}
    .then(response => response.json())    
    //response를 response object가 있는 json이라는 api를 이용해서 response의 body를 json의 object로 변환할 것이다. ;
    //.then(json => console.log(json))
    // ->{items: Array(18)}라고 출력 됨.
    //json전체를 다 return 하는게 아니라 json에있는 items만 전달할 거임.
    .then(json => json.items)
  
  //즉 loadItems라는 함수는 fetch()를 이용해 데이터를 받아오고, 받아온 데이터 성공적이면 json으로 변환하고 josn안에 있는 items를 return하게 됨


}


//04
//displayItems()구현
//items라는 인자를 받아옴. 받아온 items라는 데이터를 html요소로 변환해서 페이지에 표기되도록 만들어 줌
//Update the list with the given items
function displayItems(items) {
  //부모 container 안에 만들어 줘야하기 때문에 container 요소를 먼저 만들어줌
  const container = document.querySelector('.items');
  //container안에 createHTMLString로 item 들을 li태그로 만들어 줄 것임
  //container.innerHTML = items.map(item => createHTMLString(item))
  //07
  //중간중간 궁금하면 출력해보면 됨.
  const html = items.map(item => createHTMLString(item)).join('');
  //console.log(html)
  //<li>~~~</li> html 내용 출력 됨.
  //06
  //문자열이 들어있는 배열을 한가지의 문자열로 병합하기 위하여 쓸 수있는 것은?  join이라는 api가 있음
  container.innerHTML = items.map(item => createHTMLString(item)).join('');


}

//05
//item 들을 li태그로 만들어 줄 것임
//Create HTML list item from the given data item
function createHTMLString(item) { 
  return `
    <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item__thumbnail"/>
      <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
  `;
}


//09
//html에 data-type 추가해 줌.
function onButtonClick(e, items) {
  const dataset = e.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  //buttons로 묶어놨기 따문데 공박, 여백을 클릭해도 콘솔창에 찍힘. 
  //key, value값이 없는 공백을 눌렀을 때 실행되지않게 하기!!
  if (key === null || value === null) {
    return;
  }
  
  ////displayItems(items.filter(item => iten[key] === value));
  //const filtered = items.filter(item => item[key] === value)
  ////console.log(filtered)
  //displayItems(filtered);

  //10
  /*
  근데 이렇게 하면 단점이 있음 
  새롭게 클릭할 때마다 요소들을 만들어서 다시 채ㅜㅅ먀ㅜㄷㄱ에 innerHTML에 업데이트 하니까 버튼이 클릭 될때마다 새로운 요소들을 만들어야하고 전체적으로 container가 업데이트 되어야하는 단점이 있음 
  해결방법 => filtering된 아이들을 다시 보여주기 보다는 전체적으로 list를 유지하면서 버튼이 클릭되었을 때 해당하는 요소만 class에 visible을 추가해서 해당요소만 display하고 해당하지않는 녀석들은 display none을 이용해 보여지지 않게함
  어떻게?
  */
  updateItems(items, key, value);
  
}


// Make the items matching {key: value} invisible.
function updateItems(items, key, value) { 
  items.forEach(item => {
    if (item.dataset[key] === value) {
      item.classList.remove('invisible');
    } else {
      item.classList.add('invisible');
    }
  });
}


//08
function setEventListeners(items) { 
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  //logo.addEventListener('click', function () { displayItems(items)})
  logo.addEventListener('click', () => {
    displayItems(items)
  });
  buttons.addEventListener('click', (e) => {
    onButtonClick(e, items)
  });
}







//01
//data.json을 이용해 동적으로 item list들을 만들어 볼 것임.
//큰 그림이자 main!!!!!
//main.js파일이 실행이 되면 loadItems()를 실행할 것이다.
//성공적이면 then()을 이용해 items를 받아올 것임

loadItems().then(items => {
    //items가 다 불러와지면 받아와진 items를 displayItems html에 보여주고 받아온 items를 displayItems 함수에 전달해줌
    displayItems(items);
    //받아온 items 중에서 버튼을 누르면 filtering을 해야함 => 적절한 eventlistener을 추가해 봄
    setEventListeners(items);
    
    //03
    //받아온 items를 출력해 보면
    //console.log(items)
    //(18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] 이렇게 배열자체만 출력 됨.
    

  })
  //성공적으로 되지 않으면 catch()를 이용해 에러메세지를 보여준다던지 list대신에 경고문구를 보여준다던지 함.
  .catch(console.log);
