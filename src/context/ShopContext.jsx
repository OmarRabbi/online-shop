import { createContext, useState } from "react"
import all_product from '../assets/all_product'


export const ShopContext = createContext(null)

const defaultCart = () =>{
    let cart = {}
    for (let index=0; index< all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) =>{
    const [cartItem, setCartItem] = useState(defaultCart())
    const addtoCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItem);
    }
    const removeFromCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for (const item in cartItem)
        {
            if (cartItem[item]>0){
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItem[item];
            }
            
        }
        return totalAmount;
    }
    const getTotalCartItem = () =>{
        let totalItem = 0
        for(const item in cartItem){
            if(cartItem[item] >0){
                totalItem += cartItem[item]
            }
        }
        return totalItem
    }
    const contextValue = {all_product, cartItem,getTotalCartItem, getTotalCartAmount, addtoCart, removeFromCart}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;