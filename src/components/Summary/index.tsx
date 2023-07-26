import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SummaryCard, SummaryContainer } from "./style";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { priceFormatter } from "../../utils/formatter";

export function Summary(){
  const { transactions } = useContext(TransactionsContext);
  
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'incone'){
        acc.incone += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcone += transaction.price
        acc.total -= transaction.price
      }

      return acc;
    }, 
    {
      incone: 0, 
      outcone: 0, 
      total: 0
    }
  )

  console.log(transactions)

  return(
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>

        <strong>{priceFormatter.format(summary.incone)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>

        <strong>{priceFormatter.format(summary.outcone)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#00b37e"/>
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}