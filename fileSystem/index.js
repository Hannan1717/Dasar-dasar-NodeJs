const fs = require("fs");
const path = require("path");

const fileReadCallback = (error, data) => {
   if (error) {
      console.log("Gagal membaca berkas");
      return;
   }
   console.log(data);
};

const fileee = path.resolve(__dirname, "notes.txt");
console.log(fileee);
fs.readFile(fileee, "UTF-8", fileReadCallback);
