import { mount, createLocalVue } from '@vue/test-utils';
import ClientItem from '../../src/components/ClientItem.vue'; 

describe('ClientItem', () => {
    
    it('renders client name and cnpj correctly', () => {
      const name = 'Test Client';
      const cnpj = '12345678901234';

      //Renderiza o componente com os valores de exemplo
      const wrapper = mount(ClientItem, {
        props: {
          name,
          cnpj,
          status: 'Ativo',
        },
      });
  
      //Busca e verifica com os valores de props foram exibidos corretamente
      expect(wrapper.text()).toContain(name);
      expect(wrapper.text()).toContain(cnpj);
    });
  
    it('renders active status correctly', () => {

      //Renderiza o componente com o valor de status 'Ativo'
      const wrapper = mount(ClientItem, {
        props: {
          name: 'Test Client',
          cnpj: '12345678901234',
          status: 'Ativo',
        },
      });
  
      //Verifica se o badge condicional de 'Ativo' foi exibido
      expect(wrapper.text()).toContain('Ativo');

    });
  
    it('renders inactive status correctly', () => {
      
      //Renderiza o componente com o valor de status 'Inativo'
      const wrapper = mount(ClientItem, {
        props: {
          name: 'Test Client 2',
          cnpj: '12345678901234',
          status: 'Inativo',
        },
      });
  
      //Verifica se o badge condicional de 'Inativo' foi exibido
      expect(wrapper.text()).toContain('Inativo');
      
    });
  
    // Teste para o botão EDITAR seria adicionada juntamente com uma logica para edição
  });