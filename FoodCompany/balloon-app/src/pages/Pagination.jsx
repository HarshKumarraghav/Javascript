import { useState, useEffect } from "react";
import axios from "axios";
const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const FetchDataHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://dummyjson.com/products?limit=100`
      );
      console.log(data.products);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
  const PageChangeHandler = (selectPage) => {
    if (selectPage > products.length / 10) {
      return;
    }
    setPage(selectPage);
  };

  return (
    <div className="w-screen flex flex-col items-center">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search the product..."
        className="my-10 w-8/12 h-14 p-2 rounded-xl border "
      />
      <div className="w-full min-h-screen flex justify-between border-t">
        <div className="w-8/12 border-r flex justify-between p-2 gap-4 flex-wrap">
          {products
            ?.filter((item) => item.title.toLowerCase().includes(search))
            .slice(page * 10 - 10, page * 10)
            .map((prod) => (
              <div
                className="border w-72 h-72 justify-between p-2 rounded-2xl flex items-center flex-col"
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
      <div className="flex my-10 border">
        <div
          onClick={() => PageChangeHandler(page - 1)}
          className={
            page === 1
              ? "hidden"
              : "w-10 h-10 flex items-center border-r justify-center bg-white text-black"
          }
        >
          {"<"}
        </div>
        {[...Array(products.length / 10)].map((_, i) => (
          <div
            onClick={() => PageChangeHandler(i + 1)}
            className={
              page === i + 1
                ? "w-10 h-10 flex items-center border-r justify-center bg-white text-black"
                : "w-10 h-10 flex items-center border-r justify-center"
            }
          >
            {i + 1}
          </div>
        ))}
        <div
          onClick={() => PageChangeHandler(page + 1)}
          className={
            page === Math.ceil(products.length)
              ? "hidden"
              : "w-10 h-10 flex items-center border-r justify-center bg-white text-black "
          }
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
