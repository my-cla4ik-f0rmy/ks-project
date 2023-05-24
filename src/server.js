const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/api/callback', async (req, res) => {
  const code = req.query.code;
  try {
    const tokenResponse = await axios.post('https://oauth.yandex.com/token', null, {
      params: {
        code,
        client_id: 'YOUR_YANDEX_CLIENT_ID',
        client_secret: 'YOUR_YANDEX_CLIENT_SECRET',
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:3000/api/callback'
      }
    });

    const userInfoResponse = await axios.get('https://login.yandex.ru/info', {
      headers: {
        Authorization: `Bearer ${tokenResponse.data.access_token}`
      }
    });

    const { display_name, default_email } = userInfoResponse.data;

    res.send(`
      <script>
        localStorage.setItem('accessToken', '${tokenResponse.data.access_token}');
        localStorage.setItem('username', '${display_name || default_email}');
        window.location.href = '/';
      </script>
    `);
  } catch (error) {
    console.error(error);
    res.send('Авторизация не удалась');
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
