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

const similarityMapToArray = (similarityMap) => {
  const mapKeys = Object.keys(similarityMap);
  const mapArray = [];
  for (let i = 0; i < mapKeys.length; i += 1) {
    mapArray.push([mapKeys[i], similarityMap[mapKeys[i]]]);
  }
  return mapArray;
};

const SimilarityMapPannel = (props) => {
  const { similarityMap } = props;
  const similarityMapArray = similarityMapToArray(similarityMap);


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Show possible duplicates</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell align="right">Possible duplicates</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {similarityMapArray.map(similaritySet => (
                <TableRow key={similaritySet[0]}>
                  <TableCell component="th" scope="row">
                    {similaritySet[0]}
                  </TableCell>
                  <TableCell align="right">{similaritySet[1]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

SimilarityMapPannel.propTypes = {
  similarityMap: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default SimilarityMapPannel;
