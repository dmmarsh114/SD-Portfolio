let cardsList = document.getElementById('project-list');

for (let i = 1; i <= 3; i++) {
    let cardHolder = document.createElement('li');
    let card = document.createElement('div');
    card.classList.add('project-card');

    let cardTitle = document.createElement('h3');
    cardTitle.classList.add('project-title');
    cardTitle.innerHTML = `Card ${i} Title`;

    let cardContent = document.createElement('div');
    cardContent.classList.add(i % 2 == 0 ? 'project-content-l' : 'project-content-r');

    let cardText = document.createElement('p');
    cardText.classList.add('project-text');
    cardText.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis temporibus officia eligendi modi, omnis dicta officiis excepturi repellendus aut nemo expedita error asperiores quisquam quasi dolorem ducimus numquam necessitatibus enim.';

    let cardImg = document.createElement('img');
    cardImg.classList.add('project-img');
    cardImg.src = './assets/images/pexels-jeremy-bishop-2397653.jpg';

    card.appendChild(cardTitle);
    cardContent.appendChild(cardText);
    cardContent.appendChild(cardImg);
    card.appendChild(cardContent);
    cardHolder.appendChild(card);
    cardsList.appendChild(cardHolder);
}