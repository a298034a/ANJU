function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);

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
            <div className="menu">
                <ul>
                    <li><a href="./property-management.html">包租代管</a></li>
                    <li><a href="./furnish.html">裝修服務</a></li>
                    <li><a href="./system-describe.html">系統介紹</a></li>
                    <li><a href="./login.html">登入註冊</a></li>
                    <li><a href="./consult.html">免費諮詢</a></li>
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