import React from 'react'
import styled from 'styled-components'
import { Header as _Header } from './Header'
import { Column } from './Column'

function App() {
  return (
    <Container>
      <Header />

      <MainArea>
        <HorizontalScroll>
          <Column
            title="TODO"
            cards={[
              { id: 'a', text:'朝食をとる' },
              { id: 'b', text:'歯を磨く' },
              { id: 'c', text:'ランニング' },
            ]}
          />
          <Column
            title="Doing"
            cards={[
              { id: 'a', text:'プログラミング' },
              { id: 'b', text:'風呂に入る' },
            ]}
          />
          <Column
            title="Doing"
            cards={[]}
          />
          <Column
            title="Done"
            cards={[
              { id: 'a', text:'布団から出る (:3っ)っ -=三[＿＿]' },
            ]}
          />
        </HorizontalScroll>
      </MainArea>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`

const Header = styled(_Header)`
  flex-shrink: 0;
`

const MainArea = styled.div`
  height: 100%;
  padding: 16px 0;
  overflow-y: auto;
`

const HorizontalScroll = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;

  > * {
    margin-left: 16px;
    flex-shrink: 0;
  }

  ::after {
    display: block;
    flex: 0 0 16px;
    content: '';
  }
`
