import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from '../../../services/hooks';
import { getFacts } from '../../../ducks/data/index';

const PrimeContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  line-height: 25px;
  background-color: #6438FD;
  height: 60%;
  width: 80%;
  box-shadow: -2px 1px 5px 3px rgba(232,225,232,1);
  border-radius: 10px;
`;

const Container = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
height: 100vh;
`
const Text = styled.p`
color: white;
font-size: 1.5em;
text-align: center;
font-family: merriweather
`


const Prime: React.FC = () => {
  const dispatch = useDispatch();
  const facts = useSelector((state) => state.data)

  const getFact = () => {
    dispatch(getFacts())
  };
  // useEffect(() => {
  //   getFact();
  // }, []);
  return (
    <>
      <Container>
        <PrimeContent>
          <Text>{facts.loading ? 'Aan het laden ...' : facts?.data}</Text>
          <button onClick={getFact}>Get a cat fact!!</button>
        </PrimeContent>
      </Container>
    </>
  );
};

export default Prime;
