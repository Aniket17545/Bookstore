const User = require("../model/user.model");

// API To Get All Users
exports.getAllUser = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

// API To Get UserByID
exports.getUserById = async (req, res) => {
    try{
        const user = await User.findById({_id: req.params.id});
        console.log(user);
        res.json(user);
    }
    catch(err){
        return res.status(404).send('User Does Not Exist With Given User ID')
    }
}

// API To Delete User
exports.deleteUser = (req, res) => {
    User.findOneAndRemove({
        _id: req.params.id
    }).then((user) => {
        res.send(user);
    });
}

// API TO Update User
exports.updateUser = (req, res) => {
    User.findOneAndUpdate(
        {_id: req.params.id},
        {
            $set:{
                username: req.body.username,
                email: req.body.email
            }
        }
    ).then(() => {
        res.send({ message: "updated successfully" });
      })
}