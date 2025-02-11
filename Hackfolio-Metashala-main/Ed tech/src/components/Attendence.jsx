import React, { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    // Replace current history entry with the new URL
    window.location.replace("https://face-verification-system.vercel.app/");
  }, []);

  return null; // No UI, since it immediately redirects
};

export default RedirectPage;
