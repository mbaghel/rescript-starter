//%%raw("import './App.css'")
@module external styles: {..} = "./App.module.css"

@react.component
let make = () => {
  let (count, setCount) = React.useState(_ => 0)

  let handle = _ => {
    setCount(prev => prev + 1)
  }

  let msg = "You clicked " ++ Js.Int.toString(count) ++ " times"

  <div>
    <h1 className={styles["header"]}>{React.string(msg)}</h1>
    <button className={styles["button"]} onClick={handle}>{React.string("Click me")}</button>
  </div>
}