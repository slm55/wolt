function NavButton({icon, title, isActive, onClick}) {
    return (<button className="main-nav-button"
    style={isActive 
    ? { color: "white", backgroundColor: "#009de0" } 
    : { color: "#202125a3", backgroundColor: "transparent"}}
    onClick={() => {
        onClick();
        }}
    >
    {icon}
    {title}
    </button>)
}

export default NavButton;