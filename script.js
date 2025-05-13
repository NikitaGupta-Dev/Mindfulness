
// daily wisdom
let date = document.querySelector(".date");
let today = new Date();
let options =  { day: '2-digit', month: 'short', year: 'numeric' };
let formattedDate = today.toLocaleDateString('en-GB', options);
date.textContent = formattedDate;


let wisdomList = [
    "You are not a drop in the ocean. You are the entire ocean in a drop.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "A calm mind brings inner strength and self-confidence, so that's very important for good health.",
    "You cannot always control what goes on outside. But you can always control what goes on inside.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself.",
    "Meditation is the journey from sound to silence, from movement to stillness, from a limited identity to unlimited space.",
    "To understand the immeasurable, the mind must be extraordinarily quiet, still.",
];

let writer = [
    "Rumi",
    "Buddha",
    "Dalai Lama",
    "Wayne Dyer",
    "Dalai Lama",
    "Hermann Hesse",
    "Sri Sri Ravi Shankar",
    "Jiddu Krishnamurti",
];



let dayIndex = today.getDate() % wisdomList.length;
let wisdom = wisdomList[dayIndex];
let author = writer[dayIndex];
document.querySelector(".qutoe").textContent = `"${wisdom}"`
document.querySelector(".writer").textContent = `- ${author}`;