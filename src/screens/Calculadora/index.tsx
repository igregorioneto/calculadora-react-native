import { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Board } from "../../components/Board";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Calculadora() {
    const [calculo, setCalculo] = useState("");
    const [historico, setHistorico] = useState("");
    const [soma, setSoma] = useState(0);

    async function handleCalc() {
        setHistorico(calculo);
        const valoresSoma = calculo.trim().split('+');
        let soma = 0;
        const result = valoresSoma.map(r => {
            soma += Number(r);
        });

        setSoma(soma)
    }

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

            <View>

                <Board data={{soma, historico}} />

            </View>

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