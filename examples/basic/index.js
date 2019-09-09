import { Component } from 'preact';
import MonthYearPicker from "preact-monthpicker";

export default class MyClass extends Component {

  componentWillMount() {
    this.state = {
      selectedMonth: new Date().getMonth()+1,
      selectedYear: new Date().getFullYear(),
      minYear: 2015,  //starting year
      maxYear: 2020  //end year
    };
  }

  onChangeYear(selectedYear) {
    this.setState({ selectedYear });
    //Do stuff
  }

  onChangeMonth(selectedMonth) {
    this.setState({ selectedMonth });
    //Do stuff
  }

  render({}) {
    return (
      <MonthYearPicker
        selectedMonth={this.state.selectedMonth}
        selectedYear={this.state.selectedYear}
        minYear={this.state.minYear}
        maxYear={this.state.maxYear}
        onChangeYear={year => this.onChangeYear(year)}
        onChangeMonth={month => this.onChangeMonth(month)}
      />
    );
  }
}
