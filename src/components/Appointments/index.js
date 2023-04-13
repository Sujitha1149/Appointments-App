import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    starItems: [],
    appointmentList: [],
    title: '',
    date: '',
    isStarred: false,
  }

  onSubmitEventClicked = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newList = {
      id: uuidv4(),
      title,
      date,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newList],
      title: '',
      date: '',
    }))
  }

  starrList = item => {
    this.setState(prevState => ({
      starItems: [...prevState.starItems, item],
    }))
  }

  onDateClicked = event => {
    this.setState({
      date: event.target.value,
    })
  }

  onTitleClick = event => {
    this.setState({
      title: event.target.value,
    })
  }

  isStarBtn = () => {
    const {isStarred} = this.state
    if (isStarred === false) {
      this.setState({
        isStarred: true,
      })
    } else {
      this.setState({
        isStarred: false,
      })
    }
  }

  render() {
    const {starItems, appointmentList, title, date, isStarred} = this.state
    const finalList = isStarred ? starItems : appointmentList
    return (
      <div className="bg-container">
        <div className="total-conts">
          <div className="card-cont">
            <div>
              <h1>Add Appointment</h1>
              <form onSubmit={this.onSubmitEventClicked}>
                <div className="in-cont">
                  <label htmlFor="title">TITLE</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Title"
                    id="title"
                    onChange={this.onTitleClick}
                    value={title}
                  />
                  <br />
                </div>
                <div className="in-cont">
                  <label htmlFor="date">DATE</label>
                  <br />
                  <input
                    type="date"
                    id="date"
                    onChange={this.onDateClicked}
                    value={`${date}`}
                  />
                  <br />
                </div>
                <button
                  type="button"
                  className="button"
                  onClick={this.onSubmitEventClicked}
                >
                  Add
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr />
          <div className="app-cont">
            <h1>Appointments</h1>
            <button
              type="button"
              className="starred-btn"
              onClick={this.isStarBtn}
            >
              Starred
            </button>
          </div>
          <ul className="start-list">
            {finalList.map(eachList => (
              <AppointmentItem
                appointmentItem={eachList}
                key={eachList.id}
                starrList={this.starrList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
