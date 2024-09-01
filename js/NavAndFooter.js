function Nav() {
    return (
        <header id="topbar">
            <a className="logo" href="./index.html">
                <img src="./images/logo-full-b.png" alt="回首頁" />
            </a>
            <div className="menu">
                <ul>
                    <li><a href="#">包租代管</a></li>
                    <li><a href="#">裝修服務</a></li>
                    <li><a href="#">系統介紹</a></li>
                    <li><a href="./login.html">登入註冊</a></li>
                    <li><a href="#">免費諮詢</a></li>
                </ul>
            </div>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <p>Copyright © 2024 安居代管. 保留一切權利。</p>
        </footer>
    )
}