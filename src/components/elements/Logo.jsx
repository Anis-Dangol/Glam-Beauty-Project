import { Link } from 'react-router-dom'

const Logo = () => {
    return (
    <div className="flex items-center p-4">
    <Link to="/" className="font-bold text-[20px] text-[#5B4636]">
        Glam Beauty
    </Link>
    </div>
    )
}

export default Logo