const num = document.getElementById("num");
const advice = document.getElementById("advice");
const dice = document.getElementById("dice");
window.onload = displayAdvice();

function displayAdvice() {
    const apiUrl = "https://api.adviceslip.com/advice";
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => data.slip)
        .then(data => {
            num.innerText = data.id;
            let advicer = data.advice;

            const text = advicer;
            let index = 0;

            function typewriter() {
                if (index < text.length) {
                    advice.textContent = text.slice(0, index + 1);
                    index++;
                    advice.innerText = advice.innerText.slice(0);
                    setTimeout(typewriter, 50);
                }
            }
            typewriter()
        })
    .catch((error) => {
        alert(`Error ${error}`);
    })

    

    // typewriter();
}

dice.addEventListener("click", () => {
    
    displayAdvice();
})