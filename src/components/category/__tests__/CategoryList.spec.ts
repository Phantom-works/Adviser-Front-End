import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CategoryList from '../CategoryList.vue'
import type Category from '../../../Model/Category'
describe('CategoryList Snapshots', () => {
  // Arrange

  it('Snapshot Empty List', () => {
    //Arrange
    const categories = <Category[]>[]

    // Act
    const wrapper = mount(CategoryList, {
      props: {
        categories: categories
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})
