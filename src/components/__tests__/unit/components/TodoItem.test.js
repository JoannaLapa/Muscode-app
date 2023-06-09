import TodoItem from '@/components/basicComponents/todo/TodoItem.vue';
import { mount, shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { useTodoStore } from '@/stores/todo.js';

describe('TodoItem', () => {
  it('shows the description of todo', () => {
    const wrapper = mount(TodoItem, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              todo: {
                todos: [
                  {
                    id: 0,
                    description: 'Typescript daily learning 30min',
                    checked: false
                  }
                ]
              }
            },
            createSpy: vi.fn
          })
        ]
      },
      propsData: {
        id: 0,
        description: 'Typescript daily learning 30min'
      }
    });

    expect(wrapper.text()).toMatch('Typescript daily learning 30min');
  });

  it('Checkbox value should be toggled when clicked', async () => {
    const wrapper = shallowMount(TodoItem, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })]
      },
      propsData: {
        id: 0,
        description: 'Typescript daily learning 30min'
      }
    });

    const store = useTodoStore();
    await wrapper.find('input').trigger('change');

    expect(store.toggleCheckboxValue).toHaveBeenCalledTimes(1);
  });
});
