import React, { useState } from "react";
import "./Status.css";
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

const Status: React.FC = () => {
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

  return <div className="status">AI PAI</div>;
};

export default Status;
