import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const taskContainerWidth = 200
const taskContainerHeight = 200

const TaskContainer = styled.span`

`

const TaskIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 10px solid ${props => props.colors.color};
  border-radius: 50%;
  background-color: ${props => props.colors.backgroundColor};
  width: ${taskContainerWidth}px;
  height: ${taskContainerHeight}px;
  margin: 20px;

`

const TaskIcon = styled.div`
  color: ${props => props.colors.iconColor};
  font-size: ${taskContainerWidth / 2}px;
`

const TaskNameContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.colors.chosenColor};
  font-size: 1.5em;
  text-align: center;
  text-transform: uppercase;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const TaskName = styled.span`
  text-align: center;
`

const AddTaskButton = ({ taskObject, iconClassName, chosenColor, toggleModal }) => {

  const [colors, setColors] = useState({
    color: chosenColor,
    backgroundColor: "none",
    chosenColor,
    iconColor: chosenColor
  })

  useEffect(() => {

    const newColor = colors.color !== 'gray' ? chosenColor : 'gray'
    const newBackgroundColor = colors.backgroundColor !== 'none' ? chosenColor : 'none'
    
    setColors({
      color: newColor,
      backgroundColor: newBackgroundColor,
      chosenColor,
      iconColor: newColor
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenColor])

  const handleAddTask = () => {
    toggleModal()
  }

  return (
  
      <div>
        <TaskContainer>
            <TaskIconContainer colors={colors} onClick={handleAddTask}>
            <TaskIcon colors={colors}>
              <i className={iconClassName}></i>
            </TaskIcon>
          </TaskIconContainer>
          
          <TaskNameContainer colors={colors}>
          
            <TaskName>{taskObject ? taskObject.title : 'pray to god'}</TaskName>

          </TaskNameContainer>
        </TaskContainer>
      </div>
  )
}

export default AddTaskButton;