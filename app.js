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
  ask: `<h2>3 VS Code это edoC SV если наоборот, знал?</h2>`,
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
},
{
  ask: `<h2>6 What this is JS?</h2>`,
  answers: [ 'ЯП', 'ХЕРАП', 'КЛУБ', 'Дом для драконов' ],
  correctAnswer: 0
},
{
  ask: `<h2>7 Where are you form?</h2>`,
  answers: [ 'Болото', 'Азерот', 'Евроопт', 'Радуга' ],
  correctAnswer: 2
},
{
  ask: `<h2>8 How old are you?</h2>`,
  answers: [ 'Гав 22', 'Мяу 24', 'Мяу 25', 'Мяу 26' ],
  correctAnswer: 3
},
{
  ask: `<h2>9 What are your name?</h2>`,
  answers: [ 'Harry Potter', 'Diablo', 'Trall', 'Снегурочка' ],
  correctAnswer: 3
},
{
  ask: `<h2>10 Are you gay?</h2>`,
  answers: [ 'мм Да', 'мм дай подумать, даа', 'ой ну канеш', 'съебался в спешке' ],
  correctAnswer: 2
}]

const $ask = document.querySelector('.ask')
const $answersWrapper = document.querySelector('.answers')
const $answers = document.querySelectorAll('.answers__btn')
const $progressNum = document.querySelector('.progress__num')
let numQuest = 0
let checkAnswer = true

$ask.innerHTML = questions[0].ask
Array.from($answers).map((e, i) => {
  e.innerHTML = questions[0].answers[i]
})
$progressNum.innerHTML = numQuest + 1 + ' from 10'


$answers.forEach((elBtn, iBtn) => {
  elBtn.addEventListener('click', () => {
    if (numQuest < questions.length && checkAnswer) {
      checkAnswer = false
      if (numQuest === questions.length - 1) {
        $ask.innerHTML = ''
        $answersWrapper.innerHTML = ''
        $progressNum.innerHTML = ''
      } else {
        iBtn === questions[numQuest].correctAnswer ? elBtn.classList.add('answers__btn-correct') : elBtn.classList.add('answers__btn-no-correct')
        numQuest++
        setTimeout(() => {
          checkAnswer = true
          elBtn.classList.remove('answers__btn-correct')
          elBtn.classList.remove('answers__btn-no-correct')
          $ask.innerHTML = questions[numQuest].ask
          for (let i = 0; i < $answers.length; i++) { $answers[i].innerHTML = questions[numQuest].answers[i] }
          $progressNum.innerHTML = numQuest + 1 + ' from 10'
        }, 1000)
      }
    }
  })
})

//Сделать
//кнопки со случайным расположением
//подведение итога

//классом/рефакторинг

