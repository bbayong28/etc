const images = ["0.jpg", "1.jpg", "2.png", "3.png", "4.jpg", "5.jpg", "6.png", "7.png", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg","31.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImages = document.createElement("img");

bgImages.src = `./img/${chosenImage}`
bgImages.classList.add('bg_img')

document.body.appendChild(bgImages)

const clock = document.querySelector("#clock")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");


    clock.innerText=`${hours}:${minutes}:${seconds}`
    }

getClock() 
setInterval(getClock,1000)

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const greetingText = greeting.querySelector('.text');
const logout = greeting.querySelector('.logoutBtn')

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);
}

function paintGreetings(username) { 
    greetingText.innerText =`Hello ${username} :)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY)



if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);    
    loginForm.addEventListener("submit", onLoginSubmit);
} else { 
    paintGreetings(savedUsername);
}

function onLogout() {
    localStorage.removeItem(USERNAME_KEY)
    greeting.classList.add(HIDDEN_CLASSNAME)
    loginForm.classList.remove(HIDDEN_CLASSNAME)

}
logout.addEventListener('click', onLogout)
const toDoForm = document.getElementById("todo-form");
const toDoInpit = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
    
}

function deleteToDo(event) { 
    const li = event.target.parentElement;
    li.remove();
    //console.log(typeof(li.id))
    //toDos = toDos.filter(toDo => toDo.id !== li.id);
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos()
    
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) { 
    event.preventDefault();    
    const newTodo = toDoInpit.value;
    toDoInpit.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit)

function sayHello(item) { 
    console.log("this is the turn of", item )
}


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {  
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);    
}




const API_KEY="69312e4bcce28b39752638a4f8b2ebe9"

function onGeoOk(position) { 
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => { 
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            //const name = data.name;
            city.innerText = data.name;
            weather.innerText =` ${data.weather[0].main} / ${data.main.temp}`
    });

}
function onGeoError() { 
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
