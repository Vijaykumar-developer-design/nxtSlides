import {Component} from 'react'
import './App.css'
import Head from './components/Header'
import NewBtn from './components/NewButton'
import Sliders from './components/Slides'

import SlideContextObj from './Context'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
]

// Replace your code here

class App extends Component {
  state = {
    initialList: initialSlidesList,
    activeIndex: 0,
  }

  changeHeading = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = initialList.map((eachItem, index) => {
        if (activeIndex === index) {
          return {...eachItem, heading: value}
        }
        return eachItem
      })
      return {initialList: newList}
    })
  }

  ChangeDescription = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = initialList.map((eachItem, index) => {
        if (activeIndex === index) {
          return {...eachItem, description: value}
        }
        return eachItem
      })
      return {initialList: newList}
    })
  }

  changeActiveTab = index => {
    this.setState({activeIndex: index})
  }

  addNewItem = item => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = insert(initialList, activeIndex + 1, item)
      return {initialList: [...newList]}
    })
  }

  render() {
    const {initialList, activeIndex} = this.state
    console.log(activeIndex)
    return (
      <div>
        <Head />
        <SlideContextObj.Provider
          value={{
            initialList,
            activeIndex,
            changeActiveTab: this.changeActiveTab,
            addNewItem: this.addNewItem,
            changeHeading: this.changeHeading,
            ChangeDescription: this.ChangeDescription,
          }}
        >
          <>
            <NewBtn />
            <Sliders />
          </>
        </SlideContextObj.Provider>
      </div>
    )
  }
}

export default App

// import {useState} from 'react'
// import {v4 as uuidv4} from 'uuid'
// import './App.css'

// const initialSlidesList = [
//   {
//     id: 'cc6e1752-a063-11ec-b909-0242ac120002',
//     heading: 'Welcome',
//     description: 'Rahul',
//   },
//   {
//     id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
//     heading: 'Agenda',
//     description: 'Technologies in focus',
//   },
//   {
//     id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
//     heading: 'Cyber Security',
//     description: 'Ethical Hacking',
//   },
//   {
//     id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
//     heading: 'IoT',
//     description: 'Wireless Technologies',
//   },
//   {
//     id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
//     heading: 'AI-ML',
//     description: 'Cutting-Edge Technology',
//   },
//   {
//     id: 'cc6e2224-a063-11ec-b909-0242ac120002',
//     heading: 'Blockchain',
//     description: 'Emerging Technology',
//   },
//   {
//     id: 'cc6e233c-a063-11ec-b909-0242ac120002',
//     heading: 'XR Technologies',
//     description: 'AR/VR Technologies',
//   },
// ]

// // Replace your code here
// const App = () => {
//   const [present, UpdatePresent] = useState(initialSlidesList[0])
//   const [active, UpdateActive] = useState(false)

//   //   const FindIndex = item => {
//   //     const index = initialSlidesList.findIndex(element => element === item)
//   //     return index
//   //   }

//   const AddSlide = () => {
//     console.log(initialSlidesList)
//     const newObj = {
//       id: uuidv4(),
//       heading: 'Heading',
//       description: 'Description',
//     }
//     UpdatePresent(newObj)

//     const index = initialSlidesList.findIndex(element => element === present)
//     initialSlidesList.splice(index + 1, 0, newObj)
//     // const elIndex = FindIndex(present)
//     console.log('ddd', index)
//   }
//   const UpdateObj = event => {
//     event.preventDefault()
//     UpdatePresent(prevState => ({...prevState, heading: event.target.value}))
//   }

//   const UpdateDesc = event => {
//     event.preventDefault()
//     UpdatePresent(prevState => ({
//       ...prevState,
//       description: event.target.value,
//     }))
//   }

//   const handleTabClick = item => {
//     UpdatePresent(item)
//     // const myArr = initialSlidesList.filter(each =>
//     //   each.id === item.id ? {...each, heading: present.heading} : each,
//     // )
//     // initialSlidesList = myArr
//   }

