import Link from "next/link"
import { useRouter } from 'next/router'
import { useEffect } from "react"

const Error = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])


    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h3>Page {router.asPath} Not Found</h3>
            <p>Go Back to <Link href="/">Home Page</Link></p>
        </div>
    )
}

export default Error
