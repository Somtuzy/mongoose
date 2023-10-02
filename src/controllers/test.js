const { User, Admin, Staff } = require('../models/users/index.user.model')

const test = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        console.log(newUser);
        const newAdmin = await Admin.create(req.body)
        console.log(newAdmin);
        const newStaff = await Staff.create(req.body)
        console.log(newStaff);

        return res.status(200).json({
            newUser,
            newAdmin,
            newCustomer
        })
    } catch (err) {
        return res.status(500).json({
            err
        })
    }
}

module.exports = test