import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Lottie } from '@crello/react-lottie';

import animation from 'public/2729-cat-paw.json'
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
  const [state, setState] = useState<boolean>(false);
  const defaultOptions = {
    animationData: animation,
  };

  const dispatch = useDispatch();
  const facts = useSelector((state) => state.data)

  const getFact = () => {
    dispatch(getFacts())
    setState(true);
    setTimeout(() => {
      setState(false);
    }, 2000);
  };
  // useEffect(() => {
  //   getFact();
  // }, []);



  return (
    <>
      <Container>
        <PrimeContent>
          <Text>{facts.loading ? '' : facts?.data}</Text>
          <div onClick={getFact} >
            <Lottie
              playingState={state ? 'playing' : 'stopped'}
              config={defaultOptions}
              height={'140px'}
              width={'140px'} />
          </div>
        </PrimeContent>
      </Container>
    </>
  );
};

export default Prime;
