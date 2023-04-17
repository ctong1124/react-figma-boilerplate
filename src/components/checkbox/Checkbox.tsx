import * as React from 'react';
// import * as checkedIcon from './checkbox-checked.svg';
// import * as unCheckedIcon from './checkbox-unchecked.svg';
import { View, StyleSheet, Svg, Text } from 'react-figma';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 64,
        height: 64
    },
    label: {
        marginLeft: 32,
        fontSize: 64,
        fontFamily: 'Roboto'
    }
});

const checkedIcon = '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="58" height="58" stroke="black" stroke-width="6"/><line x1="26.0208" y1="42.1209" x2="16.1213" y2="32.2214" stroke="black" stroke-width="6"/><line x1="26.0208" y1="46.3635" x2="51.3635" y2="21.0208" stroke="black" stroke-width="6"/></svg>';
const unCheckedIcon = '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="58" height="58" stroke="black" stroke-width="6"/></svg>';

export const Checkbox = props => {
    const { label, checked, ...otherProps } = props;
    return (
        <View style={styles.container} {...otherProps}>
            <Svg source={checked ? checkedIcon : unCheckedIcon} style={styles.icon} />
            <Text style={styles.label}>{label}</Text>
        </View>
    );
};