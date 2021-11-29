import StatusComponent from "components/Status"
import Head from 'next/head';

const Status = () => {

  return (
   <div>
       <Head>
           <title> Status - Custom Stickers | StickerCove </title>
           <meta name="description" content="Check on the progress of your awesome stickers! Our status page allows you to keep up to date on every step." />
       </Head>
       <StatusComponent />
   </div>
   )
} 

export default Status
