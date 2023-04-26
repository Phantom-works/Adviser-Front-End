import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import GamePreviewList from '../GamePreviewList.vue'
import Game from '../../../Model/Game'

describe('GamePreviewList Snapshots', () => {
  // Arrange

  it('Snapshot 3 Games Factorio', () => {
    //Arrange
    const games = [
      new Game(0, '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y', '', '', '', [], ''),
      new Game(0, '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y', '', '', '', [], ''),
      new Game(0, '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y', '', '', '', [], '')
    ]
    // Act
    const wrapper = mount(GamePreviewList, {
      props: {
        games: games
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Snapshot 3 Games empty', () => {
    //Arrange
    const games = [
      new Game(0, '', '', '', '', [], ''),
      new Game(0, '', '', '', '', [], ''),
      new Game(0, '', '', '', '', [], '')
    ]
    // Act
    const wrapper = mount(GamePreviewList, {
      props: {
        games: games
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Snapshot 12 Games empty', () => {
    //Arrange
    const games = [
      new Game(0, '', '', '', '', [], ''),
      new Game(0, '', '', '', '', [], ''),
      new Game(0, '', '', '', '', [], ''),
      new Game(0, '', '', '', '', [], ''),
      new Game(0, '', '', '', '', [], ''),
      new Game(0, '', '', '', '', [], ''),
      new Game(0, '', '', '', '', [], ''),
      new Game(0, '', '', '', '', [], ''),
      new Game(0, '', '', '', '', [], ''),
      new Game(0, '', '', '', '', [], ''),
      new Game(0, '', '', '', '', [], ''),
      new Game(0, '', '', '', '', [], '')
    ]
    // Act
    const wrapper = mount(GamePreviewList, {
      props: {
        games: games
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Snapshot 12 Games factorio', () => {
    //Arrange
    const games = [
      new Game(0, '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y', '', '', '', [], ''),
      new Game(0, '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y', '', '', '', [], ''),
      new Game(0, '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y', '', '', '', [], ''),
      new Game(0, '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y', '', '', '', [], ''),
      new Game(0, '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y', '', '', '', [], ''),
      new Game(0, '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y', '', '', '', [], ''),
      new Game(0, '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y', '', '', '', [], ''),
      new Game(0, '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y', '', '', '', [], ''),
      new Game(0, '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y', '', '', '', [], ''),
      new Game(0, '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y', '', '', '', [], ''),
      new Game(0, '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y', '', '', '', [], ''),
      new Game(0, '3A45ST6JYDK6U4TAW4RES5T6JDYK7E4YRAUS5TI6DR4YEU5SRTID6Y', '', '', '', [], '')
    ]
    // Act
    const wrapper = mount(GamePreviewList, {
      props: {
        games: games
      }
    })
    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})
