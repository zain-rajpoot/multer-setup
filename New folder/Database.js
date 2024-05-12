const mongoose = require("mongoose")
mongoose.Promise = global.Promise;
async function Database() {
    try {
        await mongoose.connect(
            `mongodb://127.0.0.1:27017/multer`,
            console.log("MongoDB Connection Succeeded.")
        );
    } catch (error) {
        console.log(error);
    }
}
module.exports = Database;

