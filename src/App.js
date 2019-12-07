import './App.css'
import React from 'react';
import Index from './pages/Index.js'
import Component from './pages/Component.js'
import ReactFullpage from "@fullpage/react-fullpage";
const anchors = ["Home", "Sobre", "Contato"];

function App() {
  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      sectionsColor={["#000", "#000", "#000" ]}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

        return (
          <div>
            <Index />
            <Component headline="cuidamos de tudo" headlineComplement="infra. site. blog. e-commerce. landpage."  />
            <Component headline="seja um gênio" headlineComplement="entre em contato conosco."content="eugenio@1604.in" />
          </div>
        );
      }}
    />
  );
}

export default App;
