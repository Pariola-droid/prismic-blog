import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const useCurrencyFormatter = () => {
  const router = useRouter();
  const { locale } = router;
  const [currencyCode, setCurrencyCode] = useState({
    currency: 'USD',
    country: 'en-US',
  });

  useEffect(() => {
    if (locale === 'en-US') {
      setCurrencyCode({
        currency: 'USD',
        country: 'en-US',
      });
    } else if (locale === 'ng') {
      setCurrencyCode({
        currency: 'NGN',
        country: 'en-NG',
      });
    } else if (locale === 'gh') {
      setCurrencyCode({
        currency: 'GHS',
        country: 'en-GH',
      });
    } else {
      setCurrencyCode({
        currency: 'USD',
        country: 'en-US',
      });
    }
  }, [locale, router]);

  const formatCurrency = (amount) => {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount)) {
      return 'Invalid Amount';
    }

    const formattedAmount = numericAmount.toLocaleString(
      currencyCode.country || 'en-US',
      {
        style: 'currency',
        currency: currencyCode.currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }
    );

    return formattedAmount;
  };

  return { formatCurrency };
};

export default useCurrencyFormatter;
