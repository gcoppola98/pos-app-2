import React, { useState } from "react";
import { XCircle, ShoppingCart, PlusCircle, MinusCircle, Search } from "lucide-react";

// ... Your menuItems, allItems, NY_SALES_TAX_RATE, and addonCategories are as you provided ...

// NY Sales Tax Rate
const NY_SALES_TAX_RATE = 0.08875;

// Menu Data
const menuItems = {
  "Regular Heroes": [
    { id: 1, name: "#1", price: 16.00 },
    { id: 2, name: "#2", price: 19.00 },
    { id: 3, name: "#3", price: 20.00 },
    { id: 4, name: "#4", price: 13.00 },
    { id: 5, name: "#5", price: 22.00 },
    { id: 6, name: "#6", price: 19.00 },
    { id: 7, name: "#7", price: 23.00 },
    { id: 8, name: "#8", price: 18.00 },
    { id: 9, name: "#9", price: 19.00 },
    { id: 10, name: "#10", price: 17.00 },
    { id: 11, name: "#11", price: 14.00 },
    { id: 12, name: "#12", price: 22.00 },
    { id: 13, name: "#13", price: 19.00 },
    { id: 14, name: "#14", price: 18.00 },
    { id: 15, name: "#15", price: 17.00 },
    { id: 16, name: "#16", price: 17.00 },
    { id: 17, name: "#17", price: 19.00 },
    { id: 18, name: "#18", price: 15.00 },
    { id: 19, name: "#19", price: 16.00 },
    { id: 20, name: "#20", price: 16.00 },
    { id: 21, name: "#21", price: 22.00 },
    { id: 22, name: "#22", price: 0.00 },
    { id: 23, name: "#23", price: 19.00 },
    { id: 24, name: "#24", price: 18.00 },
    { id: 25, name: "#25", price: 25.00 },
    { id: 26, name: "#26", price: 21.00 },
    { id: 27, name: "#27", price: 14.00 },
    { id: 28, name: "#28", price: 19.00 },
    { id: 29, name: "#29", price: 16.00 },
    { id: 30, name: "#30", price: 20.00 },
    { id: 31, name: "#31", price: 16.00 },
    { id: 32, name: "#32", price: 20.00 },
    { id: 33, name: "#33", price: 16.00 },
    { id: 34, name: "#34", price: 18.00 },
    { id: 35, name: "#35", price: 16.00 },
    { id: 36, name: "#36", price: 12.00 },
    { id: 37, name: "#37", price: 16.00 },
    { id: 38, name: "#38", price: 16.00 },
    { id: 39, name: "#39", price: 14.00 },
    { id: 40, name: "#40", price: 14.00 },
    { id: 41, name: "#41", price: 21.00 },
    { id: 42, name: "#42", price: 19.00 },
    { id: 43, name: "#43", price: 19.00 },
    { id: 44, name: "#44", price: 18.00 },
    { id: 45, name: "#45", price: 15.00 },
    { id: 46, name: "#46", price: 20.00 },
    { id: 47, name: "#47", price: 27.00 },
    { id: 48, name: "#48", price: 19.00 },
    { id: 49, name: "#49", price: 16.00 },
    { id: 50, name: "#50", price: 18.00 },
    { id: 51, name: "#51", price: 14.00 },
    { id: 52, name: "#52", price: 18.00 },
    { id: 53, name: "#53", price: 16.00 },
    { id: 54, name: "#54", price: 20.00 },
    { id: 55, name: "#55", price: 21.00 },
    { id: 56, name: "#56", price: 16.00 },
    { id: 57, name: "#57", price: 20.00 },
    { id: 58, name: "#58", price: 16.00 },
    { id: 59, name: "#59", price: 23.00 },
    { id: 60, name: "#60", price: 18.00 },
    { id: 61, name: "#61", price: 20.00 },
    { id: 62, name: "#62", price: 22.00 },
    { id: 63, name: "#63", price: 21.00 },
    { id: 64, name: "#64", price: 19.00 },
    { id: 65, name: "#65", price: 20.00 },
    { id: 66, name: "#66", price: 20.00 },
    { id: 67, name: "#67", price: 16.00 },
    { id: 68, name: "#68", price: 19.00 },
    { id: 69, name: "#69", price: 25.00 },
    { id: 70, name: "#70", price: 18.00 },
    { id: 71, name: "#71", price: 20.00 },
    { id: 72, name: "#72", price: 16.00 },
    { id: 73, name: "#73", price: 18.00 },
    { id: 74, name: "#74", price: 16.00 },
    { id: 75, name: "#75", price: 18.00 },
    { id: 76, name: "#76", price: 21.00 },
    { id: 77, name: "#77", price: 16.00 },
    { id: 78, name: "#78", price: 20.00 },
    { id: 79, name: "#79", price: 15.00 },
    { id: 80, name: "#80", price: 22.00 },
    { id: 81, name: "#81", price: 25.00 },
    { id: 82, name: "#82", price: 18.00 },
    { id: 83, name: "#83", price: 15.00 },
    { id: 84, name: "#84", price: 16.00 },
    { id: 85, name: "#85", price: 20.00 },
    { id: 86, name: "#86", price: 16.00 },
    { id: 87, name: "#87", price: 20.00 },
    { id: 88, name: "#88", price: 18.00 },
    { id: 89, name: "#89", price: 18.00 },
    { id: 90, name: "#90", price: 20.00 },
    { id: 91, name: "#91", price: 18.00 },
    { id: 92, name: "#92", price: 18.00 },
    { id: 93, name: "#93", price: 18.00 },
    { id: 94, name: "#94", price: 25.00 },
    { id: 95, name: "#95", price: 23.00 },
    { id: 96, name: "#96", price: 20.00 },
    { id: 97, name: "#97", price: 19.00 },
    { id: 98, name: "#98", price: 25.00 },
    { id: 99, name: "#99", price: 21.00 },
    { id: 100, name: "#100", price: 18.00 },
    { id: 101, name: "#101", price: 20.00 },
    { id: 102, name: "#102", price: 25.00 },
    { id: 103, name: "#103", price: 23.00 },
    { id: 375, name: "#375", price: 19.00 },
    { id: 105, name: "#105", price: 18.00 },
    { id: 106, name: "#106", price: 27.00 },
    { id: 107, name: "#107", price: 25.00 },
    { id: 108, name: "#108", price: 28.00 },
    { id: 109, name: "#109", price: 21.00 },
    { id: 110, name: "#110", price: 23.00 },
    { id: 111, name: "#111", price: 25.00 },
    { id: 112, name: "#112", price: 20.00 },
    { id: 113, name: "#113", price: 24.00 },
    { id: 114, name: "#114", price: 22.00 },
    { id: 115, name: "#115", price: 29.00 },
    { id: 116, name: "#116", price: 25.00 },
    { id: 117, name: "#117", price: 22.00 },
    { id: 118, name: "#118", price: 25.00 },
    { id: 119, name: "#119", price: 29.00 },
    { id: 120, name: "#120", price: 20.00 },
    { id: 121, name: "#121", price: 22.00 },
    { id: 122, name: "#122", price: 24.00 },
    { id: 123, name: "#123", price: 21.00 },
    { id: 124, name: "#124", price: 23.00 },
    { id: 125, name: "#125", price: 28.00 },
    { id: 126, name: "#126", price: 19.00 },
    { id: 127, name: "#127", price: 21.00 },
    { id: 128, name: "#128", price: 25.00 },
    { id: 129, name: "#129", price: 25.00 },
    { id: 130, name: "#130", price: 20.00 },
    { id: 131, name: "#131", price: 21.00 },
    { id: 132, name: "#132", price: 27.00 },
    { id: 133, name: "#133", price: 26.00 },
    { id: 134, name: "#134", price: 18.00 },
    { id: 135, name: "#135", price: 21.00 },
    { id: 136, name: "#136", price: 23.00 },
    { id: 137, name: "#137", price: 25.00 },
    { id: 138, name: "#138", price: 26.00 },
    { id: 139, name: "#139", price: 25.00 },
  ],
  "Smoked Mozzarella Heroes": [
    { id: "1A", name: "#1A", price: 19.00 },
    { id: "2A", name: "#2A", price: 19.00 },
    { id: "3A", name: "#3A", price: 22.00 },
    { id: "4A", name: "#4A", price: 16.00 },
    { id: "5A", name: "#5A", price: 20.00 },
    { id: "6A", name: "#6A", price: 19.00 },
    { id: "7A", name: "#7A", price: 20.00 },
    { id: "8A", name: "#8A", price: 22.00 },
    { id: "9A", name: "#9A", price: 21.00 },
    { id: "10A", name: "#10A", price: 16.00 },
    { id: "11A", name: "#11A", price: 18.00 },
  ],
  "P Heroes": [
    { id: "P1", name: "P1", price: 24.00 },
    { id: "P2", name: "P2", price: 24.00 },
    { id: "P3", name: "P3", price: 19.00 },
    { id: "P4", name: "P4", price: 20.00 },
    { id: "P5", name: "P5", price: 24.00 },
    { id: "P6", name: "P6", price: 24.00 },
  ]
};

