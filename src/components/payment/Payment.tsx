import React, { useState } from 'react';
import './Payment.css';
import StarRating from '../starRating/StarRating';
import { FaRegCreditCard } from 'react-icons/fa6';
import { BsCash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

type PaymentMethod = 'keszpenz' | 'kartya' | 'szepkartya' | 'paypal';

function Payment() {
  const navigate = useNavigate();
  // Example products data
  const products = [
    { id: 1, name: 'Pizza Margherita', amount: 1, price: '2690' },
    { id: 2, name: 'Coke', amount: 2, price: '900' },
    { id: 3, name: 'Vegan Burger', amount: 1, price: '3200' },
    { id: 4, name: 'Spaghetti Carbonara', amount: 1, price: '2850' },
    { id: 5, name: 'Iced Tea', amount: 3, price: '450' },
    { id: 6, name: 'Cheese Platter', amount: 1, price: '2200' },
    { id: 7, name: 'French Fries', amount: 2, price: '650' },
    { id: 8, name: 'Chocolate Cake', amount: 1, price: '1500' },
    { id: 9, name: 'Espresso', amount: 2, price: '300' },
    { id: 10, name: 'Caesar Salad', amount: 1, price: '1900' },
    { id: 11, name: 'Grilled Chicken', amount: 1, price: '3500' },
    { id: 12, name: 'Mineral Water', amount: 4, price: '200' },
    { id: 13, name: 'Tomato Soup', amount: 1, price: '1100' },
    { id: 14, name: 'Garlic Bread', amount: 3, price: '500' },
    { id: 15, name: 'Tiramisu', amount: 1, price: '1600' },
    { id: 16, name: 'Lemonade', amount: 2, price: '750' },
    { id: 17, name: 'Pasta Bolognese', amount: 1, price: '2750' },
    { id: 18, name: 'Beef Steak', amount: 1, price: '4900' },
    { id: 19, name: 'Apple Pie', amount: 1, price: '1300' },
    { id: 20, name: 'Mojito', amount: 2, price: '1200' },
  ];

  const [tipPercentage, setTipPercentage] = useState(0);

  const totalPrice = products.reduce(
    (acc, product) => acc + parseInt(product.price),
    0
  );
  const serviceFee = totalPrice * 0.1;
  const totalTip = totalPrice * (tipPercentage / 100);
  const totalPayable = totalPrice + serviceFee + totalTip;

  // Generating percentage options from 0% to 100% in 5% steps
  const percentageOptions = [];
  for (let i = 0; i <= 20; i++) {
    percentageOptions.push(
      <option key={i} value={i * 5}>
        {i * 5}%
      </option>
    );
  }

  const [paymentType, setPaymentType] = useState('online');

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod | null>(null);

  const handlePaymentMethodSelect = (method: PaymentMethod) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div className="payment-container">
      <div className="header">
        <div className="title">Rendelésösszesítő</div>
        <div className="subtitle">Kérjük értékelje rendelését!</div>
      </div>

      <div className="products-list-header">
        <div className="product-header">
          <div className="product-column"></div>
          <div className="product-column"></div>
          <div className="product-column"></div>
          <div className="product-column">Értékelés</div>
        </div>
      </div>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-row">
            <div className="product-column">{product.name}</div>
            <div className="product-column">{product.amount} db</div>
            <div className="product-column">{product.price} Ft</div>
            <div className="product-column">
              <img
                className="rate-button"
                src={'/common/star-outline.svg'}
                alt="Rate"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="service-fee-container">
        <div className="product-row service-fee-row">
          <div className="product-column">Szervízdíj</div>
          <div className="product-column">10%</div>
          <div className="product-column">{serviceFee} Ft</div>
          <div className="product-column"></div>
        </div>
        <div className="horizontal-divider"></div>

        <div className="product-row tip-row">
          <div className="product-column">Borravaló</div>
          <div className="product-column">
            <select
              value={tipPercentage}
              onChange={(e) => setTipPercentage(Number(e.target.value))}
            >
              {percentageOptions}
            </select>
          </div>
          <div className="product-column" style={{ whiteSpace: 'nowrap' }}>
            {totalTip.toFixed(0)} Ft
          </div>
          <div className="product-column"></div>
        </div>

        <div className="product-row total-price-row">
          <div className="product-column">Fizetendő</div>
          <div className="product-column"></div>
          <div className="product-column" style={{ whiteSpace: 'nowrap' }}>
            {totalPayable.toFixed(0)} Ft
          </div>
          <div className="product-column"></div>
        </div>
      </div>
      <div className="header">
        <div className="subtitle">
          Mennyire volt elégedett a kapott szolgáltatással?
        </div>
      </div>
      <div className="rating-container">
        <StarRating totalStars={5} />
      </div>

      <div className="payment-methods-container">
        <div
          className={`payment-method ${
            selectedPaymentMethod === 'keszpenz' ? 'selected' : ''
          }`}
          onClick={() => handlePaymentMethodSelect('keszpenz')}
          style={{ display: 'grid', gridRow: 1, gridColumn: 1 }}
        >
          {/* <img
            style={{ padding: '0.25rem' }}
            className="menu-item-icon"
            src="/menu/fizetes-icon.svg"
            alt=""
          /> */}

          <BsCash size={24} />
          <p>Készpénz</p>
        </div>
        <div
          className={`payment-method ${
            selectedPaymentMethod === 'kartya' ? 'selected' : ''
          }`}
          onClick={() => handlePaymentMethodSelect('kartya')}
          style={{ display: 'grid', gridRow: 1, gridColumn: 2 }}
        >
          <FaRegCreditCard size={24} />
          <p>Kártya</p>
        </div>

        <div
          className={`payment-method ${
            selectedPaymentMethod === 'szepkartya' ? 'selected' : ''
          }`}
          onClick={() => handlePaymentMethodSelect('szepkartya')}
          style={{
            display: 'grid',
            gridRow: 2,
            gridColumn: 1,
          }}
        >
          <FaRegCreditCard size={24} />
          <p>Szépkártya</p>
        </div>
        <div
          className={`payment-method ${
            selectedPaymentMethod === 'paypal' ? 'selected' : ''
          }`}
          onClick={() => handlePaymentMethodSelect('paypal')}
          style={{ display: 'grid', gridRow: 2, gridColumn: 2 }}
        >
          <FaRegCreditCard size={24} />
          {/* Placeholder for another payment method icon */}
          <p>PayPal</p>
        </div>

        <div
          className="payment-options"
          style={{ display: 'grid', gridRow: 1, gridColumn: 3 }}
        >
          <label>
            <input
              type="radio"
              value="online"
              checked={paymentType === 'online'}
              onChange={() => setPaymentType('online')}
            />
            Online
          </label>
          <label>
            <input
              type="radio"
              value="személyesen"
              checked={paymentType === 'személyesen'}
              onChange={() => setPaymentType('személyesen')}
            />
            Személyesen
          </label>
        </div>

        <div
          className="payment-action"
          style={{ display: 'grid', gridRow: 2, gridColumn: 3 }}
        >
          <button
              className="filled-button filled-button-dark"
              style={{fontSize:"1rem"}}
            onClick={() => navigate('/payment/success', { replace: true })}
          >
            Fizetés
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
