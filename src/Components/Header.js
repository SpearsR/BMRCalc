import titleBackground from '../media/svg/title_background.svg';


function Header() {
    return (
       <div className="title-container">
            <h1>BMR Calculator</h1>
           <img className='title-background' src={titleBackground} alt='some circle'/>
       </div> 
       
    );
}

export default Header;