let slideIndex = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let currentAppId = '';

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // Hide bottom navigation bar on detail or about page
    const bottomNav = document.querySelector('.bottom-nav');

    if (sectionId === 'detail' || sectionId === 'about') {
        bottomNav.classList.add('show');
    } else {
        bottomNav.classList.add('show');
    }
}

function openDetail(appId) {
    currentAppId = appId;

    // Example data for the detail view
    const apps = {
        'picsart': {
            title: 'PicsArt',
            image: 'img/picsart.png',
            developer: ': پیکس ئاڕت  ',
            language: ': ئینگلیزی  ، عەرەبی ، ئەرمەنی ، فەڕەنسی ، ئەڵمانی ، هیندی ، ئیتاڵی ، ڕوسیا ، تورکی ، + ١٣ تر   ',
            size: ': ٢٥١.٩ مێگابایت',
            version: ':  ١٣.٣٠.٥٠',
            versionHistory: ': ٦ ڕۆژ پێش ئێستا',
            bugFixes: ': کردنەوەی هەمو ئەو بەشانەی داوای پارە دەکەن ، کڕین پاشان پاشگەزبوونەوە ',
            previews: [
                'img/picsart/picsart1.png',
                'img/picsart/picsart2.png',
                'https://ia904506.us.archive.org/0/items/rpreplay-final-1741034617/RPReplay_Final1741034617.mov'
            ],
            url: 'https://google.com'
        },
        'subwaysurfers': {
            title: 'Subway Surfers',
            image: 'img/subway.png',
            developer: ' : سیبۆ گەیمس',
            language: ' : ئینگلیزی ، ئەڵمانی ، فەڕەنسی ، تورکی ، کۆریا ، ٩ + تر',
            size: ' : ٢٩٢.٨ مێگابایت',
            version: ' : ٣.٤٢.٢',
            versionHistory: ' : ٢ هەفتە پێش ئێستا',
            bugFixes: ' : کۆینی بێ سنوور ، کلیلی بێ سنوور ، سکۆتەری بێ سنور ، هەموو بەشەکان کراوەتەوە',
            previews: [
                'img/subway/subway1.png',
                'img/subway/subway2.png',

                'img/subway/subway3.png'            
            ],
            url: 'https://www.google.com'
        },
        'gettingoverit': {
            title: 'Getting Over It',
            image: 'img/getting.png',
            developer: ' :  بێننێتت فۆددی',
            language: ' : ئینگلیزی ، کۆری ، ژاپۆن ، ڕوسی ، چینی ',
            size: ' : ٢٤٦.١ مێگابایت',
            version: ' : ١.١٤',
            versionHistory: ' : ٣ ساڵ پێش ئێستا',
            bugFixes: ' : نرخی لە ئەپ ستۆر $٤.٩٩ دۆلارە لە شا ستۆر بە خۆڕاییە',
            previews: [
                'img/getting/getting1.png',
                'img/getting/getting2.png',
                          'img/getting/getting3.png'
               
            ],
            url: 'https://www.google.com'
        },
        'roblox': {
            title: 'Roblox',
            image: 'img/roblox.png',
            developer: ' :   ڕۆبلۆکس ',
            language: ' : ئینگلیزی ، فەڕەنسی ، ئەڵمانی ، کۆری ، ڕوسی + تر  ',
            size: ' : ٢٤٦.٩ مێگابایت',
            version: ' : ٢.٦٦٠.٦٤٩',
            versionHistory: ' : ١ هەفتە پێش ئێستا',
            bugFixes: ' : زیادکراو نیە ',
            previews: [
                'img/roblox/roblox1.png',
                'img/roblox/roblox2.png',
                          'img/roblox/roblox3.png'
               
            ],
            url: 'https://www.google.com'
        },
        'esign': {
            title: 'ESign',
            image: 'img/esign.png',
            developer: ' :   ئیساین ',
            language: ' : ئینگلیزی  ',
            size: ' : ٧.٧٢ مێگابایت',
            version: ' : ٥.٠.٢',
            versionHistory: ' : ١ ساڵ پێش ئێستا',
            bugFixes: ' : بۆ دابەزاندنی یاری و بەرنامەکان بۆ ئای ئۆ ئێس بە دامەزراندنی بڕوانامەی ئەپڵ و دابەزاندنی یاری و بەرنامە لە دەرەوەی ئەپ ستۆر ',
            previews: [
                'img/esign/esign1.png',
                'img/esign/esign2.png',
                          'img/esign/esign3.png'
               
            ],
            url: 'https://www.google.com'
        }
    };



    const app = apps[appId];
    document.getElementById('detail-title').textContent = app.title;
    document.getElementById('detail-app-image').src = app.image;
    document.querySelector('.app-details').innerHTML = `
        <p style="font-family: nrtregular;" ><strong style="font-family: nrtbold;">  گەشەپێدەر </strong>${app.developer}</p> 
        <p style="font-family: nrtregular;"><strong style="font-family: nrtbold;"> زمانەکانی ئەپ </strong>${app.language}</p>
        <p style="font-family: nrtregular;"> <strong style="font-family: nrtbold;">قەبارەی ئەپ </strong> ${app.size}</p>
    `;
    document.querySelector('.whats-new').innerHTML = `
        <h2 style="font-family: nrtbold;" >چی نوێتر هەیە؟</h2>

        <p style="font-family: nrtregular;"><strong style="font-family: nrtbold;" >  ڤێرژنی ئەپ  </strong> ${app.version}</p>
        <p style="font-family: nrtregular;"><strong style="font-family: nrtbold;" > ئەپدەیتی نوێ </strong> ${app.versionHistory}</p>
        <p style="font-family: nrtregular;"><strong>تایبەتمەندی </strong> ${app.bugFixes}</p>
    `;
    const slides = document.querySelector('.slides');
    slides.innerHTML = '';
    app.previews.forEach(preview => {
        if (preview.endsWith('.mp4')) {
            const video = document.createElement('video');
            video.controls = true;
            const source = document.createElement('source');
            source.src = preview;
            source.type = 'video/mp4';
            video.appendChild(source);
            video.innerHTML += 'Your browser does not support the video tag.';
            slides.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = preview;
            img.alt = 'preview';
            slides.appendChild(img);
        }
    });

    showSection('detail');
    showSlides(slideIndex);
}

