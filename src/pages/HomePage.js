import React from 'react'

class HomePage extends React.Component{
    render(){
        return(
            <div className="card">
                <img src="http://4.bp.blogspot.com/-y4QI0q0tcZQ/VlSXx1IAd8I/AAAAAAAAALI/Uz-RjztSWuA/s1600/ImageResizer.net%2B-%2Bdyzx3so82y1hs9o.jpg" 
                className="card-img-top" alt="home"/>
                <div className="card-body">
                    <h1 className="card-title btn-warning">Đây là trang chủ</h1>
                </div>
            </div>
        )
    }
}

export default HomePage;