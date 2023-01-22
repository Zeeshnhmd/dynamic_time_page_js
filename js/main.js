// DOM element

const time = document.getElementById('time'),
	greeting = document.getElementById('greeting'),
	name = document.getElementById('name'),
	focus = document.getElementById('focus');

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
	time.innerHTML = `${hour} : ${min} : ${sec} ${amPm}`;

	setTimeout(showTime, 1000);
};

showTime();
