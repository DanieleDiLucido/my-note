import React from 'react'
import { connect } from 'react-redux';
import "./menu.scss";
import Selection from './../selection/selection'
class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.reset = this.reset.bind(this)
    this.removeElement = this.removeElement.bind(this);
  }
  reset = () => {
    this.props.dispatch({
      type: 'RESET',
    })
  }
  removeElement = (el) => {
    this.props.dispatch({
      type: 'DELETE',
      data: el
    })
  }
  render() {
    const history = this.props.selections.map((element, i) => {
      return (
        <div key={i}>
          <Selection index={++i} selection={element} />
        </div>
      )
    })

    return (
      <div className="menu">
        <div className="menu-title">
          <h2>User Selections</h2>
        </div>
        <div className="menu-content">
          <div className="list">
            {history.length > 0 && history}
          </div>
          <div className="tools" >
            <button
              className="accent"
              disabled={history.length === 0}
              title="Remove all selections"
              onClick={this.reset}
              data-cy="clear-all">
              Clear All
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => (state)
export default connect(mapStateToProps)(Menu)