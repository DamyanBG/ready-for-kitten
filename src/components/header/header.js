import catLogo from "../../images/u3-cat-logo.png"

export default function Header() {
    return (
        <header>
            <img src={catLogo} alt="Cat logo" />
            <h1>Ready For Kitten</h1>
        </header>
    )
}