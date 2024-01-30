
// screen width
var screenWidth = window.innerWidth;

function valueScreen() {
  return screenWidth
}

window.addEventListener('resize', function () {
  screenWidth = window.innerWidth; 
});
 

// navigation
const menuBtn = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('nav li a');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active')
  menuBtn.classList.toggle('active')
});

links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuBtn.classList.remove('active');
    setTimeout(() => { 
    }, 500);
  });
}); 
 


//  svg name animation
const svgName = anime.timeline({
  autoplay: true,  
})

svgName.add({
  targets: '.svg path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function (el, i) { return i * 220 },
  complete: function () {
    var path = document.querySelectorAll('.svg path');
    path.forEach(pathSvg => {
      pathSvg.classList.add('active');
    })
  }
}, '+=0'); 
 

// ABOUT ME SECTION
// personal info
const infoPersonContainer = document.querySelector('.info-person');
const infoPerson = personalInfo.map((info,i) => {
  return `
  <div class="list">
    <p>${info.aboutInfo}</p>
    <span>:</span>
    <h3 class="name-person">${info.info}</h3>
  </div>
  `
})
infoPersonContainer.innerHTML += infoPerson;


// my skills components
//  tech skills
const skillTechContainer = document.querySelector('.skill-container') 

function skilltech(techSkill) {
  return `
   <div class="skill-tech-category">
    <div class="tech-skill-title">
        <h5>${techSkill.title}</h5>
    </div>

    <div class="skill-tech-container">
      ${techSkill.skills.map((skill) => {
      return `
        <div class="box-skill">
            <div class="skill" data-skillName="${skill.nameSkill}" style="--width-active:${skill.widthActive};--width-active-phone:${skill.widthActivePhone};--width-active-small-phone:${skill.widthActiveSmallPhone};--width-skillName:${skill.widthSkillName};--width-skillName-phone:${skill.widthSkillNamePhone} ">
            <div class="line"></div>
            <div class="icon">
                <img src="${skill.icon}" alt="">
            </div>
            </div> 
        </div>
         
        `
      })}
    </div>

</div>
  `
}

const generalSkills = skilltech(generalSkill);
const cssTechSkill = skilltech(cssTech);
const toolsTechSkill = skilltech(toolsSkill);
const JavascriptTechSkill = skilltech(JavascriptTech);
const DBTechSkill = skilltech(DBTech_Tools);
const librarySkill = skilltech(library);


skillTechContainer.innerHTML += generalSkills;
skillTechContainer.innerHTML += cssTechSkill;
skillTechContainer.innerHTML += toolsTechSkill;
skillTechContainer.innerHTML += JavascriptTechSkill;
skillTechContainer.innerHTML += DBTechSkill;
skillTechContainer.innerHTML += librarySkill; 


const projectsSlideContainer = document.querySelector('.slide-container');
;

window.addEventListener("DOMContentLoaded",() => {
  
      var swiper = new Swiper(".projects-slide", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }, 
        pagination: {
          el: '.swiper-pagination',
          clickable: true, // Membuat pagination dapat diklik
        },
        loop:false,
      });  
})

 
var containerCount = 0;  
var maxDivPerSwiper = 6;   
 
// create new container for project
function createContainer() {
  var container = document.createElement("div");
  containerCount++;
  container.className = 'project-container swiper-slide  '
  container.id = "swiper_sld-" + containerCount;
  return container;
} 


// add project to container and limit count project in container
function addDivToContainer(div) {
  var currentSwiperContainer = document.getElementById("swiper_sld-" + containerCount);
 
    if (!currentSwiperContainer || currentSwiperContainer.childElementCount === maxDivPerSwiper) {
      currentSwiperContainer = createContainer(); 
      projectsSlideContainer.appendChild(currentSwiperContainer)
    }

  currentSwiperContainer.appendChild(div);
}

projects.forEach(project => {
        var createProject = document.createElement('div');
        createProject.className = 'project';
        createProject.innerHTML += ` 
              <div class="project-click" data-idProject="${project.id}">
                  <img src="${project.image}" alt="">
                  <div class="read-more">
                    <span>
                       <p>Read More</p>  
                    </span>
                  <div>
              </div> 
      `   
      addDivToContainer(createProject);
});
 

//  details project container
const projectDetailsContainer = document.querySelector('.project-details') 
const closeDetailsProject = document.querySelector('.close-details-project');
const startDetailsProject = document.querySelector('.finished-project .start');
const completedDetailsProject = document.querySelector('.finished-project .finished');

// image project
const mainImageDetailsProject = document.querySelector('.project-media-container .media img');
const mainVideoDetailsProject = document.querySelector('.project-media-container .media video ');
const mainMediaDetailsProject = document.querySelector('.project-media-container .media');


