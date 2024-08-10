var expense, earnings, total;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

// Describe this function...
function calculate_total() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  total.push(convertToNumber(document.getElementById('number').value));
  return total.reduce((a,b) => a+b, 0);
}


expense = [];
earnings = [];
total = [];


document.getElementById('add-value').addEventListener('click', (event) => {
  if (convertToNumber(document.getElementById('number').value) > '0') {
    earnings.push(convertToNumber(document.getElementById('number').value));
    let element_earning = document.getElementById('earning');
    let new_li = document.createElement('li');
    new_li.innerText = convertToNumber(document.getElementById('number').value);
    let element_totalearning = document.getElementById('totalearning');
    element_totalearning.innerText = earnings.reduce((a,b) => a+b, 0);
    let element_balance = document.getElementById('balance');
    element_balance.innerText = calculate_total();

    element_earning.appendChild(new_li);
  } else {
    let element_expense = document.getElementById('expense');
    expense.push(convertToNumber(document.getElementById('number').value));
    let new_li2 = document.createElement('li');
    new_li2.innerText = convertToNumber(document.getElementById('number').value);
    let element_totalexpense = document.getElementById('totalexpense');
    element_totalexpense.innerText = expense.reduce((a,b) => a+b, 0);
    let element_balance2 = document.getElementById('balance');
    element_balance2.innerText = calculate_total();

    element_expense.appendChild(new_li2);
  }

});