import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const TabSpan = styled.span`
margin-right: 5px;
`

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  console.log(props)
  let classSelector = (props.tab === props.selectTab)
  return (
    <div
      name={props.tab}
      className={`tab${classSelector ? " active-tab" : ""}`}
      onClick={props.selectTabHandler}
    >
      <TabSpan name={props.tab}>{props.tab.toUpperCase()}</TabSpan>
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired
}


export default Tab;
