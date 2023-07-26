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

  it ('should show success notification when form is submited with success', async () => {
    const wrapper = shallowMount(Register);

    //Mock do método "submit"
    wrapper.vm.submit = jest.fn();

    //Encontrar o formulário e simular o envio
    const form = wrapper.find('form');
    await form.trigger('submit');

    //Verifica se a mensagem de cadastro concluído é exibida
    expect(wrapper.text()).toContain('Cadastro concluído!')
    
  })

  //Teste para mensagem de erro no envio seria adicionada juntamente com a lógica para envio das informações para a API 

  /*
    Tanto um teste para sucesso quanto para erro no formulário iriam considerar a lógica do submit, seja ela 
    um envio direto para a API, ou um emit das informações para outros componentes, de qualquer forma, por hora, fiz o teste
    considerando o comportamento atual do componente
  */
});