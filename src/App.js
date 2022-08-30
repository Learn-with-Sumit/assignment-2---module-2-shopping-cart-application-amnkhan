import PageTitle from "./components/PageTitle";
import CartContents from "./components/CartContents";
import Container from "./components/Container";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <PageTitle />
        <CartContents />
      </Container>
    </Provider>
  );
}

export default App;
