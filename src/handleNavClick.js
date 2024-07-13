
const handleNavClick = (btn) => {
    const allBtn = document.querySelectorAll('button');
    allBtn.forEach((button) => {
        button.classList.remove('selected-button')
        button.classList.add('normal-button');

    })
    btn.classList.remove('normal-button');
    btn.classList.add('selected-button');

}

export default handleNavClick
