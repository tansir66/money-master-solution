//console.log('Calculate.js File added');

document.getElementById('calculate-btn').addEventListener('click', function () {
    //console.log('Calculate Button Clicked');

    // Total Expenses:
    const foodExpense = getInputFieldValueById('food');
    const rentExpense = getInputFieldValueById('rent');
    const clothesExpense = getInputFieldValueById('clothes');

    const totalExpense = foodExpense + rentExpense + clothesExpense;

    const setTotalExpense = setTextElementValueById('total-expense', totalExpense);

    // Balance :
    const income = getInputFieldValueById('income');

    const balanceValue = income - totalExpense;
    const setBalanceValue = setTextElementValueById('balance', balanceValue);
})