import React from "react"
import ListBox from '../component/lists'

class Layout extends React.Component{

    render(){
        return(
            <div className="m-index">
                <header>拉勾网</header>
                <nav className="border">
                    <div>10秒钟定制职位</div>
                    <button>去登录</button>
                </nav>
                <section>
                    <ListBox />
                </section>
                <footer>
                    <ul>
                        <li className="active">
                            <span  className="yo-ico">&#xe64b;</span>
                            职位
                        </li>
                        <li>
                            <span  className="yo-ico">&#xe656;</span>
                            搜索
                        </li>
                        <li className="yo-ico">我的</li>
                    </ul>
                </footer>
            </div>
        )
    }

}

export default Layout