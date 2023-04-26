import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Category from '../../../Model/Category'
import CategorySelect from '../CategorySelect.vue'
describe('CategorySelect Snapshots', () => {
  // Arrange

  it('Snapshot text empty 3 categories', () => {
    //Arrange
    const categories = [new Category(1, ''), new Category(2, ''), new Category(3, '')]

    // Act
    const wrapper = mount(CategorySelect, {
      props: {
        categories: categories
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Snapshot text long 5 categoeries', () => {
    //Arrange
    const categories = [
      new Category(1, 'Category 1rmyumednthsbrg'),
      new Category(2, 'Category 2muenytwhsrgbavm4eunwty'),
      new Category(3, 'Category 3muerynthbrwsegahnjuermjtywsrhbaegvFWED'),
      new Category(1, 'Category 1entyawrtegTHJWKE6U8JYHWRrgat6ysj7iksrthaergwefrghatES6UJ'),
      new Category(2, 'Category 2KEJYHRTAEGFWDMUJNTYHRGB')
    ]

    // Act
    const wrapper = mount(CategorySelect, {
      props: {
        categories: categories
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Snapshot 9 categories differentiating text length', () => {
    //Arrange
    const categories = [
      new Category(1, 'CategoRUEYJTWRHGQEYJEYHNTRAGEVry 1'),
      new Category(2, 'Category 2'),
      new Category(3, 'ry 3'),
      new Category(1, 'CategoEYHTWRAGEfaqathbwyjnhtarqEGry 1'),
      new Category(2, 'Category 2'),
      new Category(3, 'CatHWTGQRTH6WGQREgthwtgaqreegory 3'),
      new Category(1, 'Categ4HJY7YH5WT6G4R5WHJ5YWTGRQEFGTHYJW5TGRQE4HWory 1'),
      new Category(2, 'Catego'),
      new Category(3, 'Cat')
    ]

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
