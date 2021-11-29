import OrderSuccessComponent from "components/OrderSuccess"
import Head from 'next/head';
const OrderSuccess = () => {
  return (
    <div>
        <Head>
            <title> Thank You - Custom Stickers | StickerCove </title>
            <meta name="description" content="Thank you for your order! Recieve your stickers by your selected delivery date." />
        </Head>
        <OrderSuccessComponent />
    </div>
    )
}

export default OrderSuccess
