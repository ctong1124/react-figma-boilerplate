// import * as React from 'react';
// import { Page, Rectangle, Frame, View } from 'react-figma';
// import Button from '@mui/material/Button';

// export const App = () => {
//     return (
//         <Page isCurrent name="Design system">
//             <Frame style={{ backgroundColor: 'white'}}name="Test">
//                 <View style={{ flexDirection: 'row', alignItems: 'center'}}>
//                     <Button variant="contained">Hello World</Button>
//                 </View>
//                 <Rectangle style={{ width: 200, height: 100, backgroundColor: '#0ddd25' }} />
//                 <Rectangle style={{ width: 200, height: 100, backgroundColor: '#a6dd00' }} />
//             </Frame>
//         </Page>
//     );
// };

import * as React from 'react';
import { Page, Frame, StyleSheet, Text } from 'react-figma';
import { Checkbox } from './components/checkbox/Checkbox';

const styles = StyleSheet.create({
    frame: {
        padding: 50
    },
    text: {
        marginTop: 50,
        fontSize: 48,
        fontFamily: 'Roboto',
        minWidth: 500
    }
});

export const App = () => {
    // const [checked, setChecked] = React.useState(false);
    // const [counter, setCounter] = React.useState(0);

    // React.useEffect(() => {
    //     if (checked) {
    //         setCounter(counter => counter + 1);
    //     }
    // }, [checked]);

    // return (
    //     <Page isCurrent>
    //         <Frame style={styles.frame}>
    //             <Checkbox
    //                 checked={checked}
    //                 label="select me"
    //                 onSelectionEnter={() => setChecked(true)}
    //                 onSelectionLeave={() => setChecked(false)}
    //             />
    //             <Text style={styles.text}>{checked ? 'Checkbox selected' : 'Checkbox not selected'}</Text>
    //             <Text style={styles.text}>{`Counter: ${counter}`}</Text>
    //         </Frame>
    //     </Page>
    // );
    return (
        <Page isCurrent>
            <Frame style={styles.frame}>
                <Checkbox
                />
                <Text style={styles.text}>{checked ? 'Checkbox selected' : 'Checkbox not selected'}</Text>
                <Text style={styles.text}>{`Counter: ${counter}`}</Text>
            </Frame>
        </Page>
    );
};