const seledtedContainerImageDetailsProject = document.querySelector('.selected-image');

// about project
const aboutDetailsProject = document.querySelector('.detail-project p'); 
const noteProjectContainer = document.querySelector('.note-project')

const containerVisitProject = document.querySelector('.visit-project');
const linkDetailsProject = document.querySelector('.visit-project a');

// tech and tools
const techDetailsProjectContainer = document.querySelector('.project-tech-container');
const toolsDetailsProjectContainer = document.querySelector('.project-tools-container');


// project click for details project
const aboutProjectClick = document.querySelectorAll('.project-click');  

aboutProjectClick.forEach(project => {
  const idProject = project.dataset.idproject; 
  const findDataProject = dataProjects.find((element) => {
    return element.id === parseInt(idProject,10)
  }) 
 

  // project click & click for see projects details
    project.addEventListener('click',() =>{ 
        projectDetailsContainer.classList.add('active')
      
        // take data from project
          if(findDataProject){

            // reset project all value 
            techDetailsProjectContainer.innerHTML = ''
            toolsDetailsProjectContainer.innerHTML = ''
            seledtedContainerImageDetailsProject.innerHTML = '' 
            noteProjectContainer.innerHTML = ''
 

          // set value data projects to project details
            startDetailsProject.innerHTML = `${findDataProject.startProject}`
            completedDetailsProject.innerHTML = `${findDataProject.finishedProject}`


            // about project
            aboutDetailsProject.innerHTML = `${findDataProject.aboutProject}`

            // note project
            if(findDataProject.hasOwnProperty('noteProject')){ 
                noteProjectContainer.innerHTML =`   
                <p><b>Note :</b></p>                    
                <p>${findDataProject.noteProject}</p>
                `
            } else {
              null
            }

            //  image or video project 
            mainImageDetailsProject.setAttribute('src',findDataProject.imageProject)


            //  selected image  
            findDataProject.imageSeledtedProject.map(projectselect => {    
              const createContainerImage = document.createElement('swiper-slide');
              const createImage = document.createElement('img')
              createContainerImage.appendChild(createImage); 

              // will check whether the image has other attributes
              function srcImage(){
                  if(projectselect.length == 2){
                    createImage.setAttribute('data-video',`${projectselect[1]}`);  
                    return projectselect[0]
                  } else {
                    return projectselect
                  }
                }
                
              createImage.setAttribute('src',srcImage())
              createImage.setAttribute('alt','image-project');  

              seledtedContainerImageDetailsProject.appendChild(createContainerImage);

              
             
             });                  

            //   tools and tech  
            findDataProject.techUses.map(tech => { 
              const createIconProject = document.createElement('img')
              createIconProject.setAttribute('src',tech); 
              techDetailsProjectContainer.appendChild(createIconProject);
            })

            findDataProject.toolsUses.map(tech => { 
              const createIconProject = document.createElement('img')
              createIconProject.setAttribute('src',tech); 
              toolsDetailsProjectContainer.appendChild(createIconProject);
    
            })
 
            //  link project  
            if(findDataProject.link === false){ 
                containerVisitProject.innerHTML = `
                <button class="disablet">
                    In Progress
                    <img src="icons/progress-icon.svg" alt="icons"> 
                </button>
                ` 
            } else {
              const linkTag = document.createElement('a');
              linkTag.setAttribute('target',"_blank");
              containerVisitProject.innerHTML = ` 
              <button class="link-to-website">
                    Visit Site
                    <img src="icons/visit_web_icon.svg" alt="icons"> 
                </button>
              `
              const linkProject = document.querySelector('.link-to-website')
              linkProject.appendChild(linkTag)
              linkTag.setAttribute('href', findDataProject.link );
            } 
          }
    }) 
 
});  

 // handler project media click
seledtedContainerImageDetailsProject.addEventListener('click',(imgSrc) => {   
    mainImageDetailsProject.classList.remove('none')
    mainVideoDetailsProject.classList.remove('none') 
    const srcImage = imgSrc.target.src; 
    const targetHandler = imgSrc.target;  

    mainImageDetailsProject.classList.remove('active'); 

    if(targetHandler.getAttribute("data-video")){
      mainImageDetailsProject.classList.add('none')
      mainVideoDetailsProject.classList.remove('none') 
      mainVideoDetailsProject.querySelector('source').setAttribute('src',targetHandler.getAttribute("data-video"));  
      mainVideoDetailsProject.load();
    } else {   
      mainVideoDetailsProject.classList.add('none') 
      mainImageDetailsProject.classList.remove('none')
      mainImageDetailsProject.setAttribute('src', srcImage);
    } 
})



// details project
closeDetailsProject.addEventListener('click',(e) => { 
  const containerDetailsProject = e.target.closest('.project-details');
  containerDetailsProject.classList.remove('active');
});

 