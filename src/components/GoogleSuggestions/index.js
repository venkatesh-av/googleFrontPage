import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestionsList: props.suggestionsList,
      inputText: '', // Add a new state property for the input text
    }
  }

  changeList = event => {
    const {suggestionsList} = this.props
    const inputValue = event.target.value.toLowerCase()
    const filteredUsersData = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(inputValue),
    )

    this.setState({
      suggestionsList: filteredUsersData,
      inputText: inputValue, // Update the input text in the state
    })
  }

  setInputField = text => {
    this.setState({
      inputText: text,
      suggestionsList: [],
    })
  }

  render() {
    const {suggestionsList, inputText} = this.state
    return (
      <div className="main-bg">
        <div className="main-bg-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-img"
            alt="google_image"
          />
          <div className="input-bg-box">
            <div className="input-bg-box-inner">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-img"
                alt="search-ele"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="input-edit"
                value={inputText} // Set the input value from the state
                onChange={this.changeList}
              />
            </div>
            <div>
              {suggestionsList.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  eachItem={eachItem}
                  setInputField={this.setInputField} // Pass the setInputField method as a prop
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
