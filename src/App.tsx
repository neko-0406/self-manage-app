import { AppProvider } from "./contexts/AppProvider";

export default function App() {
  return (
    <AppProvider>
      <div className="App">Hello World!</div>
    </AppProvider>
  )
}
