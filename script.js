let rating = 1;
document.addEventListener('click',function(e){
    let target = e.target;
    
    if(target.classList.contains('rate')){
        rating = target.id;
        let ratings = target.parentElement.children 
        for(i=0;i<ratings.length;i++){
            ratings[i].classList.remove('selected');
        }
        target.classList.add('selected')
    }
});

document.querySelector('.submit').addEventListener('click', function(){
    document.querySelector('.rating-result').innerHTML = `You selected ${rating} out of 5`; 
    document.querySelector('#rate').style.display='none';
    document.querySelector('#post-rate').style.display='flex';
})

