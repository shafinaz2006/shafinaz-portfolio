const addGTag = gaID => {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaID}', {send_page_view: false});`;
};

export const addAnalytics = () => {
  const root = document.head;
  const gaID = process.env.GA_ID;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaID}`;
  root.appendChild(script);

  const script2 = document.createElement('script');
  script2.text = addGTag(gaID);
  root.appendChild(script2);
};