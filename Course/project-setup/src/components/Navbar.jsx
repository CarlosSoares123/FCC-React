import icon from '/React-icon.svg.png'

function Navbar() {
  return(
    <nav>
      <img src={icon} alt="react icon png" className='nav--icon icon'/>
      <h3 className='nav--logo_text'>ReactFactus</h3>
      <h4 className='nav--title'>React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar