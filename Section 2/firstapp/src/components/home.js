const Home = () => {
  const myname = "Shikhar";

  const square = (n) => {
    return n ** (1 / 2);
  };
  const im =
    "https://static.theprint.in/wp-content/uploads/2021/06/binary-5137356_1280.jpg?compress=true&quality=80&w=800&dpr=1.0";
  return (
    <div>
      <h1>This is Home </h1>
      <h2>Aother line </h2>
      <h3>{myname}</h3>
      <img src={im}></img>
      <img src="logo512.png"></img>
    </div>
  );
};

export default Home;
