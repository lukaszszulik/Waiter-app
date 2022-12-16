import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import { ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllTables = () => {
    const tables = useSelector(state => getAllTables(state));
    if(tables.lenght === 0 )
    return(
        <div>
            <Spinner  animation="border" variant="primary" />
            <p>Loading</p>
        </div>
    )
    return (
        <div>
            <h1>All Tables</h1>
            <ListGroup variant="flush">
                {tables.map((table) => <ListGroup.Item key={table.id} id={table.id} status={table.status} to={'/table/' + table.id}>
                <div>
                    <h3>Table {table.id}</h3>
                    <h6>Status {table.status}</h6>
                </div>
                <Link to={{ pathname: `/table/${table.id}`}}>Show more</Link>
                </ListGroup.Item>)}
            </ListGroup>
        </div>
    );
};

export default AllTables;