import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionsContext } from "../../contexts/TransactionsContext"

import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

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
              <tr key={transactions.id} id="scroll">
                <td width="50%">{transactions.description}</td>
                <td>
                  <PriceHighlight variant={transactions.type}>
                    {transactions.type === 'outcone' && '- '}
                    {priceFormatter.format(transactions.price)}
                  </PriceHighlight>
                </td>
                <td>{transactions.category}</td>
                <td>{dateFormatter.format(new Date(transactions.createdAt))}</td>
              </tr>
            )
          })}
        </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}