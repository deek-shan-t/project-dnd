import React from "react";
import { useState } from "react";
import Picture from "./picture";
import { useDrop } from "react-dnd";
import "../App.css";

const Pic = [
  {
    id: 1,
    Name: "Pic1",
    url: "https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 2,
    Name: "Pic2",
    url: "https://plus.unsplash.com/premium_photo-1689601511649-8d065e2c2b90?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // url: "https://media-exp1.licdn.com/dms/image/C4D03AQExheo0sff_yQ/profile-displayphoto-shrink_200_200/0/1590072898568?e=1630540800&v=beta&t=_W-gWZewSBYQ-UAjpGvR8h_8Vvo202IHQQissbK2aKc",
  },
  {
    id: 3,
    Name: "Pic3",
    url: "https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj",
    // url: "https://yt3.ggpht.com/pe57RF1GZibOWeZ9GwRWbjnLDCK2EEAeQ3u4iMAFNeaz-PN9uSsg1p2p32TZUedNnrUhKfoOuMM=s900-c-k-c0x00ffffff-no-rj",
  },
];

function Dragdrop() {

  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImage(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImage = (id) => {
    const pictureList = Pic.filter((pic) => pic.id === id);
    // setBoard((board) => [...board, ...pictureList]);
    setBoard([pictureList[0]]);
  }

  return (
    <>
      <div className="Pic">
        {Pic.map((pic) => {
          return <Picture id={pic.id} url={pic.url} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((pic) => {
          return <Picture id={pic.id} url={pic.url} />;
        })}
      </div>
    </>
  );
}

export default Dragdrop;
