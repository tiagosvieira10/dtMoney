import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useSummary(){
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

  return summary
}