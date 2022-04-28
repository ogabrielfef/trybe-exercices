//1
const newEmployees = (dadosEmployees) => {
    const employees = {
        id1: dadosEmployees('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: dadosEmployees('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: dadosEmployees('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const dadosEmployees = (nomeCompleto) => {
        let emailFormat = `${nomeCompleto.replace(' ','_').toLowerCase()}@trybe.com`;
        return {
            nome: nomeCompleto,
            email: emailFormat
        }
}

console.log(newEmployees(dadosEmployees))

//2
const checkNumber = (myNumber, number) => myNumber === number;

const lottery = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);

    return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lottery(2, checkNumber));


//3 
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const confereRespostas = (rightAnswer, studentAnswer) => {
    if (rightAnswer === studentAnswer){
        return 1;
    } if (STUDENT_ANSWERS === 'N.A'){
        return 0;
    } return -0.5;
}
const contaPontos = (rightAnswer, studentAnswer, action) => {
    let contador = 0;
    for (let index = 0; index < rightAnswer.length; index += 1) {
        const actionReturn = action(rightAnswer[index], studentAnswer[index]);
        contador += actionReturn;
    }
    return `Resultado final: ${contador} pontos`;
};
console.log(contaPontos(RIGHT_ANSWERS, STUDENT_ANSWERS, confereRespostas));