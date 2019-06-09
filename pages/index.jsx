import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { getAllPersonalInformation } from '../services/people_fetcher';
import getCharMap from '../services/char_count';
import getSimilarityMap from '../services/email_similarity';
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
  const { people, charMap, similarityMap } = props;

  return (
    <div className={classes.root}>
      <CharMapPanel charMap={charMap} />
      <SimilariyMapPanel similarityMap={similarityMap} />
      <PeopleTable people={people} />
    </div>
  );
};

Index.getInitialProps = async () => {
  const allPersonalInformation = await getAllPersonalInformation();
  const emails = allPersonalInformation.people.map(element => element.email_address);
  const charMap = getCharMap(emails);
  const similarityMap = getSimilarityMap(emails);
  return { people: allPersonalInformation.people, charMap, similarityMap };
};

Index.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email_address: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
  charMap: PropTypes.objectOf(PropTypes.number).isRequired,
  similarityMap: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default Index;
