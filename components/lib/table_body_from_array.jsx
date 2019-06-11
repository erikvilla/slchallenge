import React from 'react';
import Proptypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TableBodyFromArray = (props) => {
  const { sourceArray } = props;
  return (
    <TableBody>
      {sourceArray.map(set => (
        <TableRow key={set[0]}>
          <TableCell component="th" scope="row">
            {set[0]}
          </TableCell>
          <TableCell align="right">{set[1]}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

TableBodyFromArray.propTypes = {
  sourceArray: Proptypes.arrayOf(Proptypes.array).isRequired,
};

export default TableBodyFromArray;
