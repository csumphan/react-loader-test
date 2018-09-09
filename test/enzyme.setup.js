import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//sets up enzyme to be compatiable with React 16
enzyme.configure({ adapter: new Adapter() });
