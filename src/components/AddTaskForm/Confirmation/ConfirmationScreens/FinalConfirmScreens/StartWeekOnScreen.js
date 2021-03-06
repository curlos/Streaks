import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ConfirmationListElem from '../HelperComponents/ConfirmationListElem'
import styled from 'styled-components'

const ListTitle = styled.span`
  font-size: 25px;
`

const ListHeader = styled.div`
  border-radius: 20px 20px 0 0;
  background-color: #202020;
  padding: 15px;
`

const ListBody = styled.div`
  background-color: black;
`

const ListDesc = styled.div`
  padding: 20px;
  padding-top: 40px;
  color: #9e9e9e;
`

const GroupedTasks = styled.div`
  margin-bottom: 25px;
`

const StartWeekOnScreen = ({ currentTask, handleTaskChange, automaticColor }) => {

  const { id } = useParams()
  const startWeekOn = {...currentTask.weekly.startWeekOn}

  const handleCheck = (e) => {
    const checkedDay = e.target.getAttribute('value')

    Object.keys(startWeekOn).forEach((day) => {
      console.log([day, checkedDay])
      if (day === checkedDay) {
        console.log(`Selected ${[day]}`)
        startWeekOn[day] = true
      } else {
        startWeekOn[day] = false
      }
    })

    const newWeekly = {...currentTask.weekly, startWeekOn: startWeekOn}
    handleTaskChange({...currentTask, weekly: newWeekly})
  }

  const getLinkURL = () => {
    if (id) {
      return `/confirm/edit/${id}`
    }

    return '/confirm'
  }

  return (
    <div>
      <ListHeader>
        <Link to={getLinkURL()}>
          <i value="goBack" className="fas fa-less-than fa-2x"></i>
        </Link>
        <ListTitle>Start Week On</ListTitle>
      </ListHeader>

      <ListBody>
        <ListDesc></ListDesc>
        <GroupedTasks>
          {['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map((day) => {
            const titleCaseDay = day[0].toUpperCase() + day.slice(1)

            return (
              <ConfirmationListElem title={titleCaseDay} clickHandler={handleCheck} checked={startWeekOn[day]} automaticColor={automaticColor} value={day}/>
            )
          })}
        </GroupedTasks>

      </ListBody>
    </div>
  )
}

export default StartWeekOnScreen;