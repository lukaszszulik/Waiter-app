import { Container } from "react-bootstrap";
import { useSelector } from 'react-redux';

const Home = () => {

    const tables = useSelector(state => state.tables);
    return (
        <Container>
            Strona główna
        </Container>
    );
};

export default Home;