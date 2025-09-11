import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Category } from '@/components/category';
import { colors } from '@/styles/colors';
import { styles } from './style';


export default function Index() {
    const insets = useSafeAreaInsets();

    return(
        <SafeAreaView style={[styles.container, {paddingTop: insets.top}]}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo.png')} style={styles.logo}/>

                <TouchableOpacity activeOpacity={0.3}>
                    <MaterialIcons name='add' size={32} color={colors.green[300]} />
                </TouchableOpacity>
                
            </View>

            <Category name='Projetos' icon='code'/>
            <Category name='Site' icon='language'/>
            <Category name='Video' icon='movie'/>
        </SafeAreaView>
    );
};
