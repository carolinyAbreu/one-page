// async function typeWrite(elemento) {
//     const typingText = document.getElementById('apresentation-text') // elemento pai
//     typingText.appendChild(elemento); // pega o novo item e adiciona no elemento pai

//     const textoArray = elemento.innerHTML.split('');
//     elemento.innerHTML = '';
//     for (let i = 0; i < textoArray.length; i++) {
//         setTimeout(() => {
//             elemento.innerHTML += textoArray[i]
//             , 150 * i
//         });
//     }
// }


async function typeSentence(divRef, paragraphs, delay = 0.5) {
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






// let tab = document.createElement('br')
// typeWrite(tab)

// tagParagraph = document.createElement('p');
// tagParagraph.textContent = paragraphs[1]
// typeWrite(tagParagraph)

// tagParagraph = document.createElement('p');
// tagParagraph.textContent = paragraphs[2]
// typeWrite(tagParagraph)

// tagParagraph = document.createElement('p');
// tagParagraph.textContent = paragraphs[3]
// typeWrite(tagParagraph)

// tab = document.createElement('br')
// typeWrite(tab)

// tagParagraph = document.createElement('p');
// tagParagraph.textContent = paragraphs[4]
// typeWrite(tagParagraph)

// while (true) {

// }



// for (let i = 0; i < text.lenght; i++) {
//     setTimeout(() => {
//         elemento.innerHTML += text[i], 500
//         console.log(elemento.innerHTML)
//     }) /* adiciona isso em 1000ms, isso em 200ms... etc*/ /* adiciona isso em 1000ms, isso em 200ms... etc*/
//     /* para cada letra que tem, vai adicionar uma depois da outra*/
//     /* a primeira letra é adicionada instantaneamente, a segunda letra será adicionada em 75 * i*/
// }