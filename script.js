let currentYear;
function setCurrYear() {
    let currYear = new Date().getFullYear();
    currentYear = currYear;
    document.getElementById("cal-title").textContent = currYear + " " + document.getElementById("cal-title").textContent;
}


function init() {
    setCurrYear();
    document.body.addEventListener('click', (e) => {
        if (e.target.tagName == 'I') {
            let span = e.target.parentElement;
            // span.style.backgroundColor = e.target.style.color;
            // e.target.classList.add('i-selected');
            console.log(e.target.style.color);
            console.log(span);
        }
    });
}
init();