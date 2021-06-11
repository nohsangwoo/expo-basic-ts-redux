import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn } from '../store/reducers/loginState';
import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity`
  background-color: blue;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 4px;
`;
const DivText = styled.Text`
  font-weight: 800;
  color: ${props => props.theme.fontColor};
`;

export default function Home() {
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.loginState.isLoggedIn);
  console.log('loginState', loginState);

  const onLogIn = () => {
    dispatch(setLoggedIn(false));
  };

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <DivText>Login page</DivText>

      <View style={{ marginTop: 50 }}>
        <Btn onPress={onLogIn}>
          <DivText>log out!!!</DivText>
        </Btn>
      </View>
    </View>
  );
}
