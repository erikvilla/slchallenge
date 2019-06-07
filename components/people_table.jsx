import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  header: {
    color: theme.palette.text.primary,
    fontWeight: 600,
  },
  cell: {
    color: theme.palette.text.secondary,
  },
}));

const PeopleTable = (props) => {
  const classes = useStyles();
  const { people } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.header}>Name</TableCell>
            <TableCell align="right" className={classes.header}>Title</TableCell>
            <TableCell align="right" className={classes.header}>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map(person => (
            <TableRow key={person.email_address}>
              <TableCell component="th" scope="row" className={classes.cell}>
                {`${person.first_name} ${person.last_name}`}
              </TableCell>
              <TableCell align="right" className={classes.cell}>{person.title}</TableCell>
              <TableCell align="right" className={classes.cell}>{person.email_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default PeopleTable;
