import DashboardContainer from "containers/Dashboard"
import Head from 'next/head'

const Dashboard = () => {

  return (
   <div>
       <Head>
         <title>StickerCove | Order Custom Stickers Today | Delivered In 48 Hours</title>
         <meta name="description" content="Sticker covers for you" />
      </Head>
       <DashboardContainer />
   </div>
   )
} 

export default Dashboard
