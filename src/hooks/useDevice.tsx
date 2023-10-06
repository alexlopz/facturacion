// import { constants } from '@/util/constants';
import { useEffect, useState } from 'react';

// Utilities
import { constants } from '../utilities/constants';
import { match } from '../utilities/general';

const useDevice = (): string => {
  const [device, setDevice] = useState('');

  const handlerRender = () => {
    match(window.innerWidth)
      .on(
        (ctx: any) => ctx < constants.deviceSize.tablet,
        () => setDevice(constants.deviceType.mobile)
      )
      .on(
        (ctx: any) => ctx > constants.deviceSize.desktop,
        () => setDevice(constants.deviceType.desktop)
      )
      .otherwise(() => setDevice(constants.deviceType.tablet));
  };

  useEffect(() => {
    if (window && typeof window !== undefined) {
      handlerRender();
      window.addEventListener('resize', handlerRender);
      return () => {
        window.removeEventListener('resize', handlerRender);
      };
    }
  }, []);

  return device;
};

export default useDevice;
