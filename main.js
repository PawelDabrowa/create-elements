let size = 10;
let orderElement = 1;


const init = () => {
    // tutaj kod
    const btn = document.createElement('button');
    btn.textContent = 'Create 10 elements';
    document.querySelector('body').appendChild(btn);

    const ulItem = document.createElement('ul');
    document.querySelector('body').appendChild(ulItem);

    btn.addEventListener('click', createLiElements);
}

const createLiElements = () => {
    // tutaj kod

    for (let i = 0; i < 10; i++) {
        const liItems = document.createElement('li');
        liItems.style.listStyle = 'none';
        size++;
        liItems.textContent = `Element number ${orderElement}`;
        liItems.style.fontSize = size + 'px';
        document.querySelector('ul').appendChild(liItems);
        ++orderElement;
    }


}

init()