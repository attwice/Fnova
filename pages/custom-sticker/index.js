import OrderContainer from "containers/Order"
import Head from "next/head"

const Order = () => {

  return (
   <div>
       <Head>
           <title> Order Now - Custom Stickers | StickerCove </title>
           <meta name="description" content="Start your order today for free shipping, artwork, and more! We take the stress out of the custom sticker process with our easy to use system." />
       </Head>
       <OrderContainer />
   </div>
   )
}

export default Order
