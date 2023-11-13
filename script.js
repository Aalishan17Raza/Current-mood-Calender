let currentYear;
let currentColor = 'var(--default-color)';
function init() {
    setCurrYear();
    document.body.addEventListener('click', (e) => {
        if(e.target.parentElement.tagName!=='TD')
            resetColor();
        if(e.target.parentElement.tagName==='TD'){
            e.target.style.backgroundColor=currentColor;
        }
        if (e.target.tagName == 'I') {
            let I = e.target;
            let span = e.target.parentElement;
            currentColor = `var(--${I.id})`;
            span.style.border = `thick solid var(--${I.id})`;
            I.style.color = '#ffffff';
            I.style.backgroundColor = `var(--${I.id})`;
        }
    });
    makeAllCalender();
}
init();

function setCurrYear() {
    let currYear = new Date().getFullYear();
    currentYear = currYear;
    document.getElementById("cal-title").textContent = currYear + " " + 
    document.getElementById("cal-title").textContent;
}

function resetColor() {
    let I = document.querySelectorAll('i');
    currentColor = 'var(--default-color)';
    I.forEach(it => {
        it.style.color = `var(--${it.id})`;
        it.style.backgroundColor = '#ffffff';
        it.parentElement.style.border = 'none';
    });
}

function daysInMonth(month, year) {//use 1 based month
    return new Date(year, month, 0).getDate();
}

function makeCalender(d,table){
    let tbody=table.children[2];
    let day=d.getDay();
    let noOfDays=daysInMonth(d.getMonth()+1,d.getFullYear());
    for(let i=0;i<5;i++){
        let tr=document.createElement('tr');
        for(let j=0;j<7;j++){
            if(i==0){
                if(day<=j) noOfDays--;
            }
            else noOfDays--;
            let td=document.createElement('td');
            let div=document.createElement('div');
            div.textContent='';
            td.appendChild(div);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    if(noOfDays>0){
        let tr=document.createElement('tr');
        while(noOfDays--){
            let td=document.createElement('td');
            let div=document.createElement('div');
            div.textContent='';
            td.appendChild(div);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

function makeAllCalender(){
    const d1 = new Date(`${new Date().getFullYear()}-01-01`);//year-month-date
    let table1 = document.querySelectorAll(".jan")[0];
    makeCalender(d1,table1);
    setCalender(d1,table1);

    const d2 = new Date(`${new Date().getFullYear()}-02-01`);//year-month-date
    let table2 = document.querySelectorAll(".feb")[0];
    makeCalender(d2,table2);
    setCalender(d2,table2);

    const d3 = new Date(`${new Date().getFullYear()}-03-01`);//year-month-date
    let table3 = document.querySelectorAll(".mar")[0];
    makeCalender(d3,table3);
    setCalender(d3,table3);

    const d4 = new Date(`${new Date().getFullYear()}-04-01`);//year-month-date
    let table4 = document.querySelectorAll(".april")[0];
    makeCalender(d4,table4);
    setCalender(d4,table4);

    const d5 = new Date(`${new Date().getFullYear()}-05-01`);//year-month-date
    let table5 = document.querySelectorAll(".May")[0];
    makeCalender(d5,table5);
    setCalender(d5,table5);

    const d6 = new Date(`${new Date().getFullYear()}-06-01`);//year-month-date
    let table6 = document.querySelectorAll(".june")[0];
    makeCalender(d6,table6);
    setCalender(d6,table6);

    const d7 = new Date(`${new Date().getFullYear()}-07-01`);//year-month-date
    let table7 = document.querySelectorAll(".july")[0];
    makeCalender(d7,table7);
    setCalender(d7,table7);

    const d8 = new Date(`${new Date().getFullYear()}-08-01`);//year-month-date
    let table8 = document.querySelectorAll(".August")[0];
    makeCalender(d8,table8);
    setCalender(d8,table8);

    const d9 = new Date(`${new Date().getFullYear()}-09-01`);//year-month-date
    let table9 = document.querySelectorAll(".sept")[0];
    makeCalender(d9,table9);
    setCalender(d9,table9);

    const d10 = new Date(`${new Date().getFullYear()}-10-01`);//year-month-date
    let table10 = document.querySelectorAll(".oct")[0];
    makeCalender(d10,table10);
    setCalender(d10,table10);

    const d11 = new Date(`${new Date().getFullYear()}-11-01`);//year-month-date
    let table11 = document.querySelectorAll(".nov")[0];
    makeCalender(d11,table11);
    setCalender(d11,table11);

    const d12 = new Date(`${new Date().getFullYear()}-12-01`);//year-month-date
    let table12 = document.querySelectorAll(".dec")[0];
    makeCalender(d12,table12);
    setCalender(d12,table12);
}


function setCalender(d, table){
    let day=d.getDay();
    let noOfDays=daysInMonth(d.getMonth()+1,d.getFullYear());
    let count=0;
    for (let i = 1, row; row = table.rows[i]; i++) {
        for (let j = 0, col; col = row.cells[j]; j++) {
            if(i===1 && day > j){
                col.innerHTML='';
                continue;
            }
            noOfDays--;
            if(noOfDays<0) {
                col.innerHTML='';
                continue;
            };
            count++;
            col.firstElementChild.textContent=count;
            col.firstElementChild.style.backgroundColor='var(--default-color)';
        }
    }
}
