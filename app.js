const task = {
  question: 'Ты придурок?',
  answers: [ 'Да', 'Нет', 'А ты?', 'Пошла в дупу' ],
  correctAnswer: 0
}

const quest = document.querySelector('h2')
quest.innerHTML = task.question

const answers = document.querySelectorAll('.answer')
console.log(task.answers[1].a1)
answers.forEach((e, i) => {
  e.innerHTML = task.answers[i]
})