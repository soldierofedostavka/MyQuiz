const tasks = 
[{
  question: `<h2>Кто на картинке?</h2><img src="leha.jpg" alt="leha">`,
  answers: [ 'Кошка', 'Лёшка', 'Антошка', '1С программист' ],
  correctAnswer: 1
},
{
  question: `<h2>Что будет, если дать Лёшке кружку пива?</h2>`,
  answers: [ 'Он издаст звук ПииииуууУ', 'Он упадёт на колени', 'Он убежит в слезах в галактику?', 'Всё сразу' ],
  correctAnswer: 3
}]

const quest = document.querySelector('.ask')
quest.innerHTML = tasks[0].question

const $answers = document.querySelectorAll('.answer')
$answers.forEach((e, i) => {
  e.innerHTML = tasks[0].answers[i]
  e.addEventListener('click', () => {
    if (i == tasks[0].correctAnswer) {
      quest.innerHTML = tasks[1].question
      for (let i = 0; i < $answers.length; i++) {
        $answers[i].innerHTML = tasks[1].answers[i]
      }
    }
  })
})
