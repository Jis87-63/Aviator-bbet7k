// Arquivo: api/bet7k-proxy.js
export default async function handler(req, res) {
  try {
    const response = await fetch('https://bet7k-aviator-api.p.rapidapi.com/bet7k-aviator-latest', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'bet7k-aviator-api.p.rapidapi.com',
        'x-rapidapi-key': '196a0da12fmsh05ff987d1a68a65p102067jsn745e7185350b'
      }
    });

    if (!response.ok) {
      return res.status(500).json({ error: 'Erro na API Bet7K' });
    }

    const data = await response.json();
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
    res.status(200).json(data);

  } catch (error) {
    console.error('Erro no proxy:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
