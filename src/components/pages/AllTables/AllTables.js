import styles from './AllTables.module.scss';
import { getAllTables } from '../../../redux/TableRedux';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const AllTables = (props) => {
    const tables = useSelector(getAllTables);

    const { listId } = useParams();
    console.log(listId, 'listid');
    return (
        <section className={styles.tables}>
          <h2 className={styles.heading}>Browse tables</h2>
          {tables.map((table) => (
            <Link
              key={table.id}
              to={'table/' + table.id}
              className={styles.tableLink}>
              <h3>TABLE {table.id}</h3>
              <p>
                Status:<b> {table.status}</b>
              </p>
            </Link>
          ))}
        </section>
      );
    };
    
    export default AllTables;