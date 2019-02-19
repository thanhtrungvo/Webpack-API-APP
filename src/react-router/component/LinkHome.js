import  React from 'react'

class LinkHome extends React.Component{
    render(){
        return(
            <div className="card text-white bg-dark mb-3" >
                <div className="card-header">Trang chủ</div>
                <div className="card-body">
                    <h5 className="card-title">Đây là trang chủ</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    }
}

export default LinkHome;