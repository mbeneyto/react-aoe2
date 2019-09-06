import React, { useState } from 'react';
import { DetailContext } from '../../utils';

const Main = ({ children }) => {
  const [detail, setDetail] = useState(null);

  return (
    <main className="main">
      <DetailContext.Provider value={{ detail, onSelectDetail: setDetail }}>{children}</DetailContext.Provider>
    </main>
  );
};

export default Main;
