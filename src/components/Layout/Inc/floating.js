import { FloatingWhatsApp } from "react-floating-whatsapp";

export const Floating = () => {
    return (
      <div className="App">
        <FloatingWhatsApp
          phoneNumber="9965533016"
          accountName="VG Fence"
          statusMessage="Typically replies within 1 hour"
          chatMessage="Hello there! 🤝 How can we help?"
          avatar="assets/img/logo/vg_fav.jpg"
          allowEsc
          allowClickAway
          notification
          notificationSound
        />
       
      </div>
    );
  };