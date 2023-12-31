import { API_AUCTION_URL } from '../constants.mjs';

/**
 * registers a user profile by sending a POST request to an API URL with the given profile data in JSON format.
 *
 * @param {Object} profile - The user profile to be registered.
 * @return {Promise} A Promise that resolves with the JSON response from the API after registering the profile.
 */

const action = '/auth/register';
const method = 'post';

export async function register(profile) {
	const registerURL = API_AUCTION_URL + action;
	const body = JSON.stringify(profile);

	const response = await fetch(registerURL, {
		headers: {
			'content-Type': 'application/json',
		},
		method,
		body,
	});

	const json = await response.json();

	if (response.ok) {
		return json;
	} else {
		// Register failed, display error message to user.
		throw new Error(json.errors[0].message);
	}
}
