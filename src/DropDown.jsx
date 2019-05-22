import React from "react";
import { styles } from "./dropdownStyle";
import { css } from "aphrodite/no-important";

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      lastItemIndex: -1,
      currentItemIndex: -1
    };
    this.listRef = React.createRef();
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.openDropDown = this.openDropDown.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.keyCode = Object.freeze({
      ENTER: 13,
      TAB: 9,
      RETURN: 13,
      ESC: 27,
      SPACE: 32,
      PAGEUP: 33,
      PAGEDOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      DOWN: 40
    });
  }

  componentDidMount() {
    const lastItemIndex = this.listRef.current.childNodes.length - 1;
    this.setState({
      lastItemIndex
    });
  }

  toggleDropDown() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  openDropDown() {
    this.setState({ isOpen: true });
  }

  closeDropDown() {
    this.setState({ isOpen: false });
  }

  handleKeyDown(event) {
    switch (event.keyCode) {
      case this.keyCode.SPACE:
      case this.keyCode.RETURN:
      case this.keyCode.DOWN:
        this.openDropDown();
        this.setFocusToNextItem();
        break;
      case this.keyCode.UP:
        this.openDropDown();
        this.setFocusToPreviousItem();
        break;
      case this.keyCode.ESC:
        this.closeDropDown();
        break;
      default:
        break;
    }
  }

  incrementIndex = ({ currentItemIndex }) => ({
    currentItemIndex: currentItemIndex + 1
  });

  decrementIndex = ({ currentItemIndex }) => ({
    currentItemIndex: currentItemIndex - 1
  });

  equalIndex = ({ lastItemIndex }) => ({
    currentItemIndex: lastItemIndex
  });

  setFocusToPreviousItem() {
    const { currentItemIndex } = this.state;
    if (currentItemIndex > 0) {
      this.setState(this.decrementIndex);
    }
  }

  setFocusToNextItem() {
    const { currentItemIndex, lastItemIndex, isOpen } = this.state;
    if (isOpen) {
      if (currentItemIndex === lastItemIndex) {
        this.setState(this.equalIndex);
      } else {
        this.setState(this.incrementIndex);
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.currentItemIndex >= 0) {
      console.log(`${nextState.currentItemIndex}`);
      this.listRef.current.childNodes[
        nextState.currentItemIndex
      ].children[0].focus();
    }
  }

  render() {
    const { isOpen } = this.state;
    const drpClass = css(styles.dropDown, isOpen ? styles.dropDownOpen : "");
    return (
      <div onKeyDown={this.handleKeyDown} tabIndex={0}>
        <button onClick={this.toggleDropDown}>DropDown</button>
        <div className={css(styles.dropDownNav)}>
          <ul className={drpClass} ref={this.listRef}>
            <li>
              <a href="#" className={css(styles.dropdownList)}>
                item-1
              </a>
            </li>
            <li>
              <a href="#" className={css(styles.dropdownList)}>
                item-2
              </a>
            </li>
            <li>
              <a href="#" className={css(styles.dropdownList)}>
                item-3
              </a>
            </li>
            <li>
              <a href="#" className={css(styles.dropdownList)}>
                item-4
              </a>
            </li>
            <li>
              <a href="#" className={css(styles.dropdownList)}>
                item-5
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
