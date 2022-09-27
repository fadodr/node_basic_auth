const bcrypt = require('bcryptjs');

const hashData = async (data) => {
    return bcrypt.hash(data, 12);
}

const compareData = async (firstData, secondData) => {
    return bcrypt.compareSync(firstData, secondData);
}

module.exports = {
    hashData,
    compareData
};