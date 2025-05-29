window.addEventListener("load", (event) => {
    const familyHeaders = document.getElementsByClassName('project-family-header');
    const displayedStatuses = []; // false = closed state
    for (let i = 0; i < familyHeaders.length; i++) {
        displayedStatuses.push(false)
        familyHeaders[i].addEventListener('click', (()=>{
            let work = document.getElementsByClassName('work')[i];
            work.style.display = work.style.display === 'none' ? '' : 'none';
            let arrow = document.getElementsByClassName('project-family-arrow')[i];
            displayedStatuses[i] = !displayedStatuses[i];
            arrow.style.transform =  `rotate(${displayedStatuses[i] ? '180' : '0'}deg)`;
        }));
    }
});
