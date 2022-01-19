const express = require("express");
const app = express();
const FCM = require("fcm-node");
var serverKey = require("./privatekey.json");
var fcm = new FCM(serverKey);
const port = 3000;
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

app.post("/token", (req, res) => {
  console.log("Send: ");

  var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: 'coyJVpKPSTmlf-crcxoVg6:APA91bE7yNjGpjLrJSRgwWd7GXv7z5Qzgd1WH7SQ8KPvUBWn3GQJQPB-2usfOHMkSEL8PbY9BAB0i3D-R9XbN2g77hO8tfkIPm7_RLbs5Gl8rm2NgQ6NXXasLAzJ9NtXMRFxOLLv7-cD', 
    collapse_key: 'Updates Available',
    
    notification: {
        title: 'Title of your push notification', 
        body: 'Body of your push notification' 
    },
}



fcm.send(message, function(err, response){
    if (err) {
        console.log("Something has gone wrong!")
    } else {
        console.log("Successfully sent with response: ", response)
    }
})
});
