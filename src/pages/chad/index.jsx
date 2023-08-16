import { useEffect, useState } from "react";
import { db, auth } from "../../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import Message from "../../components/message";

const Chad = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);
  // collectionun referansını alma
  const messagesRef = collection(db, "messages");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value == "") return;
    // belirttiğimiz koleksiyona eni eleman ekler
    addDoc(messagesRef, {
      text: e.target[0].value,
      user: auth.currentUser.displayName,
      room,
      createdAt: serverTimestamp(),
    });
    // inputu sıfırlama
    e.target[0].value = "";
  };

  // gönderilen mesajları alma
  useEffect(() => {
    //filtreleme ayarlarını yapma
    const options = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );
    //kolleksiyonun değişimini izler
    onSnapshot(options, (snapshot) => {
      let comingMessage = [];
      // kolleksiyonu dönüp document verilerine erişme
      snapshot.forEach((doc) => {
        comingMessage.push(doc.data());
      });
      setMessages(comingMessage);
    });
  }, []);
  return (
    <div className="chat">
      <header>
        <p>{auth.currentUser.displayName}</p>
        <p>{room}</p>
        <a onClick={() => setRoom(null)}>Farkli Oda</a>
      </header>
      <main>
        {" "}
        {messages.map((msg) => (
          <Message msg={msg} user={auth.currentUser.displayName} />
        ))}
      </main>
      <form onSubmit={handleSubmit}>
        emoji area
        <input placeholder="Mesaj" type="text" />
        <button>Gönder</button>
        voice area
      </form>
    </div>
  );
};

export default Chad;
