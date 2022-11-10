import React, { useState } from 'react';
import { View, Button, Alert, Switch, Text, TextInput } from 'react-native';
import { Container, ImageContainer, SelectContainer, Input, InputContainer, InputTextArea, InputView, RadioContainer, RadioHolder, SelectImage, TitleText, SwichGroup, OneSwitch } from '../styles/add';
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

function AddPost(props) {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [image, setImage] = useState(null);
    const [title, settitle] = useState('');
    const [des, setdes] = useState('');
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const [type, settype] = useState('')
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const submitData = () => {

        if (type === '') {
            alert("Please select an Template")
            return
        }
        if (selectedLanguage === '' || selectedLanguage === 'n') {
            alert("Please select an Post Type")
            return
        }
        if (title === '') {
            alert("Please enter the post title")
            return
        }

    }
    return (
        <Container>
            <TitleText>Select the Template</TitleText>
            <InputContainer>
                <SelectContainer>
                    <ImageContainer>
                        <SelectImage source={require('../../../../assets/im.jpg')} />
                        <RadioButton status={type === 1 ? 'checked' : 'unchecked'} onPress={() => settype(1)} />
                    </ImageContainer>
                    <ImageContainer>
                        <SelectImage source={require('../../../../assets/im.jpg')} />
                        <RadioButton status={type === 2 ? 'checked' : 'unchecked'} onPress={() => settype(2)} />
                    </ImageContainer>
                    <ImageContainer>
                        <SelectImage source={require('../../../../assets/im.jpg')} />
                        <RadioButton status={type === 3 ? 'checked' : 'unchecked'} onPress={() => settype(3)} />
                    </ImageContainer>
                </SelectContainer>
                <InputView>
                    <Text>Post Category</Text>
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }
                        itemStyle={{ backgroundColor: "#dddddd6" }}
                    >
                        <Picker.Item label="Select one" value="n" />
                        <Picker.Item label="Event" value="e" />
                        <Picker.Item label="Article" value="a" />
                        <Picker.Item label="Photos" value="p" />
                    </Picker>
                </InputView>

                <InputView>
                    <Text>Post Title</Text>
                    <Input placeholder={"Enter the Post title"} onChangeText={newtext => settitle(newtext)} />
                </InputView>


                <InputView>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Button title="Image" onPress={pickImage} />
                        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                    </View>
                </InputView>

                <InputTextArea>
                    <Text>Post Description</Text>
                    <Input placeholder={"Enter the Description"} multiline={true} />
                </InputTextArea>

                <SwichGroup>
                    <OneSwitch>
                        <Text>Likes</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        />
                    </OneSwitch>

                    <OneSwitch>
                        <Text>Comments</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch2}
                            value={isEnabled2}
                        />
                    </OneSwitch>
                </SwichGroup>
            </InputContainer>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Create" color="green" onPress={() => submitData()} />
            </View>

        </Container>
    );
}

export default AddPost;