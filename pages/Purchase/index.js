import PurchaseContainer from "containers/Purchase"
import Head from 'next/head';

const Purchase = () => {
  return (
    <div>
        <Head>
            <title> Purchase - Custom Stickers | StickerCove </title>
            <meta name="description" content="Purchase Custom Stickers StickerCove" />
        </Head>
        <PurchaseContainer />
    </div>
    )
}

export default Purchase
