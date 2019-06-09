import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const charMapToSortedArray = (charMap) => {
  const charMapKeys = Object.keys(charMap);
  const charMapArray = [];
  for (let i = 0; i < charMapKeys.length; i += 1) {
    charMapArray.push([charMapKeys[i], charMap[charMapKeys[i]]]);
  }

  charMapArray.sort((a, b) => b[1] - a[1]);
  return charMapArray;
};

const CharMapPannel = (props) => {
  const { charMap } = props;
  const charMapArray = charMapToSortedArray(charMap);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Show email char count</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Letter</TableCell>
                <TableCell align="right">Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {charMapArray.map(countSet => (
                <TableRow key={countSet[0]}>
                  <TableCell component="th" scope="row">
                    {countSet[0]}
                  </TableCell>
                  <TableCell align="right">{countSet[1]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

CharMapPannel.propTypes = {
  charMap: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default CharMapPannel;
