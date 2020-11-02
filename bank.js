const bank = document.querySelector('#cardBank');
const title = document.querySelector("#subject");

const onDropCard = (event) => {
  const id = event.dataTransfer.getData('id');
  bank.appendChild(document.getElementById(id));
}

bank.ondrop = onDropCard;
bank.ondragover = (event) => event.preventDefault();

title.onchange = (event) => {
  const newTitle = document.getElementById("title");
  newTitle.innerHTML = event.target.value;
}