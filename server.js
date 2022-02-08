function DBConnect() {
	const mysql = require("mysql2/promise");
const score = 5;

const insertIntoDB = async (name) => {
	name = "Jef";
	const connection await mysql.createConnection({
		host: "sql11.freesqldatabase.com",
		user: "sql11471062",
		password: "dUEKYR5pQu",
		database: "sql11471062",
		port: 3306,
	})

	try {
		await connection.query("INSERT INTO scores (Jef) VALUES ('Werk')"

		console.log("inserted");
	} catch (e) {
		console.log(e);
	}
}

insertIntoDB();
}