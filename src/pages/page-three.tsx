import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useNavContext } from "./Home";

function PageThree() {
  const { previousSize } = useNavContext();
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={() => previousSize()}>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Page Three</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Page Three</h1>
      </IonContent>
    </>
  );
}

export default PageThree;
