import { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Calculadora() {
    const [calculo, setCalculo] = useState("");

    async function handleCalc() {
        const values = calculo.split('+-*/');
        // const result = values.map(r => {

        // });
        console.log(values)
    }

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            <View>

                <Input 
                    label="Digite aqui em baixo o seu cálculo!" 
                    onChangeText={setCalculo} 
                />

            </View>

            <View>

                <Button 
                    title="Calcular"
                    onPress={handleCalc}
                />

            </View>

        </KeyboardAvoidingView>
    );
}