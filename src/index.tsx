import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div>
      <header>
        <div>Kanban board</div>

        <input placeholder="Filter cards" />
      </header>

      <div>
        <section>
          <h3>TODO</h3>

          <article>朝食をとる</article>
          <article>歯を磨く</article>
          <article>ランニング</article>
        </section>

        <section>
          <h3>Doing</h3>

          <article>プログラミング</article>
          <article>風呂に入る</article>
        </section>

        <section>
          <h3>Waiting</h3>
        </section>

        <section>
          <h3>Done</h3>

          <article>布団から出る (:3っ)っ -=三[＿＿]</article>
        </section>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
