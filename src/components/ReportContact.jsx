import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
import PropTypes from 'prop-types';

import { 
  Typography,
  Button,
} from '@material-ui/core';

// const styles = {

  // container: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   marginBottom: 16,
  // },

  // button: {
  //   minWidth: 46,
  //   width: 46,
  //   height: 46,
  //   backgroundColor: '#46A440',
  //   marginRight: 16,
  //   color: 'white',
  // },

            // link: {
            //   textDecoration: 'none',
            //   color: 'white',
            // },

  // text: {
  //   color: 'white',
  //   fontSize: '1.7rem',
  // },

  // textSmall: {
  //   color: 'white',
  //   fontSize: '1.4rem',
  // },

//   ref: {
//     color: 'white',
//     textDecoration: 'none',
//     '&:hover': {
//       color: '#CACACA',
//     },
//   },

// };

const Container = styled.div`
  display: flex';
  align-items: center;
  margin-bottom: 16px;
`;

const ButtonStyled = styled(Button)`
  min-width: 46px;
  width: 46px;
  height: 46px;
  background-color: #46A440;
  margin-px;ight: 16px;
  color: whitepx;
`;

const Text = styled(Typography)`
  color: white;
  font-size: 1.7rem;
`;

const TextSmall = styled(Typography)`
  color: white;
  font-size: 1.4rem;
`;

const Refs = styled.a`
  color: white;
  text-decoration: none;
   &:hover: 
     {
      color: #CACACA;
     }
`;

const LinkStyled = styled(Link)`
   text-decoration: none;
   color: white;
`;

const ReportContact = (props) => {
  const { changeView } = props;

  return (
    <React.Fragment>
      <Container>
        <ButtonStyled
          variant="contained"
          onClick={() => changeView('home')}
        >
       <LinkStyled to="/">
          <ArrowBack />
        </LinkStyled>
        </ButtonStyled>
        <Text>
          Contact person:
        </Text>
      </Container>
      <TextSmall>
        Mr Walter Linnert
        <br />
        <Refs href="mailto:walterl@capeaghulas.gov.za">
          walterl@capeaghulas.gov.za
          <br />
        </Refs>
        <Refs href="tel: +27284255500">
          028 425 5500
          <br />
        </Refs>
        Dirkie Uys Street, Bredasdorp, 7280
      </TextSmall>
    </React.Fragment>
  );
};

ReportContact.defaultProps = {
  classes: null,
};

ReportContact.propTypes = {
  classes: PropTypes.instanceOf(Object),
  changeView: PropTypes.func.isRequired,
};

export default ReportContact;
