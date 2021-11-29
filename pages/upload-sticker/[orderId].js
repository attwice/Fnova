import UploadStickerContainer from "containers/UploadSticker"
import Head from 'next/head';

const UploadSticker = () => {

  return (
   <div>
       <Head>
           <title> Upload Your Sticker - Custom Stickers | StickerCove </title>
           <meta name="description" content="Upload your artwork, recieve a proof, and have your custom stickers produced." />
       </Head>
       <UploadStickerContainer />
   </div>
   )
} 

export default UploadSticker
