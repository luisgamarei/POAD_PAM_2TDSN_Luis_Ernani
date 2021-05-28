import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Imovel1 extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center'}}> 

      <ScrollView>
        
        <View style={{margin:10}}>
          <Image 
            source={require('../images/Casa.png')} 
            style={styles.logo}
          /> 
        </View>
        
        <View style={styles.container}>      
          <Text style={{fontWeight: "bold"}}>
            Casa à venda em Pinheiros !
            {"\n"}{"\n"}
          </Text>
          <Text>
            Imóvel de 150 m², com 1 dormitório, sala, banheiro, cozinha e área de serviço. Possui garagem coberta para um carro.
            {"\n"}{"\n"}
            Localização: bairro residencial, silencioso à noite, próximo à faculdade, boa ventilação e iluminação, 10 min do centro comercial, perto do metrô e ponto de ônibus, ciclovia, acesso a todos os serviços (mercado, farmácia, banco, lotérica, academia, padaria etc);
            {"\n"}{"\n"} 
            Estrutura: recém-reformado, box no banheiro, móveis planejados, guarda-roupa embutido, chuveiro e lâmpadas já instalados, pintura nova;
            {"\n"}{"\n"}
          </Text>

          <Button
            title="Voltar."
            onPress={() =>
              this.props.navigation.navigate('Home')
            } 
          />
        </View>
      
      </ScrollView>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      margin:20,
      height:400,
    },
    logo:{
      width: 335,
      height:100,
      resizeMode:'contain',
    }
  });

export default Imovel1;