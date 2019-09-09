# preact-monthpicker
## Installation

```shell
npm install preact-monthpicker -S
```

### Just provide month-year range to this component and get this working
![](/assets/cropped.gif)

## Usage

Code Example:
```jsx
import MonthYearPicker from "preact-monthpicker";

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

render(
  <div>
    <MonthYearPicker
      selectedMonth={this.state.selectedMonth}
      selectedYear={this.state.selectedYear}
      minYear={this.state.minYear}
      maxYear={this.state.maxYear}
      onChangeYear={year => this.onChangeYear(year)}
      onChangeMonth={month => this.onChangeMonth(month)}
    />
  </div>,
  document.body
);
```

### Props

Properties used to customise the rendering:

| Name | Type | Description |
|:---- | ---- | ------ |
| selectedMonth | Number`(required)` | Month to be highlighted (preselected when component is loaded onto page) |
| selectedYear | Number`(required)` | Year to be highlighted (preselected when component is loaded onto page)
| minYear | Number`(required)` | Starting year in picker range
| maxYear | Number`(required)` | Ending year in picker range
| onChangeYear | Function`(required)` | Callback function to be called when user changes selected year
| onChangeMonth | Function`(required)` | Callback function to be called when user changes month
| caption | String | Label to display in front of picker
