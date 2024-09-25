document.getElementById('show-donate-form')
    .addEventListener('click',function(event){
        event.preventDefault();
        showSectionById('donate-form');
})

document.getElementById('show-history-form')
    .addEventListener('click',function(event){
        event.preventDefault();
        showSectionById('history-form');
})