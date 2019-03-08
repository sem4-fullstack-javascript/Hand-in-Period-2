const express = require("express");
const http = require("http");

// Basic Calculator API
function add(n1, n2) {
	return n1 + n2;
}

function subtract(n1, n2) {
	return n1 - n2;
}
function muliply(n1, n2) {
	return n1 * n2;
}
function divide(n1, n2) {
	if (n2 == 0) {
		throw new Error("Attempt to divide by zero");
	}
	return n1 / n2;
}

// End of Basic Calculator API

//REST Calculator API
function calcServer(port, isStartedCb) {
	const app = express();
	app.get("/api/calc/add/:n1/:n2", (req, res) => {
		n1 = Number(req.params.n1);
		n2 = Number(req.params.n2);
		res.send(add(n1, n2).toString());
	});
	let server = http.createServer(app);
	setTimeout(() => {
		server.listen(port, () => {
			isStartedCb(server);
		});
	}, 1100);
}
// End of REST Calculator API

module.exports = {
	add,
	subtract,
	muliply,
	divide,
	calcServer
};
