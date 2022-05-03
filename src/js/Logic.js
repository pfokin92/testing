import PaySystems from './PaySystems';
import { getPaySystemList, checkCardLuhn, checkPaySystem } from './functions';

export default class Logic {
  constructor(gui) {
    this.gui = gui;
    this.paySystemsList = null;
  }

  init() {
    this.gui.drawUi();
    this.fetchPaySystems();
    this.gui.form.addEventListener('submit', (e) => {
      this.gui.clear();
      this.checkNumber(e);
      this.identifyPaySystem(e);
    });
  }

  checkNumber(e) {
    e.preventDefault();
    const cardNumber = this.gui.getCardNumber().replaceAll(',', '');
    if (`${cardNumber}`.length < 8) {
      this.gui.showMessage('Minimum 8 digits');
      this.gui.message.classList.add('invalid');
      return;
    }
    const sum = checkCardLuhn(cardNumber);
    let result;
    if (sum === 0) {
      result = { message: 'card is valid', class: 'valid' };
    } else {
      result = { message: 'card isnt valid', class: 'invalid' };
    }

    this.gui.message.classList.add(result.class);
    this.gui.showMessage(result.message);
  }

  identifyPaySystem(e) {
    e.preventDefault();
    const cardNumber = this.gui.getCardNumber();
    const result = checkPaySystem(PaySystems.list, cardNumber);
    if (result) {
      this.gui.showPaySystem(result);
    }
  }

  fetchPaySystems() {
    const list = getPaySystemList(PaySystems.list);
    this.gui.drawCardImages(list);
  }
}
