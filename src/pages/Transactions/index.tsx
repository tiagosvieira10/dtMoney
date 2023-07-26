import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: 'incone' | 'outcone';
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions(){
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json();
    
      setTransactions(data)
 }
  useEffect(() => {
    loadTransactions();
  }, [])

  return (
    <div>
      <Header/>
      <Summary/>

      <TransactionsContainer>
        <SearchForm/>

        <TransactionsTable>
        <tbody>
          {transactions.map(transactions => {
            return(
              <tr key={transactions.id}>
                <td width="50%">{transactions.description}</td>
                <td>
                  <PriceHighlight variant={transactions.type}>
                    {transactions.price}
                  </PriceHighlight>
                </td>
                <td>{transactions.category}</td>
                <td>{transactions.createdAt}</td>
              </tr>
            )
          })}
        </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}