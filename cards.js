const cards = document.querySelectorAll(".card");
const addCard = document.getElementById("addCard");
const cardBank = document.getElementById("cardBank")

function createCard(){
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('draggable', 'true');
  card.id = Date.now();
  card.ondragstart = onDragStart;
  card.ondragend = onDragEnd;
  card.ondblclick = deleteCard;
  appendImage(card);
  cardBank.appendChild(card);
} 

function appendImage(card) {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/x-png,image/gif,image/jpeg');
  input.style.visibility = 'hidden';
  input.onchange = () => {
    const image = new Image(90, 90);
    const file = input.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      image.src = event.target.result;
      image.style.pointerEvents = 'none';
      card.appendChild(image);
    }
    reader.readAsDataURL(file);
  }
  input.click();
}

function deleteCard(event) {
  event.target.remove();
}

function onDragStart(event){
  event.dataTransfer.setData('id', event.target.id);
  setTimeout(() => {
    event.target.style.visibility = 'hidden';
  }, 50)
}

function onDragEnd(event){
  event.target.style.visibility = 'visible';
}

cards.forEach((card) => {
  card.ondragstart = onDragStart;
  card.ondragend = onDragEnd;
})

addCard.addEventListener("click", createCard);