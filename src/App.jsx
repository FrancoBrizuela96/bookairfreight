import { useState } from "react";
import { Quote } from "./components/quotesInfo/Quote";
import "./App.css";
import { QuoteForm } from "./components/quotesForm/QuoteForm";

function App() {
    const [currentQuote, setCurrentQuote] = useState(null);

    return (
        <main>
            <QuoteForm setCurrentQuote={setCurrentQuote} />
            <Quote quote={currentQuote} />
        </main>
    );
}

export default App;
