import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DefaultButton from '../DefaultButton.vue'

describe('DefaultButton Snapshots', () => {
  // Arrange

  it('Snapshot text empty ', () => {
    //Arrange
    // Act
    const wrapper = mount(DefaultButton, {
      props: {}
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Snapshot text long ', () => {
    //Arrange
    // Act
    const wrapper = mount(DefaultButton, {
      props: {
        text: 'garyhdjfiqhbfy8djfiqnd89hxioboqsid'
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Snapshot text small ', () => {
    //Arrange
    // Act
    const wrapper = mount(DefaultButton, {
      props: {
        text: 'ha0s'
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Snapshot disable true ', () => {
    //Arrange
    // Act
    const wrapper = mount(DefaultButton, {
      props: {
        disabled: true
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Snapshot disable false ', () => {
    //Arrange
    // Act
    const wrapper = mount(DefaultButton, {
      props: {
        disabled: false
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})
