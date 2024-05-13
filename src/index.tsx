import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Frame from './components/frame/Frame';
import Offers from './components/offers/Offers';
import Payment from './components/payment/Payment';
import Success from './components/payment/Success';
import Foods from './components/foods/Foods';
import Order from './components/order/Order';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Reserve from './components/reserve/Reserve';
import Waiter from './components/waiter/Waiter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '',
    element: <Frame />,
    children: [
      {
        path: '',
        element: <Offers />,
      },
      {
        path: 'foods',
        element: <Foods />,
      },
      {
        path: 'order',
        element: <Order />,
      },
      {
        path: 'payment',

        children: [
          { index: true, element: <Payment /> },
          {
            path: 'success',
            element: <Success />,
          },
        ],
      },
      {
        path: 'reserve',
        element: <Reserve />,
      },
      {
        path: 'waiter',
        element: <Waiter />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
