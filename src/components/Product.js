import React from 'react';

const Product = (props) => {
  const { id } = props;
  return (
    <article className="product">
      <h1>{id}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        odit, ex, aspernatur eligendi facilis quo, mollitia vero exercitationem
        ea omnis commodi voluptates cupiditate blanditiis dolores odio laborum
        nostrum voluptatibus animi. Aspernatur placeat expedita consequatur,
        assumenda ducimus nesciunt aliquam obcaecati quasi labore suscipit
        officiis? Sit itaque, odio asperiores beatae blanditiis harum libero
        reprehenderit, dolore repellat pariatur corrupti modi, fuga et a.
        Debitis, veniam repellat sunt recusandae quia vero beatae impedit vel
        reiciendis minus fugit, reprehenderit odio optio quibusdam voluptatibus,
        blanditiis delectus dolores atque culpa ducimus sit tempora. Tenetur
        tempora expedita mollitia? Modi officia repellendus corporis, tempore
        velit illo expedita quae dolor cumque est aliquid inventore reiciendis
        totam vel nesciunt eaque fugiat amet. Ullam adipisci nihil tenetur
        repellendus porro dicta laboriosam provident. Labore cumque, fuga
        temporibus ratione dolores nobis cum quos, quisquam sequi iure
        necessitatibus ipsum aspernatur ea natus quis animi ab incidunt aliquid
        suscipit aliquam atque. Similique porro amet consectetur et.
      </p>
    </article>
  );
};

export default Product;
