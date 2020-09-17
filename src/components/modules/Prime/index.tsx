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

  useEffect(() => {
    dispatch(getFacts());
  }, [getFacts]);

  return (
    <>
      <PrimeContent>
        <div>test</div>
      </PrimeContent>
    </>
  );
};

export default Prime;
