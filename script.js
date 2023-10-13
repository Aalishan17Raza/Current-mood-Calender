let currentYear;
function setCurrYear() {
    let currYear = new Date().getFullYear();
    currentYear = currYear;
    document.getElementById("cal-title").textContent = currYear + " " + document.getElementById("cal-title").textContent;
}

function resetColor() {
    let I = document.querySelectorAll('i');
    I.forEach(it=>{
        it.style.color = `var(--${it.id})`;
        it.style.backgroundColor= '#ffffff';
        it.parentElement.style.border = 'none';
    });
}

function init() {
    setCurrYear();
    document.body.addEventListener('click', (e) => {
        resetColor();
        if (e.target.tagName == 'I') {
            let I = e.target;
            let span = e.target.parentElement;
            span.style.border = `thick solid var(--${I.id})`;
            I.style.color = '#ffffff';
            I.style.backgroundColor = `var(--${I.id})`;
        }
    });
}
init();