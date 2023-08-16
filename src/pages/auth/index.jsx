import { auth, provider } from "../../firebase/firebaseConfig";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
const Auth = () => {
  const handleClick = () => {
    /*
    --kullanıcının sağlayıcı hesabını seçmesi için bir sayfaya yönlendirir
    --hesabı seçtikten sonra daha önce varsa giriş yapar
    --yoksa yeni bir hesap oluşturur ve ona giriş yapar
    --promisse döndürür kullanıcı girerse kullanıcı bilgilerini döndürür
    --hata olursa hatayı yakalamak gerekir
    */
    signInWithRedirect(auth, provider);
  };
  return (
    <div className="auth">
      <h1>Welcome To Home</h1>
      <p>Devam etmek için Giriş Yap</p>
      <button onClick={handleClick}>
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
          alt=""
        />
        <span>Google İle Giriş Yap</span>
      </button>
    </div>
  );
};

export default Auth;
