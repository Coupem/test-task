import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';

import {
  SelectionState,
  SearchState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  Toolbar,
  SearchPanel,
  TableHeaderRow,
  TableSelection,
} from '@devexpress/dx-react-grid-material-ui';
import { columns } from '../common/configColumns';
import { useStyles } from '../styled/gridStyles';
import { cars } from '../common/listCars';

const GridList = () => {
  const classes = useStyles();

  const [selection, setSelection] = useState([]);
  const [searchValue, setSearchState] = useState('');

  const listCars = cars.map(({ image, id, ...responseCars }) => ({
    ...responseCars,
    image: <img className={classes.image} alt="img" src={image} />,
  }));

  return (
    <Paper className={classes.themeTable}>
      <Grid rows={listCars} columns={columns}>
        <SearchState value={searchValue} onValueChange={setSearchState} />
        <IntegratedFiltering />
        <SelectionState
          selection={selection}
          onSelectionChange={setSelection}
        />
        <IntegratedFiltering />
        <Table />
        <TableHeaderRow />
        <TableSelection />
        <Toolbar />
        <SearchPanel center />
      </Grid>
    </Paper>
  );
};

export default GridList;
