/*---------------------------------------------------------
*	Author:			Travolgi
*	Theme:			Visionary AI
*	Version:			1.0.0
*	Created: 		20/07/2023
*	Last update:	20/07/2023
---------------------------------------------------------*/


/*--------------------------------------------------------
*	PRELOAD
--------------------------------------------------------*/
document.body.querySelector('#thisYear').innerHTML= new Date().getFullYear();

(() => {
	if (window.addEventListener) {
		window.addEventListener('load', () => document.querySelector('#preload').style.display = 'none', false);
	} else {
		window.attachEvent('onload', () => document.querySelector('#preload').style.display = 'none');
	}
})();


/*--------------------------------------------------------
*	HELPER FUNCTIONS
--------------------------------------------------------*/
const openPanel = (target, dataAttribute, val=true) => target.setAttribute(dataAttribute, val);

const changeClass = (target, removeClass, addClass) => {
	target.classList.remove(removeClass);
	target.classList.add(addClass);
}


/*--------------------------------------------------------
*	HEADER
--------------------------------------------------------*/
const panelToggleBtn = document.querySelector('#mobile-panel-toggle'),
		compressPanelToggleBtn = document.querySelector('#compress-panel-toggle'),
		iconPanelToggle = panelToggleBtn.querySelector('i'),
		iconCompressPanelToggle = compressPanelToggleBtn.querySelector('i'),
		panel = document.querySelector('#panel'),
		dataPanel = 'data-panel-opened',
		dataCompressPanel = 'data-panel-compressed',
		content = document.querySelector('#content');

// mobile panel
panelToggleBtn.addEventListener('click', () => {
	const visible = panel.getAttribute(dataPanel);
	if(visible === 'false') {
		openPanel(panel, dataPanel);
		openPanel(content, dataPanel);
		changeClass(iconPanelToggle, 'gg-chevron-right-r', 'gg-chevron-left-r');
	} else {
		openPanel(panel, dataPanel, false);
		openPanel(content, dataPanel, false);
		changeClass(iconPanelToggle, 'gg-chevron-left-r', 'gg-chevron-right-r');
	}
});
// compress panel
compressPanelToggleBtn.addEventListener('click', () => {
	const visible = panel.getAttribute(dataCompressPanel);
	if(visible === 'false') {
		openPanel(panel, dataCompressPanel);
		openPanel(content, dataCompressPanel);
		changeClass(iconCompressPanelToggle, 'gg-chevron-left-r', 'gg-chevron-right-r');
	} else {
		openPanel(panel, dataCompressPanel, false);
		openPanel(content, dataCompressPanel, false);
		changeClass(iconCompressPanelToggle, 'gg-chevron-right-r', 'gg-chevron-left-r');
	}
});

// search bar
const searchBarBtn = document.querySelector('#visionary-ai-search'),
		searchBarCloseBtn = document.querySelector('#visionary-ai-close-search'),
		searchBar = document.querySelector('#search-bar'),
		dataSearchBar = 'data-search-bar-opened';
		
searchBarBtn.addEventListener('click', () => {
	const visible = searchBar.getAttribute(dataSearchBar);
	if(visible === 'false') {
		openPanel(searchBar, dataSearchBar);
	} else {
		openPanel(searchBar, dataSearchBar, false);
	}
});
searchBarCloseBtn.addEventListener('click', e => {
	e.preventDefault();
	openPanel(searchBar, dataSearchBar, false);
});

// notifications
const notificationsBtn = document.querySelector('#visionary-ai-notifications'),
		notificationsPanel = document.querySelector('#notifications-panel'),
		dataNotificationsPanel = 'data-notifications-panel-opened';

notificationsBtn.addEventListener('click', () => {
	const visible = notificationsPanel.getAttribute(dataNotificationsPanel);
	if(visible === 'false') {
		openPanel(notificationsPanel, dataNotificationsPanel);
	} else {
		openPanel(notificationsPanel, dataNotificationsPanel, false);
	}
});

// fullscreen mode
const fullscreenBtn = document.querySelector('#visionary-ai-fullscreen-mode'),
		iconFullscreen = fullscreenBtn.querySelector('i');

