// Write your code here
import { Component } from "react";
import './index.css'

class ReviewsCarousel extends Component{
    state = {count : 0}

    onLeftClick = () => {
        const {count} = this.state
        let updateCount = count
        if(updateCount > 0){
            updateCount -= 1
        }
        this.setState({count : updateCount})
    }

    onRightClick = () => {
        const {count} = this.state
        let updateCount = count
        if(updateCount < 3){
            updateCount += 1
        }
        this.setState({count : updateCount})
    }

    render(){
        const {reviewsList} = this.props
        const {count} = this.state
        const profile = reviewsList[count]
        return(
            <div className="main-container">
                <div className="responsive-cont">
                    <button data-testid="leftArrow" onClick={this.onLeftClick} className="button" type="button">
                        <img src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" alt="left arrow" />
                    </button>
                    <div className="profile-cont">
                        <h1 className="heading">Reviews</h1>
                        <img src={profile.imgUrl} alt={profile.username} />
                        <p className="name">{profile.username}</p>
                        <p className="company">{profile.companyName}</p>
                        <p className="description">{profile.description}</p>
                    </div>
                    <button data-testid="rightArrow" onClick={this.onRightClick} className="button" type="button">
                        <img src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" alt="right arrow" />
                    </button>
                </div>
            </div>
        )
    }
}

export default ReviewsCarousel