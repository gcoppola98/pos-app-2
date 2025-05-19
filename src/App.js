import React, { useState } from 'react';

const items = [
  { id: '#22', name: 'Custom', price: 0 },
  { id: '#1', name: '#1', price: 16, category: 'Regular Heroes' },
  { id: '#2', name: '#2', price: 19, category: 'Regular Heroes' },
  { id: '#3', name: '#3', price: 20, category: 'Regular Heroes' },
  { id: '#4', name: '#4', price: 13, category: 'Regular Heroes' },
  { id: '#5', name: '#5', price: 22, category: 'Regular Heroes' },
  { id: '#6', name: '#6', price: 19, category: 'Regular Heroes' },
  { id: '#7', name: '#7', price: 23, category: 'Regular Heroes' },
  { id: '#8', name: '#8', price: 18, category: 'Regular Heroes' },
  { id: '#9', name: '#9', price: 19, category: 'Regular Heroes' },
  { id: '#10', name: '#10', price: 17, category: 'Regular Heroes' },
  { id: '#11', name: '#11', price: 14, category: 'Regular Heroes' },
  { id: '#12', name: '#12', price: 22, category: 'Regular Heroes' },
  { id: '#13', name: '#13', price: 19, category: 'Regular Heroes' },
  { id: '#14', name: '#14', price: 18, category: 'Regular Heroes' },
  { id: '#15', name: '#15', price: 17, category: 'Regular Heroes' },
  { id: '#16', name: '#16', price: 17, category: 'Regular Heroes' },
  { id: '#17', name: '#17', price: 19, category: 'Regular Heroes' },
  { id: '#18', name: '#18', price: 15, category: 'Regular Heroes' },
  { id: '#19', name: '#19', price: 16, category: 'Regular Heroes' },
  { id: '#20', name: '#20', price: 16, category: 'Regular Heroes' },
  { id: '#21', name: '#21', price: 22, category: 'Regular Heroes' },
  { id: '#23', name: '#23', price: 19, category: 'Regular Heroes' },
  { id: '#24', name: '#24', price: 18, category: 'Regular Heroes' },
  { id: '#25', name: '#25', price: 25, category: 'Regular Heroes' },
  { id: '#26', name: '#26', price: 21, category: 'Regular Heroes' },
  { id: '#27', name: '#27', price: 14, category: 'Regular Heroes' },
  { id: '#28', name: '#28', price: 19, category: 'Regular Heroes' },
  { id: '#29', name: '#29', price: 16, category: 'Regular Heroes' },
  { id: '#30', name: '#30', price: 20, category: 'Regular Heroes' },
  { id: '#31', name: '#31', price: 16, category: 'Regular Heroes' },
  { id: '#32', name: '#32', price: 20, category: 'Regular Heroes' },
  { id: '#33', name: '#33', price: 16, category: 'Regular Heroes' },
  { id: '#34', name: '#34', price: 18, category: 'Regular Heroes' },
  { id: '#35', name: '#35', price: 16, category: 'Regular Heroes' },
  { id: '#36', name: '#36', price: 12, category: 'Regular Heroes' },
  { id: '#37', name: '#37', price: 16, category: 'Regular Heroes' },
  { id: '#38', name: '#38', price: 16, category: 'Regular Heroes' },
  { id: '#39', name: '#39', price: 14, category: 'Regular Heroes' },
  { id: '#40', name: '#40', price: 14, category: 'Regular Heroes' },
  { id: '#41', name: '#41', price: 21, category: 'Regular Heroes' },
  { id: '#42', name: '#42', price: 19, category: 'Regular Heroes' },
  { id: '#43', name: '#43', price: 19, category: 'Regular Heroes' },
  { id: '#44', name: '#44', price: 18, category: 'Regular Heroes' },
  { id: '#45', name: '#45', price: 15, category: 'Regular Heroes' },
  { id: '#46', name: '#46', price: 20, category: 'Regular Heroes' },
  { id: '#47', name: '#47', price: 27, category: 'Regular Heroes' },
  { id: '#48', name: '#48', price: 19, category: 'Regular Heroes' },
  { id: '#49', name: '#49', price: 16, category: 'Regular Heroes' },
  { id: '#50', name: '#50', price: 18, category: 'Regular Heroes' },
  { id: '#51', name: '#51', price: 14, category: 'Regular Heroes' },
  { id: '#52', name: '#52', price: 18, category: 'Regular Heroes' },
  { id: '#53', name: '#53', price: 16, category: 'Regular Heroes' },
  { id: '#54', name: '#54', price: 20, category: 'Regular Heroes' },
  { id: '#55', name: '#55', price: 21, category: 'Regular Heroes' },
  { id: '#56', name: '#56', price: 16, category: 'Regular Heroes' },
  { id: '#57', name: '#57', price: 20, category: 'Regular Heroes' },
  { id: '#58', name: '#58', price: 16, category: 'Regular Heroes' },
  { id: '#59', name: '#59', price: 23, category: 'Regular Heroes' },
  { id: '#60', name: '#60', price: 18, category: 'Regular Heroes' },
  { id: '#61', name: '#61', price: 20, category: 'Regular Heroes' },
  { id: '#62', name: '#62', price: 22, category: 'Regular Heroes' },
  { id: '#63', name: '#63', price: 21, category: 'Regular Heroes' },
  { id: '#64', name: '#64', price: 19, category: 'Regular Heroes' },
  { id: '#65', name: '#65', price: 20, category: 'Regular Heroes' },
  { id: '#66', name: '#66', price: 20, category: 'Regular Heroes' },
  { id: '#67', name: '#67', price: 16, category: 'Regular Heroes' },
  { id: '#68', name: '#68', price: 19, category: 'Regular Heroes' },
  { id: '#69', name: '#69', price: 25, category: 'Regular Heroes' },
  { id: '#70', name: '#70', price: 18, category: 'Regular Heroes' },
  { id: '#71', name: '#71', price: 20, category: 'Regular Heroes' },
  { id: '#72', name: '#72', price: 16, category: 'Regular Heroes' },
  { id: '#73', name: '#73', price: 18, category: 'Regular Heroes' },
  { id: '#74', name: '#74', price: 16, category: 'Regular Heroes' },
  { id: '#75', name: '#75', price: 18, category: 'Regular Heroes' },
  { id: '#76', name: '#76', price: 21, category: 'Regular Heroes' },
  { id: '#77', name: '#77', price: 16, category: 'Regular Heroes' },
  { id: '#78', name: '#78', price: 20, category: 'Regular Heroes' },
  { id: '#79', name: '#79', price: 15, category: 'Regular Heroes' },
  { id: '#80', name: '#80', price: 22, category: 'Regular Heroes' },
  { id: '#81', name: '#81', price: 25, category: 'Regular Heroes' },
  { id: '#82', name: '#82', price: 18, category: 'Regular Heroes' },
  { id: '#83', name: '#83', price: 15, category: 'Regular Heroes' },
  { id: '#84', name: '#84', price: 16, category: 'Regular Heroes' },
 { id: '#85', name: '#85', price: 20, category: 'Regular Heroes' },
  { id: '#86', name: '#86', price: 16, category: 'Regular Heroes' },
  { id: '#87', name: '#87', price: 20, category: 'Regular Heroes' },
  { id: '#88', name: '#88', price: 18, category: 'Regular Heroes' },
  { id: '#89', name: '#89', price: 18, category: 'Regular Heroes' },
  { id: '#90', name: '#90', price: 20, category: 'Regular Heroes' },
  { id: '#91', name: '#91', price: 18, category: 'Regular Heroes' },
  { id: '#92', name: '#92', price: 18, category: 'Regular Heroes' },
  { id: '#93', name: '#93', price: 18, category: 'Regular Heroes' },
  { id: '#94', name: '#94', price: 25, category: 'Regular Heroes' },
  { id: '#95', name: '#95', price: 23, category: 'Regular Heroes' },
  { id: '#96', name: '#96', price: 20, category: 'Regular Heroes' },
  { id: '#97', name: '#97', price: 19, category: 'Regular Heroes' },
  { id: '#98', name: '#98', price: 25, category: 'Regular Heroes' },
  { id: '#99', name: '#99', price: 21, category: 'Regular Heroes' },
  { id: '#100', name: '#100', price: 18, category: 'Regular Heroes' },
  { id: '#101', name: '#101', price: 20, category: 'Regular Heroes' },
  { id: '#102', name: '#102', price: 25, category: 'Regular Heroes' },
  { id: '#103', name: '#103', price: 23, category: 'Regular Heroes' },
  { id: '#375', name: '#375', price: 19, category: 'Regular Heroes' },
  { id: '#105', name: '#105', price: 18, category: 'Regular Heroes' },
  { id: '#106', name: '#106', price: 27, category: 'Regular Heroes' },
  { id: '#107', name: '#107', price: 25, category: 'Regular Heroes' },
  { id: '#108', name: '#108', price: 28, category: 'Regular Heroes' },
  { id: '#109', name: '#109', price: 21, category: 'Regular Heroes' },
  { id: '#110', name: '#110', price: 23, category: 'Regular Heroes' },
  { id: '#111', name: '#111', price: 25, category: 'Regular Heroes' },
  { id: '#112', name: '#112', price: 20, category: 'Regular Heroes' },
  { id: '#113', name: '#113', price: 24, category: 'Regular Heroes' },
  { id: '#114', name: '#114', price: 22, category: 'Regular Heroes' },
  { id: '#115', name: '#115', price: 29, category: 'Regular Heroes' },
  { id: '#116', name: '#116', price: 25, category: 'Regular Heroes' },
  { id: '#117', name: '#117', price: 22, category: 'Regular Heroes' },
  { id: '#118', name: '#118', price: 25, category: 'Regular Heroes' },
  { id: '#119', name: '#119', price: 29, category: 'Regular Heroes' },
  { id: '#120', name: '#120', price: 20, category: 'Regular Heroes' },
  { id: '#121', name: '#121', price: 22, category: 'Regular Heroes' },
  { id: '#122', name: '#122', price: 24, category: 'Regular Heroes' },
  { id: '#123', name: '#123', price: 21, category: 'Regular Heroes' },
  { id: '#124', name: '#124', price: 23, category: 'Regular Heroes' },
  { id: '#125', name: '#125', price: 28, category: 'Regular Heroes' },
  { id: '#126', name: '#126', price: 19, category: 'Regular Heroes' },
  { id: '#127', name: '#127', price: 21, category: 'Regular Heroes' },
  { id: '#128', name: '#128', price: 25, category: 'Regular Heroes' },
  { id: '#129', name: '#129', price: 25, category: 'Regular Heroes' },
  { id: '#130', name: '#130', price: 20, category: 'Regular Heroes' },
  { id: '#131', name: '#131', price: 21, category: 'Regular Heroes' },
  { id: '#132', name: '#132', price: 27, category: 'Regular Heroes' },
  { id: '#133', name: '#133', price: 26, category: 'Regular Heroes' },
  { id: '#134', name: '#134', price: 18, category: 'Regular Heroes' },
  { id: '#135', name: '#135', price: 21, category: 'Regular Heroes' },
  { id: '#136', name: '#136', price: 23, category: 'Regular Heroes' },
  { id: '#137', name: '#137', price: 25, category: 'Regular Heroes' },
  { id: '#138', name: '#138', price: 26, category: 'Regular Heroes' },
  { id: '#139', name: '#139', price: 25, category: 'Regular Heroes' },
  { id: '#1A', name: '#1A', price: 19, category: 'Smoked Mozzarella Heroes' },
  { id: '#2A', name: '#2A', price: 19, category: 'Smoked Mozzarella Heroes' },
  { id: '#3A', name: '#3A', price: 22, category: 'Smoked Mozzarella Heroes' },
  { id: '#4A', name: '#4A', price: 16, category: 'Smoked Mozzarella Heroes' },
  { id: '#5A', name: '#5A', price: 20, category: 'Smoked Mozzarella Heroes' },
  { id: '#6A', name: '#6A', price: 19, category: 'Smoked Mozzarella Heroes' },
  { id: '#7A', name: '#7A', price: 20, category: 'Smoked Mozzarella Heroes' },
  { id: '#8A', name: '#8A', price: 22, category: 'Smoked Mozzarella Heroes' },
  { id: '#9A', name: '#9A', price: 21, category: 'Smoked Mozzarella Heroes' },
  { id: '#10A', name: '#10A', price: 16, category: 'Smoked Mozzarella Heroes' },
  { id: '#11A', name: '#11A', price: 18, category: 'Smoked Mozzarella Heroes' },
  { id: 'P1', name: 'P1', price: 24, category: '"P" Heroes' },
  { id: 'P2', name: 'P2', price: 24, category: '"P" Heroes' },
  { id: 'P3', name: 'P3', price: 19, category: '"P" Heroes' },
  { id: 'P4', name: 'P4', price: 20, category: '"P" Heroes' },
  { id: 'P5', name: 'P5', price: 24, category: '"P" Heroes' },
  { id: 'P6', name: 'P6', price: 24, category: '"P" Heroes' },
];

