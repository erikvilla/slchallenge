import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
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

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);


  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.header}>Name</TableCell>
            <TableCell align="right" className={classes.header}>
              Title
            </TableCell>
            <TableCell align="right" className={classes.header}>
              Email
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(person => (
            <TableRow key={person.email_address}>
              <TableCell component="th" scope="row" className={classes.cell}>
                {`${person.first_name} ${person.last_name}`}
              </TableCell>
              <TableCell align="right" className={classes.cell}>
                {person.title}
              </TableCell>
              <TableCell align="right" className={classes.cell}>
                {person.email_address}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[50]}
        component="div"
        count={people.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

PeopleTable.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email_address: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};

export default PeopleTable;
