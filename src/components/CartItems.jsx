import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
export default function CartItems() {
  const { all_product, getTotalCartAmount, cartItem, removeFromCart } = useContext(ShopContext);
  return (
    <div className="px-12 py-4 mt-5">
      <div className="grid grid-cols-[1fr_2fr_repeat(4,_1fr)] gap-5">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item, i) => {
        if (cartItem[item.id] > 0) {
          return (
            <div className="grid items-center grid-cols-[1fr_2fr_repeat(4,_1fr)] gap-10 my-4">
              <img src={item.image} alt="" className="w-[70%]"/>
              <p>{item.name}</p>
              <p>${item.new_price}</p>
              <button>{cartItem[item.id]}</button>
              <p>${item.new_price*cartItem[item.id]}</p>
              <img
                src={remove_icon}
                alt=""
                className="cursor-pointer"
                onClick={() => {
                  removeFromCart(item.id);
                }}
              />
            </div>
          );
        }
        return null;
      })}
      <hr />
      <div className="w-[50vw]">
        <h1 className="text-2xl py-4">Cart Totals</h1>
        <div className="flex justify-between py-2">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
        </div>
        <hr/>
        <div className="flex justify-between py-2">
            <p>Shipping Fee</p>
            <p>Free</p>
        </div>
        <hr/>
        <div className="flex justify-between py-2 mb-4">
            <p>Total</p>
            <p>${getTotalCartAmount()}</p>
        </div>
        <button className="px-6 py-3 bg-red-500 text-white">Proceed to checkout</button>
      </div>
    </div>
  );
}
