function funcaoTest(callback) {
    console.log('Olha o gulp ai');
    callback()
}


// funçao publica pq eu exportei ela usando o exports.fazPergunta = fazPergunta;
function fazPergunta(callback) {
    console.log('Qual seu nome?');
    fazExclamacao();
    callback();
};


// funçao privada pq nao exportei ela mas consigo usar ela em outra funçao
function fazExclamacao(callback) {
    console.log('Hoje vai chover!');
    callback();
}



exports.default = funcaoTest;
exports.fazPergunta = fazPergunta;