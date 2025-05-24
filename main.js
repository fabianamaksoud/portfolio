window.addEventListener("load", (event) => {

    const familyHeaders = document.getElementsByClassName('project-family-header')
        for (let i = 0; i < familyHeaders.length; i++) {
            familyHeaders[i].addEventListener('click', (()=>{
            let work = document.getElementsByClassName('work')[i];
            work.style.display = work.style.display === 'none' ? '' : 'none';
        }));
    }
});
