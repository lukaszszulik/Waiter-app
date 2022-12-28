import TableForm from '../TableForm/TableForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTablesById } from '../../../redux/TableRedux';

const Table = ({ id, status, peopleAmount, bill }) => {
    const { tableId } = useParams();

    const tableData = useSelector((state) => getTablesById(state, tableId));


    return (
        <div>
          <TableForm {...tableData} />
        </div>
      );
    };
    

export default Table;