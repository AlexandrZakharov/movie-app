import Header from "../../components/Header";
import Section from "./components/Section";



const Home = (props) => {
  console.log(props);
  return (
    <div>
      <Header />
      <Section content={props.content.movies} />
      <Section content={props.content.series} />
      <Section content={props.content.cartoons} />
    </div>
  );
};

export default Home;
