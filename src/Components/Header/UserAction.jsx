import Link from "next/link"

const UserAction = () => {
    return (
        <div className="user-action">
            <Link href='/' className="login-signup-btn">ورود | ثبتنام</Link>
            <Link href='/' className="add-ads-btn">ثبت آگهی</Link>
        </div>
    )
}

export default UserAction
