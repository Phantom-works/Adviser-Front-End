import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import type Category from '../../../Model/Category'
import CategorySelect from '../CategorySelect.vue'
import { ref } from 'vue'
describe('CategorySelect Snapshot tests', () => {
  // Arrange

  it('Snapshot Empty List', () => {
    //Arrange
    const categories = ref<Category[]>([])

    // Act
    const wrapper = mount(CategorySelect, {
      props: {
        categories: categories
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('CategorySelect Component tests', () => {
  // Arrange

  it('AddCategory No Category inputted, amount 0', async () => {
    // Arrange
    // Negate jest from giving error when window.alert is called

    window.alert = () => {}

    const categories = ref<Category[]>([])

    const wrapper = mount(CategorySelect, {
      props: {
        categories: categories
      }
    })

    // Act

    const button = wrapper.find('button')
    await button.trigger('click.left')

    // Assert
    expect(wrapper.vm.categories).toHaveLength(0)
  })

  it('AddCategory Category, input: title = Test, amount = 1', async () => {
    // Arrange
    const categories = ref<Category[]>([])

    const wrapper = mount(CategorySelect, {
      props: {
        categories: categories
      }
    })

    // Act

    const button = wrapper.find('button')
    const input = wrapper.find('input')
    await input.setValue('Test')
    await button.trigger('click.left')

    // Assert
    expect(wrapper.vm.categories).toHaveLength(1)
    expect(wrapper.vm.categories[0].id).toBe(1)
    expect(wrapper.vm.categories[0].title).toBe('Test')
  })

  it('Add and remove Category, Value: id = 1, title = Test', async () => {
    // Arrange

    const categories = ref<Category[]>([])

    const wrapper = mount(CategorySelect, {
      props: {
        categories: categories
      }
    })

    // Act
    // Add
    const button = wrapper.find('button')
    const input = wrapper.find('input')
    await input.setValue('Test')
    await button.trigger('click.left')

    // Remove
    const xMark = wrapper.find('i')
    await xMark.trigger('click.left')

    // Assert
    expect(wrapper.vm.categories).toHaveLength(0)
  })
})
