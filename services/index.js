const axios = require('axios');
const { baseUrl } = require('../config');

const instance = axios.create({
  baseURL: baseUrl,
});

const generic = {
  slip: {
    id: 133,
    advice:
      'If you find yourself distressed about something, ask yourself if it will still matter tomorrow or next week or next month.',
  },
};

async function getAdvice() {
  try {
    const { data } = await instance.get('/advice');
    return data ? data : generic;
  } catch (err) {
    console.error(`Error occured: ${err}`);
    return generic;
  }
}

module.exports = {
  getAdvice,
};
