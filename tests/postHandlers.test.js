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

test('Should return 201 status code', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualStatusCode).toBe(201);
});


test('Body should contain type of service', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody["courierService"]).toBe("Order and Go");
});

test('Body should contain location name', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody["wareHouse"]).toBe("Fresh Food");
});

test('Body should contain delivery Time', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders`, {
			method: 'POST',
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

test('Body should contain Final Cost', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody["finalCost"]).toBe(10);
});