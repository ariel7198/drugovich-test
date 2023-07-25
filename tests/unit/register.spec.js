import { shallowMount, mount } from '@vue/test-utils';
import Register from '../../src/components/Register.vue';

describe('Register', () => {
  it('renders without errors', () => {

    const wrapper = shallowMount(Register);
    
    expect(wrapper.exists()).toBe(true);

  });

  it('should call submit function when form is submited', async () => {
    const wrapper = shallowMount(Register);

    // Mock do método "submit"
    wrapper.vm.submit = jest.fn();

    // Encontrar o formulário e simular o envio
    const form = wrapper.find('form');
    await form.trigger('submit');

    // Verificar se o método "submit" foi chamado
    expect(wrapper.vm.submit).toHaveBeenCalled();
  });
});