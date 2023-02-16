//console.log('Save.js File Added');

document.getElementById('save-btn').addEventListener('click', function () {
    //console.log('Save Button Clicked');

    // Saving Amount:
    const income = getInputFieldValueById('income');

    const savingAmount = income * 0.2;

    const setSavingAmount = setTextElementValueById('saving-amount', savingAmount);

    // Remaining Balance: 
    const foodExpense = getInputFieldValueById('food');
    const rentExpense = getInputFieldValueById('rent');
    const clothesExpense = getInputFieldValueById('clothes');

    const totalExpense = foodExpense + rentExpense + clothesExpense;

    const balanceValue = income - totalExpense;

    const remainingBalance = balanceValue - savingAmount;

    const setRemainingBalance = setTextElementValueById('remaining-balance', remainingBalance);
})