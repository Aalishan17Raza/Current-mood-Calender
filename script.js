function init(){
    let currYear = new Date().getFullYear();
    document.getElementById("cal-title").textContent = currYear +" "+ document.getElementById("cal-title").textContent;
}
init();