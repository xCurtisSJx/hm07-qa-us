// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "products": [
			{
				"id": 5,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 5
			}
		]
	}

	test('POST request should return status code 200', async () => {
	
		let actualStatusCode;
    
		try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
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
	expect(actualStatusCode).toBe(200);
});


test('Should receive the requested products', async () => {
	
	let actualResponse;

	try {
	const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify(requestBody)
	});
	actualResponse = await response.json();
} catch (error) {
	console.error(error);
}
expect(actualResponse).toEqual({
	"Everything You Need": {
		"Sprite Soft Drink": true,
		"Fruit Power Juice - Litchi": false
	},
	"Food City": {
        "Sprite Soft Drink": true,
        "Fruit Power Juice - Litchi": true
    },
    "Big World": {
        "Fruit Power Juice - Litchi": false,
        "Sprite Soft Drink": false
    },
    "Fresh Food": {
        "Sprite Soft Drink": true,
        "Fruit Power Juice - Litchi": true
    }	
})
});
