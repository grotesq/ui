import React, { useContext, useState } from 'react';

const TopmostContext = React.createContext({});

interface ITopmost {
  show(component: any, name?: string): string;
  dismiss(id: string): void;
};

export const useTopmost = (): ITopmost => {
  const context = useContext(TopmostContext) as ITopmost;
  return context;
};

export const TopmostProvider = ({
  children,
}: any) => {
  const [components, setComponents] = useState<any[]>([]);

  const methods = {
    show: (component: any, name?: string) => {
      const id = `${Date.now()}_${Math.random()}`;

      if (!!name && components.some(x => x.name === name))
        return;

      setComponents(components => [...components, {
        id,
        name,
        Component: component,
      }]);
      return id;
    },
    dismiss: (id: string) => {
      setComponents(components => components.filter(({ id: _id }) => _id !== id));
    },
  };

  return (
    <TopmostContext.Provider
      value={methods}
    >
      {children}
      {components.map(({ id, Component }) => (
        <React.Fragment key={id}>
          {React.cloneElement(Component, { id })}
        </React.Fragment>
      ))}
    </TopmostContext.Provider>
  );
};
