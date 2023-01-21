const getAuthUrl = () => {
	const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;
	const options = {
		redirect_uri: process.env.REDIRECT_URI,
		client_id: process.env.CLIENT_ID,
		access_type: "offline",
		response_type: "code",
		prompt: "consent",
		scope: [
			"https://www.googleapis.com/auth/userinfo.email",
			"https://www.googleapis.com/auth/calendar.events.readonly",
		].join(" "),
	};

	const qs = new URLSearchParams(options);

	return `${rootUrl}?${qs.toString()}`;
};
module.exports = getAuthUrl;
