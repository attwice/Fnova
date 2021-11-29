import CartContainer from "containers/Cart"
import Head from "next/head"

const Cart = () => {

  return (
   <div>
       <Head>
           <title> Cart - Custom Stickers | StickerCove </title>
           <meta name="description" content="View your cart and order your custom stickers today." />
       </Head>
       <CartContainer /> 
   </div>
   )
}

export default Cart
