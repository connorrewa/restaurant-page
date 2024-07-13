import './css/style.css'


const generateAbout = () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = '';

    const h1 = document.createElement('h1');
    const p_1 = document.createElement('p');
    const p_2 = document.createElement('p');
    h1.textContent = 'About';
    p_1.textContent = 'We have been waffle housing for so many years. From our house to yours we love delivering waffles all day every day.';
    p_2.textContent = `This project was made using webpack and vanilla js. 
        Webpack helps to bundle JS modules and assets with efficiency.
        I learned skills in DOM manipulation by implementing tabbed navigation in this project.`
    contentDiv.appendChild(h1);
    contentDiv.appendChild(p_1);
    contentDiv.appendChild(p_2);



}

export default generateAbout;
