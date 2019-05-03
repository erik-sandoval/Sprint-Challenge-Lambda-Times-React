import React from 'react';
import styled from 'styled-components'

const TabSpan = styled.span`
margin-right: 5px;
`

const Tab = props => {


  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/


  return (
    <div
      name={props.tab}
      className={''}
      onClick={props.selectTabHandler}
    >
      <TabSpan name={props.tab}>{props.tab.toUpperCase()}</TabSpan>
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