//   return (
//     <div>
//       <nav className="nav-bar">
//         <img
//           className="logo"
//           src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png "
//           alt="nxt slides logo"
//         />
//         <h1 className="logo-head">Nxt Slides</h1>
//       </nav>
//       <button onClick={AddSlide} className="btn" type="button">
//         <img
//           className="btn-img"
//           src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
//           alt="new plus icon"
//         />
//         <span className="new">New</span>
//       </button>
//       <div className="big-card">
//         <ol className="ul-list">
//           {initialSlidesList.map((item, index) => (
//             <li
//               testid={`slideTab${index + 1}`}
//               className="li"
//               key={item.id}
//               onClick={() => handleTabClick(item)}
//             >
//               <p>{index + 1}</p>
//               <div className="child">
//                 <h1 className="head">{item.heading}</h1>
//                 <p className="para">{item.description}</p>
//               </div>
//             </li>
//           ))}
//         </ol>
//         <div className="current-slide">
//           {/* <input
//             type="text"
//             name="head"
//             onChange={UpdateObj}
//             value={present.heading}
//             id={present.id}
//             className="head-h"
//           />
//           <input
//             className="para-p"
//             type="text"
//             name="para"
//             onChange={UpdateDesc}
//             value={present.description}
//             id={present.id}
//           /> */}
//           {active ? (
//             <div>
//               <h1>{present.heading}</h1>
//               <p>{present.description}</p>
//             </div>
//           ) : (
//             ''
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

// // import React, {useState} from 'react'

// // const App = () => {
// //   const [slides, setSlides] = useState([
// //     {id: 1, heading: 'Slide 1', description: 'Description 1'},
// //   ])
// //   const [activeSlide, setActiveSlide] = useState(1)

// //   const handleTabClick = slideId => {
// //     setActiveSlide(slideId)
// //   }

// //   const handleHeadingClick = (event, slideId) => {
// //     const updatedHeading = prompt('Enter new heading:')
// //     if (updatedHeading) {
// //       const updatedSlides = slides.map(slide => {
// //         if (slide.id === slideId) {
// //           return {...slide, heading: updatedHeading}
// //         }
// //         return slide
// //       })
// //       setSlides(updatedSlides)
// //     }
// //   }

// //   const handleDescriptionClick = (event, slideId) => {
// //     const updatedDescription = prompt('Enter new description:')
// //     if (updatedDescription) {
// //       const updatedSlides = slides.map(slide => {
// //         if (slide.id === slideId) {
// //           return {...slide, description: updatedDescription}
// //         }
// //         return slide
// //       })
// //       setSlides(updatedSlides)
// //     }
// //   }

// //   const handleNewSlide = () => {
// //     const newSlideId = slides.length + 1
// //     const newSlide = {
// //       id: newSlideId,
// //       heading: `Slide ${newSlideId}`,
// //       description: `Description ${newSlideId}`,
// //     }
// //     const updatedSlides = [...slides]
// //     const activeSlideIndex = updatedSlides.findIndex(
// //       slide => slide.id === activeSlide,
// //     )
// //     updatedSlides.splice(activeSlideIndex + 1, 0, newSlide)
// //     setSlides(updatedSlides)
// //     setActiveSlide(newSlideId)
// //   }

// //   return (
// //     <div>
// //       <nav>
// //         <img
// //           src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
// //           alt="nxt slides logo"
// //         />
// //       </nav>
// //       <div className="slide-tabs-panel">
// //         <ul>
// //           {slides.map(slide => (
// //             <li
// //               key={slide.id}
// //               testid={`slideTab${slide.id}`}
// //               className={slide.id === activeSlide ? 'active' : ''}
// //               onClick={() => handleTabClick(slide.id)}
// //             >
// //               {slide.heading}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //       <div className="current-slide">
// //         <h2
// //           onClick={event => handleHeadingClick(event, activeSlide)}
// //           testid="currentSlideHeading"
// //         >
// //           {slides.find(slide => slide.id === activeSlide).heading}
// //         </h2>
// //         <p
// //           onClick={event => handleDescriptionClick(event, activeSlide)}
// //           testid="currentSlideDescription"
// //         >
// //           {slides.find(slide => slide.id === activeSlide).description}
// //         </p>
// //       </div>
// //       <button onClick={handleNewSlide}>
// //         <img
// //           src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
// //           alt="new plus icon"
// //         />{' '}
// //         <span>New</span>
// //       </button>
// //     </div>
// //   )
// // }

// // export default App
