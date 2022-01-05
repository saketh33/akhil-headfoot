const nav_mainPage = document.getElementsByClassName('nav-mainPage');
const nav_catPage = document.getElementsByClassName('nav-catalogPage');
const nav_commPage = document.getElementsByClassName('nav-commPage');
const nav_resPage = document.getElementsByClassName('nav-resPage');
const nav_priPage = document.getElementsByClassName('nav-priPage');

var scrollbar = window.scrollY;

if (scrollbar > 20) {
	document.getElementsByClassName('mob-nav')[0].style.background = '#FFF';
	document.getElementsByClassName('mob-nav')[0].style.color = '#1A191D';

	document.getElementsByClassName('mob-nav-frame-right')[0].style.filer =
		'invert(100%)';

	document.getElementsByClassName('nav-bar-desktop')[0].style.background =
		'#FFF';
	document.getElementsByClassName('nav-bar-desktop')[0].style.color = '#121212';
} else {
	document.getElementsByClassName('nav-bar-desktop')[0].style.background =
		'#1A191D';
	document.getElementsByClassName('nav-bar-desktop')[0].style.color = '#FFF';

	document.getElementsByClassName('mob-nav')[0].style.background = '#1A191D';
	document.getElementsByClassName('mob-nav')[0].style.color = '#fff';

	document.getElementsByClassName('mob-nav-frame-right')[0].style.filter =
		'invert(0%)';
}

function hideMobNavigationMenu() {
	nav_commPage[0].style.display = 'none';
	nav_catPage[0].style.display = 'none';
	nav_mainPage[0].style.display = 'none';
	nav_resPage[0].style.display = 'none';
	nav_priPage[0].style.display = 'none';
}

function showMobMainNavigationMenu() {
	nav_commPage[0].style.display = 'none';
	nav_catPage[0].style.display = 'none';
	nav_mainPage[0].style.display = 'block';
	nav_resPage[0].style.display = 'none';
	nav_priPage[0].style.display = 'none';
}

function showMobCatNavigationMenu() {
	nav_commPage[0].style.display = 'none';
	nav_catPage[0].style.display = 'block';
	nav_mainPage[0].style.display = 'block';
	nav_resPage[0].style.display = 'none';
	nav_priPage[0].style.display = 'none';
}

function showMobCommNavigationMenu() {
	nav_commPage[0].style.display = 'block';
	nav_catPage[0].style.display = 'none';
	nav_mainPage[0].style.display = 'block';
	nav_resPage[0].style.display = 'none';
	nav_priPage[0].style.display = 'none';
}

function showMobResNavigationMenu() {
	nav_commPage[0].style.display = 'res';
	nav_catPage[0].style.display = 'none';
	nav_mainPage[0].style.display = 'block';
	nav_resPage[0].style.display = 'block';
	nav_priPage[0].style.display = 'none';
}

function showMobPriNavigationMenu() {
	nav_commPage[0].style.display = 'none';
	nav_catPage[0].style.display = 'none';
	nav_mainPage[0].style.display = 'block';
	nav_resPage[0].style.display = 'none';
	nav_priPage[0].style.display = 'block';
}

window.addEventListener('resize', function (event) {
	var newWidth = window.innerWidth;
	if (newWidth < 600) {
		nav_commPage[0].style.display = 'none';
		nav_catPage[0].style.display = 'none';
		nav_mainPage[0].style.display = 'none';
		nav_resPage[0].style.display = 'none';
		nav_priPage[0].style.display = 'none';
	}
});

window.addEventListener('scroll', function (event) {
	var scrollbar = window.scrollY;
	if (scrollbar > 20) {
		document.getElementsByClassName('mob-nav')[0].style.background = '#FFF';
		document.getElementsByClassName('mob-nav')[0].style.color = '#1A191D';

		document.getElementsByClassName('mob-nav-frame-right')[0].style.filter =
			'invert(100%)';

		document.getElementsByClassName('nav-bar-desktop')[0].style.background =
			'#FFF';
		document.getElementsByClassName('nav-bar-desktop')[0].style.color =
			'#121212';
	} else {
		document.getElementsByClassName('nav-bar-desktop')[0].style.background =
			'#1A191D';
		document.getElementsByClassName('nav-bar-desktop')[0].style.color = '#FFF';

		document.getElementsByClassName('mob-nav-frame-right')[0].style.filter =
			'invert(0%)';

		document.getElementsByClassName('mob-nav')[0].style.background = '#1A191D';
		document.getElementsByClassName('mob-nav')[0].style.color = '#fff';
	}
});
new Splide('.splide', {
	type: 'loop',
	autoplay: true,
	pagination: false,
	arrows: false,
	perPage: 2,
	perMove: 1,
	focus: 'center',
	autoplay: true,
	gap: '1rem',
	breakpoints: {
		600: {
			perPage: 1,
			gap: '1rem',
		},
	},
}).mount();

