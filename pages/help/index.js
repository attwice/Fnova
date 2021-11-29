import HelpContainer from "containers/Help"
import Head from "next/head"

const Help = () => {
  return (
   <div>
      <Head>
         <title> Help - Custom Stickers | StickerCove</title>
         <meta name="description" content="Sticker covers for you" />
      </Head>
       <HelpContainer />
   </div>
   )
} 

export default Help
