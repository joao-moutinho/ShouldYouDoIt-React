import React from "react";
import Title from "../../home/main/Title";
import Input from "../../home/main/Input";
import "./style.scss";
import { useState, useEffect } from "react";
import Modal from "../../home/modal/Modal";
import Gif from "../msg-gif/Gif";
import { useParams, useNavigate } from "react-router";
import Button from "../../home/main/Button";
import { loadgifs } from "../../utils/Load/loadgifs";

const Main_Gif = () => {
  let param = useParams().text;
  console.log("params ", param);

  const [value, setValue] = useState(param);
  const [showModal, setShowModal] = useState(false);
  const [gif, setGif] = useState("");
  const navigate = useNavigate();

  const handleValue = (text) => {
    setValue(text);
    console.log(value);
  };

  const checkDecide = () => {
    if (value.length === 0 || value === param) {
      setShowModal(true);
    } else {
      navigate(`/ShowGif/${value}`);
    }
  };

  const checkModal = () => {
    setShowModal(false);
  };

  useEffect(async () => {
    const resp = await loadgifs(param);
    setGif(resp);
  }, [param]);

  return (
    <div className="main-gif">
      <Title />
      <Input handleChange={handleValue} value={param} />

      <div className="buttons">
        <Button>Clean</Button>
        <Button check={checkDecide}>Decide</Button>
      </div>
      <Gif gif={gif} />
      {showModal === true && <Modal check={checkModal} />}
    </div>
  );
};

export default Main_Gif;
