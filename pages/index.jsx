import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { getAllPersonalInformation } from '../services/people_fetcher';
import PeopleTable from '../components/people_table';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Index = (props) => {
  const classes = useStyles();
  const { people } = props;

  return (
    <div className={classes.root}>
      <PeopleTable people={people} />
    </div>
  );
};

Index.getInitialProps = async () => {
  const allPersonalInformation = await getAllPersonalInformation();
  return { people: allPersonalInformation.people };
};

Index.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email_address: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};

export default Index;
