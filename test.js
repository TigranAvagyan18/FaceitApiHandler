const Faceit = require('./index');
const faceit = new Faceit('80d1af7f-cb8c-446c-97a6-254e0b8cfa8b');
const run = async () => {
  // let data = { type: { name: 'hubs' }}
  // const resp = await faceit.getPlayerStats('T777A', data);
  // console.log(resp);
  const id = await faceit.getId('T777A');
  console.log(id);
  //   const history = await faceit.getPlayerStatsHistory(id,'csgo');
  //   console.log(history)
  const hubs = await faceit.getPlayerStatsHubs(id);
  console.log(hubs)
}
run();