import '../styles/scss/navbar.scss'
import logo from '../assets/logo.png'
export default function Navbar () {
    let setActive = (e)=>{
        document.querySelectorAll('.nav-item').forEach(function (item) {
            item.classList.remove('active');
        })
        e.target.classList.add('active')
    }
    return (
        <>
            <div className="hor-navbar">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="navbar">
                    <div onClick={e=> setActive(e)} className="nav-item active">
                        <p>الرئيسسة</p>
                    </div>
                    <div onClick={e=> setActive(e)}  className="nav-item">
                        <p>فلسطين التاريخية</p>
                    </div>
                </div>
            </div>
        </>
    );
}