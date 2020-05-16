const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require('../src');

chai.use(chaiHttp);

describe('Add and delete tests', () => {
  const item = {
    string: '111',
    seconds: 1
  };

  it('create the item', async () => {
    const res = await chai.request(server).post('/').send(item);
    expect(res).to.have.status(200);
    expect(res.text).to.be.eq('ok');
  });

  it('check the item', async () => {
    const res = await chai.request(server).get('/' + item.string);
    expect(res).to.have.status(200);
    expect(res.text).to.be.eq('1');
  });
  
  it('wait 1.5 and check it has gone', async () => {
    await new Promise(rs => setTimeout(rs, 1500));
    const res = await chai.request(server).get('/' + item.string);
    expect(res).to.have.status(200);
    expect(res.text).to.be.eq('0');
  });
  
  it('check not existing item', async () => {
    const res = await chai.request(server).get('/absentItem');
    expect(res).to.have.status(200);
    expect(res.text).to.be.eq('0');
  });

  it('create the item again', async () => {
    const res = await chai.request(server).post('/').send(item);
    expect(res).to.have.status(200);
    expect(res.text).to.be.eq('ok');
  });

  it('delete the item', async () => {
    const res = await chai.request(server).delete('/' + item.string);
    expect(res).to.have.status(200);
    expect(res.text).to.be.eq('ok');
  });

  it('check the item was deleted', async () => {
    const res = await chai.request(server).get('/' + item.string);
    expect(res).to.have.status(200);
    expect(res.text).to.be.eq('0');
  });
});