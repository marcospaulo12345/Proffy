import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    form: {
        marginHorizontal: 20,
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 20,
        padding: 20
    },
    fieldset: {
        marginTop: 10
    },
    title: {
        color: '#32264D',
        fontSize: 20,
        fontFamily: 'Archivo_700Bold',
        paddingVertical: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6F0'
    },
    input: {
        backgroundColor: '#F8F8FC',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#E6E6F0',
        borderRadius: 8,
        padding: 6
    },
    label: {
        color: '#D4C2FF'
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }, 
    textFooter: {
        color: '#A0A0B2',
        maxWidth: 95,
        fontSize: 13
    },
    buttonFooter: {
        backgroundColor: '#04D361',
        height: 50,
        width: 118,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    textButton: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold'
    }
});

export default styles;