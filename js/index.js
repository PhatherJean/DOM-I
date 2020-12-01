
const container = document.querySelector('.container');
const heading = container.querySelector('header');
const ideaLogo = container.querySelector('#logo-img');
const navi = container.querySelector('nav');
const links = document.querySelector('a');
const links2 = links.nextElementSibling;
const links3 = links2.nextElementSibling;
const links4 = links3.nextElementSibling;
const links5 = links4.nextElementSibling;
const links6 = links5.nextElementSibling;
const newLink = document.createElement('a');
newLink.textContent = 'You Want Some';
newLink.href = '#';
document.querySelector('nav').prepend(newLink);
const newLinkB = document.createElement('a');
newLinkB.textContent = 'Come Get Some';
newLinkB.href = '#';
document.querySelector('nav').appendChild(newLinkB)
const allLinks = document.querySelectorAll('nav a');

let linked = Array.from(allLinks);
for(i in linked)  {
  linked[i].style.color = 'green';
}

/*Header Sect*/
 links.textContent ='Services';
 links2.textContent = 'Product';
 links3.textContent = 'Vision';
 links4.textContent = 'Features';
 links5.textContent = 'About';
 links6.textContent = 'Contact';
 heading.style.display = 'flex';
 heading.style.justifyContent ='center';
 

 /*Top Sect*/
topSect = document.querySelector('.cta');
topTitle = document.querySelector('h1');
topImg = document.querySelector('#cta-img');
midButton = document.querySelector('button');

topTitle.innerHTML = 'DOM <br> IS <br> AWESOME'; 
topImg.setAttribute('src', 'img/header-img.png');
midButton.innerText = 'Get Started';

/*Main Sect */
const main = document.querySelector('.main-content');

/*top half */
const topMain = document.querySelector('.top-content');

const subject = topMain.querySelector('.text-content');
const subjectTitle = subject.querySelector('h4');
const subjectText = subject.querySelector('p');
subjectTitle.textContent = 'Features';
subjectText.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis'
subject.style.width = '50%'

const subjectTwo = subject.nextElementSibling;
const subjectTTitle = subjectTwo.querySelector('h4');
const subjectTText = subjectTwo.querySelector('p');
subjectTTitle.textContent = 'About';
subjectTText.innerText ='About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
subjectTwo.style.width = '50%'


const midLogo = document.getElementById('middle-img');
midLogo.setAttribute('src', 'img/mid-page-accent.jpg');

/*bottom half */
const bottomMain = document.querySelector('.bottom-content');

const bottomSub = bottomMain.querySelector('.text-content');
const bSTitle = bottomSub.querySelector('h4');
const bSText = bottomSub.querySelector('p');
bSTitle.textContent = 'Services';
bSText.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.' 
bottomSub.style.width = '33%';

const bottomMidSub = bottomSub.nextElementSibling;
const bSTitle2 = bottomMidSub.querySelector('h4');
const bSText2 = bottomMidSub.querySelector('p');
bSTitle2.textContent = 'Product';
bSText2.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomMidSub.style.width = '33%';

const bottomFarSub = bottomMidSub.nextElementSibling;
const bSTitle3 = bottomFarSub.querySelector('h4');
const bSText3 = bottomFarSub.querySelector('p');
bSTitle3.textContent = 'Vision';
bSText3.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomFarSub.style.width = '33%';

/*Contact */

const info = document.querySelector('.contact');
const cont = info.querySelector('h4');
cont.textContent = 'Contact'
const addr = cont.nextElementSibling;
addr.innerHTML = '123 Way 456 Street <br> Somewhere, USA'
const tele = addr.nextElementSibling;
tele.innerHTML = '<a href="tel:+18888888888">1(888)888-8888</a>'; 
const email = tele.nextElementSibling;
email.innerHTML = '<a href="mailto:sales@greatidea.io">sales@greatidea.io</a>';
email.style.textDecoration = 'none'

/* Footer */

const foot = document.querySelector('footer');
foot.textContent = 'Copyright Great Idea! 2018'


const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",

    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
