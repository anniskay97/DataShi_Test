import React from 'react';
import axios from 'axios'
import ExhangeRateTableItem from './exhangeRateTableItem'


class ExhangeRateTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      exhangeRate: []
    };
    this.getData = this.getData.bind(this)
  }
  getData(){
    axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(response => this.setState({exhangeRate: response.data}))
  }
  componentDidMount(){
    this.getData();
  }
  render(){
    const items = this.state.exhangeRate.map((exhangeRateItem,i) => (
    <ExhangeRateTableItem 
        key={i} 
        exhangeRateItem={exhangeRateItem} 
      />
    ));
    return(
    <table>
      <thead>
        <tr>
          <td>Код валюты</td>
          <td>Код национальной валюты</td>
          <td>Курс покупки</td>
          <td>Курс продажи</td>
        </tr>
      </thead>
      <tbody>
      {items}                    
      </tbody>
    </table>  
    );
  }
};
export default ExhangeRateTable