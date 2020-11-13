require('dotenv').config()
const { cloudinary } = require('./utils/cloudinaryApi');
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("public/build"));
}

app.use(routes);


app.listen(PORT, function () {
    console.log(`🌎 NOW listening on http://localhost.com/${PORT} !`);
});

app.post('/api/upload', async (req, res) => {
    try {
        const imageStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(imageStr, {
            upload_preset: 'dev_setups',
        });
        console.log(uploadResponse);
        res.json({ msg: 'Excellent' });
    } catch (err) {
        console.error(err);
        res.status.json({ err: 'Something went wrong' });
    }
});
