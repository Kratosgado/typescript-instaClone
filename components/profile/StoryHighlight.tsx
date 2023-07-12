import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const StoryHighlight = () => {
    return (
        <View >
            <Title />
            <Text style={{ color: "white", fontSize: 10 }}>Keep your favourite stories on your profile</Text>
            <View style={styles.highlightContainer}>
                <Highlight dark={true} plus = {true}/>
                <Highlight />
                <Highlight />
                <Highlight />
                <Highlight />
            </View>
            <Text style={{ color: "white", marginLeft: 35, bottom: 11}}>New</Text>
        </View>
    )
}

const Title = () => {
    return (
        <View style= {{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <Text style={{ color: "white" }}>Story Highlights</Text>
            <TouchableOpacity>
                <Ionicons name="caret-up-outline" size={15} color="white" />
            </TouchableOpacity>
        </View>
    )
}

type HighlightProps = {
    imageUrl?: string
    dark?: boolean
    plus?: boolean
}

const Highlight = ({imageUrl, dark, plus}: HighlightProps) => {
    return (
        <View style={[ styles.highlight,dark ? styles.addHighlight : {}]}>
            <Text style={{ color: "white", fontSize: 30 }}>{dark ? "+" : ""}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    highlightContainer: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-evenly"
    },
    highlight: {
        backgroundColor: '#1a1a1b',
        height: 64,
        width: 64,
        borderRadius: 32,
        alignItems: "center",
        justifyContent: "center",
    },
    addHighlight: {
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "black",
    }
})