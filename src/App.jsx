import Auth from "./pages/auth";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Chad from "./pages/chad";
function App() {
  const [isAuth, setİsAuth] = useState();
  const [room, setRoom] = useState(null);
  /*
  kullanıcının oturumundaki değişim izler
  eğer kullanıcı varsa çalıştırdığı fonksiyona parametre olarak gönderir
  */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setİsAuth(true);
      } else {
        setİsAuth(false);
      }
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setRoom(e.target[0].value);
  };
  const handleClose = () => {
    signOut(auth).catch((err) => console.log(err));
  };
  if (!isAuth) {
    return (
      <div className="container">
        <Auth />
      </div>
    );
  }

  return (
    <div className="container">
      {room ? (
        <Chad room={room} setRoom={setRoom} />
      ) : (
        <form onSubmit={handleSubmit} className="room-container">
          <h1>Chat Odası</h1>
          <p>Hangi Odaya Giriceksin</p>
          <input type="text" />
          <button type="submit">Odaya Gir</button>
          <button onClick={handleClose} type="button">
            Çıkış Yap
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
