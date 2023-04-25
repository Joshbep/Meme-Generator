function Header() {
    return (
        <header className="header">
            <img 
                src={require("../images/troll-face.png")} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Josh Pasour</h4>
        </header>
    )
}

export default Header