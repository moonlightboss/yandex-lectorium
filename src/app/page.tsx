import { FilmDetails } from "./components/FilmDetails/FilmDetails";

export default function Home() {
  return (
    <div>
      <header></header>
      <FilmDetails
        title={FilmDetails.title}
        genre={FilmDetails.genre}
        seasonsCount={FilmDetails.seasonCount}
      ></FilmDetails>
      <Reviews></Reviews>
      <Recommendations></Recommendations>
      <footer></footer>
    </div>
  );
}
