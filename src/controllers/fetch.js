const { User, Admin, Staff } = require('../models/users/index.user.model')

const fetch = async (req, res) => {
    try {
        const foundUsers = await User.find({__t: 'Normal-User'})
        console.log(foundUsers);
        const foundAdmins = await Admin.find({__t: 'Admin'})
        console.log(foundAdmins);
        const foundStaff = await Staff.find({__t: 'Staff'})
        console.log(foundStaff);

        return res.status(200).json({
            foundUsers,
            foundStaff,
            foundAdmins
        })
    } catch (err) {
        return res.status(500).json({
            err
        })
    }
}

module.exports = fetch