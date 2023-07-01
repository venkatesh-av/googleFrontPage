// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem, setState} = props
  const setInputField = () => {
    setState(eachItem.suggestion)
  }

  return (
    <div className="history_item">
      <p className="searchInput">{eachItem.suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-edit"
        onClick={setInputField}
      />
    </div>
  )
}

export default SuggestionItem
