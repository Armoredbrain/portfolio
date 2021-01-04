function abracadabra() {
  let projectContainer = document.getElementById('projectContainer');

  let data = {
    src: ['./assets/rkg-info.png', './assets/nameMyHex.png'],
    title: ['RKG', 'NMH'],
    alt: ['Project: Rainbow Key Generator', 'Project: name my hex'],
  }

  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * Math.floor(2));

    let project = document.createElement('div');
    project.classList.add('project');
    projectContainer.append(project);

    let projectPicture = document.createElement('div');
    projectPicture.classList.add('projectPicture');
    project.append(projectPicture);

    let picture = document.createElement('img');
    picture.setAttribute('src', data.src[random])
    projectPicture.append(picture);

    let projectInfo = document.createElement('div');
    projectInfo.classList.add('projectInfo');
    project.append(projectInfo);
  }
}