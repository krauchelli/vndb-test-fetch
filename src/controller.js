const axios = require('axios');

const searchVn = async (req, res) => {
  try {
    // eslint-disable-next-line no-use-before-define
    const data = await fetchDataLookVN({
      filters: ['search', '=', req.body.title],
      fields: 'title, image.url',
    });
    console.log(data);

    // extracting data
    const results = data.results.map((result) => {
      const { title } = result;
      const imageUrl = result.image.url;
      return { title, imageUrl };
    });

    res.status(201).render('resultvn', { results });
  } catch (e) {
    console.error('error fetching data', e);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

// function used for axios
async function fetchDataLookVN(payload) {
  try {
    const response = await axios.post('https://api.vndb.org/kana/vn', payload);
    return response.data;
  } catch (err) {
    throw new Error('Failed to fetch data from API');
  }
}

module.exports = { searchVn };
