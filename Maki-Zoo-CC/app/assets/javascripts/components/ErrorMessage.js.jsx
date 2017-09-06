class ErrorMessage extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    	if (message) {
        return (
          <div>
            <p>Error!</p>
          </div>
        )
      }
      else{
        return null
      }
  }
}

