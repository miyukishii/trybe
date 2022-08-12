// A biblioteca redux é utilizado no gerenciamento de estado, e possui uma ligação muito forte com React, porém ela não depende do Reactpara ser utilizado. 
// Pode ser utilizado com qualquer framework front-end, e até com js puro (Vanilla JS).

// Imagine que é necessário passar informações entre vários componentes em React, é difícil quando os componentes possuem diferentes níveis de hierarquia. Logo, é aí que o Redux ajuda. Deixando o  código mais organizado e confiável.

// Resumindo, o Redux ajuda a resolver problemas de fluxo de informação dentro da minha app.

// o Store é oq ue vai armazenar o estado central da app, e todos os outros lugares que utilizam redux vão interagir com o Store.
// Uma action é o objeto que contém a alteração que vai ser feita no estado.
// O Reduce define como a atualização será realizada. É uma função js que recebe o esttado e a atualização e retorna ao store.
// o store.dispach() recebe como parâmetro uma action, é uma entidade que utiliza para despachar a action para o reducer.
// store.getStat() é utilizado para recuperar informação do Store.

