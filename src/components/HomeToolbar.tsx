import React, { useState } from "react";
import "./HomeToolbar.css";
import {
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonPopover,
  IonList,
  IonItem,
} from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";

const HomeToolbar: React.FC = () => {
  const [showPopover, setShowPopover] = useState<{
    open: boolean;
    event: Event | undefined;
  }>({
    open: false,
    event: undefined,
  });

  const handleDismiss = () => {
    setShowPopover({ open: false, event: undefined });
  };

  return (
    <IonToolbar>
      <IonButtons slot="primary">
        <IonButton
          onClick={(e) => setShowPopover({ open: true, event: e.nativeEvent })}
        >
          <IonIcon slot="icon-only" icon={ellipsisVertical} />
        </IonButton>
      </IonButtons>
      {/* Options Popover */}
      <IonPopover
        isOpen={showPopover.open}
        event={showPopover.event}
        onDidDismiss={handleDismiss}
      >
        <IonList lines="none">
          <IonItem routerLink="/config" onClick={handleDismiss}>
            Configurations
          </IonItem>
          <IonItem routerLink="/about" onClick={handleDismiss}>
            About
          </IonItem>
        </IonList>
      </IonPopover>
    </IonToolbar>
  );
};

export default HomeToolbar;
