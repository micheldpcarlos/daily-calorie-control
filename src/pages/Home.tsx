import { IonContent, IonPage } from "@ionic/react";

import React from "react";
import "./Home.css";
import HomeToolbar from "../components/HomeToolbar";

const Home: React.FC = () => {
  return (
    <IonPage>
      <HomeToolbar></HomeToolbar>
      <IonContent>

      </IonContent>
    </IonPage>
  );
};

export default Home;
