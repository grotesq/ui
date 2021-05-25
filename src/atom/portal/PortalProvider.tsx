import React, { useContext, useEffect, useState } from 'react';

const PortalContext = React.createContext({} as any);

type IPortalContext = {
  portals: Record<string, PortalData>;
  addChild: (x: string, child: React.ReactNode) => void;
  removeChild: (x: string, child: React.ReactNode) => void;
};
type PortalData = {
  children: React.ReactNode[];
};

export const usePortal = (name: string): PortalData => {
  const portals = useContext<IPortalContext>(PortalContext);
  return portals.portals[name] || {
    children: [],
  };
};
export const useWarpTo = (name: string, children: React.ReactNode) => {
  const portals = useContext<IPortalContext>(PortalContext);

  useEffect(() => {
    portals.addChild(name, children);
    return () => {
      portals.removeChild(name, children);
    };
  }, [children]);
};

type PortalProviderProps = {
  children: React.ReactNode;
};
export const PortalProvider = ({
  children,
}: PortalProviderProps) => {
  const [portals, setPortals] = useState<Record<string, PortalData>>({});

  return (
    <PortalContext.Provider
      value={{
        portals,
        addChild: (name: string, children: React.ReactNode) => {
          if (!portals[name])
            portals[name] = { children: [] };
          portals[name].children = [...portals[name].children, children];
          setPortals({ ...portals });
        },
        removeChild: (name: string, children: React.ReactNode) => {
          if (!portals[name]) return;
          portals[name].children = portals[name].children.filter(x => x !== children);
          setPortals({ ...portals });
        },
      }}
    >
      {children}
    </PortalContext.Provider>
  );
};
