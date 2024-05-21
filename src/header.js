const Header= ({brandlogo})=> {
    return(
        <header className='header-container'>
        <img className='header-logo' src={brandlogo}/>
        </header>
    )
}

export default Header;