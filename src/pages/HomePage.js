import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowka",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur inventore doloribus hic totam blanditiis, dolor iure laboriosam dolorum ad, itaque perferendis explicabo harum ea iste reiciendis vel? Recusandae, doloremque."
  },
  {
    id: 2,
    title: "Czym jest paradoks Farmiego?",
    author: "Jan Nowka",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur inventore doloribus hic totam blanditiis, dolor iure laboriosam dolorum ad, itaque perferendis explicabo harum ea iste reiciendis vel? Recusandae, doloremque."
  },
  {
    id: 3,
    title: "Ciembna materia i ciemna energia?",
    author: "Jan Nowka",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur inventore doloribus hic totam blanditiis, dolor iure laboriosam dolorum ad, itaque perferendis explicabo harum ea iste reiciendis vel? Recusandae, doloremque."
  }
];
const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={articles.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
