import styles from '../../styles/Jobs.module.css'
import Head from 'next/head'
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());

    return {
        props: {
            ninjas: res
        }
    }
}

function index({ ninjas }) {

    // console.table(ninjas);

    return (
        <div>
            <Head>
                <title>My Ninja List</title>
            </Head>
            <h1>All ninjas</h1>
            {ninjas.map(ninja => (
                <Link href={`/ninjas/${ninja.id}`} key="ninja.id">
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default index;
