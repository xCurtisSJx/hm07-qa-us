// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {}

test('PUT request should return the status code 200', async () => {
	let actualStatusCode;
    try {
	const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
		method: 'PUT',
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify(requestBody)
	});
	actualStatusCode = await response.json();
} catch (error) {
	console.error(error);
}
expect(actualStatusCode["ok"]).toBe(true);
});



test('Response body should return true as expected', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
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
	expect(actualResponseBody).toHaveProperty("ok",true);
});
