import { checkCardLuhn } from './functions';

export default class CardFormWidget {
  constructor(parentE1) {
    this.parentE1 = parentE1;
  }

  static get markup() {
    return `<div class="check_form">
      <form action="submit">
        <input type="number" name="card_number" class="input_field" min="1">
        <button class="button_valid">Click to Validation</button>
      </form>
    </div>`;
  }

  static get inputSelector() {
    return '[name=card_number]';
  }

  static get submitSelector() {
    return '.check_card form';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = this.parentEl.querySelector(this.constructor.submitSelector);
    submit.addEventListener('click', (e) => this.onSubmit(e));
  }

  onSubmit(event) {
    event.preventDefault();
    const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    if (checkCardLuhn(inputEl.value) === 0) {
      inputEl.classList.add('valid');
    } else {
      inputEl.classList.add('invalid');
    }
  }
}
