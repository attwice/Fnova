import CheckoutContainer from "containers/Checkout"
import Head from 'next/head'

const Checkout = () => {
  return (
   <div>
      
       <Head>
           <title> Checkout - Custom Stickers | StickerCove </title>
           <meta name="description" content="Checkout and have your custom stickers delivered by your selected delivery date." />
       </Head>
       <CheckoutContainer />
   </div>
   )
}

export default Checkout
