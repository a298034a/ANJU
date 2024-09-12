function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);

    const [menuActive, setMenuActive] = useState(false);
    const [reverseAnim, setReverseAnim] = useState(false);

    const handleMenuClick = () => {
        setMenuActive(!menuActive);
        setReverseAnim(false); // 每次點擊漢堡按鈕時，移除 reverse_anim
    };

    const handleCloseClick = () => {
        setReverseAnim(true); // 點擊關閉按鈕時啟動 reverse_anim
        setMenuActive(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header id="topbar" style={{
            borderBottom: isScrolled ? "5px solid #304173" : "5px solid transparent",
            boxShadow: isScrolled ? "0px 1px 2px 0px rgba(0, 0, 0, 25%)" : "none"
        }}>
            <a className="logo" href="./index.html">
                <img src="./images/logo-full-b.png" alt="回首頁" />
            </a>
            <div className="hambergur" onClick={handleMenuClick}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className="menu">
                <ul>
                    <li><a href="./property-management.html">包租代管</a></li>
                    <li><a href="./furnish.html">裝修服務</a></li>
                    <li><a href="./system-describe.html">系統介紹</a></li>
                    <li><a href="./login.html">登入註冊</a></li>
                    <li><a href="./consult.html">免費諮詢</a></li>
                </ul>
            </nav>
            <nav className={`pad-menu ${menuActive ? 'active' : ''} ${reverseAnim ? 'reverse_anim' : ''}`}>
                <ul>
                    <li><a href="./login.html">登入註冊</a></li>
                    <li><a href="./consult.html">免費諮詢</a></li>
                    <li><a href="./property-management.html">包租代管</a></li>
                    <li><a href="./furnish.html">裝修服務</a></li>
                    <li><a href="./system-describe.html">系統介紹</a></li>
                </ul>
                <div class="close" onClick={handleCloseClick}>
                    <div></div>
                </div>
            </nav>
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