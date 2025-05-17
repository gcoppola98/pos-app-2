import React, { useState } from 'react';

const items = [
  { id: '#22', name: 'Custom Hero', price: 0 },
  { id: '#1', name: '#1', price: 16 },
  { id: '#2', name: '#2', price: 19 },
  { id: '#3', name: '#3', price: 20 },
  { id: '#4', name: '#4', price: 13 },
  { id: '#5', name: '#5', price: 22 },
  { id: '#6', name: '#6', price: 19 },
  { id: '#7', name: '#7', price: 23 },
  { id: '#8', name: '#8', price: 18 },
  { id: '#9', name: '#9', price: 19 },
  { id: '#10', name: '#10', price: 17 },
  { id: '#11', name: '#11', price: 14 },
  { id: '#12', name: '#12', price: 22 },
  { id: '#13', name: '#13', price: 19 },
  { id: '#14', name: '#14', price: 18 },
  { id: '#15', name: '#15', price: 17 },
  { id: '#16', name: '#16', price: 17 },
  { id: '#17', name: '#17', price: 19 },
  { id: '#18', name: '#18', price: 15 },
  { id: '#19', name: '#19', price: 16 },
  { id: '#20', name: '#20', price: 16 },
  { id: '#21', name: '#21', price: 22 },
  { id: '#23', name: '#23', price: 19 },
  { id: '#24', name: '#24', price: 18 },
  { id: '#25', name: '#25', price: 25 },
  { id: '#26', name: '#26', price: 21 },
  { id: '#27', name: '#27', price: 14 },
  { id: '#28', name: '#28', price: 19 },
  { id: '#29', name: '#29', price: 16 },
  { id: '#30', name: '#30', price: 20 },
  { id: '#31', name: '#31', price: 16 },
  { id: '#32', name: '#32', price: 20 },
  { id: '#33', name: '#33', price: 16 },
  { id: '#34', name: '#34', price: 18 },
  { id: '#35', name: '#35', price: 16 },
  { id: '#36', name: '#36', price: 12 },
  { id: '#37', name: '#37', price: 16 },
  { id: '#38', name: '#38', price: 16 },
  { id: '#39', name: '#39', price: 14 },
  { id: '#40', name: '#40', price: 14 },
  { id: '#41', name: '#41', price: 21 },
  { id: '#42', name: '#42', price: 19 },
  { id: '#43', name: '#43', price: 19 },
  { id: '#44', name: '#44', price: 18 },
  { id: '#45', name: '#45', price: 15 },
  { id: '#46', name: '#46', price: 20 },
  { id: '#47', name: '#47', price: 27 },
  { id: '#48', name: '#48', price: 19 },
  { id: '#49', name: '#49', price: 16 },
  { id: '#50', name: '#50', price: 18 },
  { id: '#51', name: '#51', price: 14 },
  { id: '#52', name: '#52', price: 18 },
  { id: '#53', name: '#53', price: 16 },
  { id: '#54', name: '#54', price: 20 },
  { id: '#55', name: '#55', price: 21 },
  { id: '#56', name: '#56', price: 16 },
  { id: '#57', name: '#57', price: 20 },
  { id: '#58', name: '#58', price: 16 },
  { id: '#59', name: '#59', price: 23 },
  { id: '#60', name: '#60', price: 18 },
  { id: '#61', name: '#61', price: 20 },
  { id: '#62', name: '#62', price: 22 },
  { id: '#63', name: '#63', price: 21 },
  { id: '#64', name: '#64', price: 19 },
  { id: '#65', name: '#65', price: 20 },
  { id: '#66', name: '#66', price: 20 },
  { id: '#67', name: '#67', price: 16 },
  { id: '#68', name: '#68', price: 19 },
  { id: '#69', name: '#69', price: 25 },
  { id: '#70', name: '#70', price: 18 },
  { id: '#71', name: '#71', price: 20 },
  { id: '#72', name: '#72', price: 16 },
  { id: '#73', name: '#73', price: 18 },
  { id: '#74', name: '#74', price: 16 },
  { id: '#75', name: '#75', price: 18 },
  { id: '#76', name: '#76', price: 21 },
  { id: '#77', name: '#77', price: 16 },
  { id: '#78', name: '#78', price: 20 },
  { id: '#79', name: '#79', price: 15 },
  { id: '#80', name: '#80', price: 22 },
  { id: '#81', name: '#81', price: 25 },
  { id: '#82', name: '#82', price: 18 },
  { id: '#83', name: '#83', price: 15 },
  { id: '#84', name: '#84', price: 16 },
  { id: '#85', name: '#85', price: 20 },
  { id: '#86', name: '#86', price: 16 },
  { id: '#87', name: '#87', price: 20 },
  { id: '#88', name: '#88', price: 18 },
  { id: '#89', name: '#89', price: 18 },
  { id: '#90', name: '#90', price: 20 },
  { id: '#91', name: '#91', price: 18 },
  { id: '#92', name: '#92', price: 18 },
  { id: '#93', name: '#93', price: 18 },
  { id: '#94', name: '#94', price: 25 },
  { id: '#95', name: '#95', price: 23 },
  { id: '#96', name: '#96', price: 20 },
  { id: '#97', name: '#97', price: 19 },
  { id: '#98', name: '#98', price: 25 },
  { id: '#99', name: '#99', price: 21 },
  { id: '#100', name: '#100', price: 18 },
  { id: '#101', name: '#101', price: 20 },
  { id: '#102', name: '#102', price: 25 },
  { id: '#103', name: '#103', price: 23 },
  { id: '#375', name: '#375', price: 19 },
  { id: '#105', name: '#105', price: 18 },
  { id: '#106', name: '#106', price: 27 },
  { id: '#107', name: '#107', price: 25 },
  { id: '#108', name: '#108', price: 28 },
  { id: '#109', name: '#109', price: 21 },
  { id: '#110', name: '#110', price: 23 },
  { id: '#111', name: '#111', price: 25 },
  { id: '#112', name: '#112', price: 20 },
  { id: '#113', name: '#113', price: 24 },
  { id: '#114', name: '#114', price: 22 },
  { id: '#115', name: '#115', price: 29 },
  { id: '#116', name: '#116', price: 25 },
  { id: '#117', name: '#117', price: 22 },
  { id: '#118', name: '#118', price: 25 },
  { id: '#119', name: '#119', price: 29 },
  { id: '#120', name: '#120', price: 20 },
  { id: '#121', name: '#121', price: 22 },
  { id: '#122', name: '#122', price: 24 },
  { id: '#123', name: '#123', price: 21 },
  { id: '#124', name: '#124', price: 23 },
  { id: '#125', name: '#125', price: 28 },
  { id: '#126', name: '#126', price: 19 },
  { id: '#127', name: '#127', price: 21 },
  { id: '#128', name: '#128', price: 25 },
  { id: '#129', name: '#129', price: 25 },
  { id: '#130', name: '#130', price: 20 },
  { id: '#131', name: '#131', price: 21 },
  { id: '#132', name: '#132', price: 27 },
  { id: '#133', name: '#133', price: 26 },
  { id: '#134', name: '#134', price: 18 },
  { id: '#135', name: '#135', price: 21 },
  { id: '#136', name: '#136', price: 23 },
  { id: '#137', name: '#137', price: 25 },
  { id: '#138', name: '#138', price: 26 },
  { id: '#139', name: '#139', price: 25 },
  { id: '#1A', name: '#1A', price: 19 },
  { id: '#2A', name: '#2A', price: 19 },
  { id: '#3A', name: '#3A', price: 22 },
  { id: '#4A', name: '#4A', price: 16 },
  { id: '#5A', name: '#5A', price: 20 },
  { id: '#6A', name: '#6A', price: 19 },
  { id: '#7A', name: '#7A', price: 20 },
  { id: '#8A', name: '#8A', price: 22 },
  { id: '#9A', name: '#9A', price: 21 },
  { id: '#10A', name: '#10A', price: 16 },
  { id: '#12A', name: '#12A', price: 18 },
  { id: 'P1', name: 'P1', price: 24 },
  { id: 'P2', name: 'P2', price: 24 },
  { id: 'P3', name: 'P3', price: 19 },
  { id: 'P4', name: 'P4', price: 20 },
  { id: 'P5', name: 'P5', price: 24 },
  { id: 'P6', name: 'P6', price: 24 },
];


