async function typeSentence(divRef, text, delay = 25) {
    let done = false;
    // console.log(done)
    const button = document.getElementById('skip-effect');
    let buttonClicked = false;
    for (let sentence = 0; sentence < text.length; sentence++) {
        let tagParagraph = document.createElement('p'); // novo item adicionado
        divRef.appendChild(tagParagraph); // pega o novo item e adiciona no elemento pai

        const letters = text[sentence].split("");

        button.addEventListener('click', () => {
            buttonClicked = true;
        })
        if (buttonClicked) {
            tagParagraph.append(text[sentence]);
        }
        else {
            for (let i = 0; i < letters.length; i++) {
                if (buttonClicked) {
                    tagParagraph.append(letters[i]);
                }
                else {
                    await waitForMs(delay);
                    tagParagraph.append(letters[i]);
                }
            }
        }
        let jumpLine = document.createElement('br'); // novo item adicionado
        divRef.appendChild(jumpLine);
    }

    done = true;
    // console.log(done)
    showDiv('name');
}

function showDiv(div) {
    document.getElementById(div).style.display = 'block';
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const paragraphs = ['VEM PARA A AUREM!', 'A Aurem está revolucionando a inclusão no Brasil, utilizando \
a tecnologia como principal ferramenta. Diminuímos as barreiras da comunicação e conectamos pessoas. \
Isso é só o começo!', 'VEM FAZER PARTE DESSA REVOLUÇÃO!']


const typingText = document.querySelector('#apresentation-text') // elemento pai
typeSentence(typingText, paragraphs)


function changeState(element) {
    document.getElementById(element).style.display = 'block';
}