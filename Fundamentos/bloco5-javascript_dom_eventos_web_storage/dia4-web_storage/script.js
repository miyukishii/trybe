// Para criar um cookie, propriedade document.cookie uma string contendo o nome e o valor do que se pretende armazenar:
//      document.cookie = 'email=isabella@email.com';

// o cookie é deletado quando fechamos o navegador. Para que isso não aconteça, você pode adicionar uma data para expiração como no exemplo abaixo:
//       document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

//Para deletar o cookie, você não precisa especificar o valor que pretende deletar. Você pode deletá-lo passando uma data que já expirou:
//        document.cookie = 'email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;'

// Transformar dados em uma estring:
//        JSON.stringify()

//EX:const myObj = {
//   name: 'Link',
//   age: 20,
// };
//localStorage.setItem('myData', JSON.stringify(myObj));
// console.log(recoveredObject);

//Trasnformar dados de volta ao formato original:
//         JSON.parse() 

//EX.const myObj = {
//   name: 'Link',
//   age: 20,
// };

// const recoveredObject = JSON.parse(localStorage.getItem('myData'));
// console.log(recoveredObject);