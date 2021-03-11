
const form = document.querySelector('#form');
const input = document.querySelector('#submit-image');
const createMeme = document.querySelector('#new-meme');
const removeButtons = document.querySelectorAll('div');

const firstInput = document.querySelector('input[name="firstline"]');
const lastInput = document.querySelector('input[name="lastline"]');
const myTextDiv = document.querySelector('#myText');

for (let btn of removeButtons){
    btn.addEventListener('click', function(e){
        e.target.parentElement.remove();
    });
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(input.value);
    const myImage = document.getElementById('myImage');
    const myImg = document.createElement('img');
    myImage.innerHTML = '';
    myImg.src = input.value;
    myImage.appendChild(myImg);
    input.value = '';
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'X';
    myImage.appendChild(removeBtn);
    
    
    const newFirstLine = makeFirstLine(
        firstInput.value,
    );
    const newLastLine = makeLastLine(
        lastInput.value,
    );
    myTopText.appendChild(newFirstLine);
    myBottomText.appendChild(newLastLine);
    // myTopText.appendChild(removeBtn);
    // myBottomText.appendChild(removeBtn);
    form.reset();
});



function makeFirstLine(text) {
    const firstLine = document.createElement('p');
    firstLine.innerText = text;
    return firstLine;
}
function makeLastLine(text) {
    const lastLine = document.createElement('p');
    lastLine.innerText = text;
    return lastLine;
};



















