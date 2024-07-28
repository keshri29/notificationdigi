import { useEffect } from 'react';

const Bell = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      send().catch(err => console.error(err));
    }
  }, []);

  async function send() {
    const register = await navigator.serviceWorker.register('/sw.js', {
      scope: '/'
    });

    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array('BA12GJqiDSm9FkvfYq4RMOmKR5nKgw1hvrecYSKDqECgqLaeZKQ6_b2tTZHhTlcw1') 
    });

    await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  const handleNotificationClick = async () => {
    const register = await navigator.serviceWorker.ready;
    const subscription = await register.pushManager.getSubscription();
    if (subscription) {
      await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1b0128] py-10 px-4">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl mb-8">Hola!</h1>
      <div className="relative">
        <div className="w-[60vw] h-[60vw] max-w-[344px] max-h-[344px] rounded-full flex justify-center items-center bg-gradient-to-b from-[#1b0128] to-[#1b0128]">
          <div className="w-[80%] h-[80%] max-w-[278px] max-h-[278px] rounded-full flex justify-center items-center bg-[#2e043e]">
            <div className="w-[80%] h-[80%] max-w-[222px] max-h-[222px] rounded-full flex justify-center items-center bg-[#3d0651]">
              <div className="w-[72%] h-[72%] max-w-[160px] max-h-[160px] rounded-full flex justify-center items-center bg-[#4d0770]">
                <div className="w-[60%] h-[60%] max-w-[100px] max-h-[100px] rounded-full bg-[#693eaf] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">Lorem Ipsum...</h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg">Lorem ipsum dolor sit amet.</p>
      </div>
      <button className="mt-8 px-6 py-3 bg-[#340565] text-white font-semibold rounded-full hover:bg-[#5e1d9a] transition duration-200" onClick={handleNotificationClick}>
        Send Notification
      </button>
    </div>
  );
};

export default Bell;
