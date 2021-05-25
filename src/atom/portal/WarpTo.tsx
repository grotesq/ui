import React, { useEffect } from 'react';

import { useWarpTo } from './PortalProvider';

type WarpToProps = {
  name: string;
  children: React.ReactNode;
};
export const WarpTo = ({
  name,
  children,
}: WarpToProps) => {
  useWarpTo(name, children);

  return (
    <></>
  );
};
