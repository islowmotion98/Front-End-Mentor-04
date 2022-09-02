const main = document.querySelector('.main')
const thankYou = document.querySelector('.thank-you')
const submitBtn = document.getElementById('submit')
const rateBtn = document.getElementById('rate-again')
const rating = document.getElementById('rating')
const rates = document.querySelectorAll('.button')

submitBtn.addEventListener('click', function(){
    thankYou.classList.remove('closed');
    main.style.display = "none";

})

rateBtn.addEventListener('click', function(){
    thankYou.classList.add('closed');
    main.style.display = "flex";
})

rates.forEach((rate) => {
    rate.addEventListener('click', function(){
        rating.innerHTML = rate.innerHTML;
    })
})
