import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card:{
        width: 90,
        height: 140,
        marginTop: -115,
        position: "relative",
        top: 100,
    },
    cardPile:{
        borderWidth: 5,
        width: 100,
        height: 150,
        alignContent: "center",
        justifyContent: "center"
    },
    cardPileGhost:{
        color: "red",
        borderWidth: 5,
        width: 100,
        height: 750,
        alignContent: "center",
        justifyContent: "center"
    },
    container:{
        flex: 1,
        backgroundColor: "#e5e4e2",
        alignItems: "center",
        justifyContent: "flex-start",
        borderWidth: 5
    },
    containerTop:{
        borderWidth: 5,
        flex: 2,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    containerBot:{
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "flex-end",
    
    },
    row:{
        flexDirection: "row"
    },
    column:{

        borderWidth: 5,
        flex: 1, flexDirection: 'column'
    }
});

export { styles };