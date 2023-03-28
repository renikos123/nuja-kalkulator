const coolButton = document.
querySelector('.js-cool');
const dontButton = document.
querySelector('.js-dont');

coolButton.addEventListener('mouseover', () => {
    window.open('https://www.youtube.com/watch?v=zZaQ9h14Ruw&ab_channel=D%C4%81visL%C4%81p%C4%81ns', '_blank')
})

dontButton.addEventListener('mouseover', () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank')
})