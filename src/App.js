import { Button } from "./components/Button";
import "./App.css";
import icon from "./add_shopping_cart_black_24dp.svg";

function App() {
  return (
    <div>
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="text">text</Button>
      <Button disableShadow>disableShadow</Button>
      <Button disabled>disabled</Button>
      <Button variant="text" disabled>
        disabled text{" "}
      </Button>
      <Button startIcon={icon}>Start Icon</Button>
      <Button endIcon={icon}>End Icon</Button>
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
      <Button color="primary">Color primary</Button>
      <Button color="secondary">Color secoundary</Button>
      <Button color="danger">Color danger</Button>
    </div>
  );
}

export default App;
