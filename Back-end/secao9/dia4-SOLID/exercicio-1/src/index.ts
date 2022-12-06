// Suponha que você deve construir uma aplicação para gerenciar a situação de pessoas estudantes em uma escola. A sua primeira tarefa é criar uma função que, ao ser chamada, determina a aprovação ou não de uma pessoa estudante e atualiza seu status no banco de dados como Aprovada ou Reprovada. Além disso, as notas marcadas de 0% a 100% (0.0 a 1.0) devem ser convertidas para os conceitos de A a F.

type Discipline = {
    name: string;
    grade: number;
    letterGrade?: string;
  };
  
  type Student = {
    name: string;
    disciplines: Discipline[];
  };
  
  /* "Converter" */
  const percentageGradesIntoLetters = ({ name: studentName, disciplines }: Student):
    { name: string, disciplines: Discipline[]} => ({
    name: studentName,
    disciplines: disciplines.map(({ name, grade }) => {
      let letterGrade;
  
      if (grade >= 0.9) letterGrade = 'A';
      else if (grade >= 0.8) letterGrade = 'B';
      else if (grade >= 0.7) letterGrade = 'C';
      else if (grade >= 0.6) letterGrade = 'D';
      else if (grade >= 0.1) letterGrade = 'E';
      else letterGrade = 'F';
  
      return { name, grade, letterGrade };
    }),
  });
  
  /* "Determinar" */
  const approvedStudents = ({ disciplines }: Student): boolean =>
    disciplines.every(
      ({ grade }) => grade > 0.7,
    );
  
  /* "Atualizar" */
  const updateApprovalData = ({ name: studentName, disciplines }: Student): void => {
    console.log(`A pessoa com nome ${studentName} foi aprovada!`);
  
    disciplines.map(({ name, letterGrade }) =>
      console.log(`${name}: ${letterGrade}`));
  };
  
  function setApproved(students: Student[]): void {
    students
      .map(percentageGradesIntoLetters)
      .filter(approvedStudents)
      .map(updateApprovalData);
  }
  
  /*
    Não se esqueça que é necessário exportar ao final as funções para que você
    possa testá-las
  */
  export {
    percentageGradesIntoLetters,
    approvedStudents,
    updateApprovalData,
    setApproved,
  };