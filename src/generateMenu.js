import './css/style.css'
import waffle from './waffle.jpeg';


const generateMenu = () => {
    console.log('generate menu')
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = '';

    const h1 = document.createElement('h1');
    let img = new Image();
    img.src = waffle
    const p = document.createElement('p');
    h1.textContent = 'Menu';
    p.textContent = 'Here is our menu. There are lots of items and they are very good.';
    contentDiv.appendChild(h1);
    contentDiv.appendChild(img);
    contentDiv.appendChild(p);

}

export default generateMenu;
