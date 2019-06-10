import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { getAllPersonalInformation } from '../services/people_fetcher';
import getCharMap from '../services/char_count';
import PeopleTable from '../components/people_table';
import CharMapPanel from '../components/char_map_panel';
import SimilariyMapPanel from '../components/similarity_map_panel';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Index = (props) => {
  const classes = useStyles();
  const { people, charMap, emails } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <CharMapPanel charMap={charMap} />
        </Grid>
        <Grid item xs={6}>
          <SimilariyMapPanel emails={emails} />
        </Grid>
      </Grid>
      <PeopleTable people={people} />
    </div>
  );
};

Index.getInitialProps = async () => {
  const allPersonalInformation = await getAllPersonalInformation();
  const emails = allPersonalInformation.people.map(element => element.email_address);
  const charMap = getCharMap(emails);
  return { people: allPersonalInformation.people, charMap, emails };
};

Index.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email_address: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
  charMap: PropTypes.objectOf(PropTypes.number).isRequired,
  emails: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Index;
