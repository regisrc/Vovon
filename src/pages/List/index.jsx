import MaterialTable from 'material-table';
import React, { useState, useEffect, useRef } from 'react';

import {
  Container,
  Status
} from "./styles";
import Header from "../../components/Header"
import { Loading } from "../../components/LoadingComponent";
import { Patients } from "../../api/patients"
import { StatusEnumBR } from '../../service/enums/status';

const columns = [
  {
    title: 'Nível de Atenção',
    field: 'warningLevel',
    render: rowData => <Status status={rowData.warningLevel}/>
  },
  { title: 'Nome', field: 'name' },
  { title: 'Batimentos', field: 'bpm' },
  { title: 'Temperatura', field: 'temp' },
  { title: 'Oxigenação', field: 'oxig' },
  { title: 'Status Dispositivo', field: 'status', render: rowData => StatusEnumBR[rowData.status].value}
];

const List = () => {
  const [data, setData] = useState();
  const [isMounted, setIsMounted] = useState(false);
  const dashboardValue = useRef(Patients())

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    dashboardValue.current.then(value => setData(value.data))

  }, [isMounted]);

  return (
    <Container>
      <Header page={'list'}/>
      {!data && Loading}
      {data &&
       <div style={{ maxWidth: '100%', padding: '16px' }}>
        <MaterialTable options={{ exportButton: true }} columns={columns} data={data} title='Lista de pacientes' localization={{
        body: {
          emptyDataSourceMessage: 'Nenhum registro para exibir'
        },
        toolbar: {
          searchTooltip: 'Pesquisar',
          searchPlaceholder: 'Pesquisar',
          exportTitle: 'Exportar',
          exportName: 'Exportar'
        },
        pagination: {
          labelRowsSelect: 'linhas',
          labelDisplayedRows: '{count} de {from}-{to}',
          firstTooltip: 'Primeira página',
          previousTooltip: 'Página anterior',
          nextTooltip: 'Próxima página',
          lastTooltip: 'Última página'
        }
      }} />
      </div> }
    </Container>)
}

export default List;