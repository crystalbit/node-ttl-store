const numCPUs = require('os').cpus().length;

module.exports = cluster => {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
    console.log(`worker #${i} has started`);
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
}