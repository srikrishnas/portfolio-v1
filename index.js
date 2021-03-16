document.getElementById('checkbox').addEventListener('change',() =>{
    document.body.classList.toggle('dark');
})

const scrollBtn = document.querySelector('.scroll-btn');

window.addEventListener('scroll',() => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        scrollBtn.style.display = 'block';
    }
    else{
        scrollBtn.style.display = 'none';
    }
})

scrollBtn.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
} )
