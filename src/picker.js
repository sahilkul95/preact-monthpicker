import { Component, createElement } from 'preact';
import './style.styl';

class MonthYearPicker extends Component {
  constructor(props) {
    super(props);
    this.handleOnClickLeftArrow = this.handleOnClickLeftArrow.bind(this);
    this.handleOnClickRightArrow = this.handleOnClickRightArrow.bind(this);
    if (!props.caption) props.caption = 'Select month and year';
  }

  handleOnClickLeftArrow() {
    if (this.props.selectedYear <= this.props.minYear) return;
    this.props.onChangeYear(this.props.selectedYear - 1);
  }

  handleOnClickRightArrow() {
    if (this.props.selectedYear >= this.props.maxYear) return;
    this.props.onChangeYear(this.props.selectedYear + 1);
  }

  renderMonth(month) {
    let text = '';
    switch (month) {
      case 1:
        text = 'Jan';
        break;
      case 2:
        text = 'Feb';
        break;
      case 3:
        text = 'Mar';
        break;
      case 4:
        text = 'Apr';
        break;
      case 5:
        text = 'May';
        break;
      case 6:
        text = 'Jun';
        break;
      case 7:
        text = 'Jul';
        break;
      case 8:
        text = 'Aug';
        break;
      case 9:
        text = 'Sep';
        break;
      case 10:
        text = 'Oct';
        break;
      case 11:
        text = 'Nov';
        break;
      case 12:
        text = 'Dec';
        break;
      default:
        break;
    }
    let className = this.props.selectedMonth === month ? 'selected' : '';
    return createElement('div', {className, role: 'button', tabIndex: 0, onClick: this.props.onChangeMonth.bind(this, month)},
      createElement('span', {}, text)
    );
  }

  renderLeftArrowButton() {
    if (this.props.selectedYear === this.props.minYear) {
      return createElement('em', {className: 'arrow-icon icon icon-angle-left disabled'}, '<');
    }
    return createElement('em', {role: 'button', tabIndex: 0, onClick: this.handleOnClickLeftArrow.bind(this), className: 'arrow-icon icon icon-angle-left'}, '<');
  }

  renderRightArrowButton() {
    if (this.props.selectedYear === this.props.maxYear) {
      return createElement('em', {className: 'arrow-icon icon icon-angle-right disabled'}, '>');
    }
    return createElement('em', {role: 'button', tabIndex: 0, onClick: this.handleOnClickRightArrow.bind(this), className: 'arrow-icon icon icon-angle-right'}, '>');
  }

  renderMonths() {
    this.renderMonth(1);
    this.renderMonth(2);
    this.renderMonth(3);
    this.renderMonth(4);
    this.renderMonth(5);
    this.renderMonth(6);
    this.renderMonth(7);
    this.renderMonth(8);
    this.renderMonth(9);
    this.renderMonth(10);
    this.renderMonth(11);
    this.renderMonth(12);
  }

  render() {
    return createElement('div', {className: 'month-year-picker'},
      createElement('span', {className: 'caption'}, this.props.caption),
      createElement('div', {className: 'year-picker'},
        createElement('div', {style: 'display: inline-block;'}, this.renderLeftArrowButton()),
        createElement('span', {}, this.props.selectedYear),
        createElement('div', {style: 'display: inline-block;'}, this.renderRightArrowButton())
      ),
      createElement('div', {className: 'month-picker'},
        createElement('div', {}, this.renderMonths(1))
      )
    );
  }
}

export default MonthYearPicker;
