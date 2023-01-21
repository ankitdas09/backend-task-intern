const getAccessToken = async (code) => {
	const reqBody = {
		code: code,
		client_id: process.env.CLIENT_ID,
		client_secret: process.env.CLIENT_SECRET,
		redirect_uri: process.env.REDIRECT_URI,
		grant_type: "authorization_code",
	};
	const rootUrl = "https://oauth2.googleapis.com/token";

	try {
		const response = await fetch(rootUrl, {
			method: "POST",
			body: JSON.stringify(reqBody),
		});
		let parsed = await response.json();
		if (!parsed.access_token) return null;

		return parsed.access_token;
	} catch (error) {
		console.log(error);
		return null;
	}
};

module.exports = getAccessToken;
