// pages/api/subscribe.js
import webpush from 'web-push';

const publicVapidKey = 'BA12GJqiDSm9FkvfYq4RMOmKR5nKgw1hvrecYSKDqECgqLaeZKQ6_b2tTZHhTlcw1-da76D6DlviD9VEnKvonds';
const privateVapidKey = 'wWnjIEjy_D4lHAb5QLvQhULGxCSAlv2JeWh7FLJAzAI';

webpush.setVapidDetails(
  'mailto:anuragkeshri902@gmail.com', 
  publicVapidKey,
  privateVapidKey
);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === 'POST') {
    const subscription = req.body;

    const payload = JSON.stringify({
      title: 'Push Notification',
      body: 'You have a new notification from Anurag Kumar',
    });

    try {
      await webpush.sendNotification(subscription, payload);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
