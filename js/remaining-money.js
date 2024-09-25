document.getElementById('btn-donate-money')
    .addEventListener('click',function(event){
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-donate-money');
        
        if(isNaN(addMoney)){
            alert('Failed to add money');
            return;
        }
        const upperBalance = getTextFieldValueById('upper-account-balance');
        
        const upperNewBalance = upperBalance - addMoney;
        document.getElementById('upper-account-balance').innerText = upperNewBalance;
       
})