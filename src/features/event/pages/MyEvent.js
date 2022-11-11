import React from 'react';
import { Container, ImageContainer, SelectContainer, Input, InputContainer, InputTextArea, InputView, RadioContainer, RadioHolder, SelectImage, TitleText, SwichGroup, OneSwitch } from '../styles/add';
import { AddButton } from "../styles/all";
import Ionicons from '@expo/vector-icons/Ionicons';


function MyEvent({ navigation }) {

    return (
        <Container>
            <AddButton onPress={() => navigation.navigate("addevent")}><Ionicons name="add-circle" color="blue" size={57} /></AddButton>

        </Container>
    );
}

export default MyEvent;