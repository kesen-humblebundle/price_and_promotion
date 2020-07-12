import axios from 'axios';
import PriceAndPromo from '../database/index.js';
const db = require('../database/index.js');

jest.mock('axios');

test('should fetch games', () => {

  const game = [
    {
      product_id: 105,
      price: '$82.00',
      discount: '$10.00',
      start: '2020-06-19T14:19:42.436Z',
      expiry: '2020-07-14T14:19:42.436Z',
      _id: '5ef265f1d555ge1295e9cedd'
    }
  ];

  const resp = { data: game };
  axios.get.mockResolvedValue(resp);

  return db.all().then(data => expect(data).toEqual(game));

  // jest.spyOn(PriceAndPromo, 'findOne').mockReturnValue(Promise.resolve({ /* */}))
});