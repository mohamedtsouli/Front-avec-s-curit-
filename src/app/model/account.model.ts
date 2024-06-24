export interface AccountDetails {
  accountId:            string;
  balance:              number;
  currentPage:          number;
  totalPages:           number;
  pageSize:             number;
  accountOperationsDTOS: AccountOperationDTOS[];
}

export interface AccountOperationDTOS{
  id:            number;
  operationDAte: Date;
  amount:        number;
  type:          string;
  description:   string;
}
