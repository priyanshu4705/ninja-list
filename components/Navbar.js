import Link from 'next/Link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h3>Ninja List</h3>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/ninjas">Ninja Listings</Link>
            </div>
        </nav>
    )
}

export default Navbar
