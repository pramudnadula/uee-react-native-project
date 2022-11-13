import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ImageContainer, SelectContainer, Input, InputContainer, InputTextArea, InputView, RadioContainer, RadioHolder, SelectImage, TitleText, SwichGroup, OneSwitch, SearchView, PageTitle } from '../styles/add';
import { AddButton } from "../styles/all";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Searchbar } from 'react-native-paper';
import { View, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyEventCard from '../Components/MyEventCard';

function AllEvent({ navigation }) {

    const [data, setdate] = useState([])
    const [uid, setuid] = useState('')
    const path = "http://10.0.2.2:8070"
    const getData2 = async () => {
        try {
            const value = await AsyncStorage.getItem('uid')
            if (value !== null) {
                setuid(value)
                getData(value)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData2()


    }, [data])
    const getData = (id) => {
        axios.post(`${path}/api/event/allevent`).then(data => {
            setdate(data.data)
        }).catch(err => {
            console.log(err)
        })
    }






    return (
        <Container>
            <AddButton onPress={() => navigation.navigate("addevent")}><Ionicons name="add-circle" color="blue" size={57} /></AddButton>
            <View style={{ width: 30 }}></View>
            <View>
                <PageTitle>All Events</PageTitle>
            </View>

            {/* <SearchView>
                <Searchbar
                    placeholder="Search"
                    // onChangeText={(query) => setSearchQuery(query)}
                    // value={searchQuery}
                    style={{ width: "90%" }}
                />
            </SearchView> */}

            <FlatList
                data={data}
                renderItem={({ item }) => <MyEventCard item={item} type={true} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}

export default AllEvent;