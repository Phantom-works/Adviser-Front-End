import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import CategoryInputField from '../CategoryInputField.vue'
describe('CategoryInputField Snapshots', () => {
  // Arrange

  it('Snapshot text empty ', () => {
    //Arrange
    // Act
    const wrapper = mount(CategoryInputField, {
      props: {}
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Snapshot text long ', () => {
    //Arrange
    // Act
    const wrapper = mount(CategoryInputField, {
      props: {
        text: 'grayhujdsidfhqhj09fbaspuidn'
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Snapshot text empty ', () => {
    //Arrange
    // Act
    const wrapper = mount(CategoryInputField, {
      props: {
        text: 'uid'
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})
