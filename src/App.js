import "./App.css";
import Header from "./Header";
import Name from "./name";

function App() {
  const names = [{
    name:"Ashwin",
    class: "red",
  },
  {
    name:"Srini",
    class: "green",
  },
  {
    name:"Yelloe",
    class: "yello",
  },]

  return (
    <>
      <header>
        <Header />
      </header>

      <section>
        {/* Passing props to single component */}
        {/* <Name name="Ashwin" class="red" />
        <Name name="Srini" class="green" />
        <Name name="Saravanan" class="yello" /> */}

        {/* Passing props using dynamic rendering and array of object mapping*/}
        {
          names.map((items, idx) => {
            return (
              // <p>{items.name} , {items.class}</p> To see whats in item
              <Name name={items.name} class={items.class} />
            )
          })
        }
      </section>
    </>
  );
}

export default App;
