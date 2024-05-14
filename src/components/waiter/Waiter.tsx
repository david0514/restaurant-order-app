import React, { useState, useEffect } from 'react';
import './Waiter.css';

interface TableInfo {
  tableNumber: number;
  reservedBy: string;
  waiterName: string;
}

const Waiter: React.FC = () => {
  const [tableInfo, setTableInfo] = useState<TableInfo>({
    tableNumber: 10,
    reservedBy: 'Teszt Elek',
    waiterName: 'Pincér János',
  });
  const [calling, setCalling] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const callWaiter = () => {
    setCalling(true);
    setCountdown(60);

    setTimeout(() => {
      setCalling(false);
    }, 2000);
  };

  const cancelCall = () => {
    setCalling(false);
    setCountdown(null);
  };

  useEffect(() => {
    if (countdown !== null) {
      if (countdown > 0) {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setCountdown(null);
      }
    }
  }, [countdown]);

  return (
    <div className="waiter-container">
      <h2>Asztal Információ</h2>
      <p>
        <strong>Asztal Száma:</strong> {tableInfo.tableNumber}
      </p>
      <p>
        <strong>Foglaló:</strong> {tableInfo.reservedBy}
      </p>
      <p>
        <strong>Pincér:</strong> {tableInfo.waiterName}
      </p>
      <div className="button-container">
        {!calling && countdown === null && (
          <button className="call-button" onClick={callWaiter}>
            Pincér hívása
          </button>
        )}
        {calling && <div className="spinner">Hívás...</div>}
        {countdown !== null && (
          <div className="countdown-container">
            <p>A pincér {countdown} másodpercen belül érkezik.</p>
            <button className="cancel-button" onClick={cancelCall}>
              Mégse
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Waiter;
