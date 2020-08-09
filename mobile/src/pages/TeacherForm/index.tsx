import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import {Picker} from '@react-native-community/picker';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { ScrollView, TextInput, RectButton } from 'react-native-gesture-handler';



function TeacherForm() {
    return (
        <View style={styles.container}>
            <PageHeader 
                title="Que incrível que você quer dar aulas." 
                description="O primeiro passo é preencher esse formulário de inscrição." 
            />
            <ScrollView>
                <View style={styles.form}>
                    <View style={styles.fieldset}>
                        <Text style={styles.title}>Seus Dados</Text>

                        <Text style={styles.label}>Nome Completo</Text>
                        <TextInput 
                            style={styles.input} 
                        />

                        <Text style={styles.label}>Link da sua foto</Text>
                        <TextInput 
                            style={styles.input} 
                        />

                        <Text style={styles.label}>Whatsapp</Text>
                        <TextInput 
                            style={styles.input} 
                        />

                        <Text style={styles.label}>Biografia</Text>
                        <TextInput 
                            style={styles.input} 
                            multiline={true}
                            numberOfLines={4}
                        />
                        
                    </View>
                    <View style={styles.fieldset}>
                        <Text style={styles.title}>Sobre a aula</Text>

                        <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            style={styles.input} 
                        />

                        <Text style={styles.label}>Custo de sua hora por aula</Text>
                        <TextInput 
                            style={styles.input} 
                        />
                        
                    </View>
                    <View style={styles.fieldset}>
                        <Text style={styles.title}>Horários disponíveis</Text>

                        <Text style={styles.label}>Dia da semana</Text>
                        <TextInput 
                            style={styles.input} 
                        />

                        <Text style={styles.label}>Das</Text>
                        <TextInput 
                            style={styles.input} 
                        />

                        <Text style={styles.label}>Até</Text>
                        <TextInput 
                            style={styles.input} 
                        />
                        
                    </View>
                    <View style={styles.footer}>
                        <Feather name="alert-octagon" size={30} color="#8257E5" />
                        <Text style={styles.textFooter}>
                            Importante! {'\n'}Preencha todos os dados
                        </Text>
                        <RectButton style={styles.buttonFooter}>
                            <Text style={styles.textButton}>Salver Cadastro</Text>
                        </RectButton>
                    </View>

                    <Picker
                        style={{height: 50, width: 100}}
                        onValueChange={(itemValue, itemIndex) =>
                            console.log(itemValue)
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>


                </View>
            </ScrollView>
        </View>
    );
}

export default TeacherForm;