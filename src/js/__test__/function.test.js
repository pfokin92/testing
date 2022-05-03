import { checkCardLuhn } from "../functions";
import { checkPaySystem } from "../checkPaySystem";
import PaySystems from "../PaySystems";

const paySystem = PaySystems.list;

const cards = {
    'Visa': [
      {'4024007103059416': 1},
      {'4276380057477627': 0},
      {'4716659732475238031': 6},
    ],
    'Mastercard': [
      {'5469400030972272': 0},
      {'5292936858307561': 6},
    ],
    'American Express': [
      {'378730202602443': 0},
      {'371449635398431': 0},
      {'373813288639939': 1},
    ],
    'MIR': [
        {'2221000561646498': 1},
        {'2200700143768520': 0},
    ]
  };

  for (const key in cards) {
    if (Object.hasOwnProperty.call(cards, key)) {
        const arrNum = cards[key];
        for (let i = 0; i < arrNum.length; i++) {
            const numberObect = arrNum[i];
            const number = Object.keys(numberObect)[0];
            const luhnCheck = Object.values(numberObect)[0];
            test(`CardLuhn ${key}, ${number}`, ()=>{
                expect(checkCardLuhn(number)).toBe(luhnCheck);
            });
            test(`Card PaySystem ${key}, ${number}`, () => {
                expect(checkPaySystem(paySystem, number)).toBe(key);
            });
       }
    }
}

