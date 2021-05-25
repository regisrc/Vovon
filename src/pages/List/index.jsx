import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';

import {
  Container,
  Status
} from "./styles";
import Header from "../../components/Header"
import { Patients } from "../../api/patients"

const columns = [
  {
    title: 'Status',
    field: 'warningLevel',
    render: rowData => <Status status={rowData.warningLevel}/>
  },
  { title: 'Nome', field: 'name' },
  { title: 'Batimentos', field: 'bpm' },
  { title: 'Temperatura', field: 'temp' },
  { title: 'Oxigenação', field: 'oxig' },
];

const List = () => {
  const [data, setData] = useState(null);
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const fetchData = async () => {
      setData(await Patients())
    }
    
    fetchData();
  }, [isMounted]);

  return (
    <Container>
      <Header page={'list'}/>
      {data &&
       <div style={{ maxWidth: '100%', padding: '16px' }}>
        <MaterialTable options={{ exportButton: true }} columns={columns} data={data} title='Lista de pacientes' />
      </div> }
    </Container>)
}

export default List;