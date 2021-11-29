import RefundPolicyComponent from "components/RefundPolicy"
import Head from 'next/head';

const RefundPolicy = () => {
  return (
   <div>
       <Head>
           <title> Refund Policy - Custom Stickers | Sticker Cove </title>
           <meta name="description" content="View our Refund Policy" />
       </Head>
       <RefundPolicyComponent />
   </div>
   )
} 

export default RefundPolicy
