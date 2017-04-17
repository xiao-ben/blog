import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
function disabledDate(current) {
  if(current){
    if(current.valueOf() > new Date(2017,7,2).getTime())return true;
    if(current.valueOf() < Date.now())return true;
  }

  return false;
}
class DateRange extends React.Component {

  render() {

    return (
      <div>
      <DatePicker
        format="YYYY-MM-DD"
        disabledDate={disabledDate}
      />
      </div>
    );
  }
}

ReactDOM.render(<DateRange />, document.getElementById('root'));
