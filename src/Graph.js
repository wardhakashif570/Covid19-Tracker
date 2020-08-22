import React from 'react';
import { Cards, CountryPicker } from './Components';
import { fetchData } from './api/';


class Graph extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <Cards data={data} />
      
      </div>
    );
  }
}

export default Graph;