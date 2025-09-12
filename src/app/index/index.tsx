import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { colors } from '@/styles/colors';
import { styles } from './style';


export default function Index() {
    const insets = useSafeAreaInsets();

    return(
        <SafeAreaView style={[styles.container, {paddingTop: insets.top}]}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo.png')} style={styles.logo}/>

                <TouchableOpacity>
                    <MaterialIcons name='add' size={32} color={colors.green[300]} />
                </TouchableOpacity>
                
            </View>

            <Categories/>

            <FlatList
                data={['1','2','3','4','5','6','7','8','9','10']}
                keyExtractor={(item) => item}
                renderItem={() => (
                    <Link
                        name='Rocketseat'
                        url="https://www.rocketseat.com.br/"
                        onDetails={() => console.log('Clicked')}
                    />
                )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsHorizontalScrollIndicator={false}
            />

            <Modal transparent visible={false}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Course</Text>

                            <TouchableOpacity>
                                <MaterialIcons
                                    name="close"
                                    size={20}
                                    color={colors.gray[400]}
                                />
                            </TouchableOpacity>
                            
                        </View>
                        <Text style={styles.modalLinksName}> Rocketseat</Text>
                        <Text style={styles.modalUrl}> https://www.rocketseat.com.br/</Text>

                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon='delete' variant="secondary" />
                            <Option name="Abrir" icon="language"/>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};
