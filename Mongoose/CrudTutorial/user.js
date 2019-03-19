const mongoose = require("mongoose");

mongoose
	.connect(
		"mongodb+srv://Nikolaj:d7azxs37DjoWCbYG@gettingstarted-sfqb4.mongodb.net/test?retryWrites=true",
		{ useNewUrlParser: true, useCreateIndex: true }
	)
	.then(con => console.log("Connected to Mongo"))
	.catch(err => console.log("UPPS:" + err));

setTimeout(() => {
	mongoose.disconnect(() => console.log("Disconnected"));
}, 3000);

let userSchema = new mongoose.Schema({
	userName: String,
	email: { type: String, unique: true },
	modified: { type: Date, default: Date.now }
});

let User = mongoose.model("User", userSchema);

async function addUser(userName, email) {
	let user = new User({ userName, email });
	await user.save();
}

async function testAddUser() {
	try {
		await User.deleteMany({});
		await addUser("aaaa", "a@b.dk");
		await addUser("bbbb", "b@b.dk");
		await addUser("cccc", "c@b.dk");
		await addUser("dddd", "d@b.dk");
		await addUser("Kurt Wonnegut", "kw@b.dk");
		await addUser("Hanne Wonnegut", "hw@b.dk");
		await addUser("ib Wonnegut", "iw@b.dk");
		console.log("Users added");
	} catch (err) {
		console.log("ERROR in addUser: " + err);
	}
}

async function findUser(fields, projection, limit, sortDirection) {
	return await User.find(fields, projection)
		.sort({ userName: sortDirection })
		.collation({ locale: "da" })
		.limit(limit);
}

async function testFindUser(limit, sortDirection) {
	let users = await findUser(
		{ userName: /Wonnegut/i },
		{ userName: 1, _id: 0 },
		limit,
		sortDirection
	);
	console.log(users);
}

async function editUser(userToEdit, change) {
	let user = await User.findOneAndUpdate(userToEdit, change, { new: true });
	console.log(user);
}

async function deleteUser(userToDelete) {
	await User.findOneAndDelete(userToDelete);
	let user = await User.findOne(userToDelete);
	console.log("Status: " + (user === null));
}

async function testFunctions() {
	await testAddUser();
	await testFindUser(5, 1);
	await editUser({ userName: "aaaa" }, { email: "asfedenyeemail@gmail.com" });
	await deleteUser({ userName: "aaaa" });
}

testFunctions();
