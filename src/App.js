import React from 'react';
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
          Porém você pode entrar em contato, através dos meios de comunicação abaixo.
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
  );
}

export default App;
