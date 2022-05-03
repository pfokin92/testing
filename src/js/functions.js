// eslint-disable-next-line import/prefer-default-export
export function getPaySystemList(iin) {
  const resultArr = [];
  for (const key in iin) {
    if (Object.prototype.hasOwnProperty.call(iin, key)) {
      resultArr.push(key);
    }
  }
  return resultArr;
}
export function checkCardLuhn(cardNumber) {
  const value = cardNumber.replace(/\D/g, '');
  let sum = 0;
  let bEven = false;
  for (let i = value.length - 1; i >= 0; i -= 1) {
    let char = parseInt(value[i], 10);
    // eslint-disable-next-line no-cond-assign
    if (bEven && (char *= 2) > 9) {
      char -= 9;
    }
    bEven = !bEven;
    sum += char;
  }
  return sum % 10;
}

export function checkPaySystem(list, card) {
  const cardNumber = card.replace(/\s/g, '');
  let result;
  for (const key in list) {
    if (Object.hasOwnProperty.call(list, key)) {
      const numberForCheck = list[key];
      const arrayForCheck = numberForCheck.split(',');
      for (const element of arrayForCheck) {
        if (cardNumber.slice(0, element.length) === element) {
          result = key;
        }
      }
    }
  }
  return result;
}
