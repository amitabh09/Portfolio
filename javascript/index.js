const navArray = [
    {'path':'#home','title':'Home'},
    {'path':'#linkAbout','title':'About'},
    {'path':'#linkSkills','title':'Skills'},
    {'path':'#linkCareer','title':'Career'},
    {'path':'#linkProjects','title':'Projects'},
    {'path':'#linkContact','title':'Contact'}
];

function displayNavbar(arr) {
    let str = '';
    for(obj of arr) {
        str += `<span><a href=${obj.path}>${obj.title}</a></span>`;
    }
    str+=`<button class="head2button">Resume</button>`;
    return str;
}

document.getElementsByClassName('head2')[0].innerHTML = displayNavbar(navArray);
// ***************************************************************************************************************************************//

// ***************************************************************************************************************************************//
const introArray = ['Hello, I am','Amitabh Shahi',`I'm an Web Developer who specializes in creating unique & appealing websites as well as web applications using the latest technologies and developing firmware for interactive IOT devices. Currently, I am experienced in both Web Development and IOT.`];

function displaySec1(arr) {
    let str = `<p>${arr[0]}</p><h1>${arr[1]}</h1><p>${arr[2]}</p>`;
    str += `<br><br><button class="head2button">Check Out My Projects!</button>`;
    return str;
}

document.getElementsByClassName('sec1')[0].innerHTML = displaySec1(introArray);
// ***************************************************************************************************************************************//