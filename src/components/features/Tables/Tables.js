import styles from './Tables.module.scss';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/TableRedux';
import Button from '../../common/Button/Button';
import { Table, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Tables = (props) => {
  const tables = useSelector(getAllTables);
  if (tables.length === 0)
    return (
      <div>
        <Spinner animation='border' variant='primary' />
        <p>Loading</p>
      </div>
    );
  return (
    <div>
      <h2 className={styles.heading}>All Tables</h2>
      <Table hover>
        <tbody>
          {tables.map((table) => (
            <tr key={table.id}>
              <td>
                <h3>
                  <b>Table</b> {table.id}
                </h3>
              </td>
              <td>
                <b>Status:</b> {table.status}
              </td>
              <td>
                <NavLink to={'/table/' + table.id}>
                  <Button classname={styles.button}>Show more</Button>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tables;