const setFullscreen = () => {
	if (document.fullscreenElement) {
		if (document.exitFullscreen) {
			document.exitFullscreen();
			changeClass(iconFullscreen, 'gg-minimize', 'gg-maximize');
		}
	} else {
		if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
			changeClass(iconFullscreen, 'gg-maximize', 'gg-minimize');
		}
	}
}
fullscreenBtn.addEventListener('click', setFullscreen);

// theme skin mode and localstorage
const visionaryAiSkinBtn = document.querySelector('#visionary-ai-skin'),
		iconSkin = visionaryAiSkinBtn.querySelector('i'),
		dataSkin = document.querySelector('[data-visionary-ai-skin]');

const setSkinToLocalStorage = skin => localStorage.setItem('visionaryAiSkin', skin),
		getSkinFromLocalStorage = () => localStorage.getItem('visionaryAiSkin');

const setInitialSkin = () => {
	const savedSkin = getSkinFromLocalStorage(),
			newIconSkinClass = savedSkin === 'dark' ? 'gg-sun' : 'gg-moon';
			console.log(savedSkin)
			console.log(newIconSkinClass)
	if (savedSkin) {
		dataSkin.setAttribute('data-visionary-ai-skin', savedSkin);
		iconSkin.classList.remove(savedSkin === 'dark' ? 'gg-moon' : 'gg-sun');
		iconSkin.classList.add(newIconSkinClass);
	}
};

const changeSkinTheme = () => {
	const currentSkin = dataSkin.getAttribute('data-visionary-ai-skin'),
			newSkin = currentSkin === 'dark' ? 'light' : 'dark',
			newIconSkinClass = currentSkin === 'dark' ? 'gg-moon' : 'gg-sun';
 
	dataSkin.setAttribute('data-visionary-ai-skin', newSkin);
	iconSkin.classList.remove(currentSkin === 'dark' ? 'gg-sun' : 'gg-moon');
	iconSkin.classList.add(newIconSkinClass);

	setSkinToLocalStorage(newSkin);
}
setInitialSkin();

visionaryAiSkinBtn.addEventListener('click', changeSkinTheme);

// profile options
const profileOptionsBtn = document.querySelector('#visionary-ai-profile-options'),
		profileOptionsPanel = document.querySelector('#profile-options-panel'),
		dataOptionsPanel = 'data-options-panel-opened';

profileOptionsBtn.addEventListener('click', () => {
	const visible = profileOptionsPanel.getAttribute(dataOptionsPanel);
	if(visible === 'false') {
		openPanel(profileOptionsPanel, dataOptionsPanel);
	} else {
		openPanel(profileOptionsPanel, dataOptionsPanel, false);
	}
});


/*--------------------------------------------------------
*	AI TYPING EFFECT
--------------------------------------------------------*/
const typingTexts = document.querySelectorAll('.typing-effect'),
		typingSpeed = 50;
		
function typeNextChar(typingTexts, textToType, charIndex) {
	typingTexts.textContent += textToType[charIndex];
	charIndex++;
	if (charIndex < textToType.length) {
		setTimeout(() => typeNextChar(typingTexts, textToType, charIndex), typingSpeed);
	}
}

function animateTypingEffect(typingTexts) {
	const textToType = typingTexts.textContent;
	typingTexts.textContent = "";
	typeNextChar(typingTexts, textToType, 0);
}

typingTexts.forEach(animateTypingEffect);


/*--------------------------------------------------------
*	FAQ
--------------------------------------------------------*/
const faqs = document.querySelectorAll('.faq'),
		dataFaq = 'data-faq-opened';

const toggleFaq = e => {
	const currentFaq = e.target.parentNode,
			iconFaq = currentFaq.querySelector('button'),
			visible = currentFaq.getAttribute(dataFaq);
	
	if(visible === 'false') {
		openPanel(currentFaq, dataFaq);
		changeClass(iconFaq, 'gg-add-r', 'gg-close-r');
	} else {
		openPanel(currentFaq, dataFaq, false);
		changeClass(iconFaq, 'gg-close-r', 'gg-add-r');
	}
}

if (faqs) {
	faqs.forEach(faq => faq.addEventListener('click', toggleFaq));
}


/*--------------------------------------------------------
*	AOS INIT
--------------------------------------------------------*/
AOS.init({
	easing: 'ease-out-cubic',
	duration: 600,
	once: true,
	mirror: true,
});