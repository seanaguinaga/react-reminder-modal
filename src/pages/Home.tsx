import {
  IonButton,
  IonContent,
  IonHeader,
  IonModal,
  IonNav,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { createContext, useContext, useMemo, useRef, useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import PageOne from "./page-one";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
      <NavProvider>
        <Example />
      </NavProvider>
    </IonPage>
  );
};

export default Home;

const sizes = [400, 600, 400];

function useNavigation() {
  const [currentSize, setCurrentSize] = useState(0);
  const navRef = useRef<HTMLIonNavElement>(null);
  const nextSize = () => {
    setCurrentSize((prevSize) => (prevSize + 1) % sizes.length);
  };

  const previousSize = () => {
    setCurrentSize((prevSize) => (prevSize - 1 + sizes.length) % sizes.length);
  };

  return {
    navRef,
    nextSize,
    previousSize,
    currentSize,
  };
}

const NavContext = createContext<ReturnType<typeof useNavigation> | null>(null);

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavProvider");
  }
  return context;
};

const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useNavigation();

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);

  const mounted = useRef(false);

  const { currentSize } = useNavContext();

  const nav = useMemo(() => {
    return (
      <IonNav
        onIonNavWillChange={() => {
          if (!mounted.current) {
            mounted.current = true;
            return;
          }
        }}
        root={() => <PageOne />}
      ></IonNav>
    );
  }, []);

  return (
    <>
      <IonButton id="open-modal" expand="block">
        Open Sheet Modal
      </IonButton>
      <IonModal
        ref={modal}
        trigger="open-modal"
        initialBreakpoint={1}
        breakpoints={[0, 1]}
      >
        <div
          style={{
            height: `${sizes[currentSize]}px`,
            transition: "height 0.3s ease-in-out",
          }}
        >
          {nav}
        </div>
      </IonModal>
    </>
  );
}
