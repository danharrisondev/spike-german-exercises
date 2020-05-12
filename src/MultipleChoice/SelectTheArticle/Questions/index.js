const Der = 'der';
const Die = 'die';
const Das = 'das';
const Den = 'den';
const Dem = 'dem';
const Des = 'des';

function create(question, answer) {
    return {
        question,
        answer,
        options: [Der, Die, Das, Den, Dem, Des]
    }
}

const Questions = [
    create('What is the nominative masculine article?', Der),
    create('What is the nominative feminine article?', Die),
    create('What is the nominative neuter article?', Das),
    create('What is the nominative plural article?', Die),
    create('What is the accusative masculine article?', Den),
    create('What is the accusative feminine article?', Die),
    create('What is the accusative neuter article?', Das),
    create('What is the accusative plural article?', Die),
    create('What is the dative masculine article?', Dem),
    create('What is the dative feminine article?', Der),
    create('What is the dative neuter article?', Dem),
    create('What is the dative plural article?', Den),
    create('What is the genitive masculine article?', Des),
    create('What is the genitive feminine article?', Der),
    create('What is the genitive neuter article?', Des),
    create('What is the genetive plural article?', Der),
];

export default Questions;