import React from 'react';
import { connect } from 'react-redux';

import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';

import 'react-quill/dist/quill.snow.css';
import './editor.scss'
import ColorSelector from './../color-selector/color-selector'

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorHtml: '',
      theme: 'snow',
      showColorPanel: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.addSelection = this.addSelection.bind(this)
    this.shortcut = this.shortcut.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  addSelection() {
    const range = this.state.quill.getSelection();
    if (range) {
      if (range.length === 0) {
        console.log('User cursor is at index', range.index);
      } else {
        var text = this.state.quill.getText(range.index, range.length);
        console.log('User has highlighted: ', text);
        this.props.dispatch({
          type: 'ADD-SELECTION',
          data: {
            range: range,
            text: text,
            color: this.props.color
          }
        })
        this.state.quill.formatText(range.index, range.length, { 'background': this.props.color })
      }
    }
  }


  shortcut(e) {
    if ((e.metaKey || e.ctrlKey) && e.keyCode === 13) {
      this.addSelection();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.selections !== this.props.selections && this.props.selections.length === 0) {
      this.state.quill.setSelection(0, Number.POSITIVE_INFINITY);
      this.state.quill.format('background', 'white', 'api')
      this.state.quill.setSelection(0)
    }
  }
  componentDidMount() {
    this.setState({ quill: this.refs.quill.getEditor() })
  }

  getColor() {
    return this.props.color;
  }
  render() {
    return (
      <div className="editor-container" onKeyDown={this.shortcut}>
        <div className="editor-tools">
          <ul>
            <li>
              &#8984; + &crarr;
              </li>
            <li>
              Ctrl + &crarr;
              </li>
          </ul>
          <br />
          <div className="actions">
            <ColorSelector />
            <button data-cy="add-selection" className="accent" title="Add Selection" onClick={this.addSelection}>Add</button>
          </div>
        </div>

        <div className="editor-center">
          <div className="editor-content">
            <ReactQuill
              ref="quill"
              theme={this.state.theme}
              onChange={this.handleChange}
              value={this.state.editorHtml || ''}
              modules={Editor.modules}
              bounds={'.app'}
              placeholder={this.props.placeholder}
            />
          </div>
        </div>
      </div>
    )
  }
}


Editor.modules = {
  toolbar: [

    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'font': [] }],

    ['clean']                                         // remove formatting button
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}

Editor.propTypes = {
  placeholder: PropTypes.string,
}

const mapStateToProps = state => (state)
export default connect(mapStateToProps)(Editor)
