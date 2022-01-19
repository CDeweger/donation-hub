import React, { Component } from "react";
import axios from "axios";
import FeaturedNPO from "../../components/FeaturedNPO/FeaturedNPO";
import NPOCategory from "../../components/NPOCategory/NPOCategory";

const API_URL = process.env.REACT_APP_API_URL;

class HomePage extends Component {
  state = {
    organizationList: null,
  };

  getOrganizationList = () => {
    axios
      .get(`${API_URL}first-nation`)
      .then((res) => {
        this.setState({
          organizationList: res.data,
        });
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  componentDidMount() {
    this.getOrganizationList();
  }

  render() {
    if (!this.state.organizationList) {
      return null;
    }

    return (
      <div>
        <FeaturedNPO organizationList={this.state.organizationList} />
        <NPOCategory />
      </div>
    );
  }
}

export default HomePage;
