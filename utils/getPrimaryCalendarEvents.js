const getEvents = async (accessToken) => {
	try {
		const rootUrl = "https://www.googleapis.com/calendar/v3/calendars/primary/events";
		const response = await fetch(`${rootUrl}?access_token=${accessToken}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

module.exports = getEvents;
