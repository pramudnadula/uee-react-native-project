import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { View, Button, Alert, Switch, Text, TextInput } from 'react-native';
import { Container, ImageContainer, SelectContainer, Input, InputContainer, InputTextArea, InputView, RadioContainer, RadioHolder, SelectImage, TitleText, SwichGroup, OneSwitch } from '../styles/add';
import { EventImage } from "../styles/all";
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

function EditEvent({ route, navigation }) {
    const { event } = route.params
    const [uid, setuid] = useState('');
    const [eid, seteid] = useState('');
    const [title, settitle] = useState('');
    const [date, setdate] = useState('');
    const [venue, setvenue] = useState('');
    const [time, settime] = useState('');
    const [description, setdescription] = useState('');


    useEffect(() => {
        getData()
        setdata()
    }, [])

    const setdata = () => {
        seteid(event._id)
        settitle(event.title)
        setdescription(event.description)
        settime(event.time)
        setvenue(event.venue)
    }
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('uid')
            if (value !== null) {
                setuid(value)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const submitData = () => {

        if (title === '') {
            alert("Please select an title")
            return
        }


        if (venue === '') {
            alert("Please enter the venue")
            return
        }


        if (time === '') {
            alert("Please enter the time")
            return
        }

        if (description === '') {
            alert("Please enter the description")
            return
        }


        const newEvent = {
            uid,
            title,
            date,
            venue,
            time,
            description

        };

        axios.post('http://192.168.1.122:8070/api/event/edit', { eid, obj: newEvent })
            .then(data => {
                console.log(data.data)
                alert("successfully created")
                navigation.navigate("myevent")


            }).catch(err => {
                console.log(err)
            })



    }



    return (
        <Container>
            <TitleText>Update Event</TitleText>
            <InputContainer>

                <EventImage source={require('../../../../assets/createevent.jpg')} />


                <InputView>
                    <Text>Title</Text>
                    <Input placeholder={"Enter the Event title"} onChangeText={newtext => settitle(newtext)} value={title} />
                </InputView>

                {/* <InputView>
                    <Text>Date</Text>
                    <Input placeholder={"Enter the Date"} onChangeText={newtext => setdate(newtext)} />
                </InputView> */}

                <InputView>
                    <Text>Venue</Text>
                    <Input placeholder={"Enter the Venue"} onChangeText={newtext => setvenue(newtext)} value={venue} />
                </InputView>

                <InputView>
                    <Text>Time</Text>
                    <Input placeholder={"Enter the time"} onChangeText={newtext => settime(newtext)} value={time} />
                </InputView>


                <InputTextArea>
                    <Text>Event Description</Text>
                    <Input placeholder={"Enter the Description"} onChangeText={newtext => setdescription(newtext)} value={description} />
                </InputTextArea>


            </InputContainer>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Create" color="green" onPress={() => submitData()} />
            </View>

        </Container>

    )
}

export default EditEvent;

