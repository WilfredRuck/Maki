class SuccessMessage extends React.Component {
  constructor(props) {
    super()
  }

  render() {
      if (message) {
        return (
        	<div>
        		<p>Animal Added Successfully!</p>
        	</div>
        )
      }
      else{
        return null
      }
  }
}