AOS.init({
	duration: 900,
	offset: 220,
	easing: 'ease-in-out-quad',
});

const header = document.querySelector('.header');
const navLink = document.querySelectorAll('.nav_item');
const ham = document.querySelector('.ham');

window.addEventListener('scroll', () => {
	const top = window.innerHeight * (15 / 100);
	if (window.scrollY <= top) {
		header.style.background = 'rgb(26, 25, 29)';
		ham.style.background = 'transparent';

		header.style.height = '60px';
		navLink.forEach((i) => {
			i.style.color = '#fff';
		});
	}
	if (window.scrollY > top) {
		header.style.background = '#fff';
		ham.style.background = '#0a33ec';
		header.style.height = '60px';
		navLink.forEach((i) => {
			i.style.color = '#000';
		});
	}
});

const Profile = document.querySelector('.avatar');
const Profile_dropDown = document.querySelector('.profile_dropDown');
console.log(Profile);
Profile.addEventListener('click', () => {
	console.log('yo');

	if (Profile_dropDown.style.opacity === '1') {
		Profile_dropDown.style.opacity = '0';
		Profile_dropDown.style.pointerEvents = 'none';
	} else {
		Profile_dropDown.style.opacity = '1';
		Profile_dropDown.style.pointerEvents = 'all';
	}
});
document.addEventListener('click', function (event) {
	var isClickInsideElement = Profile.contains(event.target);
	if (!isClickInsideElement) {
		Profile_dropDown.style.opacity = '0';
	}
});

var dp1 = $('.catalog-dropdown-desk');
var dp2 = $('.community-dropdown-desk');
var dp3 = $('.resource-dropdown-desk');
var dp4 = $('.pricing-dropdown-desk');
var dp5 = $('.profile-dropdown-desk');
dp1.hide();
dp2.hide();
dp3.hide();
dp4.hide();
dp5.hide();
var dp1 = $('.catalog-dropdown-desk');
var dp2 = $('.community-dropdown-desk');
var dp3 = $('.resource-dropdown-desk');
var dp4 = $('.pricing-dropdown-desk');
var dp5 = $('.profile-dropdown-desk');

var DP1 = $('.1-dropdown');
var DP2 = $('.2-dropdown');
var DP3 = $('.3-dropdown');
var DP4 = $('.4-dropdown');
var DP5 = $('.5-dropdown');

$('.catalog-desk').click(function () {
	dp1.toggle();
});
$('.community-desk').click(function () {
	dp2.toggle();
});
$('.resource-desk').click(function () {
	dp3.toggle();
});
$('.pricing-desk').click(function () {
	console.log(dp4.is(':hidden'));
	dp4.toggle();
});
$('.profile-avatar').click(function () {
	dp5.toggle();
});

$(document).mouseup(function (e) {
	if (!DP1.is(e.target) && DP1.has(e.target).length === 0) {
		dp1.hide();
	}
	if (!DP2.is(e.target) && DP2.has(e.target).length === 0) {
		dp2.hide();
	}
	if (!DP3.is(e.target) && DP3.has(e.target).length === 0) {
		dp3.hide();
	}
	if (!DP4.is(e.target) && DP4.has(e.target).length === 0) {
		dp4.hide();
	}
	if (!DP5.is(e.target) && DP5.has(e.target).length === 0) {
		dp5.hide();
	}
});

 var coll = document.getElementsByClassName('collapsible');
 var i;

 for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener('click', function () {
			this.classList.toggle('active');
			var content = this.nextElementSibling;
			if (content.style.display === 'block') {
				content.style.display = 'none';
			} else {
				content.style.display = 'block';
			}
		});
 }