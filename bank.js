const bank = document.querySelector('#cardBank');

const onDropCard = (event) => {
  const id = event.dataTransfer.getData('id');
  bank.appendChild(document.getElementById(id));
}

bank.ondrop = onDropCard;
bank.ondragover = (event) => event.preventDefault();