import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import A from 'components/A';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

const NavWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-content: space-between !important;
  padding: 0 16px;
  margin: -1px -1px 0;
  background-color: #2a3038;
  border-color: #444c56;
  border-style: solid;
  border-width: 1px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const TopDropList = styled.div`
  padding: 2px;
  min-height: 100%;
  align-items: center;
  justify-content: space-between !important;
`;

const dropdownStyle = {
  color: '#768390',
  fontSize: '12px',
  marginRight: '20px',
};

function Header() {
  return (
    <NavWrapper>
      <NavBar>
        <HeaderLink to="/" exact className="first">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features" className="second">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar>
      <TopDropList>
        <A style={dropdownStyle}>Spoken Language: Any</A>
        <A style={dropdownStyle}>Language: Any</A>
        <A style={dropdownStyle}>Date Range: Today</A>
      </TopDropList>
    </NavWrapper>
  );
}

export default Header;
