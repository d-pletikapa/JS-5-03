'use strict'

const generalList = document.querySelector('.general__list');

const userData = {
  value: '...',
  getUserData() {
    let tempValue = prompt('Текст для списка', 'Купить хлеб');
    if (!tempValue.trim()) { // если после трима(убрать все пробелы) остается пустая строка дает false
      return this.getUserData()
    } else {
    switch (tempValue) {
      case null:
        this.value = tempValue;
        break
      case 'exit':
        this.value = tempValue;
        break
      default:
        return this.value = tempValue;
    }
    }
  },
}

const list = {
  createListItem() {
    const elem = document.createElement('li'); // создал элемент li
    elem.textContent += userData.value; // записал текст из промпта в элемент li
    return elem;
  },
  delLastListItem() {
    generalList.lastChild.remove();
  },
  clearAllListItems() {
    // generalList.querySelectorAll('*').forEach( child => child.remove()); // другой вариант 1
    while (generalList.lastChild) {
      generalList.removeChild(generalList.lastChild);
      // generalList.lastChild.remove(); // другой вариант 2
    }
  },
}

const addListItem = () => {
  while (userData.value !== null || userData.value === 'exit') {
    userData.getUserData();
    if (userData.value === null || userData.value === 'exit') {
      return;
    } else if (userData.value === 'del') {
      list.delLastListItem();
    } else if (userData.value === 'clear') {
      list.clearAllListItems();
    } else {
      generalList.append(list.createListItem());
      // generalList.insertAdjacentHTML('beforeend', ' <li>`userData.value`</li>'); // другой вариант сразу создаем элемент и засовываем текст внутрь
    }
  }
}
addListItem();


