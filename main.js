const data = [
  {
    src: './assets/rkg-info.png',
    title: 'Rainbow Key Generator',
    alt: 'Project Rainbow Key Generator',
    icon: [
      { src: './assets/node-js-brands.svg', alt: 'nodeJS' }
    ],
    repository: 'https://github.com/Armoredbrain/rainbowKeyGenerator',
  },
  {
    src: './assets/nameMyHex.png',
    title: 'Name my hex',
    alt: 'Project name my hex',
    icon: [
      { src: './assets/php-brands.svg', alt: 'PHP' },
    ],
    repository: 'https://github.com/Armoredbrain/nameMyHex',
  },
  {
    src: './assets/wildbacteria.png',
    title: 'Wild Bacteria Musical',
    alt: 'Project wild bacteria musical',
    icon: [
      { src: './assets/php-brands.svg', alt: 'PHP' },
      { src: './assets/react-brands.svg', alt: 'reactJs' },
    ],
    repository: 'https://github.com/Armoredbrain/wild-bacteria-front',
  },
  {
    src: './assets/rps101.png',
    title: 'Rock Paper Scissor 101',
    alt: 'Project Rock Paper Scissor',
    icon: [
      { src: './assets/php-brands.svg', alt: 'PHP' },
    ],
    repository: 'https://github.com/Armoredbrain/rps101',
  },
  {
    src: './assets/greenfood.png',
    title: 'Green Food Label',
    alt: 'Green Food Label',
    icon: [
      { src: './assets/php-brands.svg', alt: 'PHP' },
      { src: './assets/js-brands.svg', alt: 'JS' },
    ],
    repository: 'https://github.com/Armoredbrain/greenfoodlabel',
  },
  {
    src: './assets/pomodoro.png',
    title: 'Pomodoro time tracker',
    alt: 'Pomodoro',
    icon: [
      { src: './assets/html5-brands.svg', alt: 'HTML5' },
      { src: './assets/css3-alt-brands.svg', alt: 'CSS3' },
      { src: './assets/js-brands.svg', alt: 'JS' },
    ],
    repository: 'https://github.com/Armoredbrain/pomodoroTab',
  },
]

// {
//   src: './assets/rahan.png',
//   title: 'Hackathon with Here Technology',
//   alt: 'Project Rahan',
//   icon: [
//     { src: './assets/react-brands.svg', alt: 'reactJs' },
//   ],
// },

const numberOfProject = 4;

function randomizeProjectDisplay() {
  let projectContainer = document.getElementById('projectContainer');

  let randomArray = [];
  while (randomArray.length < numberOfProject) {
    let random = Math.floor(Math.random() * data.length);
    if (randomArray.indexOf(random) === -1) randomArray.push(random);
  }

  for (let i = 0; i < numberOfProject; i++) {
    let project = document.createElement('div')
    project.classList.add('project');
    let template = `
        <div class='projectPicture'>
          <img alt='${data[randomArray[i]].alt}' src='${data[randomArray[i]].src}' />
          <a target='_blank' href='${data[randomArray[i]].repository}'><img class='githubLink' alt='Github repository' src='./assets/github-brands.svg' /></a>
        </div>
        <div class='projectInfo'>
          <h4>${data[randomArray[i]].title}</h4>
          <div class='stackIconContainer'>
            ${addStackInfo(randomArray[i])}
          </div>        
        </div>
    `;

    project.innerHTML = template;
    projectContainer.append(project);
  }
}
window.onload = randomizeProjectDisplay;

function addStackInfo(index) {
  let stackIcons = ``;
  data[index].icon.map((item) => {
    stackIcons += `<img class='technoIcon' alt=${item.alt} src=${item.src} />`
  })
  return stackIcons;
}

function shuffleProject() {
  let projectContainer = document.getElementById('projectContainer');
  projectContainer.innerHTML = '';
  randomizeProjectDisplay();
}

function toggleDayAndNight() {
  document.documentElement.style();
}
