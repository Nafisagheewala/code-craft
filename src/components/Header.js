import headerLogo from '../assets/headerLogo.png'
export default function Header() {
    return (
        <div className="header">
            <img src={headerLogo} alt="Logo" className="header-logo"/>
            <div className="title">
            <h2>CodeCraft</h2>
            <p>- Where code meets creativity!</p>
            </div>
        </div>
    )
}