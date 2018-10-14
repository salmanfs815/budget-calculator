// event handler for 'calculate' button
function calculateBalance() {
  let income = 0;
  let incomeCategories = $('#income tr');
  for (let i=0; i<incomeCategories.length; i++) {
    income += incomeCategories[i].children[1].children[0].valueAsNumber || 0;
  }
  let expenses = 0;
  let expensesCategories = $('#expenses tr');
  for (let i=0; i<expensesCategories.length; i++) {
    expenses += expensesCategories[i].children[1].children[0].valueAsNumber || 0;
  }

  let balance = income - expenses;
  $('#balance').text(balance);
}

// event handler for 'add category' buttons
function addInput(type) {
  let category = prompt(`Please enter a category name to add to ${type}:`);
  if (category) { // don't add input if user cancels
    $(`#${type} table`).append(`
      <tr>
        <td>${category}</td>
        <td><input type="number"></td>
        <td><button type="button" class="btn btn-link remove">remove</button></td>
      </tr>`);
  }
}

$('#calculate').click(calculateBalance);
$('#add-income').click(() => {
  addInput('income');
});
$('#add-expense').click(() => {
  addInput('expenses');
});

document.addEventListener('click', (event) => {
  if (event.target.type == 'button' && event.target.classList.contains('remove')) {
    event.target.parentElement.parentElement.remove();
  }
});