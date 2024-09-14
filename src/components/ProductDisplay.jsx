import React, { useState, useEffect, useRef, useContext } from "react";
import star_icon from "../assets/star_icon.png";
import { ShopContext } from "../context/ShopContext";

export default function ProductDisplay(props) {
  const { product } = props;
  const { addtoCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const sizeSelectedRef = useRef(null);
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sizeSelectedRef.current && !sizeSelectedRef.current.contains(event.target)) {
        setSelectedSize(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex gap-10 px-12 py-6 h-[80vh]">
      <div className="flex">
        <div className="basis-[30%] flex flex-col gap-4">
          <img className="w-[60%] h-[60%] rounded" src={product.image} alt="" />
          <img className="w-[60%] h-[60%] rounded" src={product.image} alt="" />
          <img className="w-[60%] h-[60%] rounded" src={product.image} alt="" />
          <img className="w-[60%] h-[60%] rounded" src={product.image} alt="" />
        </div>
        <div className="basis-[70%]">
          <img className="w-[900px] h-[450px]" src={product.image} alt="" />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl py-3">{product.name}</h1>
        <div className="flex items-cneter gap-2">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <p>(30)</p>
        </div>
        <div className="flex gap-6 py-3">
          <div className="text-gray-500 line-through font-lighter">
            ${product.old_price}
          </div>
          <div className="text-red-800 font-bold">${product.new_price}</div>
        </div>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          laboriosam, soluta eligendi vel recusandae ab ullam asperiores commodi
          fuga debitis fugit molestiae voluptatum exercitationem magnam, impedit
          nostrum mollitia suscipit quaerat.
        </p>
        <div className="my-4" ref={sizeSelectedRef}>
          <h1 className="font-normal">Select Size</h1>
          <div className="flex items-center py-2 gap-4">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <p
                key={size}
                onClick={() => handleSizeClick(size)}
                className={`px-6 py-3 border rounded cursor-pointer ${
                  selectedSize === size
                    ? "bg-[#f1641e] text-white"
                    : "bg-gray-200"
                }`}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            addtoCart(product.id);
          }}
          className="border-1 rounded px-4 py-2 bg-gray-200 hover:bg-[#f1641e] hover:text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
