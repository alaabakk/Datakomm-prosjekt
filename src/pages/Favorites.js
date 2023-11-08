import { useContext } from "react";

import FavoritesContext from "../components/store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favortiesCtx = useContext(FavoritesContext);

  let content;

  if (favortiesCtx.totalFavorites === 0) {
    content = <p>You have no favorites</p>;
  } else {
    content = <MeetupList meetups={favortiesCtx.favorties} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
