import { HistoryContainer, HistoryHeader, HistoryList, Status } from "./styles";
import { IoChevronBackOutline } from 'react-icons/io5';
import { useContext } from "react";
import { CyclesContext } from "../../../contexts/CyclesContext";
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface HistoryProps {
  backPomodoroPage: (value: boolean) => void;
}

export function History({ backPomodoroPage }: HistoryProps) {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <HistoryHeader>
        <h1>Meu histórico</h1>
        <span onClick={() => backPomodoroPage(false)}><IoChevronBackOutline /> Voltar</span>
      </HistoryHeader>

      <HistoryList>
        <table>

          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map(cycle => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>{formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}</td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}

                    {cycle.interruptDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}

                    {!cycle.finishedDate && !cycle.interruptDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}