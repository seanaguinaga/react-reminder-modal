import {
  IonButton,
  IonContent,
  IonHeader,
  IonNavLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useNavContext } from "./Home";
import PageTwo from "./page-two";

function PageOne() {
  const { nextSize } = useNavContext();
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Page One</h1>
        <IonNavLink
          routerDirection="forward"
          onClick={() => nextSize()}
          component={() => <PageTwo />}
        >
          <IonButton>Go to Page Two</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}

export default PageOne;
