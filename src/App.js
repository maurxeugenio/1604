import './App.css'
import React from 'react';
<<<<<<< HEAD
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
=======
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import img from './assents/img/1604.png'
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ flexDirection: 'column', display: 'flex', align: 'center', justifyContent: 'center',  height: '80vh' }}>
        <img src={img}  alt="Logo 1604" width="60%" style={{margin: 'auto'}}/>
        <h1 style={{ fontWeight: 500, padding: 0, margin: 0, fontSize: '50pt'}}>Bem-vindo,</h1>
        <h2 style={{ fontWeight: 300}}>
          Estamos em fase inicial, portanto ainda não temos nada por aqui.
          Porém você pode entrar em contato, através dos meios de comunicação listados abaixo.
        </h2>
        <div style={{display: 'flex', flexDirection: 'row-responsive' }}>
          <Link target="_blank" style={{padding: '0 10px 0 0 '}} href="https://api.whatsapp.com/send?phone=5533998315066&text=Ol%C3%A1%2C%20fiquei%20interessado%20sobre%20a%201604%2C%20afinal%20o%20que%20voc%C3%AAs%20fazem%3F">
            Whatsapp
          </Link>
          <Link target="_blank" style={{padding: '0 10px 0 0'}} href="https://instagram.com/maurxeugenio">
            Instagram
          </Link>
        </div>
        </Typography>
      </Container>
    </React.Fragment>
>>>>>>> 4ef30cedd8150b4617adf28345e56a97f4f941ee
  );
}

export default App;
