function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

// Exercício 1
//Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
  
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function addDaysOfMonth() {
  let accessList = document.querySelector("#days");

  for(let index = 0; index < dezDaysList.length; index += 1){
    let day = dezDaysList[index];
    let dayItem = document.createElement("li");

    if(day === 24||day ===31){
        dayItem.className = "day holiday";
        dayItem.innerHTML = day;
        accessList.appendChild(dayItem);
    } else if(day === 4||day === 11||day === 18){
        dayItem.className = " day friday";
        dayItem.innerHTML = day;
        accessList.appendChild(dayItem);
    } else if(day === 25){
        dayItem.className = "day friday holiday";
        dayItem.innerHTML = day;
        accessList.appendChild(dayItem);
    } else {
        dayItem.className = "day";
        dayItem.innerHTML = day;
        accessList.appendChild(dayItem);
      }
   }
 }
addDaysOfMonth();

// Exercício 2)
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" 

let accessButtonDiv = document.querySelector(".buttons-container");
function buttonHoliday(name){
  let createButton = document.createElement("button");
  createButton.id = "btn-holiday";
  accessButtonDiv.appendChild(createButton);
  createButton.innerHTML = name;
}
buttonHoliday("Feriados");

// Exercício 3)
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .


function changeColor() {
  let holiDays = document.getElementsByClassName('holiday');
  for (let index = 0; index < holiDays.length; index += 1) {
    if (holiDays[index].style.backgroundColor !== "red") {
        holiDays[index].style.backgroundColor = "red";
        holiDays[index].style.color = "white";
    } else {
      holiDays[index].style.backgroundColor = "#eee";
      holiDays[index].style.color = "#777";
      }
    }
  }

let holidayButton = document.querySelector("#btn-holiday");
holidayButton.addEventListener("click", changeColor);

// Exercício 4)

function buttonFriday(name){
  let createButton = document.createElement("button");
  createButton.id = "btn-friday";
  accessButtonDiv.appendChild(createButton);
  createButton.innerHTML = name;
}
buttonFriday("Sexta-feira");

// Exercício 5)

function changeText() {
  const array = [4, 11, 18, 25];
  let friDays = document.getElementsByClassName("friday");
  for (let index = 0; index < friDays.length; index += 1) {
    if (friDays[index].innerHTML !== "Sextou!") {
        friDays[index].innerHTML = "Sextou!";
    } else {
        friDays[index].innerHTML = array[index];
      }
    }
}
let fridayButton = document.querySelector("#btn-friday");
fridayButton.addEventListener("click", changeText);

// Exercicio 6)

function mouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
  })
};

function mouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
  })
};

mouseOver();
mouseOut();




