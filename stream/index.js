const fs = require("fs");
const path = require("path");

const fileee = path.resolve(__dirname, "input.txt");

const readableStream = fs.createReadStream(fileee, {
   highWaterMark: 15,
});

const writableStream = fs.createWriteStream("./stream/output.txt");
const ttt = readableStream.on("readable", () => {
   try {
      writableStream.write(`${readableStream.read()}\n`);
   } catch (error) {
      //   console.log(error);
   }
});

readableStream.on("end", () => {
   writableStream.end();
});
