import { useState, useEffect } from 'react';

const useOsDetect = () => {
  const [os, setOs] = useState({
    isMac: false,
    isWindows: false,
    isLinux: false,
  });

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setOs({
      isMac: userAgent.indexOf('mac') !== -1,
      isWindows: userAgent.indexOf('win') !== -1,
      isLinux: userAgent.indexOf('linux') !== -1,
    });
  }, []);

  return os;
};

export default useOsDetect;