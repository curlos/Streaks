import React from 'react'
import styled from 'styled-components'
import ListElemWithIcon from '../../ListElem/ListElemWithIcon'
import ConfirmationTask from './HelperComponents/ConfirmationTask'
import PlusMinusListElem from './HelperComponents/PlusMinusListElem'
import { Link, useParams } from 'react-router-dom'

const ConfirmTaskTitleContainer = styled.div`
  border-radius: 20px 20px 0 0;
  margin: 0;
  padding: 20px;
  background-color: #202020;
`

const ConfirmTaskTitle = styled.div`
  text-align: center;
  font-size: 25px;
`

const ConfirmTaskHeader = styled.div`
  
`

const ConfirmTaskBody = styled.div`
  background-color: black;
`

const GroupedTasks = styled.div`
  margin-bottom: 25px;
`

const SaveTaskContainer = styled.span`
  display: flex;
  justify-content: center;
`

const SaveTaskButton = styled.div`
  text-align: center;
  background-color: ${props => props.color};
  border-radius: 10px;
  padding: 15px;
  padding-left: 35%;
  padding-right: 35%;
`

const CharLimit = styled.div`
  color: lightgray;
  margin: 10px;
`

const TitleText = styled.div`
  color: lightgray;
  margin: 10px;
`

const ConfirmationScreen = ({ selectedTaskType, task, handleTaskChange, chosenColor, handleSave, handleEdit, handleDelete, edit, tasksObj, toggleModal }) => {

  const { id } = useParams()
  const currentTask = {...task}

  const changeMeasurementDuration = (newMeasurementDuration) => {
    handleTaskChange({...currentTask, measurementDuration: newMeasurementDuration})
  }

  const changeFrequency = (numChange) => {

    switch (currentTask.measurementDuration.type) {
      case 'daily':
        const newDaily = {...currentTask.daily, frequency: currentTask.daily.frequency + numChange}
        handleTaskChange({...currentTask, daily: newDaily})
        break
      case 'weekly':
        const newWeekly = {...currentTask.daily, frequency: currentTask.daily.frequency + numChange}
        handleTaskChange({...currentTask, daily: newWeekly})
        break
      case 'monthly':
        const newMonthly = {...currentTask.daily, frequency: currentTask.daily.frequency + numChange}
        handleTaskChange({...currentTask, daily: newMonthly})
        break
      default:
        break
    }
  }

  const changeTaskDays = (newTaskDays) => {
    const newDaily = {...currentTask.daily, taskDays: newTaskDays}
    handleTaskChange({...currentTask, daily: newDaily})
  }

  const changeStartWeekOn = (newStartDay) => {
    const newWeekly = {...currentTask.weekly, startWeekOn: newStartDay}
    handleTaskChange({...currentTask, weekly: newWeekly})
  }

  const changeColor = (newColor) => {
    handleTaskChange({...currentTask, color: newColor})
  }

  const getTaskDuration = () => {
    const taskDuration = {
      daily: 'day',
      weekly: 'week',
      monthly: 'month'
    }

    return taskDuration[currentTask.measurementDuration.type]
  }

  const getTaskFrequency = () => {
    const taskDayType = currentTask.measurementDuration.type

    return currentTask[taskDayType].frequency
  }

  const getLinkURL = (selectedTaskType) => {
    const LinkTypes = {
      'customTask': '/',
      'healthTask': '/health-task',
      'eatTask': '/eat-task',
      'timedTask': '/timed-task',
      'negativeTask': '/negative-task'
    }

    if (edit) {
      return LinkTypes[selectedTaskType] + `/edit/${id}`
    }

    return LinkTypes[selectedTaskType]
  }

  const measurementTitle = `${currentTask.measurementDuration.type[0].toUpperCase() + currentTask.measurementDuration.type.slice(1,).toLowerCase()} Task`
  const measurementIconName = currentTask.measurementDuration.iconName

  const handleChangeTaskTitle = (e) => {
    const newTitle = e.target.value
    
    if (newTitle.length <= 28) {
      handleTaskChange({...currentTask, title: newTitle})
    }
  }

  return (
    <div>
      <ConfirmTaskHeader>
        <ConfirmTaskTitleContainer>
          {edit ? (
            <Link to="/">
              <i value="start" className="fas fa-times fa-2x" onClick={toggleModal}></i>
            </Link>
          ) : (
            <Link to={getLinkURL(selectedTaskType)}>
              <i value="goBack" className="fas fa-less-than fa-2x"></i>
            </Link>
          )}
          <ConfirmTaskTitle>{edit ? 'Edit Task' : 'Confirm Task'}</ConfirmTaskTitle>
        </ConfirmTaskTitleContainer>
        <ConfirmationTask taskObject={currentTask} iconClassName={currentTask.icon} chosenColor={currentTask.color.color} edit={edit}/>
      </ConfirmTaskHeader>

      <ConfirmTaskBody>
        <TitleText>Title:</TitleText>
        <GroupedTasks>
          <input value={currentTask.title} onChange={handleChangeTaskTitle} className="customInput"/>

          <CharLimit>
            {`${currentTask.title.length}/28`}
          </CharLimit>
        </GroupedTasks>

        <GroupedTasks>
          <Link to={edit ? `/confirm/edit/measurement-duration/${id}` : "/confirm/measurement-duration"}>
            <ListElemWithIcon title={measurementTitle} iconClassName={`fas fa-${measurementIconName}`} changeMeasurementDuration={changeMeasurementDuration} currentTask={currentTask} chosenColor={currentTask.color.color}/>
          </Link>

          {currentTask.measurementDuration.type === 'daily' ? 
          (<Link to={edit ? `/confirm/edit/task-days/${id}` : "/confirm/task-days"}>
            <ListElemWithIcon title={"Task Days"} iconClassName={"fas fa-calendar"} changeTaskDays={changeTaskDays} currentTask={currentTask} chosenColor={currentTask.color.color}/>
          </Link>) : null
          }

          <PlusMinusListElem title={`${getTaskFrequency()} time/${getTaskDuration()}`} iconClassName={"far fa-circle"} changeFrequency={changeFrequency} currentTask={currentTask} chosenColor={currentTask.color.color} description="plusMinus" handleTaskChange={handleTaskChange}/>

          {currentTask.measurementDuration.type === 'weekly' ?
          (<Link to={edit ? `/confirm/edit/start-week-on/${id}`: "/confirm/start-week-on"}>

            <ListElemWithIcon title={"Start Week On"} iconClassName={"fas fa-calendar"} changeStartWeekOn={changeStartWeekOn} currentTask={currentTask} chosenColor={currentTask.color.color} />

          </Link>) : null
          }
        </GroupedTasks>

        <GroupedTasks>
          <Link to={edit ? `/confirm/edit/color/${id}`: "/confirm/color"}>
            <ListElemWithIcon title={"Color"} iconClassName={"fas fa-palette"} changeColor={changeColor} currentTask={currentTask} chosenColor={currentTask.color.color} description="color"/>
          </Link>

          {edit ? (
            <Link to={`/confirm/edit/calendar/${id}`}>
              <ListElemWithIcon title={"Calendar"} iconClassName={"fas fa-calendar"} changeColor={changeColor} currentTask={currentTask} chosenColor={currentTask.color.color}/>
            </Link>
          ): null}
        </GroupedTasks>

        {edit ? (
          <GroupedTasks>
            <ListElemWithIcon title={"Delete Task"} iconClassName={"far fa-trash-alt"} clickHandler={handleDelete} currentTask={currentTask} chosenColor={currentTask.color.color} description="delete"/>
        </GroupedTasks>
        ) : null}
        
        {edit ? (
          <GroupedTasks>
            <Link to="/">
              <SaveTaskContainer>
                <SaveTaskButton color={currentTask.color.color} onClick={handleEdit}>Done</SaveTaskButton>
              </SaveTaskContainer>
            </Link>
          </GroupedTasks>
        ) : (
          <GroupedTasks>
            <Link to="/">
              <SaveTaskContainer>
                <SaveTaskButton color={currentTask.color.color} onClick={handleSave}>Save Task</SaveTaskButton>
              </SaveTaskContainer>
            </Link>
          </GroupedTasks>
        )}

      </ConfirmTaskBody>
    </div>
  )
}

export default ConfirmationScreen;