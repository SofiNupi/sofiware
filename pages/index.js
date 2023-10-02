import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sofiware</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



        <div className={styles.banner}>
          Llevando adelante mis ideas
        </div>
      <main className={styles.main}>


        <img width={'350px'} src='https://www.estoyalpedo.com/logo/sofiware.png'/>

       

        {/* <a style={{marginTop: '20px'}} href='https://cafecito.app/sofiware' rel='noopener' target='_blank'><img srcset='https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_5.png' alt='Invitame un café en cafecito.app' /></a> */}
        {/* <div>
          Ayudame a seguir creciendo
          Invitame un cafecito
          Alias mp: 
        </div> */}



        <div className={styles.appsContainer}>

          <a href='http://www.estoyalpedo.com' target="_blank"> <img width={"350px"} src='/estoyalpedo.png'/></a>

          <a href='http://www.pictoricotextil.com' target="_blank">
            <img width={"150px"}  src=' https://pictoricotextil.com/icons/PictoricoVector.svg'/>
            <div> Pictórico Textil </div>

          </a>

          <a href='http://www.sofinupieri.com' target="_blank">
            <img width={"300px"}  src='/BlogSofi.png'/>


          </a>

        </div>
      </main>


      {/* <footer className={styles.footer}>

      </footer> */}
    </div>
  )
}
