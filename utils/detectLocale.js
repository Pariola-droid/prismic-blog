// ipinfo.io to get location information based on the IP address
const ipinfoApiKey = process.env.NEXT_PUBLIC_IPINFO_API_KEY;

export async function detectLocale(req) {
  if (req) {
    let ipAddress;

    if (process.env.NODE_ENV === 'development') {
      ipAddress = '80.80'; //197.210.76.73
    } else {
      ipAddress =
        req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    }

    const ipinfoUrl = `https://ipinfo.io/${ipAddress}?token=${ipinfoApiKey}`;

    try {
      const response = await fetch(ipinfoUrl);
      if (response.ok) {
        const locationData = await response.json();

        if (locationData.country === 'US') {
          return 'en-US';
        } else if (locationData.country === 'GH') {
          return 'gh';
        } else if (locationData.country === 'NG') {
          return 'ng';
        } else {
          return 'en-US';
        }
      } else {
        return 'en-US';
      }
    } catch (error) {
      console.error('Error fetching location data:', error);
      return 'en-US';
    }
  } else {
    return 'en-US';
  }
}
