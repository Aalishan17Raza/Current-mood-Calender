let currentYear;
let currentColor = 'var(--default-color)';
function init() {
    setCurrYear();
    document.body.addEventListener('click', (e) => {
        resetColor();
        if (e.target.tagName == 'I') {
            let I = e.target;
            let span = e.target.parentElement;
            currentColor = `var(--${I.id})`;
            console.log(currentColor);
            span.style.border = `thick solid var(--${I.id})`;
            I.style.color = '#ffffff';
            I.style.backgroundColor = `var(--${I.id})`;
        }
    });
}
init();

function setCurrYear() {
    let currYear = new Date().getFullYear();
    currentYear = currYear;
    document.getElementById("cal-title").textContent = currYear + " " + document.getElementById("cal-title").textContent;
}

function resetColor() {
    let I = document.querySelectorAll('i');
    currentColor = 'var(--default-color)';
    console.log(currentColor);
    I.forEach(it => {
        it.style.color = `var(--${it.id})`;
        it.style.backgroundColor = '#ffffff';
        it.parentElement.style.border = 'none';
    });
}



function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function makeJanCalender(){
    const d = new Date(`${new Date().getFullYear()}-01-01`);
    let table = document.querySelectorAll(".jan")[0];
    let tbody=table.children[2];
    let noOfDays=daysInMonth(1,d.getFullYear());
    for(let i=0;i<5;i++){
        let tr=document.createElement('tr');
        for(let i=0;i<7;i++){
            noOfDays--;
            if(noOfDays<0) break;
            let td=document.createElement('td');
            let div=document.createElement('div');
            div.textContent='1';
            td.appendChild(div);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    SetJanCalender();
}
makeJanCalender();

function SetJanCalender() {
    const d = new Date(`${new Date().getFullYear()}-01-01`);
    let table = document.querySelectorAll(".jan")[0];
    let count=0;
    for (let i = 1, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            count++;
            col.firstElementChild.textContent=count;
            console.log(col.firstElementChild.textContent);
        }
    }
}
