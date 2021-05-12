import MaterialTable from 'material-table';

import {
  Container,
  Status
} from "./styles";
import Header from "../../components/Header"
import Patients from "../../api/patients"
import { colors } from "../../styles/colors"

const columns = [
  {
    title: 'Status',
    field: 'status',
    render: rowData => <Status status={rowData.status}/>
  },
  { title: 'Nome', field: 'user' },
  { title: 'Batimentos', field: 'bpm.value' },
  { title: 'Temperatura', field: 'temperatura.value' },
  { title: 'Oxigenação', field: 'oxigenacao.value' },
];

const List = () => {
  return (
    <Container>
      <Header />
      <div style={{ maxWidth: '100%', padding: '16px' }}>
        <MaterialTable options={{ exportButton: true }} columns={columns} data={Patients} title='Lista de pacientes' />
      </div>
    </Container>)
}

export default List;