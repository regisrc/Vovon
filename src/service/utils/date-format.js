export const date = () => {
  const meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  let data = new Date();
  let dataFormatada = `${diasSemana[data.getDay()]}, ${data.getDate()} ${
    meses[data.getMonth()]
  } ${data.getFullYear()}`;

  return dataFormatada;
};

export const hour = () => {
  let data = new Date();

  let minutes = data.getMinutes().toString();
  let minutesWithZero = minutes.length === 1 ? `0${minutes}` : minutes;

  let horaFormatada = `${data.getHours()}:${minutesWithZero}`;

  return horaFormatada;
};
