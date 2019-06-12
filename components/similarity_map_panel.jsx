import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';

import getSimilarityMap from '../services/email_similarity';
import objectToArray from './lib/object_to_array';
import TableBodyFromArray from './lib/table_body_from_array';
import locales from '../locales/en/similarity_map_panel.json';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const SimilarityMapPannel = (props) => {
  const { emails } = props;
  const [similarityMapArray, setSimilarityMapArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [generateSimilarityMapArray, setGenerateSimilarityMapArray] = useState(false);

  useEffect(() => {
    if (generateSimilarityMapArray) {
      const similarityMap = getSimilarityMap(emails);
      setSimilarityMapArray(objectToArray(similarityMap));
      setLoading(false);
    }
    if (loading) { setGenerateSimilarityMapArray(true); }
  }, [loading, generateSimilarityMapArray]);

  const handlePanelChange = (event, expanded) => {
    if (expanded) { setLoading(true); }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel onChange={handlePanelChange}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{locales.panel_summary}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>{locales.head.user}</TableCell>
                <TableCell align="right">{locales.head.duplicates}</TableCell>
              </TableRow>
            </TableHead>
            <TableBodyFromArray sourceArray={similarityMapArray} />
          </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {loading ? <LinearProgress /> : null}
    </div>
  );
};

SimilarityMapPannel.propTypes = {
  emails: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SimilarityMapPannel;
