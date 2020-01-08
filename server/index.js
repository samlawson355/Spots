// const express = require("express");
// const path = require("path");
// const Axios = require("axios");
// const app = express();
// const key = require("../key.js").key;
// const port = 19006;

// // const dummyData = require("../scratch.js").default;
// app.use(express.json());

// //test with dummyData
// app.post("/test", (req, res) => {
//   console.log("hey");
//   let placeList = req.body.placeList;
//   let arrToSend = [];
//   for (let i = 0; i < placeList.length; i++) {
//     console.log(placeList);
//     arrToSend.push(
//       Axios.get(
//         `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${placeList[i]}&key=${key}`
//       )
//     );
//   }

//   Promise.all(arrToSend)
//     .then(data => res.send(data.map(item => item.data.results)))

//     .catch(console.log);
// });
// app.use(express.static(path.join(__dirname, "../public/dist")));

// app.listen(port, console.log(`Listening on port ${port}...`));
