const currentHour = 11;
let message = "";

if(currentHour>=22) {
    console.log(message = "Não deveríamos comer nada, é hora de dormir");
}
else if (currentHour >=18 && currentHour <22) {
    console.log(message ="Rango da noite, vamos jantar!");
}
else if (currentHour >=14 && currentHour <18) {
    console.log(message = "Vamos fazer um bolo pro café da tarde?");
}
else if (currentHour >11 && currentHour< 14) {
    console.log(message="Hora do almoço!");
}
else {
    console.log(message="Hmmmm, cheiro de café recém passado");
}
