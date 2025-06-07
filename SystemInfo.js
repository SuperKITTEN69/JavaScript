const os = require("os");

console.log("🖥️  SYSTEM STATS\n");
console.log(`Hostname: ${os.hostname()}`);
console.log(`OS: ${os.type()} ${os.release()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU: ${os.cpus()[0].model}`);
console.log(`Cores: ${os.cpus().length}`);
console.log(`RAM: ${(os.totalmem() / 1024 ** 3).toFixed(2)} GB`);
console.log(`Free: ${(os.freemem() / 1024 ** 3).toFixed(2)} GB`);
console.log(`Platform: ${os.platform()}`);
console.log(`Uptime: ${(os.uptime() / 60).toFixed(1)} minutes`);

console.log("Made by @SuperKITTEN69 on github!\n");