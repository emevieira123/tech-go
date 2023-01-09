import { useContext, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { BsPlayCircle } from 'react-icons/bs';
import { TbHandStop } from 'react-icons/tb';
import { ImHistory } from 'react-icons/im';
import { History } from './History';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import {
  HistoryLink,
  PomodoroContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles';
import { NewCycleForm } from './components/NewCycleForm';
import { Countdown } from './components/Countdown';
import { CyclesContext } from '../../contexts/CyclesContext';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number()
    .min(5, 'O ciclo precisa ter no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ter no máximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Pomodoro() {
  const [historyVisible, setHistoryVisible] = useState(false);

  const { createNewCycle, interruptCurrentCycle, activeCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  const { handleSubmit, reset, watch } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <>
      {
        historyVisible ?
          <History backPomodoroPage={setHistoryVisible} /> :
          <PomodoroContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
              
                <FormProvider {...newCycleForm}>
                  <NewCycleForm />
                </FormProvider>
                <Countdown />
              

              {activeCycle ? (
                <StopCountdownButton onClick={interruptCurrentCycle} type="button">
                  <TbHandStop size={24} />
                  Interromper
                </StopCountdownButton>
              ) : (
                <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                  <BsPlayCircle size={24} />
                  Começar
                </StartCountdownButton>
              )}

              <HistoryLink onClick={() => setHistoryVisible(true)}>
                <ImHistory />
                Histórico
              </HistoryLink>
            </form>

          </PomodoroContainer>
      }
    </>
  );
}