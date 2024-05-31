import React, { useState } from 'react';
import './Menu.css';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();

  const [isOpened, setIsOpened] = useState(false);

  return (
      <div className={isOpened ? 'menu-container open' : 'menu-container'}>
          <div className="menu-line" onClick={() => setIsOpened(!isOpened)}>
              <svg viewBox="0 0 40 40" className="menu-svg menu-item-icon">
                  <line
                      className="line1"
                      x1="8"
                      y1="20"
                      x2="32"
                      y2="20"
                      stroke="black"
                  />
                  <line
                      className="line2"
                      x1="8"
                      y1="20"
                      x2="32"
                      y2="20"
                      stroke="black"
                  />
              </svg>
              <div className="menu-item-text">
                  <span className="menu-item-text">Bezárás</span>
              </div>
          </div>

          <div
              className="menu-line"
              onClick={() => {navigate('/reserve', {replace: true});setIsOpened(false);}}
          >
              <img className="menu-item-icon" src="/menu/chair-icon.svg" alt=""/>
              <div className="menu-item-text">
                  <span>Helyfoglalás</span>
              </div>
          </div>

          <div
              className="menu-line"
              onClick={() => {navigate('/waiter', {replace: true});setIsOpened(false);}}
          >
              <img
                  style={{
                      padding: '0.5rem',
                      paddingTop: '0.2rem',
                      paddingBottom: '0.8rem',
                  }}
                  className="menu-item-icon"
                  src="/menu/pincer-icon.svg"
                  alt=""
              />
              <div className="menu-item-text">
                  <span>Pincér</span>
              </div>
          </div>

          <div
              className="menu-line"
              onClick={() => {
                  navigate('/', {replace: true});
                  setIsOpened(false);
              }}
          >
              <img
                  style={{padding: '0.25rem'}}
                  className="menu-item-icon"
                  src="/menu/home-icon.svg"
                  alt=""
              />
              <div className="menu-item-text">
                  <span>Ajánlatok</span>
              </div>
          </div>

          <div
              className="menu-line"
              onClick={() => {
                  navigate('/foods', {replace: true});
                  setIsOpened(false);
              }}
          >
              <img
                  style={{padding: '0.1rem'}}
                  className="menu-item-icon"
                  src="/menu/etlap-icon.svg"
                  alt=""
              />
              <div className="menu-item-text">
                  <span>Étlap</span>
              </div>
          </div>

          <div
              className="menu-line"
              onClick={() => {navigate('/order', {replace: true});setIsOpened(false);}}
          >
              <img
                  style={{padding: '0.25rem'}}
                  className="menu-item-icon"
                  src="/menu/shopping-basket-icon.svg"
                  alt=""
              />
              <div className="menu-item-text">
                  <span>Kosár</span>
              </div>
          </div>

          <div
              className="menu-line"
              onClick={() => {navigate('/payment', {replace: true});setIsOpened(false);}}
          >
              <img
                  style={{padding: '0.25rem'}}
                  className="menu-item-icon"
                  src="/menu/fizetes-icon.svg"
                  alt=""
              />
              <div className="menu-item-text">
                  <span>Fizetés</span>
              </div>
          </div>

          <div
              className="menu-line"
              onClick={() => {navigate('/about-us', {replace: true});setIsOpened(false);}}
          >
              <img
                  style={{padding: '0.5rem'}}
                  className="menu-item-icon"
                  src="/menu/information-icon.svg"
                  alt=""
              />
              <div className="menu-item-text">
                  <span>Rólunk</span>
              </div>
          </div>
      </div>
  );
}

export default Menu;
