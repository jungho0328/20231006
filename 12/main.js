// const quotes = [
//     {
//         quote:"잠이보약이다",
//         author:"강민석",
//     },
//     {
//         quote:"잠이온다",
//         author:"양진서",
//     }
// ]

// const quote = document.querySelector("#quote span:first-child");
// const author = document.querySelector("#quote span:last-child");
// const button = document.querySelector("button");

// function changeSpan(){
//     const firstQuote= quotes[0]

//     quote.innerText = firstQuote.quote;
//     author.innerText = firstQuote.author;
//     author.classList.add("blueBackgroundColor");
// }

// button.addEventListener("click",changeSpan)


const clock = document.querySelector(".clock");
function getClock(){
    const date = new Date();
    console.log(date);
    const houres = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")
    clock.innerText = houres + ":" + minutes + ":" + seconds;
    clock.innerText =${houres}:${minutes}:${seconds};
}
getClock();
setInterval(getClock, 1000);