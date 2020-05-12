const Masculine = 'der';
const Feminine = 'die';
const Neuter = 'das';
const Plural = 'die';

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