import React from 'react'
import { connect } from 'react-redux';
import "./color-selector.scss";
import { GithubPicker } from 'react-color';


class ColorSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showColorPanel: false,
    }
    this.handleChangeColor = this.handleChangeColor.bind(this)
    this.toggleColorPanel = this.toggleColorPanel.bind(this)
  }

  handleChangeColor = (color) => {
    this.props.dispatch({
      type: 'CHANGE-COLOR',
      data: {
        color: color
      }
    })
    this.toggleColorPanel();
  };

  toggleColorPanel() {
    this.setState({ 'showColorPanel': (!this.state.showColorPanel) });
  }

  render() {
    return (
      <div className="color-selector">
        <a  data-cy="color-selector-trigger"
            onClick={this.toggleColorPanel}
            title="Select color">
          <span data-cy="color-selector" className="color-sample" style={{ 'background': this.props.color }} ></span>
        </a>
        {(this.state.showColorPanel) &&
          <GithubPicker
            onChangeComplete={this.handleChangeColor}
            color={this.props.color}
          />}
      </div>
    )
  }
}



const mapStateToProps = state => (({ color: state.color }))
export default connect(mapStateToProps)(ColorSelector)

