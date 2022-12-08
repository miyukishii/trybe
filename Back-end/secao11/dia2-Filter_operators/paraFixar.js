// 1 - Selecione e faça a contagem dos restaurantes presentes nos bairros Queens, Staten Island e Bronx. (utilizando o atributo borough)

// --> db.restaurants
//   .countDocuments({ borough: {$in: ['Queens', 'Staten Island', 'Bronx'] } })


// 2 - Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo American. (utilizando o atributo cuisine)

// --> db.restaurants
//   .countDocuments({ cuisine: {$ne: 'American' } })

// 3 - Selecione e faça a contagem dos restaurantes que possuem avaliação maior ou igual a 8. (utilizando o atributo rating)

// --> db.restaurants
//   .countDocuments({ rating: {$gte: 8 } })

// 4 - Selecione e faça a contagem dos restaurantes que possuem avaliação menor que 4.

// --> db.restaurants
//   .countDocuments({ rating: {$lt: 4 } })

// 5 - Selecione e faça a contagem dos restaurantes que não possuem as avaliações 5, 6 e 7.

// --> db.restaurants
//   .countDocuments({ rating: {$nin: [5, 6, 7] } })

// 6 - Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5, essa consulta também deve retornar restaurantes que não possuem o campo de avaliação.

// --> db.restaurants
//   .countDocuments({ rating: { $not: { $lte: 5 } } });

// 7 - Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6, ou restaurantes localizados no bairro Brooklyn.

// --> db.restaurants
//   .countDocuments({
//     $or: [
//       { rating: { $gte: 6 }  },
//       { borough: { $eq: 'Brooklyn' }  }
//     ]
//   });
      

// 8 - Selecione e faça a contagem dos restaurantes localizados nos bairros Queens, Staten Island e Brooklyn e possuem avaliação maior que 4.

// --> db.restaurants
//   .countDocuments({
//     $and: [
//       { rating: { $gt: 4 }  },
//       { borough: { $in: ['Brooklyn', 'Queens', 'State Island'] }  }
//     ]
//   });

// 9 - Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1, nem o campo culinária seja do tipo American.

// -->db.restaurants
//   .countDocuments({
//     $nor: [
//       { rating: { $eq: 1 }  },
//       { cuisine: 'American'  }
//     ]
//   });
      
// 10 - Selecione e faça a contagem dos restaurantes em que a avaliação seja maior que 6 ou menor que 10, E esteja localizado no bairro Brooklyn OU não possuem culinária do tipo Delicatessen.

// -->db.restaurants
//   .countDocuments({
//     $and: [
//              { $or: [{ rating: {  $gt: 6 ,  $lt: 10 } }] },
//              { $or: [{ borough: 'Brooklyn' },  { cuisine: { $ne: 'Delicatessen'} } ] }
//     ],        
// });

// 11 - Ordene alfabeticamente os restaurantes pelo nome (atributo name).

// --> db.restaurants
//   .find()
//   .sort({
//     name: 1
//   })
//   .pretty()

// 12 - Ordene os restaurantes de forma decrescente baseado nas avaliações.

// --> db.restaurants
//   .find()
//   .sort({
//     'rating': -1
//   })
//   .pretty()

// 13 - Remova o primeiro restaurante que possua culinária do tipo Ice Cream, Gelato, Yogurt, Ices.

// --> db.restaurants
//   .deleteOne({ cuisine: 'Ice Cream, Gelato, Yogurt, Ices'})

// 14 - Remova todos os restaurantes que possuem culinária do tipo American.

// --> db.restaurants
//   .deleteMany({ cuisine: 'American'})