// Get all items for the "All" category
const allItems = [
  ...menuItems["Regular Heroes"],
  ...menuItems["Smoked Mozzarella Heroes"],
  ...menuItems["P Heroes"]
];

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [customTip, setCustomTip] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddonsModal, setShowAddonsModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});

  // Show relevant items based on active category and search
  const displayItems = () => {
    let items = activeCategory === "All" ? allItems : menuItems[activeCategory] || [];

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) || item.id.toString().toLowerCase().includes(query)
      );
    }
    return items;
  };

  // Add item to cart or open addons modal if required
  const addToCart = (item) => {
    if (typeof item.id === "number" && item.id >= 1 && item.id <= 5) {
      setSelectedItem(item);
      setSelectedAddons([]);
      const initialExpanded = addonCategories.reduce((acc, cat) => {
        acc[cat.id] = true;
        return acc;
      }, {});
      setExpandedCategories(initialExpanded);
      setShowAddonsModal(true);
      return;
    }
    addItemToCart(item, []);
  };

  // Add item with addons to cart
  const addItemToCart = (item, addons = []) => {
    const addonsTotalPrice = addons.reduce((total, addon) => total + addon.price, 0);
    const existingItem = cart.find(
      (c) =>
        c.id === item.id &&
        c.name === item.name &&
        JSON.stringify(c.addons || []) === JSON.stringify(addons)
    );

    if (existingItem) {
      setCart(
        cart.map((c) =>
          c.id === item.id &&
          c.name === item.name &&
          JSON.stringify(c.addons || []) === JSON.stringify(addons)
            ? { ...c, quantity: c.quantity + 1 }
            : c
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...item,
          quantity: 1,
          priceAdjustment: addonsTotalPrice,
          addons,
        },
      ]);
    }
    setShowAddonsModal(false);
  };

  // Increase quantity of cart item
  const increaseQuantity = (itemId, itemName, addons = []) => {
    setCart(
      cart.map((item) =>
        item.id === itemId &&
        item.name === itemName &&
        JSON.stringify(item.addons || []) === JSON.stringify(addons)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity of cart item or remove if quantity is 1
  const decreaseQuantity = (itemId, itemName, addons = []) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === itemId &&
          item.name === itemName &&
          JSON.stringify(item.addons || []) === JSON.stringify(addons)
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Toggle addon selection in modal
  const toggleAddon = (addon) => {
    const exists = selectedAddons.find((a) => a.id === addon.id);
    if (exists) {
      setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  // Calculate totals
  const subtotal = cart.reduce(
    (total, item) => total + (item.price + (item.priceAdjustment || 0)) * item.quantity,
    0
  );
  const tax = subtotal * NY_SALES_TAX_RATE;
  const tip = parseFloat(customTip) || 0;
  const total = subtotal + tax + tip;

  return (
    <div className="app-container" style={{ padding: "1rem", maxWidth: 600, margin: "auto" }}>
      {/* Category Tabs */}
      <div className="category-tabs" style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        {["All", "Regular Heroes", "Smoked Mozzarella Heroes", "P Heroes"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: activeCategory === cat ? "#333" : "#eee",
              color: activeCategory === cat ? "white" : "#333",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
        <button
          onClick={() => setShowCart(true)}
          style={{ marginLeft: "auto", cursor: "pointer", background: "none", border: "none" }}
          aria-label="Open Cart"
        >
          <ShoppingCart size={28} />
          {cart.length > 0 && (
            <span
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "0 6px",
                fontSize: 12,
                position: "relative",
                top: -10,
                left: -10,
              }}
            >
              {cart.reduce((sum, i) => sum + i.quantity, 0)}
            </span>
          )}
        </button>
      </div>

      {/* Search Bar */}
      <div style={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}>
        <Search size={20} />
        <input
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginLeft: 8, flexGrow: 1, padding: "0.5rem", fontSize: 16 }}
        />
      </div>

      {/* Menu Items */}
      <div className="menu-items" style={{ maxHeight: "400px", overflowY: "auto" }}>
        {displayItems().map((item) => (
          <div
            key={`${item.id}-${item.name}`}
            onClick={() => addToCart(item)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0.75rem 1rem",
              borderBottom: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            <div>{item.name}</div>
            <div>${item.price.toFixed(2)}</div>
          </div>
        ))}
        {displayItems().length === 0 && <div>No items found.</div>}
      </div>

      {/* Addons Modal */}
      {showAddonsModal && selectedItem && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: 8,
              width: "90%",
              maxWidth: 500,
              maxHeight: "80vh",
              overflowY: "auto",
              padding: "1rem",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowAddonsModal(false)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              aria-label="Close Addons Modal"
            >
              <XCircle size={24} />
            </button>
            <h2>Add-ons for {selectedItem.name}</h2>

            {addonCategories.map((cat) => (
              <div key={cat.id} style={{ marginBottom: "1rem" }}>
                <h3
                  onClick={() =>
                    setExpandedCategories((prev) => ({
                      ...prev,
                      [cat.id]: !prev[cat.id],
                    }))
                  }
                  style={{
                    cursor: "pointer",
                    userSelect: "none",
                    backgroundColor: "#eee",
                    padding: "0.5rem",
                    borderRadius: 4,
                  }}
                >

                              {cat.name} {expandedCategories[cat.id] ? "▲" : "▼"}
            </h3>
            {expandedCategories[cat.id] &&
              cat.addons.map((addon) => {
                const isSelected = selectedAddons.find((a) => a.id === addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.5rem",
                      cursor: "pointer",
                      backgroundColor: isSelected ? "#d0f0d0" : "transparent",
                      borderRadius: 4,
                      marginBottom: 4,
                    }}
                  >
                    <div>{addon.name}</div>
                    <div>+${addon.price.toFixed(2)}</div>
                  </div>
                );
              })}
          </div>
        ))}

        <button
          onClick={() => addItemToCart(selectedItem, selectedAddons)}
          style={{
            marginTop: 12,
            padding: "0.75rem",
            width: "100%",
            backgroundColor: "#333",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Add to Cart (${(
            selectedItem.price +
            selectedAddons.reduce((sum, a) => sum + a.price, 0)
          ).toFixed(2)})
        </button>
      </div>
    </div>
  )}

  {/* Cart Modal */}
  {showCart && (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 8,
          width: "90%",
          maxWidth: 500,
          maxHeight: "80vh",
          overflowY: "auto",
          padding: "1rem",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <button
          onClick={() => setShowCart(false)}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Close Cart"
        >
          <XCircle size={24} />
        </button>
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div style={{ flexGrow: 1, overflowY: "auto" }}>
            {cart.map((item, idx) => (
              <div
                key={`${item.id}-${idx}-${JSON.stringify(item.addons)}`}
                style={{
                  borderBottom: "1px solid #ccc",
                  paddingBottom: 8,
                  marginBottom: 8,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong>{item.name}</strong>
                  <span>
                    ${(item.price + (item.priceAdjustment || 0)).toFixed(2)} × {item.quantity}
                  </span>
                </div>
                {item.addons && item.addons.length > 0 && (
                  <ul style={{ marginLeft: 16, fontSize: 14, color: "#555" }}>
                    {item.addons.map((addon) => (
                      <li key={addon.id}>
                        + {addon.name} (${addon.price.toFixed(2)})
                      </li>
                    ))}
                  </ul>
                )}
                <div style={{ marginTop: 4 }}>
                  <button
                    onClick={() =>
                      decreaseQuantity(item.id, item.name, item.addons || [])
                    }
                    style={{ marginRight: 8, cursor: "pointer" }}
                  >
                    <MinusCircle size={18} />
                  </button>
                  <button
                    onClick={() =>
                      increaseQuantity(item.id, item.name, item.addons || [])
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <PlusCircle size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ borderTop: "1px solid #ccc", paddingTop: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>NY Sales Tax (8.875%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div style={{ marginTop: 8 }}>
            <label htmlFor="tip">Tip: </label>
            <input
              id="tip"
              type="number"
              min="0"
              step="0.01"
              value={customTip}
              onChange={(e) => setCustomTip(e.target.value)}
              placeholder="Enter tip amount"
              style={{ width: "100%", padding: "0.5rem", fontSize: 16 }}
            />
          </div>
          <div
            style={{
              marginTop: 12,
              fontWeight: "bold",
              fontSize: 18,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            disabled={cart.length === 0}
            style={{
              marginTop: 16,
              width: "100%",
              padding: "0.75rem",
              backgroundColor: cart.length === 0 ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: cart.length === 0 ? "not-allowed" : "pointer",
              fontWeight: "bold",
            }}
            onClick={() => alert(`Order placed! Total: $${total.toFixed(2)}`)}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )}
</div>