import React from 'react'
class ListBox extends React.Component{
    render(){
        return(
            <div>
                <ul className="listBox">
                    <li>
                        <img src="../images/1.jpg" alt=""/>
                        <div className="content">
                            <h2>爱乐奇</h2>
                            <p className="detail">
                                <span className="pos">人力资源部实习生 [ 上海 ]</span>
                                <span className="salary">2k-3k</span>
                            </p>
                            <p className="time">今天 12:33</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default ListBox;