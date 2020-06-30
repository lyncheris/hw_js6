console.log('Task 6');

function dateNow (date) {
	date = new Date();

	let year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();

		if (month < 10) {
			month = "0" + month;
		};
		
		if (day < 10) {
			day = "0" + day;
		};

		if (hours < 10) {
			hours = "0" + hours;
		};

		if (minutes < 10) {
			minutes = "0" + minutes;
		};

		if (seconds < 10) {
			seconds = "0" + seconds;
		};

		return hours + ":" + minutes + ":" + seconds + " " + day + "." + month + "." + year;
};

console.log(dateNow());