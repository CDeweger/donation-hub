import React, { useEffect, useState } from "react";
import axios from "axios";
import ShelterCard from "../../components/ShelterCard/ShelterCard";
import "./ShelterPage.scss";

const API_URL = process.env.REACT_APP_API_URL;

const ShelterPage = () => {
  const [shelterList, setShelterList] = useState([]);

  const getshelterList = () => {
    axios
      .get(`${API_URL}organization`)
      .then((res) => {
        setShelterList(
          res.data.filter((type) => type.program_type === "Homeless Shelter")
        );
      })
      .catch((_err) => {
        console.log("error");
      });
  };

  useEffect(() => {
    getshelterList();
  }, []);

  if (!shelterList) {
    return null;
  }

  return (
    <div className="FirstNationPage">
      <h1 className="FirstNationPage__heading">Homeless Shelter </h1>
      {shelterList.map((shelter) => {
        return <ShelterCard key={shelter.id} shelterList={shelter} />;
      })}
    </div>
  );
};

export default ShelterPage;
