async function typeSentence(divRef, paragraphs, delay = 50) {
    for (let sentence = 0; sentence < paragraphs.length; sentence++) {
        let tagParagraph = document.createElement('p'); // novo item adicionado
        divRef.appendChild(tagParagraph); // pega o novo item e adiciona no elemento pai

        const letters = paragraphs[sentence].split("");
        for (let i = 0; i < letters.length; i++) {
            await waitForMs(delay);
            tagParagraph.append(letters[i]);
        }
        let jump = document.createElement('br'); // novo item adicionado
        divRef.appendChild(jump);
    }
}


function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


const paragraphs = ['VEM PARA A AUREM!', 'A Aurem está revolucionando a inclusão no Brasil, utilizando \
a tecnologia como principal ferramenta. Diminuímos as barreiras da comunicação e conectamos pessoas. \
Isso é só o começo!', 'VEM FAZER PARTE DESSA REVOLUÇÃO!']

const typingText = document.querySelector('#apresentation-text') // elemento pai
typeSentence(typingText, paragraphs)
