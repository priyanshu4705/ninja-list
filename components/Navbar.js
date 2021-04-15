import Link from 'next/Link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h3>Ninja List</h3>
            </div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/ninjas">Ninja Listings</Link>
        </nav>
    )
}

export default Navbar
