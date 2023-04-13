import {Component} from 'react'
import {format} from 'date-fns'
import './index.css'

class AppointmentItem extends Component {
  state = {
    isStar: false,
  }

  render() {
    const {appointmentItem, starrList} = this.props
    const {title, date} = appointmentItem
    const dateItem = format(new Date(date), 'dd MMMM yyyy, EEEE')

    const onStarEmoji = () => {
      const {isStar} = this.state
      if (isStar === false) {
        starrList(appointmentItem)
        this.setState({
          isStar: true,
        })
      } else {
        this.setState({
          isStar: false,
        })
      }
    }

    const {isStar} = this.state
    const isStarEmoji = !isStar
      ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    return (
      <li className="list-cont">
        <div className="sta-contt">
          <p className="head">{title}</p>
          <button
            type="button"
            className="button-emoji"
            onClick={onStarEmoji}
            data-testid="star"
          >
            <img src={isStarEmoji} alt="star" className="star-emoji" />
          </button>
        </div>
        <p className="para">Date: {dateItem}</p>
      </li>
    )
  }
}
export default AppointmentItem
