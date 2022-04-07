import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { StatusBar } from '@capacitor/status-bar';
import './Home.css';


const Home: React.FC = () => {
  
  StatusBar.setOverlaysWebView({overlay: true});  
  return (
    <IonPage>
      <IonContent fullscreen>
        <video id='videoContainer' autoPlay loop muted poster='/assets/video/poster.png'>
          <source src="/assets/video/samplevid.mp4" type="video/mp4"></source>
        </video>
      </IonContent>
    </IonPage>
  );
};

export default Home;
