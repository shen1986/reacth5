import herolist from './herolist.json';

export default {
    'POST /api/herodetails.json': (req, res) => {
        const { ename } = req.body;
        console.log('ename',ename)
        const hero = herolist.filter(item => item.ename === parseInt(ename, 10))[0];
        res.send(hero);
      },
};
