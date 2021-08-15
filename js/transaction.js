const previousBalanceAmount = document.querySelector('#balance-amount');

document.getElementById('depositBtn').addEventListener('click', function() {
    const depositInput = document.getElementById('deposit-input');
    const totalDeposit = document.getElementById('deposit-balance');
    
    // Add previous amount and current deposit amount
    const totalDepositAmount = parseFloat(depositInput.value) + parseFloat(totalDeposit.innerText)
    totalDeposit.innerText = totalDepositAmount;

    // Add deposit amount into balance
    const totalBalanceAmount = parseFloat(previousBalanceAmount.innerText) + parseFloat(depositInput.value);
    previousBalanceAmount.innerText = totalBalanceAmount;

    depositInput.value = '';
})


document.querySelector('#withdrawBtn').addEventListener('click', function(){
    const withdrawInput = document.querySelector('#withdraw-input');
    const previousWithdrawAmount = document.querySelector('.withdraw-balance');

    // Update amount in withdraw
    const withdrawAmount = parseFloat(withdrawInput.value) + parseFloat(previousWithdrawAmount.innerText);
    previousWithdrawAmount.innerText = withdrawAmount;

    // Update balance amount
    const updatedBalanceAmount = parseFloat(previousBalanceAmount.innerText) - parseFloat(withdrawInput.value);
    previousBalanceAmount.innerText = updatedBalanceAmount;


    withdrawInput.value = '';

})