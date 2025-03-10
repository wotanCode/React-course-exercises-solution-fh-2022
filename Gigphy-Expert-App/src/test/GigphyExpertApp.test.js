import {shallow} from 'enzyme';
import { GigphyExpertApp } from '../GigphyExpertApp';

describe('Pruebas en <GigphyExpertApp />', function() {

  test('Debe de mostrar <GigphyExpertApp /> correctamente', () => {
    const wrapper = shallow(<GigphyExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar una lista de categorias', () => {
    const categories = ['Dragon ball', 'One Piece'];
    const wrapper = shallow(<GigphyExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });

});