import { StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",
        margin: 10
    },
    image: {
        height: Dimensions.get("window").height / 3.5,
        width: Dimensions.get("window").width / 2.5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderRadius: 10
    }, 
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    price: {
        color: "gray",
        fontSize: 15,
        fontWeight: "bold"
    }
})