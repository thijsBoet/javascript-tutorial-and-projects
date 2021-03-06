// eventListeners
function eventListeners(){
  const showBtn = document.getElementById("show-btn");
  const questionCard = document.querySelector(".question-card");
  const closeBtn = document.querySelector(".close-btn");
  const form = document.getElementById("question-form");
  const feedback = document.querySelector(".feedback");
  const questionInput = document.getElementById("question-input");
  const answerInput = document.getElementById("answer-input");
  const questionList = document.getElementById("questions-list");
  let data = [];
  let id = 1;

  const ui = new UI();
  showBtn.addEventListener('click', () => ui.showQuestion(questionCard));
  closeBtn.addEventListener("click", () => ui.hideQuestion(questionCard));
  // add question
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const questionValue = questionInput.value;
    const answerValue = answerInput.value;

    if(questionValue === '' || answerValue === '') {
      feedback.classList.add('showItem', 'alert-danger');
      feedback.textContent = 'cannot add empty values';
      setTimeout(() => {
        feedback.classList.remove("showItem", "alert-danger");
        feedback.textContent = "";
      }, 3000)
    } else {
      const question = new Question(id, questionValue, answerValue);
      data.push(question);
      id++;
      ui.addQuestion(questionList, question);
      ui.clearFields(questionInput, answerInput);
    }
  });
  questionList.addEventListener('click', (e)=> {
    e.preventDefault();
    if(e.target.classList.contains('delete-flashcard')) {
      let id = e.target.dataset.id;

      questionList.removeChild(e.target.parentElement.parentElement.parentElement);

      let tempData = data.filter((item) => item.id !== parseInt(id));
      data = tempData;
    } else if(e.target.classList.contains('show-answer')) {
      e.target.nextElementSibling.classList.toggle('showItem');
    } else if (e.target.classList.contains('edit-flashcard')) {
      let id = e.target.dataset.id;
      // delete from DOM
      questionList.removeChild(e.target.parentElement.parentElement.parentElement);
      // show question
      ui.showQuestion(questionCard);
      // filter questions
      const tempQuestion = data.filter(item =>  item.id === parseInt(id));
      // rest of the data
      let tempData = data.filter(item => item.id !== parseInt(id));

      data = tempData;
      questionInput.value = tempQuestion[0].title;
      answerInput.value = tempQuestion[0].answer;
    };
  })
}
// UI constructor
function UI(){}
// show question card
UI.prototype.showQuestion = element => element.classList.add('showItem');
// hide question card
UI.prototype.hideQuestion = element => element.classList.remove('showItem');
// add question
UI.prototype.addQuestion = (element, question) => {
  const div = document.createElement('div');
  div.classList.add("col-md-4");
  div.innerHTML = `
  <div class="card card-body flashcard my-3">
    <h4 class="text-capitalize">${question.title}</h4>
    <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
    <h5 class="answer mb-3">${question.answer}</h5>
    <div class="flashcard-btn d-flex justify-content-between">
      <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="${question.id}">edit</a>
      <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase" data-id="${question.id}">delete</a>
    </div>
  </div>`;
  element.appendChild(div);
}
// clear fields
UI.prototype.clearFields = (question, answer) => {
  question.value = '';
  answer.value = '';
}
// Question constructor
function Question(id, title, answer) {
  this.id = id;
  this.title = title;
  this.answer = answer;

}
// Dom Content loaded listener
document.addEventListener('DOMContentLoaded', function(){
  eventListeners();
})