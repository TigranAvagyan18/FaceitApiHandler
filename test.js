const Faceit = require('./index');
const faceit = new Faceit('80d1af7f-cb8c-446c-97a6-254e0b8cfa8b');
const run = async () => {
  const resp = await faceit.getPlayerStats('T777A');
  console.log(resp);
}
run();