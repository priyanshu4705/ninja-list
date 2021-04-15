import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, delectus! Sint, ipsa. Impedit amet, dignissimos quo nobis quibusdam aliquam voluptatibus. Excepturi, placeat. At atque sapiente minus tempore, a quam mollitia soluta ratione maiores repudiandae.</p>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, delectus! Sint, ipsa. Impedit amet, dignissimos quo nobis quibusdam aliquam voluptatibus. Excepturi, placeat. At atque sapiente minus tempore, a quam mollitia soluta ratione maiores repudiandae.</p>
        <Link href="/ninjas"><a className={styles.btn}>see Ninja Listings</a></Link>
      </div>
    </>
  )
}
