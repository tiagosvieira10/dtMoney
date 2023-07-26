import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionsContext } from "../../contexts/TransactionsContext"

import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

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