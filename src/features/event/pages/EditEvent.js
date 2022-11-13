// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import { View, Button, Alert, Switch, Text, TextInput } from 'react-native';
// import { Container, ImageContainer, SelectContainer, Input, InputContainer, InputTextArea, InputView, RadioContainer, RadioHolder, SelectImage, TitleText, SwichGroup, OneSwitch } from '../styles/add';
// import { EventImage } from "../styles/all";
// import { Picker } from '@react-native-picker/picker';
// import * as ImagePicker from 'expo-image-picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// function AddEvent(props) {
//     const [uid, setuid] = useState('');
//     const [title, settitle] = useState('');
//     const [date, setdate] = useState('');
//     const [venue, setvenue] = useState('');
//     const [time, settime] = useState('');
//     const [description, setdescription] = useState('');


//     useEffect(() => {
//         getData()
//     }, [])
//     const getData = async () => {
//         try {
//             const value = await AsyncStorage.getItem('uid')
//             if (value !== null) {
//                 setuid(value)
//             }
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     const submitData = () => {

//         if (title === '') {
//             alert("Please select an title")
//             return
//         }

//         if (date === '') {
//             alert("Please enter the date")
//             return
//         }

//         if (venue === '') {
//             alert("Please enter the venue")
//             return
//         }


//         if (time === '') {
//             alert("Please enter the time")
//             return
//         }

//         if (description === '') {
//             alert("Please enter the description")
//             return
//         }


//         const newEvent = {
//             uid,
//             title,
//             date,
//             venue,
//             time,
//             description

//         };

//         axios.post('http://192.168.1.122:8070/api/event/add', newEvent)
//             .then(data => {
//                 console.log(data.data)
//                 alert("successfully created")


//             }).catch(err => {
//                 console.log(err)
//             })



//     }



//     return (
//         <Container>
//             <TitleText>Create Event</TitleText>
//             <InputContainer>

//                 <EventImage source={require('../../../../assets/createevent.jpg')} />


//                 <InputView>
//                     <Text>Title</Text>
//                     <Input placeholder={"Enter the Event title"} onChangeText={newtext => settitle(newtext)} />
//                 </InputView>

//                 <InputView>
//                     <Text>Date</Text>
//                     <Input placeholder={"Enter the Date"} onChangeText={newtext => setdate(newtext)} />
//                 </InputView>

//                 <InputView>
//                     <Text>Venue</Text>
//                     <Input placeholder={"Enter the Venue"} onChangeText={newtext => setvenue(newtext)} />
//                 </InputView>

//                 <InputView>
//                     <Text>Time</Text>
//                     <Input placeholder={"Enter the time"} onChangeText={newtext => settime(newtext)} />
//                 </InputView>


//                 <InputTextArea>
//                     <Text>Event Description</Text>
//                     <Input placeholder={"Enter the Description"} onChangeText={newtext => setdescription(newtext)} />
//                 </InputTextArea>


//             </InputContainer>

//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Button title="Create" color="green" onPress={() => submitData()} />
//             </View>

//         </Container>

//     )
// }

// export default AddEvent;

