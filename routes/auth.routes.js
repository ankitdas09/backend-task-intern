const getAuthUrl = require("../utils/getAuthUrl");
const getAccessToken = require("../utils/getAccessToken");
const getEvents = require("../utils/getPrimaryCalendarEvents");

const authRoutes = async (req, res) => {
	if (req.url.match("/rest/v1/calendar/init") && req.method == "GET") {
		const url = getAuthUrl();
		res.writeHead(302, { Location: url });
		res.end();
	}

	if (req.url.match("/rest/v1/calendar/redirect") && req.method == "GET") {
		const urlParams = new URLSearchParams("?" + req.url.split("?")[1]);
		const code = urlParams.get("code");
		try {
			const accessToken = await getAccessToken(code);
			if (!accessToken) return res.end("500 Server Error.");

			const events = await getEvents(accessToken);
			if (events === null) return res.end("500 Server Error.");

			return res.end(JSON.stringify(events.items));
		} catch (error) {
			console.log(error.message);
			return res.end("500 Server Error.");
		}
	}
};

module.exports = authRoutes;
