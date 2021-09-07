import PresetTask from '../PresetTask'
import { CreateTaskHeader, GroupedTasks } from '../../StyledComponents/StyledPresetTask'

const EatIcon = <i value="customTask" className="fas fa-heart fa-xs"></i>

const EatPresetTasks = ({ handleNewDisplay }) => {
  return (
    <div>
      <CreateTaskHeader>CREATE AN EAT TASK:</CreateTaskHeader>

      <GroupedTasks>
        <PresetTask name="Drink Water" icon={<i value="customTask" className="fas fa-tint fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Energy Deficit" icon={<i value="customTask" className="fas fa-fire fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Decrease Sugar Intake" icon={<i value="customTask" className="fas fa-utensil-spoon fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>

        <PresetTask name="Decrease Caffeine Intake" icon={<i value="customTask" className="fas fa-coffee fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Protein Intake" icon={<i value="customTask" className="fas fa-egg fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/> 
        <PresetTask name="Decrease Cholesterol Intake" icon={<i value="customTask" className="fas fa-egg fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Vitamin A Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Increase Vitamin B6 Intake" icon={<i value="customTask" className="fas fa-blender fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Increase Vitamin B12 Intake" icon={<i value="customTask" className="fas fa-capsules fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Increase Vitamin C Intake" icon={<i value="customTask" className="fas fa-camera fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Increase Vitamin D Intake" icon={<i value="customTask" className="fas fa-camera fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Increase Vitamin E Intake" icon={<i value="customTask" className="fas fa-camera fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Increase Vitamin K Intake" icon={<i value="customTask" className="fas fa-camera fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Decrease Total Fat Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Saturated Fat Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Monounsaturated Fat Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Polyunsaturated Fat Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Calcium Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Calcium Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Carbohydrate Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Carbohydrate Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Chloride Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Chloride Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Chromium Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Chromium Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Copper Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Calcium Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>
      
      <GroupedTasks>
        <PresetTask name="Increase Fiber Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Fiber Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Folate Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Folate Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Iodine Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Iodine Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Iron Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Iron Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Magnesium Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Magnesium Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Manganese Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Manganese Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Niacin Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Niacin Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Phosphorus Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Phosphorus Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Potassium Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Potassium Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Riboflavin Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Riboflavin Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Selenium Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Selenium Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Sodium Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Sodium Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Thiamin Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Thiamin Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

      <GroupedTasks>
        <PresetTask name="Increase Zinc Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
        <PresetTask name="Decrease Zinc Intake" icon={<i value="customTask" className="fas fa-dog fa-2x"></i>} presetIcon={EatIcon} handleNewDisplay={handleNewDisplay}/>
      </GroupedTasks>

    </div>
  )
}

export default EatPresetTasks;