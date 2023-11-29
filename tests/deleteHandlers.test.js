// eslint-disable-next-line no-undef
const config = require('../config');

test('Should return 200 status code....', async () => {
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders/2`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

test('Body should contain....', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}api/v1/orders/2`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.name).toBe('ok');
});