//@flow
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, Text, TouchableHighlight} from 'react-native'
import FAIcon from 'react-native-vector-icons/MaterialIcons'

type Props = {
  icon: string,
  style: any,
  onPress: Function,
  title: string
}
type State = {
  pressed: boolean
}

class TextAndIconButton extends Component<Props, State> {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  }
  componentWillMount () {
    this.setState({
      pressed: false
    })
  }
  _onPressButton = () => {
    this.props.onPress()
  }
  _onShowUnderlay = () => {
    this.setState({
      pressed: true
    })
  }
  _onHideUnderlay = () => {
    this.setState({
      pressed: false
    })
  }
  render () {
    const {
      container,
      inner,
      text,
      textPressed,
      icon,
      iconPressed,
      iconSize,
      underlayColor
    } = this.props.style
    return (
      <TouchableHighlight
        style={container}
        onPress={this._onPressButton}
        onShowUnderlay={this._onShowUnderlay}
        onHideUnderlay={this._onHideUnderlay}
        underlayColor={underlayColor}
      >
      <View style={inner} >
        <Text style={[text, this.state.pressed && textPressed]} >{this.props.title}</Text>
        <FAIcon
          style={[icon, this.state.pressed && iconPressed]}
          name={this.props.icon}
          size={iconSize}
        />
      </View>
      </TouchableHighlight>
    )
  }
}

export {TextAndIconButton}
