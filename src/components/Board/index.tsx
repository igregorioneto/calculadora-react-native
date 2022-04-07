import { Text, View } from "react-native";
import { styles } from "./styles";

export type Board = {
    historico: string;
    soma: number;
}

type Props = {
    data: Board;
}

export function Board({data}: Props) {

    return (
        <View style={styles.container}>
            <View>
                <Text  style={styles.soma}>
                    {data.soma}
                </Text>
            </View>
            <View>
                <Text  style={styles.historico}>
                    {data.historico}
                </Text>
            </View>
        </View>
    );

}