let i = 0;
let count = 0;


class Quiz {
    constructor(q, opt1, opt2, opt3, answer) {
        this.q = q;
        this.opt1 = opt1;
        this.opt2 = opt2;
        this.opt3 = opt3;
        this.answer = answer;
    }
}

class Question {
    constructor() {
        this.ourQuestions = [];
    } 
}

function generate() {
    document.getElementById("question").innerHTML = totQ[totQ];
}




let totQ = new Question();

let json = getJSON('http://www.mocky.io/v2/5d91eaa9310000d4a910cbce');

for (let JSONQ of json) {
    let foo = new Quiz(JSONQ.q, JSONQ.opt1, JSONQ.opt2, JSONQ.opt3, JSONQ.answer);
    totQ.ourQuestions.push(foo);
}



console.log(totQ);
