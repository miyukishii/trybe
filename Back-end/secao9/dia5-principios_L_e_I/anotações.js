// Será capaz de substituir objetos em um programa por instâncias de seus subtipos, sem alterar a funcionalidade do programa.
// Compreender que muitas interfaces específicas são melhores do que uma para todos os propósitos;
// Aplicar todos os princípios SOLID.
// Os princípios visam aumentar a coesão e diminuir acoplamento do código, fazendo com que o software seja lido mais facilmente e modificado sem gerar muitos efeitos colaterais (bugs).

// S: Single Responsibility Principle (Princípio da Responsabilidade Única ou SRP) -> cada entidade deve possuir somente uma única razão de existir.
// O: Open/Closed Principle (Princípio do Aberto/Fechado ou OCP), que diz que uma entidade deve estar aberta para extensão, mas fechada para modificação.
// D: Dependecy Inversion Principle (Princípio da Inversão de Dependência ou DIP) que diz que entidades de alto nível não devem depender de entidades de baixo nível.

// L: Liskov Substituition Principle
// O princípio diz: Objetos em um programa devem ser substituíveis por instâncias de seus subtipos, sem alterar a funcionalidade do programa.
// Ou seja, se você possui uma superclasse A e uma subclasse b, onde quer que a A seja esperada, se B for passada, seu programa deve se comportar da mesma forma.

// I: Interface Segregation Principle -ISP
// O princípio afirma que nenhum cliente deve ser forçado a depender de métodos que não utiliza.
// Isso quer dizer que devemos separar as interfaces e as compor conforme for necessário, fazendo com que uma entidade (classe) não precise implementar coisas que ela não vai usar.n 