// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"productsList": [
		{
		  "id": 5,
		  "quantity": 1
		}
	  ]
}

test('Should return 200 status code', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualStatusCode).toBe(200);
});


test('Body should contain delivery Price', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody["deliveryPrice"]).toBe(0);
});

test('Body should contain delivery Time', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody["deliveryTime"]).toBe("20~25");
});

test('Body should contain delivery Status', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody["status"]).toBe(0);
});