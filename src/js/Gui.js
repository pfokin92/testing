export default class Gui {
  constructor() {
    this.paySystem = document.querySelector('.pay_system');
    this.message = document.querySelector('.message');
    this.cardNumber = document.querySelector('[name=card_number]');
    this.widget = document.querySelector('.widget');
    this.form = document.querySelector('.check_form form');
  }

  drawUi() {
    this.cardNumber.value = '';
  }

  drawCardImages(list) {
    list.forEach((elem) => {
      const img = document.createElement('img');
      img.src = `./assets/${elem.toLowerCase().replaceAll(' ', '')}.gif`;
      img.classList.add('opacity_img');
      img.classList.add('head_img');
      img.id = `${elem.toLowerCase().replaceAll(' ', '')}`;
      this.paySystem.appendChild(img);
    });
  }

  getCardNumber() {
    return this.cardNumber.value.split(' ').join('');
  }

  showMessage(message) {
    this.message.innerHTML = `${message}`;
  }

  // eslint-disable-next-line class-methods-use-this
  showPaySystem(name) {
    const fileName = `${name.toLowerCase().replaceAll(' ', '')}`;
    const img = document.getElementById(fileName);
    img.classList.remove('opacity_img');
  }

  clear() {
    this.message.innerHTML = '';
    this.message.className = 'message';
    [...this.paySystem.children].forEach((el, ind) => {
      this.paySystem.children[ind].classList.add('opacity_img');
    });
  }
}
