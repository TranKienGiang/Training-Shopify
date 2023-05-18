let answers = document.querySelectorAll(".questions");
answers.forEach((event) => {
    event.addEventListener("click", () => {

        let ans = event.querySelector('.content-answer')
        let icondown = event.querySelector('.icon-down')
        let iconup = event.querySelector('.icon-up')
        event.classList.toggle('open');
        if(event.classList.contains('open')){
            ans.style.height = `${ans.scrollHeight}px`
            $('.content').addClass('open');
            icondown.style.display = 'none';
            iconup.style.display = 'flex';
        } else {
            ans.style.height = '0px';
            icondown.style.display = 'flex';
            iconup.style.display = 'none';

        }

    });
});