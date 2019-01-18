const Masculine = 'masculine';
const Feminine = 'feminine';
const Neuter = 'neuter';
const Plural = 'plural';

function create(question, answer) {
    return {
        question,
        answer,
        options: [Masculine, Feminine, Neuter, Plural]
    };
}

const Questions = [
    create('Mann', Masculine),
    create('Frau', Feminine),
    create('Mädchen', Neuter),
    create('Junge', Masculine),
];

export default Questions;