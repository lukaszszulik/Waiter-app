import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from './components/pages/Home/Home';
import Table from './components/pages/Table/Table';
import Error from "./components/pages/Error/Error";
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';

const App = () => {
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="/table" element={<Table/>} />
        <Route path ="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </Container>
  );
};

export default App;
