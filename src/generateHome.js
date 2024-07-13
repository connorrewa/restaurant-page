import waffle from './waffle.jpeg';
import './css/style.css';


const generateHome = () => {
    console.log('generate home')
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = '';

    const h1 = document.createElement('h1');
    let img = new Image();
    img.src = waffle
    const p = document.createElement('p');
    h1.textContent = 'Waffle House';
    p.textContent = 'Look at how good these darn waffles are. We have so many of them. You have to come try some asap... soooooo good!';
    contentDiv.appendChild(h1);
    contentDiv.appendChild(img);
    contentDiv.appendChild(p);
}
export default generateHome;