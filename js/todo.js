const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos"

let toDos =[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text; 
    const button = document.createElement("button");
    button.innerText = "삭제";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button); 
    toDoList.appendChild(li); 
}

function handleToFoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value; 
    toDoInput.value = ""; 
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToFoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(saveToDos);

if(savedToDos !== null){ 
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    //foreach함수는 이 painttodo를 parsedtodos 배열의 요소마다 실횅시킴
}