const http = require("http");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");

// No third party library or framework used
const server = http.createServer((req, res) => {
	authRoutes(req, res);
});

const PORT = 8000;
server.listen(PORT, () => console.log("Server running on port", PORT));
