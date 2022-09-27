const User = require('../models/user');
const { compareData } = require('../utils');

module.exports = async (body) => {
    const { email, password } = body;

    let user = await User.findByEmail(email);
    if (!user || compareData(user.password, password)) {
        throw new Error('Incorrect email or password');
    };
}