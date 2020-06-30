console.log('Task 8');

function getPhone (phoneNumber) {
	phoneNumber = phoneNumber || prompt("Введите номер мобильного телефона");

	let test = /(\+?\s?375)\s?\(?\s?(29|33|44|25)\s?\)?\s?(\d{3})\s?-?\s?(\d{2})\s?-?\s?(\d{2})/g;
	if (test.test(phoneNumber) == true) {
		console.log("Телефонный номер введен верно");
	} else {
		console.log("Телефонный номер введен неверно");
	};
};

getPhone();