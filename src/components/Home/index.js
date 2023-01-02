import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Button, TextArea} from './styledComponents'

import './index.css'

class Home extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isUnderline, isItalic, isBold} = this.state
    const boldLogo = isBold ? '#faff00' : '#f1f5f9'
    const italicLogo = isItalic ? '#faff00' : '#f1f5f9'
    const underlineLogo = isUnderline ? '#faff00' : '#f1f5f9'

    return (
      <div className="main-container">
        <div className="card-container">
          <div className="left-container">
            <h1 className="left-heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="left-image"
            />
          </div>
          <div className="right-container">
            <ul className="tool-ul">
              <li className="tool-li">
                <Button
                  data-testid="bold"
                  colorText={boldLogo}
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li className="tool-li">
                <Button
                  data-testid="italic"
                  colorText={italicLogo}
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </li>
              <li className="tool-li">
                <Button
                  data-testid="underline"
                  colorText={underlineLogo}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </li>
            </ul>
            <TextArea
              isBold={isBold}
              isUnderline={isUnderline}
              isItalic={isItalic}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
