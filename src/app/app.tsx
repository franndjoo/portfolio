import { useEffect, useState } from "react";
import { Banner } from "../components/banner";
import { BottomBar } from "../components/bottom-bar";
import { LoadInterface } from "../components/load";
import { SceneScript as SceneScript1 } from "./components/scene-1";
import { SceneScript as SceneScript2 } from "./components/scene-2";
import { SceneScript as SceneScript3 } from "./components/scene-3";
import { SceneScript as SceneScript4 } from "./components/scene-4";

import "./styles/sass/global.sass";

export const App = () => {
  const [isPageLoaded, pageLoaded] = useState<boolean>(true);

  return (
    <div>
      <Banner />
      {isPageLoaded ? (
        <>
          <SceneScript1 />
          <SceneScript2 />
          <SceneScript3 />
          <SceneScript4 />
          <BottomBar />
        </>
      ) : (
        <>
          <LoadInterface />
        </>
      )}
    </div>
  );
};
