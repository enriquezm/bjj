import React from "react";
import styled from "styled-components";

const Belt = styled.div`
  height: 14px;
  width: 75px;
  display: flex;
  justify-content: space-around;
  border: 1px solid #d4d4d4;
  border-radius: 4px 0 0 4px;
  background-color: ${props => props.color};
`;

const Bar = styled.div`
  background-color: #383a3c;
  width: 50px;
  display: flex;
`;

const Stripe = styled.div`
  width: 5px;
  background-color: #fbf5e6;
  &:not(:last-child) {
    margin-right: 5px;
  }
  &:first-child {
    margin-left: 7px;
  }
`;

const BeltRank = props => {
  let stripes = [];
  for (let i = 0; i < props.stripes; i++) {
    stripes.push(<Stripe />);
  }
  return (
    <Belt color={props.color}>
      <Bar>{stripes}</Bar>
    </Belt>
  );
};

export default BeltRank;