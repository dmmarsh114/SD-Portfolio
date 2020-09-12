let titles = [
    'Web Developer',
    'Sensitive Lover',
    'Creative Coder',
    'Living Proof of the Dunning–Kruger Effect',
    'Novice Game Developer',
    'Intermediate Gardener',
    'Master Headass'
];

let header = document.querySelector('.sub-header');

header.innerHTML = titles[0];

let i = 1;
setInterval(() => {
    header.innerHTML = titles[i];
    if (i >= titles.length - 1) {
        i = 0;
    } else {
        i++;
    }
}, 4000); // match the time here with the animation duration in header.css!