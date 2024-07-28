const webpush = require('web-push');

const vapidKeys = webpush.generateVAPIDKeys();

console.log(vapidKeys);


// {
//     publicKey: 'BA12GJqiDSm9FkvfYq4RMOmKR5nKgw1hvrecYSKDqECgqLaeZKQ6_b2tTZHhTlcw1-da76D6DlviD9VEnKvonds',
//     privateKey: 'wWnjIEjy_D4lHAb5QLvQhULGxCSAlv2JeWh7FLJAzAI'
//   }