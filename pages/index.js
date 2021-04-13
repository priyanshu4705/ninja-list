import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, delectus! Sint, ipsa. Impedit amet, dignissimos quo nobis quibusdam aliquam voluptatibus. Excepturi, placeat. At atque sapiente minus tempore, a quam mollitia soluta ratione maiores repudiandae.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, delectus! Sint, ipsa. Impedit amet, dignissimos quo nobis quibusdam aliquam voluptatibus. Excepturi, placeat. At atque sapiente minus tempore, a quam mollitia soluta ratione maiores repudiandae.</p>
      <Link href="/ninjas">see Ninja Listings</Link>
    </div>
  )
}
