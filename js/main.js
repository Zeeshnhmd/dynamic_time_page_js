// DOM element

const time = document.getElementById('time'),
	greeting = document.getElementById('greeting'),
	name = document.getElementById('name'),
	focus = document.getElementById('focus');

const addZero = (n) => {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
};

// show time
const showTime = () => {
	let today = new Date(),
		hour = today.getHours(),
		min = today.getMinutes(),
		sec = today.getSeconds();

	// set AM or PM
	const amPm = hour >= 12 ? 'PM' : 'AM';

	// 12 hour format
	hour = hour % 12 || 12;

	// output time
	time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)} ${amPm}`;

	setTimeout(showTime, 1000);
};

// set Background and Greeting
const setBgGreet = () => {
	let today = new Date(),
		hour = today.getHours();

	if (hour < 12) {
		// Morning
		document.body.style.backgroundImage =
			"url('https://i.ibb.co/7vDLJFb/morning.jpg')";
		greeting.textContent = 'Good Morning';
	} else if (hour < 18) {
		// AfterNoon
		document.body.style.backgroundImage =
			"url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
		greeting.textContent = 'Good Afternoon';
	} else {
		// Evening
		document.body.style.backgroundImage =
			"url('https://i.ibb.co/924T2Wv/night.jpg')";
		greeting.textContent = 'Good Evening';
		document.body.style.color = '#fff';
	}
};

// GetName
const getName = () => {
	if (localStorage.getItem('name') === null) {
		name.textContent = '[Enter Name]';
	} else {
		name.textContent = localStorage.getItem('name');
	}
};

const setName = (e) => {
	if (e.type === 'keypress') {
		if (e.key === 'Enter' || e.keyCode === 13) {
			localStorage.setItem('name', e.target.innerText);
			name.blur();
		}
	} else {
		localStorage.setItem('name', e.target.innerText);
	}
};

const setFocus = (e) => {
	if (e.type === 'keypress') {
		if (e.key === 'Enter' || e.keyCode === 13) {
			localStorage.setItem('focus', e.target.innerText);
			focus.blur();
		}
	} else {
		localStorage.setItem('focus', e.target.innerText);
	}
};

//Get Focus
const getFocus = () => {
	if (localStorage.getItem('focus') === null) {
		focus.textContent = '[Enter Focus]';
	} else {
		focus.textContent = localStorage.getItem('focus');
	}
};

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run Fuctions
showTime();
setBgGreet();
getName();
getFocus();