const addonCategories = [
  { title: 'Extra Meat Options', options: [
      { name: 'Extra Chicken Cutlet', price: 6 },
      { name: 'Extra Grilled Chicken', price: 6 },
      { name: 'Extra Eggplant', price: 3 },
      { name: 'Extra Prosciutto Di Parma', price: 6 },
      { name: 'Extra Veal', price: 6 },
      { name: 'Extra Bacon', price: 4 },
      { name: 'Extra Meat', price: 4 },
  ]},
  { title: 'Extra Cheese Options', options: [
      { name: 'Extra Mozzarella Cheese', price: 3 },
      { name: 'Extra Smoked Mozzarella Cheese', price: 3 },
      { name: 'Extra Fresh Ricotta', price: 3 },
      { name: 'Extra Shaved Reggiano Cheese', price: 4 },
      { name: 'Extra Cheese', price: 2 },
  ]},
  { title: 'Extra Sauce/Gravy Options', options: [
      { name: 'Extra Tomato Sauce', price: 1 },
      { name: 'Extra Vodka Sauce', price: 2 },
      { name: 'Vodka Sauce Substitute', price: 1 },
      { name: 'Extra Pesto Sauce', price: 3 },
      { name: 'Extra Brown Gravy', price: 2 },
  ]},
  { title: 'Extra Toppings Options', options: [
      { name: 'Extra 10 Cheese Garlic Mix', price: 3 },
      { name: 'Extra Arugula', price: 1 },
      { name: 'Extra Basil Mix', price: 3 },
      { name: 'Extra Broccoli Rabe', price: 3 },
      { name: 'Extra Bruschetta', price: 3 },
      { name: 'Extra Fresh Basil', price: 1 },
      { name: 'Extra Giardiniera Salad', price: 2 },
      { name: 'Extra Lettuce', price: 0.5 },
      { name: 'Extra Muffuletta', price: 3 },
      { name: 'Extra Mushroom Mix', price: 3 },
      { name: 'Extra Pickles', price: 1 },
      { name: 'Extra Stuffed Mushrooms', price: 3 },
      { name: 'Extra Sun-Dried Tomatoes', price: 3 },
      { name: 'Extra Tomatoes', price: 0.5 },
  ]},
  { title: 'Extra Peppers Options', options: [
      { name: 'Extra Banana Peppers', price: 3 },
      { name: 'Extra Roasted Peppers', price: 3 },
      { name: 'Extra Hot Cherry Peppers', price: 2 },
      { name: 'Extra Hot Stuffed Peppers', price: 3 },
      { name: 'Extra Sweet Stuffed Peppers', price: 3 },
      { name: 'Extra Peppers & Onions', price: 2 },
  ]},
  { title: 'Extra Condiments Options', options: [
      { name: 'Extra Balsamic Glaze', price: 2 },
      { name: 'Extra Balsamic Vinegar', price: 1 },
      { name: 'Extra BBQ Sauce', price: 1 },
      { name: 'Extra Caesar Dressing', price: 1 },
      { name: 'Extra Hot Sauce', price: 1 },
      { name: 'Extra Ranch', price: 1 },
      { name: 'Extra Spicy Ranch', price: 1 },
  ]}
];

