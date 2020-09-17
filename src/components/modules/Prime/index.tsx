import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from '../../../services/hooks';
import { getFacts } from '../../../ducks/data/index';

const PrimeContent = styled.section`
  text-align: center;
  padding: 0 10px;
  line-height: 25px;
`;


const Prime: React.FC = () => {
  const dispatch = useDispatch();
  const facts = useSelector((state) => state.data)

  const getFact = () => {
    dispatch(getFacts())
  };
  useEffect(() => {
    getFact();
  }, []);
  console.log(facts?.data, 'hello')
  return (
    <>
      <PrimeContent>
        <div>{facts.loading ? 'Aan het laden ...' : facts?.data}</div>
        <button onClick={getFact}>Get a cat fact!!</button>
      </PrimeContent>
    </>
  );
};

export default Prime;
