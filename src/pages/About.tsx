import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
} from "@ionic/react";

import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" />
            <IonTitle>About</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonListHeader>
          <IonLabel>The app</IonLabel>
        </IonListHeader>
        <IonList lines="none">
          <IonItem>
            Created to simply track calories intake during the day with some
            visual feedback, nothing too complicated.
            <span role="img" aria-label="Smiling Face with Smiling Eyes">
              😊
            </span>
          </IonItem>
        </IonList>
        <IonListHeader>
          <IonLabel>Credits</IonLabel>
        </IonListHeader>
        <IonList lines="none">
          <IonItem>
            <a
              href="https://www.freepik.com/free-photos-vectors/halloween"
              target="__blank"
            >
              Halloween vector created by vectorpouch - www.freepik.com
            </a>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default About;
