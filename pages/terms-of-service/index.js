import TermsOfServiceComponent from "components/TermsOfService"
import Head from 'next/head';
const TermsOfService = () => {
 
  return (
   <div>
       <Head>
           <title> Terms of Service - Custom Stickers | StickerCove </title>
           <meta name="description" content="View our Terms of Service." />
       </Head>
       <TermsOfServiceComponent />
   </div>
   )
} 

export default TermsOfService
