const Message = ({ msg, user }) => {
  /*
    --mesajı gönderen hesap eşitse
    --oturumu açık olan hesaba bunu ekrana bas
    */
  console.log(msg, user);
  if (user === msg.user) {
    return <p className="msg-user">{msg.text}</p>;
  }
  return (
    <p className="other-user">
      <span>{msg.user}</span> <span>{msg.text}</span>
    </p>
  );
};

export default Message;
