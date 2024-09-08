// Oppgave 1
document.getElementById('remove-btn').addEventListener('click', function() {
    const removeElement = document.getElementById('remove');
    if (removeElement) {
        removeElement.remove();
    }
});
// Oppgave 2
document.getElementById('change-btn').addEventListener('click', function() {
    document.getElementById('change').textContent = 'Dette er den nye teksten!';
});
// Oppgave 3
document.getElementById('input').addEventListener('input', function() {
    document.getElementById('input-text').textContent = this.value;
});
// Oppgave 4
const myList = ["item one", "item two", "item three"];
document.getElementById('write-list').addEventListener('click', function() {
    const ulElement = document.getElementById('ul');
    ulElement.innerHTML = '';
    myList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ulElement.appendChild(li);
    });
});
// Oppgave 5
document.getElementById('create').addEventListener('click', function() {
    const selectedElement = document.getElementById('select').value;
    const textValue = document.getElementById('text').value;

    const newElement = document.createElement(selectedElement);
    newElement.textContent = textValue;

    document.getElementById('placeholder').appendChild(newElement);
});
// Oppgave 6
document.getElementById('remove-li').addEventListener('click', function() {
    const list = document.getElementById('list');
    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild);
    }
});
// Oppgave 7
document.getElementById('name').addEventListener('input', function() {
    const orderButton = document.getElementById('order');
    if (this.value.length > 4) {
        orderButton.disabled = true;
        orderButton.style.border = '2px solid red';
    } else {
        orderButton.disabled = false;
        orderButton.style.border = '';
    }
});
// Oppgave 8
document.getElementById('color').addEventListener('click', function() {
    const listItems = document.querySelectorAll('.children li');
    listItems.forEach((li, index) => {
        if ((index + 1) % 2 === 0) {
            li.style.border = '2px solid pink';
        } else {
            li.style.border = '2px solid green';
        }
    });
});
