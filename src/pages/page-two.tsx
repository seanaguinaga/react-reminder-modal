import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonNavLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useNavContext } from "./Home";
import PageThree from "./page-three";

function PageTwo() {
  const { previousSize, nextSize } = useNavContext();

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={() => previousSize()}>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Page Two</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Page Two</h1>
        <IonNavLink
          routerDirection="forward"
          onClick={() => nextSize()}
          component={() => <PageThree />}
        >
          <IonButton>Go to Page Three</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}

export default PageTwo;
