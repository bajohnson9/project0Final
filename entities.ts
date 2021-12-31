export interface Account{

    balance: number
    type: "Checking" | "Savings"

}

export interface Client{

    id: string
    name: string 
    accounts: Account[]

}