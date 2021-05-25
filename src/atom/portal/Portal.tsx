import React from 'react';

import { usePortal } from './PortalProvider';

type PortalProps = {
  name: string;
};
export const Portal = ({
  name,
}: PortalProps) => {
  const portal = usePortal(name);

  return (
    <>
      {portal.children.map((Component: any) => (
        Component
      ))}
    </>
  );
};
