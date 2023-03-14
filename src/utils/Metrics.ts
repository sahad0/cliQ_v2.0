
import { Dimensions } from 'react-native';

const { width:Width, height:Height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const height = (size:number):number => (Width / guidelineBaseWidth) * size;
const width = (size:number):number => (Height / guidelineBaseHeight) * size;
const mSize = (size:number, factor = 0.5):number => size + (height(size) - size) * factor;

export { height, width, mSize };