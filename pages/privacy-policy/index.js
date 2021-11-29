import PrivacyPolicyComponent from "components/PrivacyPolicy"
import Head from 'next/head';


const PrivacyPolicy = () => {
  return (
   <div>
       <Head>
           <title> Privacy Policy - Custom Stickers | StickerCove </title>
           <meta name="description" content="View our Privacy Policy" />
       </Head>
       <PrivacyPolicyComponent />
   </div>
   )
} 

export default PrivacyPolicy
