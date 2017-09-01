class AddAnimal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formErrorMessage: this.props.formErrorMessage,
      formSuccessMessage: this.props.formSuccessMessage,
      animalName: ''
    }

    this._handleChange = this._handleChange.bind(this)
    this._submitAnimal = this._submitAnimal.bind(this)
  }

  _handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  _submitAnimal() {
    console.log('submitting animal')

    jQuery.ajax({
      url: '/animals',
      type: 'POST',
      contentType: 'application/json',
      dataType: "json",
      data: JSON.stringify({
        animalName: this.state.animalName
      }),
      // TODO: Fix the success callback to properly set the state.
      // Why doesn't it work as currently implemented?
      success: (data) => {
        console.log('success')
        console.log(data)
        this.setState({formSuccessMessage: data.message})
      },
      error: (data) => {
        console.log('error')
        console.log(data)
      },
    })
  }

  render() {
    return(
      <div
        className="add-animal-form"
      >
        <ErrorMessage />
        <SuccessMessage />
        <div
          className="form-group"
        >
          <label>Animal Name</label>
          <input
            id="animalName"
            name="animalName"
            type="text"
            className="form-control"
            value={this.state.currentAnimalName}
            onChange={this._handleChange}
          />
        </div>
        <div
          className="form-group"
        >
          <button
            className="btn btn-default"
            onClick={this._submitAnimal}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

