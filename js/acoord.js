let code = document.querySelectorAll('code');
let frown = document.querySelectorAll('i');
let start = document.querySelector('.fa-5x');
let good = document.querySelector('h2');
code.forEach(co => {
    co.addEventListener('click',function(e){
        this.style.background=e.target.dataset.color;
        this.style.color="#fff";
        this.lastChild.classList.remove('fa-frown-o');
        this.lastChild.classList.add('fa-smile-o');
        this.lastChild.style.color="rgb(151 3 244)"
        
        this.lastChild.style.fontWeight="bold"
    
        if(e.target.dataset.color=="#0a53be"){
            start.style.textAlign="left";
            good.style.height="7%";
        }
    
    })
});





