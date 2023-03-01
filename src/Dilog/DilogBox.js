import React, { useState } from 'react';
import style from './Dilog.module.css';
import { FaShoppingCart } from 'react-icons/fa';
export default function DilogBox({setShow ,show}) {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [fillId, setFillId] = useState('');
  const [orderID, setOrderID] = useState('');
  const [mobile, setMobile] = useState('');
  const [orderDetails, setOrderDetails] = useState('');
  const [address, setAddress] = useState('');
  const orderDetailsLocal = JSON.parse(localStorage.getItem('orderDetails'));

  const trackYourOrder = [
    // Track Your Order...
    {
      id: 0,
      elem: (
        <p
          onClick={() => {
            setIndex(index + 1);
            setShow2(false);
          }}
        >
          Track Your Order{' '}
        </p>
      ),
    },
    {
      id: 1,
      elem: (
        <input
          type="number"
          value={fillId}
          className={style.input}
          placeholder="Enter order id"
          onChange={(e) => setFillId(e.target.value)}
        />
      ),
      btn: <button onClick={handleFunction}>Submit</button>,
    },
    {
      id: 2,
      elem: <p>Your order is still pending...</p>,
    },
    {
      id: 3,
      elem: <p onClick={()=>setShow(false)}>Place ur order first...</p>,
    },
   
  ];

  const placeOrder = [
    {
      id: 0,
      elem: (
        <p
          onClick={() => {
            setIndex1(index1 + 1);
            setShow1(false);
          }}
        >
          Place Your Order{' '}
        </p>
      ),
    },

    {
      id: 1,
      text: 'Enter Your Mobile Number',
      elem: (
        <input
          type="text"
          className={style.input}
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      ),
      btn: <button onClick={() => setIndex1(index1 + 1)}>Next</button>,
    },
    {
      id: 2,
      text: 'Order details...',
      elem: (
        <input
          type="text"
          value={orderDetails}
          className={style.input}
          placeholder="order details"
          onChange={(e) => setOrderDetails(e.target.value)}
        />
      ),
      btn: <button onClick={() => setIndex1(index1 + 1)}>Next</button>,
    },
    {
      id: 3,
      text: 'Delivery address',
      elem: (
        <input
          value={address}
          type="text"
          className={style.input}
          placeholder="delivery addres"
          onChange={(e) => setAddress(e.target.value)}
        />
      ),
      btn: (
        <button
          onClick={() => {
            setIndex1(index1 + 1);
            setOrderID(Math.floor(Math.random() * 1000));
          }}
        >
          Sure To order
        </button>
      ),
    },
    {
      id: 4,
      text: 'Your Order ID',
      elem: <h3>{orderID}</h3>,

      btn: <button onClick={handleSubmit}>Submit</button>,
    },
  ];
  function handleFunction(){
  
    if(fillId == orderDetailsLocal?.orderID ){
      setIndex(index + 1)
    }else{
      setIndex(index + 2)
    }
  }
  function handleSubmit() {
    const orderDetailsInfo = {
      mobile,
      orderDetails,
      address,
      orderID,
    };
    localStorage.setItem('orderDetails', JSON.stringify(orderDetailsInfo));
    setShow(false)
  }

  
  return (
    <div className={style.main}>
      <div className={style.head}>
        <FaShoppingCart className={style.icon} />
        <h4>Ask Your Doubts / Queries...</h4>
      </div>
      <div className={style.option}>

        <div className={style.optionIn}>

          {show1 ? (
            <>
              <div>{trackYourOrder[index].elem}</div>
              <div>{trackYourOrder[index]?.btn}</div>
            </>
          ) : (
            ''
          )}

          {show2 ? (
            <>
              <div>{placeOrder[index1].text}</div>
              <div>{placeOrder[index1]?.elem}</div>
              <div>{placeOrder[index1]?.btn}</div>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

