function loadRoutines(){
    fetch('https://skincare-project.onrender.com/routines')
  .then(response => response.json())
  .then(data => {
    const routinesContainer = document.getElementById('routines-container');

    data.routines.forEach(routine => {
      const routineCard = document.createElement('div');
      routineCard.classList.add('routine-card');

      const routineImage = document.createElement('img');
      routineImage.src = routine.image;
      routineCard.appendChild(routineImage);

      const routineTitle = document.createElement('h2');
      routineTitle.textContent = routine.title;
      routineCard.appendChild(routineTitle);

      const routineDescription = document.createElement('p');
      routineDescription.textContent = routine.description;
      routineCard.appendChild(routineDescription);

      const routineComments = document.createElement('comments');
      routineComments.textContent = routine.comments;
      routineCard.appendChild(routineComments);

      routinesContainer.appendChild(routineCard);
    });
  });

};

// Making the button responsive when filling the form but put it on prevent default so that it doesn't submit any personal things.
function addForm() {
  const addForm = document.getElementById("add_blog_form");

  addForm.addEventListener("submit", (event)=> {
    event.preventDefault();
  })
};

function addTask() {
  let addToDoButton = document.getElementById('addToDo');
  let toDoContainer = document.getElementById('toDoContainer');


let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', (event) => {
  let paragraph = document.createElement('p');

  paragraph.innerText = inputField.value;

  toDoContainer.appendChild(paragraph)

  inputField.value = "";

  // Here, I want the user to be able to click off their task after completing it.
  paragraph.addEventListener('click', (event) => {
    paragraph.style.textDecoration = "line-through";
  })

  // And double click to remove the task permanently.
  paragraph.addEventListener('dblclick', (event) => {
    toDoContainer.removeChild(paragraph);
  })
})
}

window.onload =() => {
    loadRoutines();
    addForm();
    addTask();
};
