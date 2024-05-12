const express = require('express');
const User = require('../model/Model.js');
const upload = require('../middleware/Middleware.js');
const router = express.Router();

router.post('/sign', upload.single('profileImage'), async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            profileImage: req.file ? req.file.path : null,
        });
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

// In your Express.js backend, add a route like this
router.get('/user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;
