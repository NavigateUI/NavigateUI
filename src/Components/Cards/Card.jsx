import Card1 from "./Card1/Card1";
import Card2 from "./Card2/Card2";
import Card3 from "./Card3/Card3";
import Card4 from "./Card4/Card4";

const Card = () => {
  return (
    <div className="flex  items-center flex-col gap-6 px-4">
      <h1 className="text-2xl lg:text-3xl text-center font-semibold pt-10  pb-2 text-gray-800 border-gray-700">
        Explore The Card Collections ✅
      </h1>

      {/* Card 1  */}
      <Card1></Card1>
      {/* Card 2  */}
      <Card2></Card2>
      {/* Card 3  */}
      <Card3></Card3>
      {/* Card 4  */}
      <Card4></Card4>

      
    </div>
  );
};

export default Card;