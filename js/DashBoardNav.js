function DashBoardNav({ activePage }) {
    return (
        <>
            <nav id="dashboard-nav">
                <div className="wraper">
                    <div className="top">
                        <figure>
                            <img src="./images/logo-full-w.png" alt="安居代管LOGO" />
                        </figure>
                    </div>
                    <div className="down">
                        <ul className="category-list">
                            <li className={activePage === 'dashboard' ? 'active' : ''}><a href="#"><div className="icon speedometer"></div><span>儀表板</span></a></li>
                            <li className={activePage === 'overview' ? 'active' : ''}><a href="#"><div className="icon home"></div><span>物業總覽</span></a></li>
                            <li className={activePage === 'lease' ? 'active' : ''}><a href="#"><div className="icon lease"></div><span>租賃管理</span></a></li>
                            <li className={activePage === 'renovation' ? 'active' : ''}><a href="#"><div className="icon paintBrush"></div><span>裝修歷程</span></a></li>
                            <li className={activePage === 'finance' ? 'active' : ''}><a href="#"><div className="icon moneyBag"></div><span>財務報告</span></a></li>
                        </ul>
                        <ul className="system-list">
                            <li><a href="#"><div className="icon settings"></div><span>設定</span></a></li>
                            <li><a href="./index.html"><div className="icon logout"></div><span>登出</span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}