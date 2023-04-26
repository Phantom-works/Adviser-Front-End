import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CategoryBubble from '../CategoryBubble.vue'

describe('CategoryBubble Snapshots', () => {
  // Arrange

  it('Snapshot text empty ', () => {
    //Arrange
    const category = {
      id: 0,
      title: ''
    }
    // Act
    const wrapper = mount(CategoryBubble, {
      props: {
        category: category
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Snapshot text long ', () => {
    //Arrange
    const category = {
      id: 0,
      title: 'zerdy8y;ljsdrty88;reasdrty;yaetjsdl'
    }
    // Act
    const wrapper = mount(CategoryBubble, {
      props: {
        category: category
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Snapshot text small ', () => {
    //Arrange
    const category = {
      id: 0,
      title: 'hallo'
    }
    // Act
    const wrapper = mount(CategoryBubble, {
      props: {
        category: category
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})
