import React from 'react'
import { connect } from 'react-redux';
import "./selection.scss";
import PropTypes from 'prop-types';

class Selection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ico: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNjEyIDYxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnIGlkPSJjcm9zcyI+CgkJPGc+CgkJCTxwb2x5Z29uIHBvaW50cz0iNjEyLDM2LjAwNCA1NzYuNTIxLDAuNjAzIDMwNiwyNzAuNjA4IDM1LjQ3OCwwLjYwMyAwLDM2LjAwNCAyNzAuNTIyLDMwNi4wMTEgMCw1NzUuOTk3IDM1LjQ3OCw2MTEuMzk3ICAgICAgMzA2LDM0MS40MTEgNTc2LjUyMSw2MTEuMzk3IDYxMiw1NzUuOTk3IDM0MS40NTksMzA2LjAxMSAgICAiIGZpbGw9IiMwMDAwMDAiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
    }
    this.removeElement = this.removeElement.bind(this);
  }

  removeElement = () => {
    this.props.dispatch({
      type: 'DELETE',
      data: this.selection
    })
  }
  render() {
    return (
      <div data-cy="selection" className="selection">
        <div className="menu-item">
          <span className="selection-delete">
            <a  data-cy="delete-selection"
                onClick={this.removeElement}>
              <img
                alt="delete"
                src={this.state.ico} />
            </a>
          </span>
          <span 
            data-cy="selection-color"
            style={{ 'background': this.props.selection.color }}
            className="selection-color">
          </span>
          <span><h4> Selection: {this.props.index}</h4></span>
        </div>
        <div className="selection-content">
          {this.props.selection.text}
        </div>
      </div>
    )
  }
}

Selection.propTypes = {
  selection: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({})
export default connect(mapStateToProps)(Selection)