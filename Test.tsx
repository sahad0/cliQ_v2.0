import React, { useRef } from 'react';
import { View, FlatList, Text } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { usePanGestureHandler, withOffset } from 'react-native-redash';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedRef,
  useSharedValue,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const data = [
  { id: '1', name: 'John' },
  { id: '2', name: 'Mary' },
  { id: '3', name: 'David' },
  { id: '4', name: 'Sarah' },
  { id: '5', name: 'Tom' },
  { id: '6', name: 'Linda' },
  { id: '7', name: 'Chris' },
  { id: '8', name: 'Emily' },
  { id: '9', name: 'Alex' },
  { id: '10', name: 'Olivia' },
  { id: '11', name: 'Max' },
  { id: '12', name: 'Kate' },
  { id: '13', name: 'Kevin' },
  { id: '14', name: 'Julia' },
  { id: '15', name: 'Peter' },
];

const PeopleList = () => {

  const flatListRef = useAnimatedRef();
  const scrollY = useSharedValue(0);
  const onPanGestureEvent = useAnimatedGestureHandler({
    onActive: (event) => {
      scrollY.value -= event.translationY;
    },
  });
  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });
  

  const renderItem = ({ item }) => {
    return (
      <View style={{ padding: 16 }}>
        <Text>{item.name}</Text>
      </View>
    );
  };


  return (
<PanGestureHandler onGestureEvent={onPanGestureEvent}>
<Animated.FlatList
  ref={flatListRef}
  data={data}
  renderItem={renderItem}
  keyExtractor={(item)=>item.id}
  onScroll={onScroll}
  scrollEventThrottle={16}
  scrollEnabled={false}
  style={{
    transform: [{ translateY: scrollY }],
  }}
/>
</PanGestureHandler>
  );
};

export default PeopleList;
