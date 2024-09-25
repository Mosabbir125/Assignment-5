document.getElementById('btn-donate-money')
    .addEventListener('click',function(event){
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-donate-money');
        
        if(isNaN(addMoney)){
            alert('Failed to add money');
            return;
        }
        my_modal_1.showModal();

        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;
        

        //add to transaction history
        const div = document.createElement('div');
        div.classList.add('border');
        div.innerHTML =`
            <p>${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
            
        `
        console.log(div);
        document.getElementById('history-container').appendChild(div);
       
})