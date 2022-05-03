import CardFormWidget from "../widget";

beforeAll(()=>{
    document.body.innerHTML = '<div id="container"></div>';
});

test('should render', () => {
    const container = document.querySelector('#container');
    const widget = new CardFormWidget(container);
    widget.bindToDOM();
    expect(container.innerHTML).toEqual(CardFormWidget.markup);
});