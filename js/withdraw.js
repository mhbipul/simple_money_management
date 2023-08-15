document.getElementById('btn-withdraw').addEventListener('click',function(){

    //withdraw Field
    const withdrawFieldElement = document.getElementById("withdraw-field");
    const withdrawFieldElementString = withdrawFieldElement.value;
    const newWithdrawAmount = parseFloat(withdrawFieldElementString);
    //console.log(newWithdrawAmount);
    
    //Previous given balance
    const previousWithdrawAmount = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = previousWithdrawAmount.innerText;
    const previousWithdraw = parseFloat(previousWithdrawAmountString);
    //console.log(previousWithdraw);

    //updating previous balance
    const currentWithdraw = newWithdrawAmount + previousWithdraw;
    previousWithdrawAmount.innerText = currentWithdraw;

    //updating balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceString = totalBalance.innerText;
    const actualBalance = parseFloat(totalBalanceString);

    const currentTotalBalance = actualBalance - newWithdrawAmount;

    totalBalance.innerText = currentTotalBalance;







    //clearing the field
    withdrawFieldElement.value = '';

})