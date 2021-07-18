import React from 'react';

import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  SplineSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Animation } from '@devexpress/dx-react-chart';
import { easeBounceOut } from 'd3-ease';
import { cars } from '../common/listCars';

const ChartList = () => {
  const listCars = cars.map(({ name, price, mileage }) => ({
    car: name,
    price,
    mileage,
  }));

  return (
    <Paper>
      <Chart data={listCars}>
        <ValueScale name="price" />
        <ValueScale name="mileage" />

        <ArgumentAxis />
        <ValueAxis scaleName="price" showGrid={false} showLine showTicks />
        <ValueAxis
          scaleName="mileage"
          position="right"
          showGrid={false}
          showLine
          showTicks
        />

        <BarSeries
          name="Units Sold"
          valueField="price"
          argumentField="car"
          scaleName="price"
        />

        <SplineSeries
          name="Total Transactions"
          valueField="mileage"
          argumentField="car"
          scaleName="mileage"
        />
        <Animation duration={2000} easing={easeBounceOut} />
        <Legend />
      </Chart>
    </Paper>
  );
};

export default ChartList;
