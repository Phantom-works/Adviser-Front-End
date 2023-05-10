import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import CategoryInputField from '../CategoryInputField.vue'
describe('CategoryInputField Snapshots', () => {
  // Arrange

  it('Snapshot InputDefault', () => {
    //Arrange
    // Act
    const wrapper = mount(CategoryInputField, {
      props: {}
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})
