import {Component} from 'react'
import './index.css'
import SlideListItems from '../SlideListItem'
import SlideContextObj from '../../Context'
import Slide from '../Slide'

class Sliders extends Component {
  render() {
    return (
      <SlideContextObj.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlideListItems
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </SlideContextObj.Consumer>
    )
  }
}

export default Sliders
