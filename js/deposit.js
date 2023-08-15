//1.add event listener to the deposit button
//

document.getElementById('btn-deposit').addEventListener('click',function(){
    //2.get the deposit amount from the deposit input field(using .value)
    
    const depositAmount = document.getElementById('deposit-field');
    const newDepositStirng = depositAmount.value;
    const newDeposit = parseFloat(newDepositStirng);
    
    //3.get the current deposit total value using (.innerText) for the non-input element
    const depsoitTotalElement = document.getElementById("deposit-total");
    const previoudDepositNewAmountString = depsoitTotalElement.innerText;
    const previoudDepositNewAmount = parseFloat(previoudDepositNewAmountString);

    const currentTotalDeposit = newDeposit + previoudDepositNewAmount;
    depsoitTotalElement.innerText= currentTotalDeposit;




    //get balance id to get the number
    const balanceTotalElement = document.getElementById("total-balance");
    //console.log(balanceTotalElement);
    const previousBalanceTotalString = balanceTotalElement.innerText;
    //console.log(previousBalanceTotalString)
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //console.log(previousBalanceTotal);
    const currentBalanceTotal = newDeposit+previousBalanceTotal;
    //console.log(currentBalanceTotal)
    balanceTotalElement.innerText = currentBalanceTotal;





    //clear the deposit field
    depositAmount.value = '';
});