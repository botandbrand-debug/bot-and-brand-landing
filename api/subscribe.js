// /api/subscribe.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { email } = req.body;
  
    try {
      const mailerliteResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.MAILERLITE_API_TOKEN}`,
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          groups: ["177227062457665010"]
        })
      });
  
      const data = await mailerliteResponse.json();
      
      if (mailerliteResponse.ok) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(mailerliteResponse.status).json(data);
      }
    } catch (error) {
      console.error('MailerLite error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }