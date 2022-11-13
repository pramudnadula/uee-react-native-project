import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Modal, TouchableOpacity, View, Button, Alert, Switch, Text, TextInput, StyleSheet } from 'react-native';
import { Container, ImageContainer, SelectContainer, Input, InputContainer, InputTextArea, InputView, RadioContainer, RadioHolder, SelectImage, TitleText, SwichGroup, OneSwitch } from '../styles/add';
import { EventImage } from "../styles/all";
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePicker from '@react-native-community/datetimepicker';

function AddEvent(props) {
    const [uid, setuid] = useState('');
    const [title, settitle] = useState('');
    const [date, setdate] = useState('09-10-2020');
    const [venue, setvenue] = useState('');
    const [time, settime] = useState('');
    const [description, setdescription] = useState('');
    const [img, setImg] = useState('');


    useEffect(() => {
        getData()
    }, [])
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

    const onChangeTextComment = (value) => {
        setComment(value)
    }

    const submitData = () => {

        if (title === '') {
            alert("Please select an title")
            return
        }

        if (date === '') {
            alert("Please enter the date")
            return
        }

        if (img === '') {
            alert("Please enter the date")
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
            img,
            venue,
            time,
            description

        };

        axios.post('http://192.168.1.122:8070/api/event/add', newEvent)
            .then(data => {
                console.log(data.data)
                alert("successfully created")


            }).catch(err => {
                console.log(err)
            })
    }


    return (
        <Container>
            <TitleText>Create Event</TitleText>
            <InputContainer>

                <EventImage source={require('../../../../assets/createevent.jpg')} />

                {/* <View >
                    <TouchableOpacity style={{ justifyContent: 'center', backgroundColor: '#52B1E2', height: 20, width: '40%', alignItems: 'center', alignSelf: 'flex-end', borderRadius: 6, marginTop: 3 }} >
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}> UPLOAD IMAGE </Text>
                    </TouchableOpacity>
                </View> */}

                <InputView>
                    <Text>Title</Text>
                    <Input placeholder={"Enter the Event title"} onChangeText={newtext => settitle(newtext)} />
                </InputView>

                <InputView>
                    <Text>Date</Text>
                    <Input placeholder={"Enter the Date"} onChangeText={newtext => setdate(newtext)} />
                </InputView>


                {/* <DatePicker
                    style={styles.datePickerStyle}
                    date={date} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-01-2016"
                    maxDate="01-01-2019"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            //display: 'none',
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                        },
                        dateInput: {
                            marginLeft: 36,
                        },
                    }}
                    onDateChange={(date) => {
                        setdate(date);
                    }}
                /> */}

                <InputView>
                    <Text>Image</Text>
                    <Input placeholder={"Enter the Image"} onChangeText={newtext => setImg(newtext)} />
                </InputView>

                <InputView>
                    <Text>Venue</Text>
                    <Input placeholder={"Enter the Venue"} onChangeText={newtext => setvenue(newtext)} />
                </InputView>

                <InputView>
                    <Text>Time</Text>
                    <Input placeholder={"Enter the time"} onChangeText={newtext => settime(newtext)} />
                </InputView>


                <InputTextArea>
                    <Text>Event Description</Text>
                    <Input placeholder={"Enter the Description"} onChangeText={newtext => setdescription(newtext)} />
                </InputTextArea>


            </InputContainer>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Create" color="green" onPress={() => submitData()} />
            </View>

        </Container>

    )
}

export default AddEvent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
});