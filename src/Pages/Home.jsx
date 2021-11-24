import React, { useContext } from "react";

//components
import CardContainer from "../Components/Card container/CardContainer";
import ItemCard from "../Components/ItemCard/ItemCard";

//Context
import StoreContext from "../Context/StoreContext";

const Home = () => {
  const { state } = useContext(StoreContext);
  return (
    <div className="flex flex-col justify-center ">
      <h1 className="mt-2 font-bold">Store</h1>
      <CardContainer>
        {state?.items?.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            img={item.image}
            item={item}
            id={item.id}
          />
        ))}
      </CardContainer>
    </div>
  );
};

export default Home;
