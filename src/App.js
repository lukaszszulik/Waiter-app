import { Container } from 'react-bootstrap';
import Tables from './components/features/Tables/Tables';
import Table from './components/features/Table/Table';
import Footer from './components/views/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Header from './components/pages/Header/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/TableRedux';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
    <Header />
    <Routes>
      <Route path='/' element={<Tables />} />
      <Route path='/table' element={<Table />} />
      <Route path='/table/:tableId' element={<Table />} />
      <Route path='/' element={<Tables />} />
      <Route path='/*' element={<Tables />} />
    </Routes>
    <Footer/>
  </Container>
  );
};

export default App;
