import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../contexts/TransactionsContext";
import { useMemo } from "react";

export function useSummary(){
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  });
  
  const summary = useMemo(() => {
    return transactions.reduce(
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
  },[transactions])

  return summary
}