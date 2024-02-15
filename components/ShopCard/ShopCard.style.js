import { StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#F0F0F0",
        margin: 10
    },
    image: {
        height: Dimensions.get("window").height / 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
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