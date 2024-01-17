import styles from '../app/styles/page.module.css'
import Image from  'next/image'
import logoImg from '../../../public/log.png'
function Navbar(){
    return(
        <div className="navLine">
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                {/* <img className="logoImg" src="/log.png" alt="QQ"></img> */}
                <a className="navbar-brand navbar-icon" href=""><Image className="logoImg" src={logoImg}  width={95}  height={95} alt="no pics"></Image></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">使用說明</a>
                    </li>
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">站點資訊</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">最新消息</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link " href="#">活動專區</a>
                    </li>
                    </ul>
                    <button className="btn-login">
                        登入
                    </button> 
                </div>
            </nav>     
            </div>
            </div>
    )
}
export default Navbar;