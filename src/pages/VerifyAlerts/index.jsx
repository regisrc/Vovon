import MaterialTable from 'material-table';
import React, { useState, useEffect, useRef } from 'react';

import {
  Container
} from "./styles";
import Header from "../../components/Header"
import { Loading } from "../../components/LoadingComponent";
import { GetAlerts } from "../../api/patients"
import { Sensors, Operation, AlertLevel } from "../../service/enums/alerts.js"

const columns = [
  { title: 'Descrição', field: 'descricao' },
  { title: 'Nível de Alerta', field: 'alertLevel' },
  { title: 'Tipo operação', field: 'tipoOp' },
  { title: 'Valor', field: 'valor' },
  { title: 'Tipo sensor', field: 'tipoSensor' },
  { title: 'Ativo', field: 'ativo' },
];

const VerifyAlerts = () => {
  const [data, setData] = useState();
  const [isMounted, setIsMounted] = useState(false);
  const alerts = useRef(GetAlerts())

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    alerts.current.then(value => prepareData(value.data))
  }, [isMounted]);

  const prepareData = (data) => {
    var dataObject = [];

    for (let index = 0; index < data.length; index++) {
      const descricao = data[index].descricao;
      const alertLevel = AlertLevel[data[index].nivelAlerta]
      
      data[index].regras.forEach(single => dataObject.push({
        descricao: descricao,
        alertLevel: alertLevel,
        ativo: single.estaAtivo ? "Sim" : "Não",
        tipoOp: Operation[single.tipoOperacao],
        valor: single.valorReferencia,
        tipoSensor: Sensors[single.tipoSensor]
      }))
    }

    setData(dataObject)
  }

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

export default VerifyAlerts;