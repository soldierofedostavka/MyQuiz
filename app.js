const questions = 
[{
  ask: `<h2>1 Кто на картинке?</h2>`,
  answers: [ 'Кошка', 'Лёшка', 'Антошка', '1С программист' ],
  correctAnswer: 1
},
{
  ask: `<h2>2 Пойдём в галактику?</h2>`,
  answers: [ 'Канеш Брооо', 'Да', 'Побежим', 'Ноуп' ],
  correctAnswer: 0
},
{
  ask: `<h2>3 В VSCode когда заменяешь (Ctrl + h) можно тоже использовать регулярные выражения, там кнопка есть) Знал?</h2>`,
  answers: [ 'Да', 'Есцэствена', 'Отвернись', 'Мяу' ],
  correctAnswer: 3
},
{
  ask: `<h2>4 Как делы?</h2>`,
  answers: [ 'Кул', 'Вери кул', 'Анти кул', 'Ноуп' ],
  correctAnswer: 1
},
{
  ask: `<h2>5 Что будет, если дать Лёшке кружку пива?</h2>`,
  answers: [ 'Он издаст звук ПииииуууУ', 'Он упадёт на колени', 'Он убежит в слезах в галактику', 'Всё сразу' ],
  correctAnswer: 3
}]

const $ask = document.querySelector('.ask')
const $answers = document.querySelectorAll('.answers__btn')

$ask.innerHTML = questions[0].ask
Array.from($answers).map((e, i) => {
  e.innerHTML = questions[0].answers[i]
})

let numQuest = 0
$answers.forEach((elBtn, iBtn) => {
  elBtn.addEventListener('click', () => {
    if (iBtn === questions[numQuest].correctAnswer && numQuest < questions.length - 1) {
      elBtn.classList.add('answers__btn-correct')
      setTimeout(() => {
        numQuest++
        $ask.innerHTML = questions[numQuest].ask
        for (let i = 0; i < $answers.length; i++) { $answers[i].innerHTML = questions[numQuest].answers[i] }
      }, 1000)
    } else {
      elBtn.classList.add('answers__btn-no-correct')
      setTimeout(() => {
        elBtn.classList.remove('answers__btn-no-correct')
      }, 1000)
    }
  })
})

//Сделать
//кнопки со случайным расположением
//анимацию на правильный/не правильный ответ
//подведение итога
//какую ни будь полосу прогресса

//классом/рефакторинг
