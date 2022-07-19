const { EventEmitter } = require("events");

const birthdayEventListener = (name, umur) => {
   console.log(`Happy birthday ${umur}, ${name}!`);
};

// TODO 2
const myEmitter = new EventEmitter();

// TODO 3
myEmitter.on("birthday", birthdayEventListener);

// TODO 4
myEmitter.emit("birthday", "Hannan", 20);