function redirectToApp() {
    const apps = {
        'picsart': 'https://www.snapchat.com',
        'google': 'https://www.google.com'
    };
    window.location.href = apps[currentAppId];
}

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slides img, .slides video');
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    const offset = -slideIndex * 80;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function goBack() {
    showSection('main');
}

// Touch and mouse events for manual sliding
const slideshow = document.querySelector('.slideshow');
const slidesContainer = document.querySelector('.slides');

slidesContainer.addEventListener('mousedown', dragStart);
slidesContainer.addEventListener('touchstart', dragStart);
slidesContainer.addEventListener('mouseup', dragEnd);
slidesContainer.addEventListener('touchend', dragEnd);
slidesContainer.addEventListener('mousemove', drag);
slidesContainer.addEventListener('touchmove', drag);

function dragStart(event) {
    if (event.type === 'touchstart') {
        startPos = event.touches[0].clientX;
    } else {
        startPos = event.clientX;
    }
    isDragging = true;
    slidesContainer.style.transition = 'none';
}

function dragEnd() {
    isDragging = false;
    slidesContainer.style.transition = 'transform 0.3s ease-in-out';
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -130) {
        moveSlide(1);
    } else if (movedBy > 150) {
        moveSlide(-1);
    } else {
        showSlides(slideIndex);
    }
    currentTranslate = 0;
    prevTranslate = -slideIndex * 100;
}

function drag(event) {
    if (isDragging) {
        const currentPosition = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
        currentTranslate = currentPosition - startPos;
        slidesContainer.style.transform = `translateX(${prevTranslate + currentTranslate}px)`;
    }
}

// Accordion functionality
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
    });
});