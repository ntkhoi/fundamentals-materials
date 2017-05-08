import React from 'react';
import { View, Text } from 'react-native';

import ListItem from '../../components/ListItem';

class Es2015 extends React.Component {
  static navigationOptions = () => ({
    title: 'ES2015',
  });

  render() {
    return (
      <View>
        <ListItem
          title="LetConst"
          onPress={() => this.props.navigation.navigate('LetConst')}
        />
        <ListItem
          title="Multi Line Strings"
          onPress={() => this.props.navigation.navigate('MultiLineStrings')}
        />
        <ListItem
          title="Arrow / Lambda Functions"
          onPress={() => this.props.navigation.navigate('ArrowFunctions')}
        />
        <ListItem
          title="Default Arguments"
          onPress={() => this.props.navigation.navigate('DefaultArguments')}
        />
        <ListItem
          title="Array Spread & Rest"
          onPress={() => this.props.navigation.navigate('ArraySpreadRest')}
        />
        <ListItem
          title="Object Spread & Rest"
          onPress={() => this.props.navigation.navigate('ObjectSpreadRest')}
        />
        <ListItem
          title="Array Destructuring"
          onPress={() => this.props.navigation.navigate('ArrayDestructuring')}
        />
        <ListItem
          title="Object Destructuring"
          onPress={() => this.props.navigation.navigate('ObjectDestructuring')}
        />
        <ListItem
          title="Promises"
          onPress={() => this.props.navigation.navigate('Promises')}
        />
        <ListItem
          title="Template Literals"
          onPress={() => this.props.navigation.navigate('TemplateLiterals')}
        />
        <ListItem
          title="Modules"
          onPress={() => this.props.navigation.navigate('Modules')}
        />
      </View>
    );
  }
}

export default Es2015;
