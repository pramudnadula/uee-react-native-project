import React from 'react';
import { Card } from '../styles/all';
import { CardContent, Controls, DeleteButton, Mycardcontent, MyCardImage, MyCardInfo, MyCardTitle, UpdateButton } from '../styles/mypost';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function MyCard() {
    return (
        <Card>
            <Mycardcontent>
                <MyCardTitle>
                    Kaluthara  Beach Clean event
                </MyCardTitle>
                <CardContent>
                    <MyCardImage source={require('../../../../assets/im.jpg')} />
                    <MyCardInfo>
                        asasdddds  sdsssssssssssssssss
                    </MyCardInfo>
                    <Controls>
                        <UpdateButton>
                            <FontAwesome5 name='edit' size={20} color="orange" />
                        </UpdateButton>

                        <DeleteButton>
                            <MaterialCommunityIcons name='delete-outline' color="red" size={30} />
                        </DeleteButton>

                    </Controls>
                </CardContent>
            </Mycardcontent>

        </Card>
    );
}

export default MyCard;