const specialCustomAddons = [
  { name: 'Any Meat & Cheese', price: 15 },
  { name: 'Any Meat & Mozzarella', price: 16 },
  { name: 'Cutlet & Cheese', price: 15 },
  { name: 'Cutlet & Mozzarella', price: 16 },
  { name: 'Grilled Chicken & Cheese', price: 15 },
  { name: 'Grilled Chicken & Mozzarella', price: 16 },
  { name: 'Eggplant & Cheese', price: 14 },
  { name: 'Eggplant & Mozzarella', price: 15 },
  { name: 'Prosciutto or Veal & Cheese', price: 18 },
  { name: 'Prosciutto or Veal & Mozzarella', price: 19 },
  { name: 'Just Tuna (No Cheese)', price: 12 },
  { name: 'Just Grilled Veggies (No Cheese)', price: 12 },
  { name: 'Just Meat (No Cheese)', price: 13 },
  { name: 'Just Proscuitto or Veal (No Cheese)', price: 16 },
];

const categories = ['All', 'Regular Heroes', 'Smoked Mozzarella Heroes', '"P" Heroes', 'Chips', 'Bread Items', 'Appetizers', "Kid's Menu", 'Beverages', 'Desserts', 'Grocery Items'];

function App() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [addonQuantities, setAddonQuantities] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [customTip, setCustomTip] = useState(0);
  const [expandedAddonCategories, setExpandedAddonCategories] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const filteredItems = items.filter(
    (item) => (activeCategory === 'All' || item.category === activeCategory) &&
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       item.id.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getItemCountInCategory = (cat) => {
    if (cat === 'All') return items.length;
    return items.filter(item => item.category === cat).length;
  };

  const toggleAddonCategory = (title) => {
    setExpandedAddonCategories((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  function openCustomization(item, index = null) {
    setSelectedItem(item);
    setEditIndex(index);
    const initialQuantities = index !== null ? Object.fromEntries(item.addons?.map(a => [a.name, a.qty]) || []) : {};
    setAddonQuantities(initialQuantities);
  }

  function saveToCart() {
    const addons = Object.entries(addonQuantities).map(([name, qty]) => {
      const price = addonCategories.flatMap(c => c.options).find(opt => opt.name === name)?.price || 0;
      return { name, qty, price };
    });
    const itemWithAddons = {
      ...selectedItem,
      addons,
      total: selectedItem.price + addons.reduce((sum, a) => sum + a.price * a.qty, 0),
    };
    setCart((prev) => {
      const updated = [...prev];
      if (editIndex !== null) updated[editIndex] = itemWithAddons;
      else updated.push(itemWithAddons);
      return updated;
    });
    setSelectedItem(null);
    setAddonQuantities({});
    setEditIndex(null);
  }

  function removeFromCart(index) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  function removeAddonFromItem(itemIndex, addonIndex) {
    setCart((prev) => {
      const updated = [...prev];
      const item = updated[itemIndex];
      item.addons = item.addons.filter((_, i) => i !== addonIndex);
      item.total = item.price + item.addons.reduce((sum, a) => sum + a.price * a.qty, 0);
      return updated;
    });
  }

  const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
  const tip = Number(customTip);
  const subtotalWithTip = subtotal + tip;
  const tax = subtotalWithTip * 0.08875;
  const subtotalWithTax = subtotalWithTip + tax;
  const serviceFee = subtotalWithTax * 0.0395;
  const finalTotal = subtotalWithTax + serviceFee;

return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', background: '#f9f9f9', padding: 20, minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h1 style={{ fontSize: '1.8rem' }}>Heroes POS</h1>
        <button onClick={() => setShowCart(true)} style={{ position: 'relative', background: '#007AFF', color: '#fff', border: 'none', borderRadius: 20, padding: '6px 12px', fontSize: 14 }}>
          🛒 {cart.length} • ${subtotal.toFixed(2)}
        </button>
      </div>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search items..."
        style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #ccc', marginBottom: 16 }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{ padding: '6px 12px', borderRadius: 8, border: 'none', background: activeCategory === cat ? '#007AFF' : '#eee' }}
          >
            {cat} ({getItemCountInCategory(cat)})
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: 12 }}>
        {filteredItems.map(item => (
          <div
            key={item.id}
            style={{ padding: 10, borderRadius: 8, background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer' }}
            onClick={() => openCustomization(item)}
          >
            <strong>{item.name}</strong>
            <div>${item.price.toFixed(2)}</div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backdropFilter: 'blur(4px)', backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', padding: 20, borderRadius: 18, width: '90%', maxWidth: 500, maxHeight: '90%', overflowY: 'auto', WebkitOverflowScrolling: 'touch', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
            <h2 style={{ marginBottom: 16 }}>Customize {selectedItem.name}</h2>
            {addonCategories.map((cat, idx) => (
              <div key={idx} style={{ marginBottom: 14 }}>
                <div
                  onClick={() => toggleAddonCategory(cat.title)}
                  style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', background: '#f2f2f7', padding: 10, borderRadius: 10 }}
                >
                  <strong>{cat.title}</strong>
                  <span style={{ fontSize: 18 }}>{expandedAddonCategories.includes(cat.title) ? '▾' : '▸'}</span>
                </div>
                {expandedAddonCategories.includes(cat.title) && (
                  <div style={{ padding: '8px 0' }}>
                    {cat.options.map((opt, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '6px 0' }}>
                        <span>{opt.name}</span>
                        <div>
                          <button onClick={() => setAddonQuantities(q => ({ ...q, [opt.name]: Math.max((q[opt.name] || 0) - 1, 0) }))} style={{ padding: '2px 6px', borderRadius: 6 }}>-</button>
                          <span style={{ margin: '0 8px' }}>{addonQuantities[opt.name] || 0}</span>
                          <button onClick={() => setAddonQuantities(q => ({ ...q, [opt.name]: (q[opt.name] || 0) + 1 }))} style={{ padding: '2px 6px', borderRadius: 6 }}>+</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
              <button onClick={() => setSelectedItem(null)} style={{ marginRight: 12, padding: '8px 16px', borderRadius: 8, border: '1px solid #ccc', background: '#f2f2f2' }}>Cancel</button>
              <button onClick={saveToCart} style={{ padding: '8px 16px', borderRadius: 8, background: '#007AFF', color: '#fff', border: 'none' }}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: '#fff', padding: 20, borderRadius: 18, width: '90%', maxWidth: 500, maxHeight: '90%', overflowY: 'auto' }}>
            <h2 style={{ marginBottom: 16 }}>Cart</h2>
            {cart.map((item, idx) => (
              <div key={idx} style={{ background: '#f2f2f2', padding: 12, borderRadius: 10, marginBottom: 10 }}>
                <div>
                  <strong>{item.name}</strong> - ${item.total.toFixed(2)}
                  <button onClick={() => openCustomization(item, idx)} style={{ marginLeft: 10 }}>Edit</button>
                  <button onClick={() => removeFromCart(idx)} style={{ marginLeft: 10, color: 'red' }}>Remove</button>
                </div>
                <ul>
                  {item.addons && item.addons.map((addon, i) => (
                    <li key={i}>
                      {addon.qty}× {addon.name} (${(addon.price * addon.qty).toFixed(2)})
                      <button onClick={() => removeAddonFromItem(idx, i)} style={{ marginLeft: 6, color: 'red' }}>✕</button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div style={{ marginTop: 20 }}>
              <label style={{ display: 'block', marginBottom: 8 }}>
                Tip: $
                <input
                  type="number"
                  value={customTip}
                  onChange={(e) => setCustomTip(e.target.value)}
                  style={{ marginLeft: 8, width: 80, padding: 6, borderRadius: 6, border: '1px solid #ccc' }}
                />
              </label>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
              <p>Tip: ${tip.toFixed(2)}</p>
              <p>Subtotal with Tip: ${subtotalWithTip.toFixed(2)}</p>
              <p>Sales Tax (8.875%): ${tax.toFixed(2)}</p>
              <p>Subtotal with Tax: ${subtotalWithTax.toFixed(2)}</p>
              <p>Service Fee (3.95%): ${serviceFee.toFixed(2)}</p>
              <p><strong>Final Total: ${finalTotal.toFixed(2)}</strong></p>
            </div>

            <div style={{ marginTop: 16, textAlign: 'right' }}>
              <button onClick={() => setShowCart(false)} style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid #ccc', background: '#f2f2f2' }}>Close Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;