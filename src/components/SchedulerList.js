import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';

import { events } from '../common/listEvents';

const SchedulerList = () => {
  const currentDate = '2018-06-27';
  const [data, setData] = useState(events);

  const commitChanges = ({ added, changed, deleted }) => {
    let listData = [...data];

    if (added) {
      const startingAddedId =
        listData.length > 0 ? data[data.length - 1].id + 1 : 0;
      listData = [...data, { id: startingAddedId, ...added }];
    }

    if (changed) {
      listData = data.map((ev) =>
        changed[ev.id] ? { ...ev, ...changed[ev.id] } : ev
      );
    }

    if (deleted !== undefined) {
      listData = data.filter((ev) => ev.id !== deleted);
    }

    setData(listData);
  };
  return (
    <Paper>
      <Scheduler data={data} height={660}>
        <ViewState currentDate={currentDate} />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />
        <DayView startDayHour={9} endDayHour={19} />
        <ConfirmationDialog />
        <Appointments />
        <AppointmentTooltip showOpenButton showDeleteButton />
        <AppointmentForm />
      </Scheduler>
    </Paper>
  );
};

export default SchedulerList;