function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customTip, setCustomTip] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (item) => {
    setCart((prev) => [...prev, { ...item }]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const updateCartItemPrice = (index, newPrice) => {
    setCart((prev) => {
      const updated = [...prev];
      const priceNum = parseFloat(newPrice);
      if (!isNaN(priceNum) && priceNum >= 0) {
        updated[index].price = priceNum;
      }
      return updated;
    });
  };

  const clearCart = () => {
    setCart([]);
    setCustomTip(0);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const tip = Number(customTip);
  const subtotalWithTip = subtotal + tip;
  const tax = subtotalWithTip * 0.08875;
  const subtotalWithTax = subtotalWithTip + tax;
  const serviceFee = subtotalWithTax * 0.0395;
  const finalTotal = subtotalWithTax + serviceFee;

  return (
    <div
      style={{
        padding: 20,
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#fafafa',
        minHeight: '100vh',
        boxSizing: 'border-box',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <style>
        {`
          @media (max-width: 400px) {
            h1 {
              font-size: 1.2rem;
            }
            input, button {
              font-size: 14px !important;
            }
          }
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
        `}
      </style>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <h1 style={{ color: '#333', margin: 0 }}>Hero Sandwich POS</h1>
        <div
          style={{
            position: 'relative',
            cursor: 'pointer',
            fontSize: 30,
            color: '#444',
            userSelect: 'none',
          }}
          onClick={() => setIsCartOpen(true)}
          aria-label="Open cart"
        >
          🛒
          {cart.length > 0 && (
            <span
              style={{
                position: 'absolute',
                top: -10,
                right: -10,
                background: '#e74c3c',
                color: 'white',
                borderRadius: '50%',
                padding: '4px 8px',
                fontSize: 12,
                fontWeight: 'bold',
                boxShadow: '0 0 5px rgba(0,0,0,0.2)',
              }}
            >
              {cart.length}
            </span>
          )}
        </div>
      </header>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Search by name or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: 12,
            border: '1px solid #ccc',
            fontSize: 16,
            fontWeight: '600',
          }}
          aria-label="Search items"
        />
      </div>

      <main
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '12px',
        }}
      >
        {filteredItems.map((item) => (
          <button
            key={item.id + Math.random()}
            onClick={() => addToCart(item)}
            style={{
              padding: '14px',
              border: '1px solid #ddd',
              borderRadius: '12px',
              backgroundColor: 'white',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              transition: 'box-shadow 0.2s ease',
              fontWeight: '600',
              fontSize: 16,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
              e.currentTarget.style.backgroundColor = '#f9f9f9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
              e.currentTarget.style.backgroundColor = 'white';
            }}
            aria-label={`Add ${item.name} for $${item.price.toFixed(
              2
            )} to cart`}
          >
            <div>{item.name}</div>
            <div style={{ marginTop: 6, color: '#2c3e50', fontWeight: '700' }}>
              ${item.price.toFixed(2)}
            </div>
          </button>
        ))}
      </main>

      {isCartOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.4)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            zIndex: 1000,
            overflowY: 'auto',
            paddingTop: 40,
            boxSizing: 'border-box',
          }}
          onClick={() => setIsCartOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: 20,
              width: '90%',
              maxWidth: 400,
              maxHeight: '90vh',
              overflowY: 'auto',
              boxSizing: 'border-box',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Cart</h2>
            {cart.map((item, index) => (
              <div key={index} style={{ marginBottom: 10 }}>
                <div>
                  {item.name} - $
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) =>
                      updateCartItemPrice(index, e.target.value)
                    }
                    style={{ width: 60 }}
                  />
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 10 }}>
              <label>
                Tip: $
                <input
                  type="number"
                  value={customTip}
                  onChange={(e) => setCustomTip(e.target.value)}
                  style={{ width: 60 }}
                />
              </label>
            </div>
            <div style={{ marginTop: 10 }}>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Tax: ${tax.toFixed(2)}</p>
              <p>Service Fee: ${serviceFee.toFixed(2)}</p>
              <p>Total: ${finalTotal.toFixed(2)}</p>
              <button onClick={clearCart}>Clear Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;