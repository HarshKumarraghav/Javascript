import { useState, useEffect } from "react";
import axios from "axios";
const Cart = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const FetchDataHandler = async () => {
    const { data } = await axios.get(
      "https://dummyjson.com/products?limit=100"
    );
    console.log(data.products);
    setProducts(data.products);
  };
  useEffect(() => {
    FetchDataHandler();
  }, []);
  const AddToCartHandler = (cartData) => {
    setCart([
      ...cart,
      {
        ...cartData,
        Qty: 1,
      },
    ]);
  };
  const DeleteCartHandler = (CartItem) => {
    setCart(cart.filter((item) => item.id !== CartItem.id));
  };
  const QuantityCangeHandler = (cartItem, quant) => {
    if (quant > 10) {
      return 10;
    }
    if (quant < 1) {
      return DeleteCartHandler(cartItem);
    }
    setCart(
      cart.map((item) => {
        if (cartItem.id === item.id) {
          return {
            ...item,
            Qty: quant,
          };
        } else return item;
      })
    );
  };
  useEffect(() => {
    const totalPrice = cart.reduce((acc, curr) => {
      return acc + curr.price * curr.Qty;
    }, 0);
    setTotal(totalPrice);
  }, [cart]);
  return (
    <div className="w-screen min-h-screen flex justify-between">
      <div className="w-8/12 border-r flex justify-between p-2 gap-4 flex-wrap">
        {products?.map((prod) => (
          <div
            className="border w-72 p-2 rounded-2xl flex items-center flex-col"
            key={prod.id}
          >
            <img src={prod?.images[0]} className="w-20 h-20" alt="" />
            <h1>{prod?.title}</h1>
            <p>{prod?.description.slice(0, 50)}...</p>
            <p>Price:${prod?.price}</p>
            {cart.some((cart) => cart.id === prod.id) ? (
              <button
                className="w-full px-4 py-2 bg-red-500 rounded-lg shadow-lg text-white"
                onClick={() => DeleteCartHandler(prod)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="w-full px-4 py-2 bg-white rounded-lg shadow-lg text-black"
                onClick={() => AddToCartHandler(prod)}
              >
                Add to Cart
              </button>
            )}
            <button></button>
          </div>
        ))}
      </div>
      <div className="w-4/12 flex-col p-2">
        {cart.length === 0 ? (
          <h1 className="text-center font-bold text-xl">Cart is Empty...</h1>
        ) : (
          <>
            <h1 className="text-xl text-center">${total}</h1>
            {cart.map((item) => (
              <>
                <div className="w-full border flex gap-2 rounded-2xl shadow-lg">
                  <div className="w-20 h-20 p-2">
                    <img
                      src={item?.images[0]}
                      alt={item.title}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="">
                    <h1>{item?.title}</h1>
                    <p>Price: ${item?.price}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="px-4 h-10 w-10 py-2 bg-white rounded-lg shadow-lg text-black"
                      onClick={() => QuantityCangeHandler(item, item.Qty + 1)}
                    >
                      +
                    </button>
                    <select
                      className="text-center h-10 w-10 border rounded-lg shadow-lg m-3"
                      value={item.Qty}
                      onChange={(e) =>
                        QuantityCangeHandler(item, e.target.value)
                      }
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                    <button
                      className="px-4 h-10 w-10 py-2 bg-white rounded-lg shadow-lg text-black"
                      onClick={() => QuantityCangeHandler(item, item.Qty - 1)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
