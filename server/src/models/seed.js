import User from "./User.js";

const seed = async (req,res) => {
    const seedUser = {
        email: "test@testemail.com",
        password: "testpassword"
    };
    await User.deleteMany({});

    const users = await User.insertMany(seedUser);
    return res.json(users);
};
export default seed;