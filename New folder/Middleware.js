const multer = require('multer');

// Set up Multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    // Use UUID too
    filename: function (req, file cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
// Set up Multer middleware
const upload = multer({ storage: storage });

module.exports = upload;
