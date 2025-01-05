
// **************************************************** Common ***************************************************************************//
function displayHeading(title) {
    return `<hr class="hrHalf"><h1>${title}</h1><hr class="hrHalf"></hr>`;
}


// ***************************************************** Header **************************************************************************//
// const navArray = [
//     {'path':'#home','title':'Home'},
//     {'path':'#linkAbout','title':'About'},
//     {'path':'#linkSkills','title':'Skills'},
//     {'path':'#linkCareer','title':'Career'},
//     {'path':'#linkProjects','title':'Projects'},
//     {'path':'#linkContact','title':'Contact'}
// ];
        
// let resumePDF = './images/pdfFile.pdf';

// function displayNavbar(arr) {
//     let str = '<div class="head flexSBC"> <div class="head1"><img src="./images/profile.jpg" alt=""></div> <div class="head2 flexSBC">';
//     for(obj of arr) {
//         str += `<span><a href=${obj.path}>${obj.title}</a></span>`;
//     }
//     str+=`<button class="head2button"><a href=${resumePDF} download="newfilename">Resume</a></button></div></div>`;
//     return str;
// }
// document.getElementsByTagName('header')[0].innerHTML = displayNavbar(navArray);

function toggleMobileMenu() {
    const menu = document.querySelector('.mobileMenu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// ************************************************* Section 1 ***************************************************************************//


// ************************************************* Section 2 ***************************************************************************//
const sec2Part2Text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam dolore temporibus perspiciatis ipsam consectetur voluptatum velit, optio commodi deserunt deleniti quisquam incidunt ea quae, labore facere sed obcaecati accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nesciunt! Vel ab quia error maiores! Esse enim beatae quae repellendus odio perferendis magnam officiis id. Consectetur temporibus deleniti consequatur tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam dolore temporibus perspiciatis ipsam consectetur voluptatum velit, optio commodi deserunt deleniti quisquam incidunt ea quae, labore facere sed obcaecati accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nesciunt! Vel ab quia error maiores! Esse enim beatae quae repellendus odio perferendis magnam officiis id. Consectetur temporibus deleniti consequatur tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit.`;

document.getElementsByClassName('sec2Heading')[0].innerHTML = displayHeading('About Me');
document.getElementsByClassName('sec2Part2')[0].innerHTML = sec2Part2Text;


// ************************************************* Section 3 ***************************************************************************//
let sec3SkillsText = '';
const sec3SkillsArray = [
    { title: 'ReactJs', img: './images/icon_react.png' },
    { title: 'Redux', img: './images/icon_redux.png' },
    { title: 'Tailwind', img: './images/icon_tailwind.png' },
    { title: 'HTML', img: './images/icon_html.png' },
    { title: 'CSS', img: './images/icon_css.png' },
    { title: 'SQL', img: './images/icon_sql.png' },
    { title: 'Java', img: './images/icon_java.png' },
    { title: 'J2EE', img: './images/icon_j2ee.png' },
    { title: 'JDBC', img: './images/icon_jdbc.png' },
    { title: 'Servlet', img: './images/icon_servlet.png' },
    { title: 'C', img: './images/icon_c.png' },
    { title: 'IoT', img: './images/icon_iot.png' }
];

sec3SkillsArray.forEach(obj => {
    sec3SkillsText += `<div class="sec3FlexSBS"><img src=${obj.img} alt="no"><p>${obj.title}</p></div>`
});
document.getElementsByClassName('sec3Heading')[0].innerHTML = displayHeading('Skills');
document.getElementsByClassName('sec3Skills')[0].innerHTML = sec3SkillsText;


// ************************************************* Section 4 ***************************************************************************//
 
