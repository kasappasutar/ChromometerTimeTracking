import React , { Component }from 'react'

class Main extends Component{
  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
      </div>
    )
  }
}

export default Main
