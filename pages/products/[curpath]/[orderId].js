import SizeQuantityContainer from "containers/SizeQuantity"
import Head from 'next/head';

const SizeQuantity = () => {
  return (
   <div>
       <Head>
           <title> Customize Your Order - Custom Stickers | StickerCove </title>
           <meta name="description" content="Customize your order by selecting a custom size and quantity of stickers." />
       </Head>
       <SizeQuantityContainer />
   </div>
   )
} 

export default SizeQuantity
